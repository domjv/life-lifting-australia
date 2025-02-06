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
        <div className="bg-gray-800 text-white text-center py-2 flex gap-2 justify-end pe-3">
          <ContentfulLink link={topHeaderBar.contactEmail!} />
          <ContentfulLink link={topHeaderBar.contactPhoneNumber!} />
          {topHeaderBar.socialMediaLinksCollection?.items?.map((link) => (
            <ContentfulLink key={link.sys.id} link={link} />
          ))}
        </div>
      )}
      <ContentfulNavbar navbar={navbar} />
    </div>
  );
}
