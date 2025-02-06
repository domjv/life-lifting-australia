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
    <div className="w-full sticky top-0 z-50">
      {topHeaderBar.shouldBeDisplayed && (
        <div className="dark:bg-gray-800 bg-gray-800">
          {/* Mobile Top Bar */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center space-y-2 py-2 px-4">
              <ContentfulLink
                link={topHeaderBar.contactEmail!}
                className="text-gray-300 hover:text-white text-sm"
              />
              <ContentfulLink
                link={topHeaderBar.contactPhoneNumber!}
                className="text-gray-300 hover:text-white text-sm"
              />
              <div className="flex items-center space-x-4">
                {topHeaderBar.socialMediaLinksCollection?.items?.map((link) => (
                  <ContentfulLink
                    key={link.sys.id}
                    link={link}
                    className="text-gray-300 hover:text-white"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Top Bar */}
          <div className="hidden lg:block">
            <div className="container mx-auto">
              <div className="flex items-center justify-end space-x-6 py-2 px-4">
                <ContentfulLink
                  link={topHeaderBar.contactEmail!}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                />
                <div className="h-4 w-px bg-gray-600" />
                <ContentfulLink
                  link={topHeaderBar.contactPhoneNumber!}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                />
                <div className="h-4 w-px bg-gray-600" />
                <div className="flex items-center space-x-4">
                  {topHeaderBar.socialMediaLinksCollection?.items?.map(
                    (link) => (
                      <ContentfulLink
                        key={link.sys.id}
                        link={link}
                        className="text-gray-300 hover:text-white transition-colors"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ContentfulNavbar navbar={navbar} />
    </div>
  );
}
