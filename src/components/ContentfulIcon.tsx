import { ContentfulIconEntry } from "@/types/contentful";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

interface ContentfulIconProps {
  icon: ContentfulIconEntry;
  className?: string;
}

export default function ContentfulIcon({ icon }: ContentfulIconProps) {
  const { iconName, iconPrefix } = icon.fields;

  return (
    <FontAwesomeIcon icon={[iconPrefix as IconPrefix, iconName as IconName]} />
  );
}
