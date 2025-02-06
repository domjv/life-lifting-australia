import { ContentfulFatFooterEntry } from "@/types/contentful";
import ContentfulLinkList from "./ContentfulLinkList";
import Image from "next/image";
import Link from "next/link";

interface ContentfulFatFooterProps {
  footer: ContentfulFatFooterEntry;
}

export default function ContentfulFatFooter({
  footer,
}: ContentfulFatFooterProps) {
  const { servicesSection, aboutSection, socialMediaSection } = footer.fields;

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
          >
            <span>Life Lifting Australia</span>
          </Link>
        </div>
      </div>

      <div>
        <ContentfulLinkList
          linkList={servicesSection}
          className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"
        />
      </div>

      <div>
        <ContentfulLinkList
          linkList={aboutSection}
          className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"
        />
      </div>

      <div>
        <ContentfulLinkList
          linkList={socialMediaSection}
          className="inline-flex gap-3 -mt-2 -ml-3 lg:ml-0"
        />
      </div>
    </div>
  );
}
