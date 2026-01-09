"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Button from "@/components/Button";
import { SERVICES, TESTIMONIALS } from "@/constants";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl"
          />

          {/* Floating Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #9333ea 1px, transparent 1px),
                               linear-gradient(to bottom, #9333ea 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-purple-100"
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">
                Award-Winning Digital Solutions • 15+ Years Excellence
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-5xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[1.1]"
            >
              Transform Your Business
              <span className="block bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
                With Innovation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We build cutting-edge software solutions that empower enterprises to scale, 
              innovate, and lead in the digital era.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button href="/contact" size="lg" className="group shadow-xl hover:shadow-2xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/projects" variant="outline" size="lg" className="shadow-lg">
                Explore Our Work
              </Button>
            </motion.div>

            {/* Stats - Circular Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto"
            >
              {[
                { value: "500+", label: "Happy Clients", icon: "Users", gradient: "from-purple-500 to-pink-500" },
                { value: "1000+", label: "Projects", icon: "Briefcase", gradient: "from-blue-500 to-cyan-500" },
                { value: "15+", label: "Years", icon: "Award", gradient: "from-purple-600 to-blue-500" },
                { value: "99%", label: "Satisfaction", icon: "ThumbsUp", gradient: "from-pink-500 to-purple-500" },
              ].map((stat, index) => {
                const Icon = Icons[stat.icon as keyof typeof Icons] as LucideIcon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative group"
                  >
                    {/* Circular Container */}
                    <div className="w-40 h-40 rounded-full bg-white/90 backdrop-blur-sm border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Value */}
                      <div className="text-2xl font-bold text-gray-900 mb-1 relative z-10">
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-xs text-gray-600 font-medium text-center relative z-10">
                        {stat.label}
                      </div>
                    </div>

                    {/* Decorative Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className={`absolute inset-0 rounded-full border-2 border-dashed bg-gradient-to-r ${stat.gradient} opacity-30`}></div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end digital services designed for performance, security, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = Icons[service.icon as keyof typeof Icons] as LucideIcon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Button href="/services" variant="secondary" size="lg">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Organizations Choose Maxdevops
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine strategic thinking, technical excellence, and 
                disciplined execution to deliver solutions that create 
                measurable business impact.
              </p>

              <div className="space-y-4">
                {[
                  "Enterprise-grade architecture & security",
                  "Proven delivery across diverse industries",
                  "Dedicated long-term support & optimization",
                  "Modern, future-ready technology stack",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icons.CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button href="/about" variant="secondary">
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[Icons.Code, Icons.Rocket, Icons.Users, Icons.Zap].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center"
                  >
                    <Icon className="w-14 h-14 text-purple-600" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <p className="text-gray-700 mb-6 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="font-semibold text-gray-900">{t.author}</div>
                <div className="text-sm text-gray-600">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-500 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Something Exceptional
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Discuss your project with our experts and discover how Maxdevops can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
