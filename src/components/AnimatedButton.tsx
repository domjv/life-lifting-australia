"use client";
import { motion } from "framer-motion";
import ContentfulLink from "./ContentfulLink";
import { ContentfulLinkType } from "@/types/contentful";

interface AnimatedButtonProps {
  link: ContentfulLinkType;
  isPrimary?: boolean;
}

export default function AnimatedButton({
  link,
  isPrimary = true,
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      className="relative group"
    >
      <motion.div
        className={`
          absolute inset-0 rounded-lg
          group-hover:blur-md transition-all duration-200
        `}
      />
      <ContentfulLink
        link={link}
        className={`
          relative px-8 py-4 rounded-lg text-lg font-medium text-center
          transition-colors duration-200
        `}
      />
    </motion.div>
  );
}
