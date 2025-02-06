import Link from "next/link";
import { ContentfulLinkEntry } from "@/types/contentful";
import ContentfulIcon from "./ContentfulIcon";

interface ContentfulLinkProps {
  link: ContentfulLinkEntry;
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
      {iconVisibility && icon && <ContentfulIcon icon={icon} />}
      {displayTextVisibility && <span>{displayText}</span>}
    </Link>
  );
}
