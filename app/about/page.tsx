"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { COMPANY_INFO, TEAM_MEMBERS, WHY_CHOOSE_US } from "@/constants";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Maxdevops</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Transforming businesses through innovative software solutions since 2018. Building the future of digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2018, Maxdevops has grown from a small startup to an award-winning software product 
                engineering company, serving clients across the globe. Our team of passionate developers, designers, 
                and strategists work together to create solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We have delivered bespoke software solutions to clients globally for the past 8 years. More recently, 
                we have added AI-driven innovations to our service offerings, empowering businesses to propel forward. 
                From digital transformation to scalable growth, we help companies harness the power of technology to stay ahead.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in building long-term partnerships with our clients, understanding their unique challenges, 
                and delivering solutions that drive measurable results. Our commitment to excellence and innovation 
                has made us a trusted partner for businesses of all sizes - from startups to Fortune 500 enterprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "500+", label: "Clients Served", icon: "Users" },
                { value: "1000+", label: "Projects Delivered", icon: "Code2" },
                { value: "8+", label: "Years Experience", icon: "Award" },
                { value: "50+", label: "Team Members", icon: "Users2" },
              ].map((stat, index) => {
                const Icon = Icons[stat.icon as keyof typeof Icons] as LucideIcon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 text-center border border-purple-100"
                  >
                    <Icon className="w-10 h-10 mx-auto mb-3 text-purple-600" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Mission & Vision"
            subtitle="Our guiding principles that drive everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative software solutions that drive growth, efficiency, and 
                digital transformation. We are committed to delivering exceptional quality, fostering creativity, 
                and building lasting relationships with our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative software development partner globally, recognized for our 
                technical excellence, creative solutions, and unwavering commitment to client success. We envision 
                a future where technology seamlessly enhances every aspect of business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our culture and work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Heart",
                title: "Passion",
                description: "We love what we do and it shows in our work",
              },
              {
                icon: "Award",
                title: "Excellence",
                description: "We strive for the highest quality in everything",
              },
              {
                icon: "Users",
                title: "Collaboration",
                description: "We work together to achieve amazing results",
              },
              {
                icon: "Lightbulb",
                title: "Innovation",
                description: "We embrace new ideas and technologies",
              },
            ].map((value, index) => {
              const Icon = Icons[value.icon as keyof typeof Icons] as LucideIcon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The talented people behind Maxdevops"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl opacity-70">👤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Us"
            subtitle="What sets us apart from other development companies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as LucideIcon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 border-0"
              >
                Get In Touch
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
