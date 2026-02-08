"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Activity, CheckCircle, Clock, Calendar, Award, Users, Heart } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const services = [
        {
            id: "psychology",
            title: "Clinical Psychology",
            icon: <Brain className="w-12 h-12 text-white" />,
            description: "Professional therapeutic support for mental health concerns including anxiety, depression, trauma, and relationship issues. Using evidence-based approaches like CBT and mindfulness.",
            features: [
                "Individual Counseling",
                "Anxiety & Depression Management",
                "Trauma Recovery",
                "Stress Management",
                "Relationship Counseling",
            ],
            image: "https://images.pexels.com/photos/7176286/pexels-photo-7176286.jpeg",
            price: "Book for Consultation",
            color: "from-[#52796F] to-[#354F52]"
        },
        {
            id: "hypnotherapy",
            title: "Hypnotherapy",
            icon: <Sparkles className="w-12 h-12 text-white" />,
            description: "A guided state of relaxation and focused attention to access the subconscious mind. Effective for breaking habits, overcoming phobias, and boosting confidence.",
            features: [
                "Smoking Cessation",
                "Weight Management",
                "Phobia Release",
                "Confidence Building",
                "Past Life Regression",
            ],
            image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
            price: "Session rates available",
            color: "from-[#8B5CF6] to-[#6D28D9]"
        },
        {
            id: "numerology",
            title: "Numerology",
            icon: <Activity className="w-12 h-12 text-white" />,
            description: "Analysis of the numbers associated with your name and birthdate to reveal personality traits, life purpose, and future trends. Gain clarity on your life path.",
            features: [
                "Personal Name Analysis",
                "Business Name Consultation",
                "Relationship Compatibility",
                "Life Path Guidance",
                "Yearly Forecasts",
            ],
            image: "https://images.unsplash.com/photo-1506555191898-a76bacf004ca",
            price: "Detailed Report Included",
            color: "from-[#0EA5E9] to-[#0284C7]"
        },
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header with Gradient */}
            <section className="relative py-28 bg-gradient-to-br from-[#52796F] via-[#354F52] to-[#2F3E46] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div
                    className="container mx-auto px-4 text-center relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                        What I Offer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        My <span className="text-[#A4C3B2]">Services</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive holistic care tailored to your mind, spirit, and life path. Each service is designed to help you achieve lasting transformation.
                    </p>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 bg-gradient-to-b from-white to-[#F0F4F8]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-[#2F3E46] mb-2">Certified Expert</h3>
                            <p className="text-[#526D82] text-sm">Professional credentials in all modalities</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-[#2F3E46] mb-2">500+ Clients</h3>
                            <p className="text-[#526D82] text-sm">Trusted by individuals worldwide</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-[#2F3E46] mb-2">Holistic Care</h3>
                            <p className="text-[#526D82] text-sm">Mind, body, and spirit integration</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services List with Enhanced Design */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    className="space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            variants={itemVariants}
                            className="group max-w-6xl mx-auto"
                        >
                            <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] hover:shadow-[0_20px_70px_rgba(82,121,111,0.2)] transition-all duration-500 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                {/* Image Section */}
                                <div className={`relative h-80 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-white p-8">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                                                {service.icon}
                                            </div>
                                            <h2 className="text-4xl font-bold drop-shadow-lg">{service.title}</h2>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-10 lg:p-12 flex flex-col justify-center">
                                    <p className="text-lg text-[#334155] mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature, i) => (
                                            <motion.div 
                                                key={i} 
                                                className="flex items-center gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-[#52796F] flex-shrink-0" />
                                                <span className="text-[#526D82] font-medium">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-[#E2E8F0]">
                                        <div className="flex items-center gap-2 text-[#64748B]">
                                            <Clock size={18} />
                                            <span className="text-sm font-medium">45-60 min sessions</span>
                                        </div>
                                        <Link 
                                            href="/contact" 
                                            className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl`}
                                            data-testid={`book-${service.id}-btn`}
                                        >
                                            Book Now <Calendar className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#F0F4F8] to-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2F3E46]">
                            Ready to Start Your <span className="text-gradient">Transformation?</span>
                        </h2>
                        <p className="text-xl text-[#526D82] mb-10">
                            Book a free consultation to discuss which service is right for you.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-5 bg-gradient-to-r from-[#52796F] to-[#354F52] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-[0_20px_50px_rgba(82,121,111,0.3)]"
                            data-testid="services-cta-btn"
                        >
                            Book Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}