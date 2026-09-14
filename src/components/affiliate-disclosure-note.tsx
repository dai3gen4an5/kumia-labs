import Link from "next/link";

export function AffiliateDisclosureNote() {
  return (
    <p className="affiliate-disclosure-note">
      Kumia Labs may earn a commission from purchases made through some links, at no extra cost to you.{" "}
      <Link href="/affiliate-disclosure">Read the full disclosure</Link>.
    </p>
  );
}
