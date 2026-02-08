"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Clinical Psychology",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct WhatsApp message
        const whatsappMessage = `*New Contact Form Submission*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Service:* ${formData.service}\n` +
            `*Message:*\n${formData.message}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp number (replace with actual number)
        const whatsappNumber = "919850263074";

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Small delay for UX
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "Clinical Psychology",
                message: ""
            });
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gradient-to-b from-white to-[#F0F4F8] min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-[#52796F] to-[#354F52] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                            Let's Connect
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Get in <span className="text-[#A4C3B2]">Touch</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Ready to start your journey? I'm here to help you every step of the way.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            <section className="py-20 container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2E8F0] hover:shadow-2xl transition-shadow"
                        data-testid="contact-info-email"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <Mail className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#2F3E46]">Email Us</h3>
                        <p className="text-[#526D82] mb-2">contact@kallpanashakkya.in</p>
                        <p className="text-[#94A3B8] text-sm">We reply within 24 hours</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2E8F0] hover:shadow-2xl transition-shadow"
                        data-testid="contact-info-whatsapp"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <MessageCircle className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#2F3E46]">WhatsApp</h3>
                        <p className="text-[#526D82] mb-2">+91 9850263074</p>
                        <p className="text-[#94A3B8] text-sm">Quick responses</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2E8F0] hover:shadow-2xl transition-shadow"
                        data-testid="contact-info-location"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-[#52796F] to-[#354F52] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#2F3E46]">Location</h3>
                        <p className="text-[#526D82] mb-2">Online & In-Person</p>
                        <p className="text-[#94A3B8] text-sm">Sessions by appointment</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-3 bg-white p-10 rounded-3xl shadow-2xl border border-[#E2E8F0]"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-[#52796F]" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-[#2F3E46]">Send a Message</h2>
                                <p className="text-[#526D82] text-sm">We'll respond via WhatsApp</p>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-[#334155] mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#FAFAF9] focus:border-[#52796F] focus:bg-white outline-none transition-all text-[#334155]"
                                        placeholder="Your Name"
                                        data-testid="contact-name-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-[#334155] mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#FAFAF9] focus:border-[#52796F] focus:bg-white outline-none transition-all text-[#334155]"
                                        placeholder="john@example.com"
                                        data-testid="contact-email-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-[#334155] mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#FAFAF9] focus:border-[#52796F] focus:bg-white outline-none transition-all text-[#334155]"
                                    placeholder="+91 XXXXXXXXXX"
                                    data-testid="contact-phone-input"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-[#334155] mb-2">
                                    Interested Service *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#FAFAF9] focus:border-[#52796F] focus:bg-white outline-none transition-all text-[#334155]"
                                    data-testid="contact-service-select"
                                >
                                    <option>Clinical Psychology</option>
                                    <option>Hypnotherapy</option>
                                    <option>Numerology</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-[#334155] mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#FAFAF9] focus:border-[#52796F] focus:bg-white outline-none transition-all text-[#334155] resize-none"
                                    placeholder="Tell me how I can help you..."
                                    data-testid="contact-message-textarea"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#52796F] to-[#354F52] hover:from-[#354F52] hover:to-[#2F3E46] text-white font-bold py-5 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                                data-testid="contact-submit-btn"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send via WhatsApp <MessageCircle size={20} />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-sm text-[#94A3B8] flex items-center justify-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#52796F]" />
                                Your message will open in WhatsApp
                            </p>
                        </form>
                    </motion.div>

                    {/* Sidebar Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-gradient-to-br from-[#E0F2F1] to-[#CAD2C5] p-8 rounded-3xl border border-[#A4C3B2]/30">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <Clock className="w-6 h-6 text-[#52796F]" />
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-[#2F3E46]">Initial Consultation</h3>
                            <p className="text-[#334155] leading-relaxed mb-4">
                                Unsure which service is right for you? Book a brief 15-minute discovery call to discuss your needs and how I can support you.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-[#526D82]">
                                    <CheckCircle className="w-4 h-4 text-[#52796F]" />
                                    Free 15-minute consultation
                                </div>
                                <div className="flex items-center gap-2 text-[#526D82]">
                                    <CheckCircle className="w-4 h-4 text-[#52796F]" />
                                    Personalized service recommendation
                                </div>
                                <div className="flex items-center gap-2 text-[#526D82]">
                                    <CheckCircle className="w-4 h-4 text-[#52796F]" />
                                    No obligation
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E2E8F0]">
                            <h3 className="font-bold text-lg mb-4 text-[#2F3E46]">Why Choose Me?</h3>
                            <ul className="space-y-3 text-[#526D82]">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#52796F] mt-2 flex-shrink-0"></div>
                                    <span>10+ years of professional experience</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#52796F] mt-2 flex-shrink-0"></div>
                                    <span>Certified in multiple healing modalities</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#52796F] mt-2 flex-shrink-0"></div>
                                    <span>Personalized holistic approach</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#52796F] mt-2 flex-shrink-0"></div>
                                    <span>Confidential and compassionate care</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}