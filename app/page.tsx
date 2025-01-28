'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Users, Sparkles, ArrowRight, Play, HandHeart, Clock, Home} from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
      <div className="min-h-screen bg-[#FAFDF7]">
        {/* Hero Section with Dynamic Elements */}
        <section ref={targetRef} className="relative h-screen flex items-center overflow-hidden">
          <motion.div
              style={{ opacity, scale }}
              className="absolute inset-0"
          >
            <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt="Supportive care"
                fill
                loader={({ src, width }) => { return src + "?w=" + width }}
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#134e4a]/90 via-[#065f46]/80 to-transparent" />
          </motion.div>

          <motion.div
              style={{ y: translateY }}
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 flex items-center gap-2"
              >
              <span className="bg-emerald-600 text-emerald-50 px-6 py-2 rounded-r-full text-sm font-medium relative before:absolute before:inset-0 before:blur-lg before:opacity-50">
                NDIS Registered Provider
              </span>
              </motion.div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-none">
                Empowering Lives
                <span className="pb-2 block text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-200 mt-2">
                Through Support
              </span>
              </h1>
              <p className="text-xl text-emerald-50 mb-12 max-w-xl">
                Dedicated to enhancing independence and well-being through personalized NDIS support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 transition-transform duration-300 group-hover:scale-105" />
                  <span className="relative flex items-center justify-center gap-2">
                  Contact Us Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" /> Learn About NDIS
                </motion.button>
              </div>
            </motion.div>
          </div>

        </section>

        {/* Our Approach Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
              <span className="text-emerald-600 font-semibold mb-4 block tracking-wider">OUR APPROACH</span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Person-Centered Care</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We work closely with individuals, families, and caregivers to deliver tailored solutions that align with unique goals and aspirations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <HandHeart className="w-8 h-8" />,
                  title: 'Personalized Support',
                  description: 'Tailored care plans that focus on individual needs, goals, and preferences.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Expert Team',
                  description: 'Compassionate and highly trained professionals dedicated to your well-being.'
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: 'Quality Care',
                  description: 'Comprehensive NDIS support services that enhance independence and life quality.'
                }
              ].map((feature, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl transform transition-transform group-hover:scale-105" />
                    <div className="relative p-8 border border-emerald-100 rounded-2xl bg-white/50 backdrop-blur-sm">
                      <div className="mb-6 p-4 bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-gradient-to-b from-emerald-50/50 to-white relative">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
              <span className="text-emerald-600 font-semibold mb-4 block tracking-wider">OUR SERVICES</span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">NDIS Support Services</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive support services designed to enhance independence and quality of life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: 'Daily Living Support',
                  description: 'Assistance with personal activities, household tasks, and life skills development.',
                  services: ['Assist-Personal Activities', 'Household Tasks', 'Development-Life Skills']
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Community Participation',
                  description: 'Support for social engagement and community activities.',
                  services: ['Innov Community Participation', 'Group/Centre Activities', 'Participate Community']
                },
                {
                  icon: <Home className="w-8 h-8" />,
                  title: 'Specialized Support',
                  description: 'Comprehensive care including travel assistance and accommodation support.',
                  services: ['Assist-Travel/Transport', 'Specialised Disability Accommodation', 'Daily Tasks/Shared Living']
                }
              ].map((service, index) => (
                  <motion.div
                      key={index}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-8">
                      <div className="mb-6 p-4 bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.services.map((item, i) => (
                            <li key={i} className="flex items-center text-emerald-700">
                              <ChevronRight className="w-4 h-4 mr-2" />
                              <span>{item}</span>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-800" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20" />
          <div className="container mx-auto px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8">Start Your Journey</h2>
              <p className="text-xl mb-12 text-emerald-100">
                Contact Life Lifting Australia today to learn how we can support you through the NDIS.
              </p>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-5 bg-white text-emerald-900 rounded-xl font-semibold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-white transition-transform duration-300 group-hover:scale-105" />
                <span className="relative flex items-center justify-center gap-2">
                Get Started Today <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
  );
}