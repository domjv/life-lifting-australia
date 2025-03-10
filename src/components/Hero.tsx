"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ContentfulHeroSectionType } from "@/types/contentful";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

export const Hero = ({
  heroSection,
}: {
  heroSection: ContentfulHeroSectionType;
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Blur Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroSection.backgroundImage.url}
          fill
          className="object-cover scale-110 blur-sm"
          alt="Background"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/75 dark:from-gray-950/90 dark:to-gray-900/75 backdrop-blur-sm" />
      </motion.div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full items-center py-12 lg:py-0">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.0 }}
              className="max-w-2xl space-y-6 p-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"
              >
                {heroSection.headingAndDescription.heading}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-200"
              >
                {heroSection.headingAndDescription.subHeading}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <AnimatedButton
                  link={heroSection.buttonsCollection.items[0]}
                  isPrimary={true}
                />
                {heroSection.buttonsCollection.items.length > 1 && (
                  <AnimatedButton
                    link={heroSection.buttonsCollection.items[1]}
                    isPrimary={false}
                  />
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src={heroSection.sideImage.url}
                  fill
                  className="object-cover object-center scale-[1.02] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  alt="Hero Illustration"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
