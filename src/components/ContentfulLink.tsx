"use client";
import Link from "next/link";
import { LinkEntry } from "@/types/contentful";
import { log } from "console";
import ContentfulIcon from "./Icon";

interface ContentfulLinkProps {
  link: LinkEntry;
  className?: string;
}

export default function ContentfulLink({
  link,
  className = "",
}: ContentfulLinkProps) {
  const {
    displayText,
    displayTextVisibility,
    hyperlink,
    openInNewTab,
    iconVisibility,
    icon,
  } = link.fields;

  return (
    <Link
      href={hyperlink}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {iconVisibility && icon && (
        <ContentfulIcon fields={icon.fields} sys={icon.sys} />
      )}
      {displayTextVisibility && <span>{displayText}</span>}
    </Link>
  );
}
