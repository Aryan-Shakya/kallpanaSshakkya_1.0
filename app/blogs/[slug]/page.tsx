import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from "lucide-react";
import dbConnect from "@/lib/db";
import BlogPost, { IBlogPost } from "@/lib/models";

// Force dynamic rendering
export const dynamic = "force-dynamic";

async function getPost(slug: string) {
    try {
        const conn = await dbConnect();
        if (!conn) return null;

        const post = await BlogPost.findOne({ slug });
        return post ? JSON.parse(JSON.stringify(post)) : null;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Header */}
            <div className="relative bg-gradient-to-br from-[#F0F4F8] to-[#E0F2F1] py-16 border-b border-[#E2E8F0]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-[#526D82] hover:text-[#52796F] mb-8 transition-colors font-medium group"
                        data-testid="back-to-blog-btn"
                    >
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} /> 
                        Back to All Articles
                    </Link>

                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-[#52796F] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                            Wellness & Growth
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#2F3E46] leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-[#64748B]">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span className="font-medium">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span className="font-medium">5 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen size={18} />
                            <span className="font-medium">By Kalpana Shakya</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="container mx-auto px-4 max-w-4xl py-16">
                {/* Video Embed */}
                {post.youtubeVideoId && (
                    <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <div className="aspect-video bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                                title={post.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Cover Image */}
                {post.coverImage && !post.youtubeVideoId && (
                    <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img 
                            src={post.coverImage} 
                            alt={post.title} 
                            className="w-full h-auto" 
                        />
                    </div>
                )}

                {/* Article Body */}
                <div className="prose prose-lg prose-slate max-w-none">
                    <div className="text-xl text-[#334155] leading-relaxed mb-12 font-serif italic border-l-4 border-[#52796F] pl-6 py-2 bg-[#F0F4F8] rounded-r-xl">
                        {post.excerpt}
                    </div>

                    <div className="text-lg text-[#334155] leading-relaxed space-y-6 font-serif">
                        {post.content.split('\n').map((paragraph: string, index: number) => {
                            if (paragraph.trim() === '') return null;
                            
                            // Check if it's a heading (starts with #)
                            if (paragraph.trim().startsWith('#')) {
                                const level = paragraph.match(/^#+/)?.[0].length || 2;
                                const text = paragraph.replace(/^#+\s*/, '');
                                
                                if (level === 1) {
                                    return <h2 key={index} className="text-3xl font-bold text-[#2F3E46] mt-12 mb-6">{text}</h2>;
                                } else if (level === 2) {
                                    return <h3 key={index} className="text-2xl font-bold text-[#2F3E46] mt-10 mb-4">{text}</h3>;
                                } else {
                                    return <h4 key={index} className="text-xl font-bold text-[#2F3E46] mt-8 mb-3">{text}</h4>;
                                }
                            }
                            
                            return (
                                <p key={index} className="mb-6 leading-relaxed">
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>
                </div>

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-[#E2E8F0]">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                            <Share2 className="w-5 h-5 text-[#526D82]" />
                            <span className="text-[#526D82] font-medium">Share this article</span>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-6 py-3 bg-[#E0F2F1] text-[#52796F] rounded-xl font-semibold hover:bg-[#52796F] hover:text-white transition-all">
                                Twitter
                            </button>
                            <button className="px-6 py-3 bg-[#E0F2F1] text-[#52796F] rounded-xl font-semibold hover:bg-[#52796F] hover:text-white transition-all">
                                Facebook
                            </button>
                            <button className="px-6 py-3 bg-[#E0F2F1] text-[#52796F] rounded-xl font-semibold hover:bg-[#52796F] hover:text-white transition-all">
                                LinkedIn
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Author CTA */}
            <section className="bg-gradient-to-br from-[#F0F4F8] to-[#E0F2F1] py-20 border-t border-[#E2E8F0]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#E2E8F0] text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#52796F] to-[#354F52] mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            KS
                        </div>
                        <h3 className="text-3xl font-bold text-[#2F3E46] mb-4">About Kalpana Shakya</h3>
                        <p className="text-lg text-[#526D82] mb-8 max-w-2xl mx-auto leading-relaxed">
                            A certified Clinical Psychologist, Hypnotherapist, and Numerologist dedicated to helping individuals achieve holistic wellness and unlock their true potential.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-[#52796F] text-white rounded-full font-bold hover:bg-[#354F52] transition-all shadow-lg"
                            >
                                Learn More About Me
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-[#2F3E46] rounded-full font-bold border-2 border-[#E2E8F0] hover:border-[#52796F] transition-all"
                            >
                                Book a Session
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Blog */}
            <section className="py-12 bg-white border-t border-[#E2E8F0]">
                <div className="container mx-auto px-4 text-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-[#52796F] hover:text-[#354F52] font-bold text-lg group"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Articles
                    </Link>
                </div>
            </section>
        </div>
    );
}