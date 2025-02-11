"use client";
import {
  ContentfulNavbarType,
  ContentfulTopHeaderBarType,
} from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";
import ContentfulNavbar from "./ContentfulNavbar";

export function Navbar({
  topHeaderBar,
  navbar,
}: {
  topHeaderBar: ContentfulTopHeaderBarType;
  navbar: ContentfulNavbarType;
}) {
  return (
    <>
      {topHeaderBar.shouldBeDisplayed && (
        <div className="w-full bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 from-gray-50 to-gray-100 hidden lg:block">
          <div className="container mx-auto">
            <div className="flex items-center justify-end space-x-6 py-2 px-4">
              <ContentfulLink
                link={topHeaderBar.contactEmail!}
                className="dark:text-gray-200 dark:hover:text-white text-gray-900 hover:text-gray-950 text-sm transition-colors flex items-center group"
              ></ContentfulLink>
              <div className="h-4 w-px bg-gray-700" />
              <ContentfulLink
                link={topHeaderBar.contactPhoneNumber!}
                className="dark:text-gray-200 dark:hover:text-white text-gray-900 hover:text-gray-950 text-sm transition-colors flex items-center group"
              ></ContentfulLink>
              <div className="h-4 w-px dark:bg-gray-700 bg-gray-200" />
              <div className="flex items-center space-x-3">
                {topHeaderBar.socialMediaLinksCollection?.items?.map((link) => (
                  <ContentfulLink
                    key={link.sys.id}
                    link={link}
                    className="dark:text-gray-200 dark:hover:text-white text-gray-900 hover:text-gray-950 p-1.5 dark:bg-gray-700/50 bg-gray-300/50  dark:hover:bg-gray-700 hover:bg-gray-200 rounded-full transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full sticky top-0 z-50">
        <ContentfulNavbar navbar={navbar} topHeaderBar={topHeaderBar} />
      </div>
    </>
  );
}
