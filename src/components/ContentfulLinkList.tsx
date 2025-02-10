import {ContentfulLinkListType} from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";

interface ContentfulLinkListProps {
    linkList: ContentfulLinkListType;
    className?: string;
}

export default function ContentfulLinkList({
                                               linkList,
                                               className = "",
                                           }: ContentfulLinkListProps) {
    const {heading, listOfLinksCollection} = linkList;

    return (
        <div>
            {heading != " " &&
                <h4 className="font-semibold text-gray-700 dark:text-gray-200 pb-3 pt-3 lg:pt-0">
                    {heading}
                </h4>

            }
            <div className={className}>
                {listOfLinksCollection.items.map((link) => (
                    <ContentfulLink
                        key={link.name}
                        link={link}
                        className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    />
                ))}
            </div>
        </div>
    );
}
