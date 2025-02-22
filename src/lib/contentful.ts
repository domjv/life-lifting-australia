import {
    ContentfulFatFooterType,
    ContentfulFrequentlyAskedQuestionType,
    ContentfulHeadingAndDescriptionType,
    ContentfulHeroSectionType,
    ContentfulNavbarType,
    ContentfulPageReferenceType,
    ContentfulPageType,
    ContentfulSectionWithImageType,
    ContentfulSlimFooterType,
    ContentfulTopHeaderBarType,
    ContentfulPageServicesType,
    ContentfulImageType,
    ContentfulSys,
    ContentfulLinkListType,
    ContentfulPageAboutUsType,
    ContentfulPageEventGalleryType,
    ContentfulPageContactUsType
} from '@/types/contentful';
import { graphqlClient } from './graphql';
import {
    GET_FAQ,
    GET_FAT_FOOTER,
    GET_HEADING_AND_DESCRIPTION,
    GET_HERO_SECTION,
    GET_NAVBAR,
    GET_PAGE_BY_URL,
    GET_SECTION_WITH_IMAGE,
    GET_SLIM_FOOTER,
    GET_TOP_HEADER_BAR,
    GET_SERVICES_PAGE_BY_URL,
    GET_ALL_SERVICE_PAGES,
    GET_LINK_LIST_BY_TITLE,
    GET_ABOUT_US_PAGE,
    GET_EVENT_GALLERY_PAGE,
    GET_CONTACT_US_PAGE,
    GET_IFRAME_PAGE
} from './queries';
import { headers } from 'next/headers';
import { gql } from 'graphql-request';

export async function getTopHeaderBar(): Promise<ContentfulTopHeaderBarType | null> {
    try {
        const data = await graphqlClient.request<{
            topHeaderBarCollection: { items: ContentfulTopHeaderBarType[] }
        }>(GET_TOP_HEADER_BAR);
        return data.topHeaderBarCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching top header bar via GraphQL:', error);
        return null;
    }
}

export async function getSlimFooter(): Promise<ContentfulSlimFooterType | null> {
    try {
        const data = await graphqlClient.request<{
            slimFooterCollection: { items: ContentfulSlimFooterType[] }
        }>(GET_SLIM_FOOTER);
        return data.slimFooterCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching slim footer via GraphQL:', error);
        return null;
    }
}

export async function getFatFooter(): Promise<ContentfulFatFooterType | null> {
    try {
        const data = await graphqlClient.request<{
            fatFooterCollection: { items: ContentfulFatFooterType[] }
        }>(GET_FAT_FOOTER);
        return data.fatFooterCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching fat footer via GraphQL:', error);
        return null;
    }
}

export async function getNavbar(): Promise<ContentfulNavbarType | null> {
    try {
        const data = await graphqlClient.request<{ navbarCollection: { items: ContentfulNavbarType[] } }>(GET_NAVBAR);
        return data.navbarCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching navbar via GraphQL:', error);
        return null;
    }
}


export async function getPageContent(slug: string) {
    try {
        const page = await graphqlClient.request<{ pageCollection: { items: ContentfulPageReferenceType[] } }>(
            GET_PAGE_BY_URL,
            { slug }
        );

        const pageData = page.pageCollection.items[0];
        if (!pageData) return null;

        const heroSection = pageData.heroSection
            ? await graphqlClient.request<{
                heroSection: ContentfulHeroSectionType
            }>(GET_HERO_SECTION, { id: pageData.heroSection.sys.id })
                .then(data => data.heroSection)
            : null;

        const sectionWithImagesHeading = pageData.sectionWithImagesHeading
            ? await graphqlClient.request<{
                headingAndDescription: ContentfulHeadingAndDescriptionType
            }>(GET_HEADING_AND_DESCRIPTION, { id: pageData.sectionWithImagesHeading.sys.id })
                .then(data => data.headingAndDescription)
            : null;

        const sectionsWithImages = pageData.sectionsWithImagesCollection?.items.length
            ? await Promise.all(
                pageData.sectionsWithImagesCollection.items.map(async (item: any) =>
                    graphqlClient
                        .request<{
                            sectionWithImage: ContentfulSectionWithImageType
                        }>(GET_SECTION_WITH_IMAGE, { id: item.sys.id })
                        .then(data => data.sectionWithImage)
                )
            )
            : [];

        const miscellaneous = pageData.miscellaneousCollection?.items.length
            ? await Promise.all(
                pageData.miscellaneousCollection?.items.map(async (item: any) =>
                    graphqlClient
                        .request<{
                            frequentlyAskedQuestions: ContentfulFrequentlyAskedQuestionType
                        }>(GET_FAQ, { id: item.sys.id })
                        .then(data => data.frequentlyAskedQuestions)
                )
            )
            : [];

        const pageContent: ContentfulPageType = {
            sys: page.pageCollection.items[0].sys,
            title: page.pageCollection.items[0].title,
            slug: page.pageCollection.items[0].slug,
            heroSection: heroSection!,
            miscellaneousCollection: { items: miscellaneous! },
            sectionsWithImagesCollection: {
                items: sectionsWithImages,
            },
            sectionWithImagesHeading: sectionWithImagesHeading!
        }

        return pageContent;
    } catch (error) {
        console.error('Error fetching page content:', error);
        return null;
    }
}

