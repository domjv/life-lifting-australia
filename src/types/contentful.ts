export interface ContentfulIconType {
    title: string;
    iconName: string;
    iconPrefix: string;
}

export interface ContentfulIconEntry {
    sys: {
        id: string;
    };
    fields: ContentfulIconType;
    contentTypeId: 'icon';
}

export interface ContentfulLinkType {
    name: string;
    displayText: string;
    displayTextVisibility: boolean;
    hyperlink: string;
    openInNewTab: boolean;
    iconVisibility: boolean;
    icon?: ContentfulIconEntry;
}

export interface ContentfulLinkEntry {
    sys: {
        id: string;
    };
    fields: ContentfulLinkType;
    contentTypeId: 'link';
}

export interface LinkCollection {
    items: ContentfulLinkEntry[];
}

export interface ContentfulTopHeaderBarType {
    title: string;
    shouldBeDisplayed: boolean;
    stickyToTop: boolean;
    contactEmail?: ContentfulLinkEntry;
    contactPhoneNumber?: ContentfulLinkEntry;
    socialMediaLinks?: ContentfulLinkEntry[];
}

export interface ContentfulTopHeaderBarEntry {
    sys: {
        id: string;
    };
    fields: ContentfulTopHeaderBarType;
    contentTypeId: string;
}

export interface ContentfulSlimFooterType {
    title?: string;
    copyrightText?: string;
    trademarkText?: string;
    poweredByLink?: ContentfulLinkEntry;
}

export interface ContentfulSlimFooterEntry {
    sys: {
        id: string;
    };
    fields: ContentfulSlimFooterType;
    contentTypeId: 'slimFooter';
}

export interface ContentfulLinkListType {
    title: string;
    heading: string;
    listOfLinks: ContentfulLinkEntry[];
}

export interface ContentfulLinkListEntry {
    sys: {
        id: string;
    };
    fields: ContentfulLinkListType;
    contentTypeId: 'linkList';
}


export interface ContentfulFatFooterType {
    title: string;
    servicesSection: ContentfulLinkListEntry;
    aboutSection: ContentfulLinkListEntry;
    socialMediaSection: ContentfulLinkListEntry;
}

export interface ContentfulFatFooterEntry {
    sys: {
        id: string;
    };
    fields: ContentfulFatFooterType;
    contentTypeId: 'fatFooter';
}