"use client";
import { ContentfulSlimFooterType } from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";
import { motion } from "framer-motion";

interface ContentfulSlimFooterProps {
  footer: ContentfulSlimFooterType;
}

export default function ContentfulSlimFooter({
  footer,
}: ContentfulSlimFooterProps) {
  const { copyrightText, trademarkText, poweredByLink } = footer;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-4 py-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto lg:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-600 dark:text-gray-400"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2"
          >
            {trademarkText && <span>{trademarkText}</span>}
          </motion.div>

          {poweredByLink && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className="mt-2 md:mt-0"
            >
              <ContentfulLink link={poweredByLink} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.footer>
  );
}
