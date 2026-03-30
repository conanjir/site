import { MediaPlate } from "@/components/MediaPlate";
import { fragments } from "@/data/site";

export default function FragmentsPage() {
  return (
    <div className="page shell section-gap">
      <div className="fragments-masonry">
        {fragments.map((fragment) => (
          <article key={fragment.slug} className="fragment-tile">
            <MediaPlate
              tone={fragment.tone}
              label={fragment.title}
              className={`fragment-tile__media fragment-tile__media--${fragment.aspect}`}
              showMeta={false}
            />
            <h2>{fragment.title}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
