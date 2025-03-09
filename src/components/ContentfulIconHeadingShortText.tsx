"use client";
import { ContentfulIconHeadingShortTextType } from "@/types/contentful";
import ContentfulIcon from "./ContentfulIcon";
import { motion } from "framer-motion";

interface ContentfulIconHeadingShortTextProps {
  item: ContentfulIconHeadingShortTextType;
  className?: string;
}

export default function ContentfulIconHeadingShortText({
  item,
  className = "",
}: ContentfulIconHeadingShortTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`flex items-start space-x-3 ${className}`}
    >
      {item.icon && (
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-200 dark:bg-indigo-500 rounded-md w-11 h-11"
        >
          <ContentfulIcon icon={item.icon} className="w-7 h-7" />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <motion.h4
          whileHover={{ x: 3 }}
          className="text-xl font-medium text-gray-800 dark:text-gray-200"
        >
          {item.heading}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-1 text-gray-500 dark:text-gray-400"
        >
          {item.shortText}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
