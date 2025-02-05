import { createClient, Link } from 'contentful'
import { IconEntry, IconCollection, Icon, LinkEntry, ContentfulLink, TopHeaderBarEntry, TopHeaderBar } from '@/types/contentful'

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export default client;

export async function getLink(id: string): Promise<LinkEntry | null> {
    try {
        const entry = await client.getEntry<LinkEntry>(id, {
            include: 2 // Include nested entries (icon in this case)
        });
        return {
            contentTypeId: entry.sys.id,
            fields: entry.fields,
            sys: entry.sys
        };
    } catch (error) {
        console.error('Error fetching link:', error);
        return null;
    }
}

export async function getLinkByName(name: string): Promise<LinkEntry | null> {
    try {
        const entries = await client.getEntries<LinkEntry>({
            content_type: 'link',
            include: 2,
            limit: 1
        });

        const entry = entries.items[0];
        return {
            contentTypeId: entry.sys.id,
            fields: entry.fields,
            sys: entry.sys
        };
    } catch (error) {
        console.error('Error fetching link by name:', error);
        return null;
    }
}

export async function getAllLinks(): Promise<LinkEntry[]> {
    try {
        const entries = await client.getEntries<LinkEntry>({
            content_type: 'link',
            include: 2 // Include nested entries (icon in this case)
        });
        return entries.items.map((entry): LinkEntry => {
            return {
                contentTypeId: entry.sys.id,
                fields: entry.fields,
                sys: entry.sys
            }
        })
    } catch (error) {
        console.error('Error fetching links:', error);
        return [];
    }
}

export async function getTopHeaderBar(): Promise<TopHeaderBarEntry> {

    const entries = await client.getEntries<TopHeaderBarEntry>({
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