export async function getServicesPageContent(slug: string): Promise<ContentfulPageServicesType | null> {
    try {
        const page = await graphqlClient.request<{
            pageServicesCollection: {
                items: Array<{
                    sys: ContentfulSys;
                    title: string;
                    slug: string;
                    backgroundImage?: ContentfulImageType;
                    contentOfThePage?: { sys: { id: string } };
                }>
            }
        }>(GET_SERVICES_PAGE_BY_URL, { slug });

        const pageData = page.pageServicesCollection.items[0];
        if (!pageData) return null;

        const contentOfThePage = pageData.contentOfThePage
            ? await graphqlClient.request<{
                headingAndDescription: ContentfulHeadingAndDescriptionType
            }>(GET_HEADING_AND_DESCRIPTION, { id: pageData.contentOfThePage.sys.id })
                .then(data => data.headingAndDescription)
            : null;

        const pageContent: ContentfulPageServicesType = {
            sys: pageData.sys,
            title: pageData.title,
            slug: pageData.slug,
            backgroundImage: pageData.backgroundImage,
            contentOfThePage: contentOfThePage || undefined
        };

        return pageContent;
    } catch (error) {
        console.error('Error fetching services page content:', error);
        return null;
    }
}

export async function getLinkListByTitle(title: string) {
    try {
        const data = await graphqlClient.request<{
            linkListCollection: {
                items: ContentfulLinkListType[]
            }
        }>(GET_LINK_LIST_BY_TITLE, { title });

        return data.linkListCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching link list by title:', error);
        return null;
    }
}

export async function getAllServicePages() {
    try {
        const data = await graphqlClient.request<{
            pageServicesCollection: {
                items: Array<{ slug: string }>
            }
        }>(GET_ALL_SERVICE_PAGES);

        return data.pageServicesCollection.items;
    } catch (error) {
        console.error('Error fetching all service pages:', error);
        return [];
    }
}

export async function getAboutUsPageContent(): Promise<ContentfulPageAboutUsType | null> {
    try {
        const page = await graphqlClient.request<{
            pageAboutUsCollection: {
                items: ContentfulPageAboutUsType[]
            }
        }>(GET_ABOUT_US_PAGE);


        const pageData = page.pageAboutUsCollection.items[0];
        if (!pageData) return null;

        const contentOfThePage = pageData.content
            ? await graphqlClient.request<{
                headingAndDescription: ContentfulHeadingAndDescriptionType
            }>(GET_HEADING_AND_DESCRIPTION, { id: pageData.content.sys.id })
                .then(data => data.headingAndDescription)
            : null;

        const pageContent: ContentfulPageAboutUsType = {
            sys: pageData.sys,
            title: pageData.title,
            backgroundImage: pageData.backgroundImage,
            content: contentOfThePage || undefined
        };

        return pageContent;
    } catch (error) {
        console.error('Error fetching about us page content:', error);
        return null;
    }
}

export async function getEventGalleryContent(): Promise<ContentfulPageEventGalleryType | null> {
    try {
        const page = await graphqlClient.request<{
            pageEventGalleryCollection: {
                items: Array<{
                    sys: ContentfulSys;
                    title: string;
                    slug: string;
                    heading: string;
                    backgroundImage?: ContentfulImageType;
                    imagesCollection?: {
                        items: ContentfulImageType[];
                    };
                }>;
            };
        }>(GET_EVENT_GALLERY_PAGE);

        const pageData = page.pageEventGalleryCollection.items[0];
        if (!pageData) return null;

        return {
            sys: pageData.sys,
            title: pageData.title,
            slug: pageData.slug,
            heading: pageData.heading,
            backgroundImage: pageData.backgroundImage,
            images: pageData.imagesCollection?.items
        };
    } catch (error) {
        console.error('Error fetching event gallery content:', error);
        return null;
    }
}

export async function getContactUsContent(): Promise<ContentfulPageContactUsType | null> {
    try {
        const page = await graphqlClient.request<{
            pageContactUsCollection: {
                items: Array<{
                    sys: ContentfulSys;
                    title: string;
                    slug: string;
                    heading: string;
                    backgroundImage?: ContentfulImageType;
                    iFrameUrl: string;
                }>;
            };
        }>(GET_CONTACT_US_PAGE);

        const pageData = page.pageContactUsCollection.items[0];
        if (!pageData) return null;

        return {
            sys: pageData.sys,
            title: pageData.title,
            slug: pageData.slug,
            heading: pageData.heading,
            backgroundImage: pageData.backgroundImage,
            iFrameUrl: pageData.iFrameUrl
        };
    } catch (error) {
        console.error('Error fetching contact us page content:', error);
        return null;
    }
}

export async function getAllIframePages() {
    try {
        const data = await graphqlClient.request<{
            pageContactUsCollection: {
                items: Array<{ slug: string }>;
            };
        }>(
            gql`
                query GetAllIframePages {
                    pageContactUsCollection {
                        items {
                            slug
                        }
                    }
                }
            `
        );

        return data.pageContactUsCollection.items;
    } catch (error) {
        console.error('Error fetching all iframe pages:', error);
        return [];
    }
}

export async function getIframePageContent(slug: string): Promise<ContentfulPageContactUsType | null> {
    try {
        const page = await graphqlClient.request<{
            pageContactUsCollection: {
                items: Array<{
                    sys: ContentfulSys;
                    title: string;
                    slug: string;
                    heading: string;
                    backgroundImage?: ContentfulImageType;
                    iFrameUrl: string;
                }>;
            };
        }>(GET_IFRAME_PAGE, { slug });

        const pageData = page.pageContactUsCollection.items[0];
        if (!pageData) return null;

        return {
            sys: pageData.sys,
            title: pageData.title,
            slug: pageData.slug,
            heading: pageData.heading,
            backgroundImage: pageData.backgroundImage,
            iFrameUrl: pageData.iFrameUrl
        };
    } catch (error) {
        console.error('Error fetching iframe page content:', error);
        return null;
    }
}

