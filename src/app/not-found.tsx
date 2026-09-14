import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Kumia Labs",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-kumia">
          <Image src="/images/kumia-intro-pointing-transparent.png" alt="" width={300} height={376} priority />
        </div>
        <h1>Looks like these pieces don’t fit.</h1>
        <p>The page you’re looking for could not be found. It may have moved, or the link may be out of date.</p>
        <Link className="not-found-cta" href="/">Back to Kumia Labs <span aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}
