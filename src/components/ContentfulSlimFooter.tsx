import {ContentfulSlimFooterType} from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";

interface ContentfulSlimFooterProps {
    footer: ContentfulSlimFooterType;
}

export default function ContentfulSlimFooter({
                                                 footer,
                                             }: ContentfulSlimFooterProps) {
    const {copyrightText, trademarkText, poweredByLink} = footer;

    return (
        <footer className="py-4 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div
                    className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                        {copyrightText && (
                            <span>
                {copyrightText} {new Date().getFullYear()}
              </span>
                        )}
                        {trademarkText && (
                            <span className="pl-2">{trademarkText}</span>
                        )}
                    </div>

                    {poweredByLink && (
                        <div className="mt-2 md:mt-0">
                            <ContentfulLink link={poweredByLink}/>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}
