export interface Icon {
    title: string;
    iconName: string;
    iconPrefix: string;
}

// Type for the Contentful response
export interface IconEntry {
    sys: {
        id: string;
    };
    fields: Icon;
}

// Type for multiple icons
export interface IconCollection {
    items: IconEntry[];
}

export interface ContentfulLink {
    name: string;
    displayText: string;
    displayTextVisibility: boolean;
    hyperlink: string;
    openInNewTab: boolean;
    iconVisibility: boolean;
    icon?: {
        sys: {
            id: string;
        };
        fields: Icon;
    };
}

export interface LinkEntry {
    sys: {
        id: string;
    };
    fields: ContentfulLink;
    contentTypeId: string;
}

export interface LinkCollection {
    items: LinkEntry[];
}

export interface TopHeaderBar {
    title: string;
    shouldBeDisplayed: boolean;
    stickyToTop: boolean;
    contactEmail?: {
        sys: {
            id: string;
        };
        fields: ContentfulLink;
        contentTypeId: string;
    };
    contactPhoneNumber?: {
        sys: {
            id: string;
        };
        fields: ContentfulLink;
        contentTypeId: string;
    };
    socialMediaLinks?: Array<{
        sys: {
            id: string;
        };
        fields: ContentfulLink;
        contentTypeId: string;
    }>;
}

export interface TopHeaderBarEntry {
    sys: {
        id: string;
    };
    fields: TopHeaderBar;
    contentTypeId: string;
}

export interface SlimFooter {
    title?: string;
    copyrightText?: string;
    trademarkText?: string;
    poweredByLink?: {
        sys: {
            id: string;
        };
        fields: ContentfulLink;
        contentTypeId: string;
    };
}

export interface SlimFooterEntry {
    sys: {
        id: string;
    };
    fields: SlimFooter;
    contentTypeId: string;
}

