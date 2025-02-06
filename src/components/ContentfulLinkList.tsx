import { ContentfulLinkListEntry } from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";

interface ContentfulLinkListProps {
  linkList: ContentfulLinkListEntry;
  className?: string;
}

export default function ContentfulLinkList({
  linkList,
  className = "",
}: ContentfulLinkListProps) {
  const { heading, listOfLinks } = linkList.fields;

  return (
    <div>
      <h5 className="font-semibold text-gray-700 dark:text-gray-200 pb-3">
        {heading}
      </h5>
      <div className={className}>
        {listOfLinks.map((link) => (
          <ContentfulLink
            key={link.fields.name}
            link={link}
            className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
          />
        ))}
      </div>
    </div>
  );
}
