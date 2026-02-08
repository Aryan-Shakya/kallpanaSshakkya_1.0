"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Youtube, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-28 bg-gradient-to-br from-[#E0F2F1] via-[#CAD2C5] to-[#A4C3B2] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#52796F] text-sm font-semibold mb-6 uppercase tracking-wider shadow-md">
                                About Me
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2F3E46] leading-tight">
                                Meet <span className="text-gradient">Kalpana Shakya</span>
                            </h1>
                            <p className="text-xl text-[#334155] mb-8 leading-relaxed">
                                A dedicated Clinical Psychologist, Hypnotherapist, and Numerologist with a passion for helping individuals unlock their true potential and achieve holistic wellness.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#52796F] text-white rounded-full font-bold hover:bg-[#354F52] transition-all shadow-xl hover:scale-105"
                                    data-testid="about-book-session-btn"
                                >
                                    Book a Session
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-8 py-4 bg-white text-[#2F3E46] rounded-full font-bold hover:bg-[#F0F4F8] transition-all shadow-lg border border-[#E2E8F0]"
                                >
                                    View Services
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white/40 backdrop-blur-sm p-3 flex items-center justify-center shadow-2xl">
                                    <div 
                                        className="w-full h-full rounded-full bg-cover bg-center shadow-xl border-8 border-white"
                                        style={{
                                            backgroundImage: 'url(https://images.unsplash.com/photo-1637245048732-adf1a547835e)',
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full bg-gradient-to-t from-[#2F3E46]/40 to-transparent"></div>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-[#52796F] rounded-full opacity-30 blur-3xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2F3E46] text-center">
                                My <span className="text-gradient">Journey</span>
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-lg text-[#334155] leading-relaxed mb-6">
                                    With a background in clinical psychology, I realized early on that healing is not just about the mind, but also the spirit. This profound understanding led me to explore the transformative power of Hypnotherapy and the ancient wisdom of Numerology.
                                </p>
                                <p className="text-lg text-[#334155] leading-relaxed mb-6">
                                    Over the years, I've integrated these powerful modalities to offer a truly holistic approach to wellness—one that addresses the mental, emotional, and spiritual dimensions of healing. My philosophy is simple yet profound: every individual has an innate power to heal themselves. My role is to facilitate that journey, providing the tools, guidance, and support needed for lasting transformation.
                                </p>
                                <p className="text-lg text-[#334155] leading-relaxed">
                                    Whether you're struggling with anxiety, seeking to break free from limiting patterns, or searching for deeper meaning in your life, I'm here to walk alongside you on your path to wholeness.
                                </p>
                            </div>
                        </motion.div>

                        {/* Credentials */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                        >
                            <div className="bg-gradient-to-br from-[#E0F2F1] to-[#F0F4F8] p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#2F3E46] mb-2">Certified Psychologist</h3>
                                <p className="text-[#526D82]">Licensed clinical psychology professional</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E0F2F1] to-[#F0F4F8] p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#2F3E46] mb-2">Hypnotherapy Expert</h3>
                                <p className="text-[#526D82]">Advanced hypnotherapy certification</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E0F2F1] to-[#F0F4F8] p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#2F3E46] mb-2">Numerology Master</h3>
                                <p className="text-[#526D82]">Expert in numerological analysis</p>
                            </div>
                        </motion.div>

                        {/* Video Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#FAFAF9] to-[#F0F4F8] p-10 rounded-3xl border border-[#E2E8F0] shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#FF0000] to-[#CC0000] rounded-xl flex items-center justify-center shadow-lg">
                                    <Youtube className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-[#2F3E46]">Featured Video</h3>
                                    <p className="text-[#526D82]">Learn more about my approach</p>
                                </div>
                            </div>
                            <div className="aspect-video bg-gradient-to-br from-[#2F3E46] to-[#52796F] rounded-2xl overflow-hidden relative group shadow-2xl">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <Youtube className="w-20 h-20 mb-4 opacity-60" />
                                    <p className="text-lg font-medium">YouTube Video Integration</p>
                                    <p className="text-sm text-white/70 mt-2">Add your YouTube video ID in the admin panel</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-[#64748B] flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span className="text-sm">Visit my YouTube channel for more insights and guidance</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#52796F] to-[#354F52] text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Start Your Journey Together</h2>
                        <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
                            Experience personalized care that integrates mind, body, and spirit for lasting transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#2F3E46] rounded-full font-bold text-lg hover:bg-[#A4C3B2] hover:text-white transition-all shadow-2xl hover:scale-105"
                                data-testid="about-cta-contact-btn"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Get in Touch
                            </Link>
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-[#2F3E46] transition-all shadow-xl"
                            >
                                <BookOpen className="w-5 h-5" />
                                Read My Blog
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}