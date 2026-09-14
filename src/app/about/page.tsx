import type { Metadata } from "next";
import { InfoPageLayout } from "@/components/info-page-layout";

const canonicalPath = "/about";
const title = "About Kumia Labs";
const description = "Kumia Labs researches how products work together and explains the reasoning behind complete setups.";

export const metadata: Metadata = {
  title: `${title} | Kumia Labs`,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: { title, description, url: canonicalPath },
};

export default function AboutPage() {
  return (
    <InfoPageLayout title={title} crumb="About">
      <p>Kumia Labs helps people choose product combinations that make sense together: a drill and the battery platform behind it, a CPU and the graphics card it actually needs, a band and the watch case it locks into.</p>
      <p>Most buying guides rank individual products by spec sheet. Kumia Labs starts from a different question: does this combination hold up for how you actually plan to use it? A part that wins on paper can still be the wrong fit once it sits next to everything else in the setup.</p>

      <h2>Where the name comes from</h2>
      <p>Kumia comes from <strong>kumiawase</strong>, the Japanese word for combination. It is also the name of the character who appears throughout the site as its researcher and guide.</p>

      <h2>How guides are built</h2>
      <p>Each guide explains the reasoning behind a complete setup, not just a single product pick. That means naming the trade-offs, saying when a cheaper or smaller option is the better call, and pointing out where two options are close enough that the difference comes down to preference.</p>
      <p>Recommendations are based on manufacturer documentation, published specifications, and how components fit together in practice. Kumia Labs does not claim to have physically tested a product unless a guide says so directly.</p>

      <h2>Current focus</h2>
      <p>Coverage currently centers on consumer technology: desktop PCs, gaming hardware, wearables, and the buying decisions that surround them. The scope will grow, but each new category gets the same standard: explain the combination, not just the components.</p>
    </InfoPageLayout>
  );
}
