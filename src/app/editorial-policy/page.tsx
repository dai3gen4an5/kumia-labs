import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";

const canonicalPath = "/editorial-policy";
const title = "Editorial Policy";
const description = "How Kumia Labs researches, ranks, and corrects its product combination guides.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPageLayout title={title}>
      <p>This page explains how Kumia Labs decides what to recommend and how that process stays separate from how the site makes money.</p>

      <h2>How recommendations are made</h2>
      <p>Recommendations are built around use case and component fit, not the highest number on a spec sheet. A guide explains why a specific combination makes sense for the person it is written for, and says directly when a smaller, cheaper, or less powerful option is the better call.</p>
      <p>Research prioritizes primary sources: manufacturer product pages, official specification sheets, and stated warranty or service terms. Third-party coverage is used to fill gaps, not as a substitute for checking the manufacturer directly.</p>

      <h2>Testing claims</h2>
      <p>Kumia Labs does not claim laboratory testing or personal hands-on testing of a product unless a guide states that testing happened. Where a guide is based on published specifications and documentation rather than physical testing, that is the default and is not hidden.</p>

      <h2>Specifications and availability change</h2>
      <p>Model availability, configurations, and prices change after a guide is published. Guides link to the current manufacturer or retailer product page so readers can check present-day details rather than relying on a number that may be stale. Where relevant, a guide notes when its information was last checked.</p>

      <h2>Affiliate relationships and rankings</h2>
      <p>Affiliate relationships do not determine which products get recommended or how they are ranked. A product is included because it fits the combination being discussed, not because of a commercial arrangement. If sponsored placements are ever used, they will be clearly labeled as sponsored.</p>

      <h2>Corrections</h2>
      <p>When a factual error is found, whether flagged by a reader or found internally, the relevant guide is corrected. Significant corrections are noted in the guide itself rather than edited away silently.</p>
    </InfoPageLayout>
  );
}
