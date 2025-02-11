import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";

interface RichTextRendererProps {
  content: any; // This will be the rich text content from Contentful
  className?: string;
}

export default function RichTextRenderer({
  content,
  className = "",
}: RichTextRendererProps) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className="text-4xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-3xl font-bold mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-2xl font-bold mb-3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <h4 className="text-xl font-bold mb-3">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
        <h5 className="text-lg font-bold mb-2">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
        <h6 className="text-base font-bold mb-2">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="ml-4">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr className="my-8 border-gray-200 dark:border-gray-800" />
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { url, description, width, height } = node.data.target.fields;
        return (
          <div className="my-8">
            <Image
              src={url}
              alt={description || ""}
              width={width || 800}
              height={height || 600}
              className="rounded-lg"
            />
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data;
        const isInternal = uri.startsWith("/");

        if (isInternal) {
          return (
            <Link
              href={uri}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {children}
            </Link>
          );
        }

        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  if (!content) {
    return null;
  }

  return (
    <div className={`prose dark:prose-invert max-w-none ${className}`}>
      {documentToReactComponents(content, options)}
    </div>
  );
}
