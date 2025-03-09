"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Description,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { ContentfulHeadingAndDescriptionType } from "@/types/contentful";
import RichTextRenderer from "./RichTextRenderer";
import { motion, AnimatePresence } from "framer-motion";

export const Faq = ({
  questions,
}: {
  questions: ContentfulHeadingAndDescriptionType[];
}) => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {questions.map((question, index) => (
          <motion.div
            key={question.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-5"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                    transition={{ duration: 0.1 }}
                  >
                    <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                      <span>{question.heading}</span>
                      <motion.div
                        initial={false}
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <ChevronDownIcon className="w-5 h-5 text-indigo-500" />
                      </motion.div>
                    </DisclosureButton>
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <DisclosurePanel static>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                            <RichTextRenderer
                              content={question.description?.json}
                            />
                          </div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
