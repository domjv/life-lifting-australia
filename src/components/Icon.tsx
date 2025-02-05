import { Icon, IconEntry } from "@/types/contentful";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all solid icons to the library
library.add(fas);
library.add(fab);

export const ContentfulIcon: React.FC<IconEntry> = ({ fields }) => {
  const { iconName, iconPrefix } = fields;

  if (!iconName) {
    return null;
  }

  return (
    <FontAwesomeIcon
      icon={[fields.iconPrefix as IconPrefix, fields.iconName as IconName]}
    />
  );
};

export const transformContentfulIcon = (entry: any): Icon => {
  return {
    title: entry.fields.title,
    iconName: entry.fields.iconName,
    iconPrefix: entry.fields.iconPrefix,
  };
};

export default ContentfulIcon;
