import { Asset } from "contentful";

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
    aboutSection: ContentfulLinkListType;
    socialMediaSection: ContentfulLinkListType;
    sys: ContentfulSys;
}

export interface ContentfulImage {
    url: string;
    sys: ContentfulSys;
    description: string;
}

export interface ContentfulNavbarType {
    title: string;
    stickyToTop: boolean;
    logoLight: ContentfulImage;
    logoDark: ContentfulImage;
    logoLink: ContentfulLinkType;
    navbarItems: ContentfulLinkListType;
    specialNavbarItem: ContentfulLinkType;
    links: ContentfulLinkCollection;
    helperTextForDarkLightModeSwitch: string;
    sys: ContentfulSys;
}