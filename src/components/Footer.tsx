import React from "react";
import { Container } from "@/components/Container";
import {
  ContentfulFatFooterEntry,
  ContentfulSlimFooterEntry,
} from "@/types/contentful";
import ContentfulSlimFooter from "./ContentfulSlimFooter";
import ContentfulFatFooter from "./ContentfulFatFooter";

export function Footer({
  slimFooter,
  fatFooter,
}: {
  slimFooter: ContentfulSlimFooterEntry;
  fatFooter: ContentfulFatFooterEntry;
}) {
  return (
    <div className="relative">
      <Container>
        <ContentfulFatFooter footer={fatFooter} />
        <ContentfulSlimFooter footer={slimFooter} />
      </Container>
    </div>
  );
}
