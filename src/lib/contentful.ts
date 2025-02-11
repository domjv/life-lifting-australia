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
    ContentfulSys
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
    GET_SERVICES_PAGE_BY_URL
} from './queries';


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

