import { Hero } from "@/components/Hero";
import ContentfulSectionWithImage from "@/components/ContentfulSectionWithImage";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { getPageContent } from "@/lib/contentful";
import RichTextRenderer from "@/components/RichTextRenderer";
import FeatureCards from "@/components/FeatureCards";

export default async function Home() {
  const page = await getPageContent("/");

  if (!page) {
    return <></>;
  }

  // Extract features from the description content
  const features =
    page.sectionWithImagesHeading?.description?.json.content
      .filter(
        (content: any) =>
          content.nodeType === "paragraph" && content.content?.[0]?.value
      )
      .map((content: any) => {
        const text = content.content[0].value;
        const [title, subtitle] = text
          .split("–")
          .map((str: string) => str.trim());
        return {
          title,
          subtitle,
        };
      }) || [];

  return (
    <>
      {page.heroSection && <Hero heroSection={page.heroSection} />}
      <Container>
        <SectionTitle
          title={page.sectionWithImagesHeading?.heading}
        ></SectionTitle>
        {features.length > 0 && <FeatureCards features={features} />}
      </Container>
      <Container>
        {page.sectionsWithImagesCollection?.items.map((section) => (
          <ContentfulSectionWithImage key={section.title} section={section} />
        ))}

        {page.miscellaneousCollection?.items.map((item) => {
          if ("questionsCollection" in item) {
            return (
              <div key={item.sys.id}>
                <SectionTitle
                  preTitle={item.caption}
                  title={item.heading.heading}
                >
                  {item.heading.subHeading}
                </SectionTitle>
                <Faq questions={item.questionsCollection.items} />
              </div>
            );
          }
          return null;
        })}
      </Container>
    </>
  );
}
