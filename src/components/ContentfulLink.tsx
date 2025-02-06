"use client";
import Link from "next/link";
import { LinkEntry } from "@/types/contentful";
import ContentfulIcon from "./ContentfulIcon";

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
      {iconVisibility && icon && <ContentfulIcon {...icon} />}
      {displayTextVisibility && <span>{displayText}</span>}
    </Link>
  );
}
