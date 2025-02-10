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
        <div className="w-full bg-gradient-to-r from-gray-900 to-gray-950">
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4 py-2 px-4">
              <div className="flex flex-col space-y-2.5">
                <ContentfulLink
                  link={topHeaderBar.contactEmail!}
                  className="text-gray-200 hover:text-white text-sm flex items-center group"
                ></ContentfulLink>
                <ContentfulLink
                  link={topHeaderBar.contactPhoneNumber!}
                  className="text-gray-200 hover:text-white text-sm flex items-center group"
                ></ContentfulLink>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                {topHeaderBar.socialMediaLinksCollection?.items?.map((link) => (
                  <ContentfulLink
                    key={link.sys.id}
                    link={link}
                    className="text-gray-200 hover:text-white p-1.5 bg-gray-700/50 hover:bg-gray-700 rounded-full transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="container mx-auto">
              <div className="flex items-center justify-end space-x-6 py-2 px-4">
                <ContentfulLink
                  link={topHeaderBar.contactEmail!}
                  className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
                ></ContentfulLink>
                <div className="h-4 w-px bg-gray-700" />
                <ContentfulLink
                  link={topHeaderBar.contactPhoneNumber!}
                  className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
                ></ContentfulLink>
                <div className="h-4 w-px bg-gray-700" />
                <div className="flex items-center space-x-3">
                  {topHeaderBar.socialMediaLinksCollection?.items?.map(
                    (link) => (
                      <ContentfulLink
                        key={link.sys.id}
                        link={link}
                        className="text-gray-200 hover:text-white p-1.5 bg-gray-700/50 hover:bg-gray-700 rounded-full transition-colors"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full sticky top-0 z-50">
        <ContentfulNavbar navbar={navbar} />
      </div>
    </>
  );
}
