export interface ContentfulSys {
    id: string;
    spaceId: string;
    environmentId: string;
}

export interface ContentfulIconType {
    title: string;
    iconName: string;
    iconPrefix: string;
    sys: ContentfulSys;
}

export interface ContentfulLinkType {
    name: string;
    displayText: string;
    displayTextVisibility: boolean;
    hyperlink: string;
    openInNewTab: boolean;
    iconVisibility: boolean;
    icon?: ContentfulIconType;
    displayAsButton: boolean;
    isDarkButton: boolean;
    sys: ContentfulSys;
}

export interface ContentfulLinkCollection {
    items: ContentfulLinkType[];
}

export interface ContentfulTopHeaderBarType {
    title: string;
    shouldBeDisplayed: boolean;
    stickyToTop: boolean;
    contactEmail?: ContentfulLinkType;
    contactPhoneNumber?: ContentfulLinkType;
    socialMediaLinksCollection?: ContentfulLinkCollection;
}


export interface ContentfulSlimFooterType {
    title?: string;
    copyrightText?: string;
    trademarkText?: string;
    poweredByLink?: ContentfulLinkType;
    sys: ContentfulSys;
}

export interface ContentfulLinkListType {
    title: string;
    heading: string;
    listOfLinksCollection: ContentfulLinkCollection;
    sys: ContentfulSys;
}


export interface ContentfulFatFooterType {
    title: string;
    servicesSection: ContentfulLinkListType;
    servicesSection2: ContentfulLinkListType;
    aboutSection: ContentfulLinkListType;
    socialMediaSection: ContentfulLinkListType;
    sys: ContentfulSys;
}

export interface ContentfulImageType {
    url: string;
    sys: ContentfulSys;
    description: string;
}

export interface ContentfulNavbarType {
    title: string;
    stickyToTop: boolean;
    logoLight: ContentfulImageType;
    logoDark: ContentfulImageType;
    logoLink: ContentfulLinkType;
    navbarItems: ContentfulLinkListType;
    specialNavbarItem: ContentfulLinkType;
    links: ContentfulLinkCollection;
    helperTextForDarkLightModeSwitch: string;
    sys: ContentfulSys;
}

export interface ContentfulHeadingAndDescriptionType {
    title: string;
    heading: string;
    headingAlignment?: string;
    headingSize?: string;
    subHeading?: string;
    description?: {
        json: {
            content: [
                {
                    value: string;
                }
            ]
        }
    };
    descriptionAlignment: string;
    descriptionFontSize: string;
    sys: ContentfulSys;
}

export interface ContentfulIconHeadingShortTextType {
    title: string;
    heading: string;
    shortText: string;
    icon?: ContentfulIconType;
    sys: ContentfulSys;
}

export interface ContentfulSectionWithImageType {
    title: string;
    sectionImage: ContentfulImageType;
    sectionImagePlacement: 'Left' | 'Right';
    headingWithTextCollection?: {
        items: ContentfulHeadingAndDescriptionType[];
    };
    iconHeadingShortTextCollection?: {
        items: ContentfulIconHeadingShortTextType[];
    };
    sys: ContentfulSys;
}

export interface ContentfulHeroSectionType {
    title: string;
    headingAndDescription: ContentfulHeadingAndDescriptionType;
    buttonsCollection: ContentfulLinkCollection;
    backgroundImage: ContentfulImageType;
    sideImage: ContentfulImageType;
    sys: ContentfulSys;
}

export interface ContentfulFrequentlyAskedQuestionType {
    title: string;
    heading: ContentfulHeadingAndDescriptionType;
    questionsCollection: {
        items: ContentfulHeadingAndDescriptionType[];
    };
    caption: string;
    sys: ContentfulSys;
}

export interface ContentfulPageReferenceType {
    title: string;
    slug: string;
    heroSection?: {
        sys: { id: string };
    };
    sectionWithImagesHeading?: {
        sys: { id: string };
    };
    sectionsWithImagesCollection?: {
        items: {
            sys: { id: string };
        }[];
    };
    miscellaneousCollection?: {
        items: {
            sys: { id: string };
        }[];
    };
    sys: ContentfulSys;
}

export interface ContentfulPageType {
    title: string;
    slug: string;
    heroSection?: ContentfulHeroSectionType;
    sectionWithImagesHeading?: ContentfulHeadingAndDescriptionType;
    sectionsWithImagesCollection?: {
        items: ContentfulSectionWithImageType[];
    };
    miscellaneousCollection?: {
        items: ContentfulFrequentlyAskedQuestionType[];
    };
    sys: ContentfulSys;
}