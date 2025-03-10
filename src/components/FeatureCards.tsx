"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  subtitle: string;
}

interface FeatureCardsProps {
  features: FeatureCardProps[];
}

const FeatureCard = ({ title, subtitle }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="p-6 bg-gray-50 dark:bg-trueGray-800 rounded-xl transition-all duration-200 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
    </motion.div>
  );
};

export default function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:ms-44 lg:me-44">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}
