import {ContentfulFatFooterType} from "@/types/contentful";
import ContentfulLinkList from "./ContentfulLinkList";
import Link from "next/link";

interface ContentfulFatFooterProps {
    footer: ContentfulFatFooterType;
}

export default function ContentfulFatFooter({
                                                footer,
                                            }: ContentfulFatFooterProps) {
    const {
        servicesSection,
        aboutSection,
        socialMediaSection,
        servicesSection2,
    } = footer;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="lg:col-span-2 space-y-6">
                    <Link href="/" className="inline-block">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              Life Lifting Australia
            </span>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md">
                        Lifting Together, Changing Lives.
                    </p>{" "}
                    <div className="mt-12 pt-4">
                        <div className="flex flex-col justify-between items-start space-y-4 md:space-y-0">
                            <ContentfulLinkList
                                linkList={socialMediaSection}
                                className="flex items-center space-x-4"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <ContentfulLinkList
                        linkList={servicesSection}
                        className="space-y-3"
                    />
                </div>
                <div>
                    <ContentfulLinkList
                        linkList={servicesSection2}
                        className="space-y-3 lg:pt-9"
                    />
                </div>

                <div>
                    <ContentfulLinkList linkList={aboutSection} className="space-y-3"/>
                </div>
            </div>
        </div>
    );
}
