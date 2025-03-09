export const SYS = `
sys {
  id
  spaceId
  environmentId
}`;

export const ICON = `
{
${SYS}
  title
  iconName
  iconPrefix
}
`;

export const LINK = `
{
${SYS}
  name
  displayText
  displayTextVisibility
  hyperlink
  openInNewTab
  iconVisibility
  displayAsButton
  isDarkButton
  icon ${ICON}
}
`;

export const LINK_LIST = `
{
${SYS}
    heading
    listOfLinksCollection {
      items ${LINK}
      
    }

}
`;
export const IMAGE = `
{
${SYS}
    url
    description
}
`;
export const HEADING_AND_DESCRIPTION = `
{
        sys {
          id
          spaceId
          environmentId
        }
        title
        heading
        subHeading
        description {
             json
            }
      }
`

export const ICON_HEADING_SHORT_TEXT = `
{
${SYS}
    title
    heading
    shortText
    icon ${ICON}
}
`;

export const SECTION_WITH_IMAGE = `
{
${SYS}
    title
    sectionImage ${IMAGE}
    sectionImagePlacement
    headingWithTextCollection {
        items ${HEADING_AND_DESCRIPTION}
    }
    iconHeadingShortTextCollection {
        items ${ICON_HEADING_SHORT_TEXT}
    }
}
`;


export const HERO_SECTION = `
{
${SYS}
      title
      sideImage ${IMAGE}
      headingAndDescription ${HEADING_AND_DESCRIPTION}
        backgroundImage ${IMAGE}
      buttonsCollection {
        items ${LINK}
      }
    
  }
`;

export const TESTIMONIAL = `
{
${SYS}
  title
  personImage ${IMAGE}
  personName
  personDesignation
  testimonialQuote
}
`;

export const PAGE_WITH_REFERENCES = `
{
${SYS}
    title
    slug
    heroSection {
      sys { id }
    }
    sectionWithImagesHeading {
      sys { id }
    }
    sectionsWithImagesCollection {
      items {
        sys { id }
      }
    }
    miscellaneousCollection {
      items {
        sys { id }
      }
    }
    testimonialsCollection {
      items ${TESTIMONIAL}
    }
}
`;