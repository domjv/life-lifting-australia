import { ContentfulIconHeadingShortTextType } from "@/types/contentful";
import ContentfulIcon from "./ContentfulIcon";

interface ContentfulIconHeadingShortTextProps {
  item: ContentfulIconHeadingShortTextType;
  className?: string;
}

export default function ContentfulIconHeadingShortText({
  item,
  className = "",
}: ContentfulIconHeadingShortTextProps) {
  return (
    <div className={`flex items-start space-x-3 ${className}`}>
      {item.icon && (
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-200 dark:bg-indigo-500 rounded-md w-11 h-11">
          <ContentfulIcon icon={item.icon} className="w-7 h-7" />
        </div>
      )}
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {item.heading}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {item.shortText}
        </p>
      </div>
    </div>
  );
}
