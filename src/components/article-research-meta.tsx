type ArticleResearchMetaProps = {
  left: string;
  right: string;
  publishedAt: string;
  updatedAt: string;
};

const formatDisplayDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

export function ArticleResearchMeta({ left, right, publishedAt, updatedAt }: ArticleResearchMetaProps) {
  return (
    <section className="article-research-meta" aria-labelledby="researched-combination-title">
      <p id="researched-combination-title" className="article-research-meta__label">Researched combination</p>
      <div className="article-research-meta__combination">
        <strong>{left}</strong>
        <span aria-hidden="true">×</span>
        <strong>{right}</strong>
      </div>
      <dl className="article-research-meta__dates">
        <div><dt>Published</dt><dd><time dateTime={publishedAt}>{formatDisplayDate(publishedAt)}</time></dd></div>
        <div><dt>Last updated</dt><dd><time dateTime={updatedAt}>{formatDisplayDate(updatedAt)}</time></dd></div>
      </dl>
    </section>
  );
}
