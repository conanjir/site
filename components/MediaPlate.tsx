import type { MediaTone } from "@/data/site";

type Props = {
  tone: MediaTone;
  label: string;
  caption?: string;
  className?: string;
  showMeta?: boolean;
};

export function MediaPlate({ tone, label, caption, className = "", showMeta = true }: Props) {
  return (
    <figure className={`media-plate media-plate--${tone} ${className}`.trim()}>
      <div className="media-plate__surface" aria-label={label} />
      {showMeta ? (
        <figcaption className="media-plate__meta">
          <span className="caption">{label}</span>
          {caption ? <span className="caption">{caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
