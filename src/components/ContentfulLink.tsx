import Link from "next/link";
import { ContentfulLinkType } from "@/types/contentful";
import ContentfulIcon from "./ContentfulIcon";

interface ContentfulLinkProps {
  link: ContentfulLinkType;
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
    displayAsButton,
    isDarkButton,
  } = link;

  return (
    <Link
      href={hyperlink}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 ${className} ${
        displayAsButton &&
        (isDarkButton
          ? "bg-indigo-600 px-8 py-4 text-lg font-medium text-center text-white rounded-lg"
          : "px-8 py-4 text-lg font-medium text-center text-white rounded-lg")
      }`}
    >
      {iconVisibility && icon && <ContentfulIcon icon={icon} />}
      {displayTextVisibility && <span>{displayText}</span>}
    </Link>
  );
}
