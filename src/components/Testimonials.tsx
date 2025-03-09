import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { ContentfulTestimonialType } from "@/types/contentful";

interface AvatarProps {
  image: {
    url: string;
    description: string;
  };
  name: string;
  title?: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-6 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12">
        <Image
          src={props.image.url}
          width={48}
          height={48}
          alt={props.image.description || props.name}
          className="object-cover align-middle"
        />
      </div>
      <div className={props.title ? "" : "flex items-center"}>
        <div className="text-base font-medium">{props.name}</div>
        {props.title && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {props.title}
          </div>
        )}
      </div>
    </div>
  );
}

interface TestimonialsProps {
  testimonials: ContentfulTestimonialType[];
}

export const Testimonials = ({ testimonials }: Readonly<TestimonialsProps>) => {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.sys.id}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-50 px-6 md:px-8 rounded-2xl py-10 dark:bg-trueGray-800">
              <p className="text-lg leading-relaxed text-gray-900 dark:text-white">
                {testimonial.testimonialQuote}
              </p>

              <Avatar
                image={testimonial.personImage}
                name={testimonial.personName}
                title={testimonial.personDesignation || undefined}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
