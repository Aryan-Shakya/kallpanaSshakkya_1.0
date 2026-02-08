"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Activity, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1719467661211-230b90364f31)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2F3E46]/85 via-[#52796F]/80 to-[#354F52]/85"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 z-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[#52796F] text-sm font-semibold uppercase tracking-wider shadow-xl">
              ✨ Holistic Healing & Guidance
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl"
          >
            Unlock Your <span className="text-[#A4C3B2] italic">True Potential</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Empowering you through Clinical Psychology, Hypnotherapy, and Numerology to achieve balance, clarity, and success.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-[#2F3E46] rounded-full font-bold text-lg hover:bg-[#A4C3B2] hover:text-white transition-all hover:scale-105 shadow-2xl hover:shadow-white/20"
              data-testid="hero-start-journey-btn"
            >
              Start Your Journey <ArrowRight className="inline ml-2" />
            </Link>
            <Link
              href="/services"
              className="px-10 py-5 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-[#2F3E46] transition-all shadow-xl"
              data-testid="hero-explore-services-btn"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/90"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-[#A4C3B2] text-[#A4C3B2]" />
              <span className="text-sm font-medium">Certified Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#A4C3B2]" />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#A4C3B2]" />
              <span className="text-sm font-medium">Holistic Approach</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview with Images */}
      <section className="py-28 bg-gradient-to-b from-white to-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#2F3E46]">My <span className="text-gradient">Services</span></h2>
              <p className="text-xl text-[#526D82] max-w-2xl mx-auto">
                Professional guidance tailored to your unique needs and life path.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Brain className="w-12 h-12 text-white" />}
              title="Clinical Psychology"
              description="Evidence-based therapy to help you overcome mental health challenges, manage stress, and build resilience."
              image="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
              delay={0.1}
            />
            <ServiceCard
              icon={<Sparkles className="w-12 h-12 text-white" />}
              title="Hypnotherapy"
              description="Access your subconscious mind to break habits, overcome phobias, and achieve profound positive change."
              image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
              delay={0.2}
            />
            <ServiceCard
              icon={<Activity className="w-12 h-12 text-white" />}
              title="Numerology"
              description="Discover the hidden meaning in numbers to understand your life purpose, strengths, and future trends."
              image="https://images.unsplash.com/photo-1502570149819-b2260483d302"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* About Preview with Professional Image */}
      <section className="py-28 bg-[#F0F4F8] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1637245048732-adf1a547835e)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E46]/30 to-transparent"></div>
                </div>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#A4C3B2] rounded-full -z-0 opacity-40 blur-3xl"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2F3E46]">Meet <span className="text-gradient">Kalpana Shakya</span></h2>
              <p className="text-lg text-[#526D82] mb-8 leading-relaxed">
                With years of experience in clinical practice and holistic healing, I bridge the gap between scientific psychology and spiritual wellness. My mission is to help you heal, grow, and thrive in every aspect of your life.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#52796F]"></div>
                  <span className="text-[#334155] font-medium">Certified Clinical Psychologist</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#52796F]"></div>
                  <span className="text-[#334155] font-medium">Expert Hypnotherapist & Numerologist</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#52796F]"></div>
                  <span className="text-[#334155] font-medium">Personalized Healing Approaches</span>
                </div>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center text-[#52796F] font-bold text-lg hover:text-[#354F52] group"
                data-testid="about-read-more-btn"
              >
                Read Full Bio 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Take the first step towards a balanced, fulfilling life. Book your consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-[#2F3E46] rounded-full font-bold text-lg hover:bg-[#A4C3B2] hover:text-white transition-all hover:scale-105 shadow-2xl"
              data-testid="cta-book-consultation-btn"
            >
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, image, delay }: { icon: React.ReactNode, title: string, description: string, image: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image Background */}
      <div className="relative h-56 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E46] via-[#2F3E46]/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 p-4 bg-[#52796F] rounded-2xl shadow-lg">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-[#2F3E46]">{title}</h3>
        <p className="text-[#526D82] leading-relaxed mb-6">
          {description}
        </p>
        <Link 
          href="/services" 
          className="text-sm font-bold text-[#52796F] hover:text-[#354F52] flex items-center group"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}