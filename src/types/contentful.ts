export interface Icon {
    title: string;
    iconName: string;
    iconPrefix: string;
}

export interface IconEntry {
    sys: {
        id: string;
    };
    fields: Icon;
    contentTypeId: 'icon';
}

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
        contentTypeId: 'icon';
    };
}

export interface LinkEntry {
    sys: {
        id: string;
    };
    fields: ContentfulLink;
    contentTypeId: 'link';
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
        contentTypeId: 'link';
    };
    contactPhoneNumber?: {
        sys: {
            id: string;
        };
        fields: ContentfulLink;
        contentTypeId: 'link';
    };
    socialMediaLinks?: Array<{
        sys: {
            id: string;
        };
        fields: ContentfulLink;
        contentTypeId: 'link';
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
        contentTypeId: 'link';
    };
}

export interface SlimFooterEntry {
    sys: {
        id: string;
    };
    fields: SlimFooter;
    contentTypeId: 'slimFooter';
}

