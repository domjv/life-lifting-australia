import { createClient, Link } from 'contentful'
import { ContentfulLinkEntry, ContentfulTopHeaderBarEntry, ContentfulSlimFooterEntry, ContentfulFatFooterEntry } from '@/types/contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export default client;

export async function getLink(id: string): Promise<ContentfulLinkEntry | null> {
    try {
        const entry = await client.getEntry<ContentfulLinkEntry>(id, {
            include: 2 // Include nested entries (icon in this case)
        });
        return {
            fields: entry.fields,
            sys: entry.sys,
            contentTypeId: 'link'
        };
    } catch (error) {
        console.error('Error fetching link:', error);
        return null;
    }
}

export async function getLinkByName(name: string): Promise<ContentfulLinkEntry | null> {
    try {
        const entries = await client.getEntries<ContentfulLinkEntry>({
            content_type: 'link',
            include: 2,
            limit: 1
        });

        const entry = entries.items[0];
        return {
            contentTypeId: 'link',
            fields: entry.fields,
            sys: entry.sys
        };
    } catch (error) {
        console.error('Error fetching link by name:', error);
        return null;
    }
}

export async function getAllLinks(): Promise<ContentfulLinkEntry[]> {
    try {
        const entries = await client.getEntries<ContentfulLinkEntry>({
            content_type: 'link',
            include: 2 // Include nested entries (icon in this case)
        });
        return entries.items.map((entry): ContentfulLinkEntry => {
            return {
                contentTypeId: 'link',
                fields: entry.fields,
                sys: entry.sys
            }
        })
    } catch (error) {
        console.error('Error fetching links:', error);
        return [];
    }
}

export async function getTopHeaderBar(): Promise<ContentfulTopHeaderBarEntry> {

    const entries = await client.getEntries<ContentfulTopHeaderBarEntry>({
        content_type: 'topHeaderBar',
        limit: 1,
        include: 3  // Include nested entries (links and their icons)
    });

    const entry = entries.items[0];
    return {
        contentTypeId: entry.sys.id,
        fields: entry.fields,
        sys: entry.sys
    };

}

export async function getSlimFooter(): Promise<ContentfulSlimFooterEntry> {
    try {
        const entries = await client.getEntries<ContentfulSlimFooterEntry>({
            content_type: 'slimFooter',
            limit: 1,
            include: 2  // Include nested entries (links and their icons)
        });

        const entry = entries.items[0];
        return {
            contentTypeId: 'slimFooter',
            fields: entry.fields,
            sys: entry.sys
        };
    } catch (error) {
        console.error('Error fetching slim footer:', error);
        throw error;
    }
}

export async function getFatFooter(): Promise<ContentfulFatFooterEntry> {
    try {
        const entries = await client.getEntries<ContentfulFatFooterEntry>({
            content_type: 'fatFooter',
            limit: 1,
            include: 3
        });

        const entry = entries.items[0];
        return {
            contentTypeId: 'fatFooter',
            fields: entry.fields,
            sys: entry.sys
        };
    } catch (error) {
        console.error('Error fetching fat footer:', error);
        throw error;
    }
}