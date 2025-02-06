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

export const RICH_TEXT = `
{
          json
          }
`

export const HEADING_AND_DESCRIPTION = `
{
${SYS}
        title
        heading
        subHeading
        description ${RICH_TEXT}
}
`