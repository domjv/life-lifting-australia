import { ContentfulLinkType, ContentfulTopHeaderBarType, ContentfulFatFooterType, ContentfulNavbarType, ContentfulSlimFooterType, ContentfulHeroSectionType } from '@/types/contentful';
import { graphqlClient } from './graphql';
import { GET_LINK, GET_FAT_FOOTER, GET_NAVBAR, GET_SLIM_FOOTER, GET_TOP_HEADER_BAR, GET_HERO_SECTION } from './queries';

export async function getLink(id: string): Promise<ContentfulLinkType | null> {
    try {
        const data = await graphqlClient.request<{ link: ContentfulLinkType }>(GET_LINK, { id });
        return data.link;
    } catch (error) {
        console.error('Error fetching link via GraphQL:', error);
        return null;
    }
}


export async function getTopHeaderBar(): Promise<ContentfulTopHeaderBarType | null> {
    try {
        const data = await graphqlClient.request<{ topHeaderBarCollection: { items: ContentfulTopHeaderBarType[] } }>(GET_TOP_HEADER_BAR);
        return data.topHeaderBarCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching top header bar via GraphQL:', error);
        return null;
    }
}

export async function getSlimFooter(): Promise<ContentfulSlimFooterType | null> {
    try {
        const data = await graphqlClient.request<{ slimFooterCollection: { items: ContentfulSlimFooterType[] } }>(GET_SLIM_FOOTER);
        return data.slimFooterCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching slim footer via GraphQL:', error);
        return null;
    }
}
export async function getFatFooter(): Promise<ContentfulFatFooterType | null> {
    try {
        const data = await graphqlClient.request<{ fatFooterCollection: { items: ContentfulFatFooterType[] } }>(GET_FAT_FOOTER);
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

export async function getHeroSection(): Promise<ContentfulHeroSectionType | null> {
    try {
        const data = await graphqlClient.request<{ heroSectionCollection: { items: ContentfulHeroSectionType[] } }>(GET_HERO_SECTION);
        return data.heroSectionCollection.items[0] || null;
    } catch (error) {
        console.error('Error fetching heroSection via GraphQL:', error);
        return null;
    }
}
