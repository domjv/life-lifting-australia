import { Hero } from "@/components/Hero";
import ContentfulSectionWithImage from "@/components/ContentfulSectionWithImage";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { getPageContent } from "@/lib/contentful";

export default async function Home() {
  const page = await getPageContent("/");

  if (!page) {
    return <></>;
  }

  return (
    <>
      {page.heroSection && <Hero heroSection={page.heroSection} />}

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
