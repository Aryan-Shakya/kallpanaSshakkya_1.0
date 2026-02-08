import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import dbConnect from "@/lib/db";
import BlogPost, { IBlogPost } from "@/lib/models";

// Force dynamic rendering since we want to see new posts immediately
export const dynamic = "force-dynamic";

async function getPosts() {
    try {
        const conn = await dbConnect();
        if (!conn) return [];

        const posts = await BlogPost.find({}).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(posts));
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

export default async function BlogIndex() {
    const posts = await getPosts();

    // Blog cover images for variety
    const defaultCovers = [
        "https://images.pexels.com/photos/9335991/pexels-photo-9335991.jpeg",
        "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    ];

    return (
        <div className="bg-gradient-to-b from-white via-[#F0F4F8] to-white min-h-screen pb-28">
            {/* Hero Section */}
            <section className="relative py-28 bg-gradient-to-br from-[#52796F] via-[#354F52] to-[#2F3E46] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                        📚 Insights & Wisdom
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Latest <span className="text-[#A4C3B2]">Insights</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Explore articles on psychology, wellness, personal growth, and spiritual guidance. Each piece is designed to inspire and empower your journey.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F0F4F8] to-transparent"></div>
            </section>

            <div className="container mx-auto px-4 -mt-12 relative z-20">
                {posts.length === 0 ? (
                    <div className="py-32 text-center">
                        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-12 border border-[#E2E8F0]">
                            <div className="w-20 h-20 bg-[#E0F2F1] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Tag className="w-10 h-10 text-[#52796F]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2F3E46] mb-4">
                                {process.env.MONGODB_URI ? "No Posts Yet" : "Database Not Configured"}
                            </h3>
                            <p className="text-[#526D82] mb-8">
                                {process.env.MONGODB_URI 
                                    ? "Check back soon for insightful articles on wellness and personal growth." 
                                    : "Content is currently unavailable. Please configure the database."}
                            </p>
                            {process.env.MONGODB_URI && (
                                <Link 
                                    href="/contact" 
                                    className="inline-block px-8 py-3 bg-[#52796F] text-white rounded-full font-semibold hover:bg-[#354F52] transition-all shadow-lg"
                                >
                                    Get Notified
                                </Link>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: IBlogPost & { _id: string }, index: number) => (
                            <Link 
                                key={post._id} 
                                href={`/blogs/${post.slug}`} 
                                className="group"
                                data-testid={`blog-card-${post.slug}`}
                            >
                                <article className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0] transition-all hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#E0F2F1] to-[#CAD2C5]">
                                        {post.coverImage ? (
                                            <img 
                                                src={post.coverImage} 
                                                alt={post.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            />
                                        ) : (
                                            <div 
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${defaultCovers[index % defaultCovers.length]})` }}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E46]/60 to-transparent"></div>
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[#52796F] text-xs font-bold uppercase tracking-wider shadow-lg">
                                                Wellness
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm text-[#64748B] mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                <span>5 min read</span>
                                            </div>
                                        </div>
                                        
                                        <h2 className="text-2xl font-bold mb-4 text-[#2F3E46] group-hover:text-[#52796F] transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h2>
                                        
                                        <p className="text-[#526D82] line-clamp-3 mb-6 flex-grow leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="flex items-center text-[#52796F] font-bold text-sm group-hover:gap-3 gap-2 transition-all">
                                            <span>Read Article</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Newsletter CTA */}
            {posts.length > 0 && (
                <section className="container mx-auto px-4 mt-24">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-3xl p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Get notified when new articles are published. Join our community of wellness seekers.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-white text-[#2F3E46] rounded-full font-bold hover:bg-[#A4C3B2] hover:text-white transition-all shadow-xl hover:scale-105"
                        >
                            Subscribe to Updates
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
}