"use client";

import { useState } from "react";
import Image from "next/image";
import { ContentfulImageType } from "@/types/contentful";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ImageGalleryProps {
  images: ContentfulImageType[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState<ContentfulImageType | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div
            key={image.sys.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.description || ""}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {image.description && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {selectedImage && (
              <div className="relative aspect-[16/9]">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.description || ""}
                  fill
                  className="object-contain"
                />
                {selectedImage.description && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                    <p className="text-white text-center">
                      {selectedImage.description}
                    </p>
                  </div>
                )}
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
