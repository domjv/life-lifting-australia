"use client";
import {
  ContentfulNavbarType,
  ContentfulTopHeaderBarType,
} from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";
import ContentfulNavbar from "./ContentfulNavbar";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({
  topHeaderBar,
  navbar,
}: {
  topHeaderBar: ContentfulTopHeaderBarType;
  navbar: ContentfulNavbarType;
}) {
  return (
    <>
      <AnimatePresence>
        {topHeaderBar.shouldBeDisplayed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 from-gray-50 to-gray-100 hidden lg:block"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto"
            >
              <div className="flex items-center justify-end space-x-6 py-2 px-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ContentfulLink
                    link={topHeaderBar.contactEmail!}
                    className="dark:text-gray-200 dark:hover:text-white text-gray-900 hover:text-gray-950 text-sm transition-colors flex items-center group"
                  />
                </motion.div>
                <div className="h-4 w-px bg-gray-700" />
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ContentfulLink
                    link={topHeaderBar.contactPhoneNumber!}
                    className="dark:text-gray-200 dark:hover:text-white text-gray-900 hover:text-gray-950 text-sm transition-colors flex items-center group"
                  />
                </motion.div>
                <div className="h-4 w-px dark:bg-gray-700 bg-gray-200" />
                <div className="flex items-center space-x-3">
                  {topHeaderBar.socialMediaLinksCollection?.items?.map(
                    (link) => (
                      <motion.div
                        key={link.sys.id}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ContentfulLink
                          link={link}
                          className="dark:text-gray-200 dark:hover:text-white text-gray-900 hover:text-gray-950 p-1.5 dark:bg-gray-700/50 bg-gray-300/50  dark:hover:bg-gray-700 hover:bg-gray-200 rounded-full transition-colors"
                        />
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full sticky top-0 z-50"
      >
        <ContentfulNavbar navbar={navbar} topHeaderBar={topHeaderBar} />
      </motion.div>
    </>
  );
}
