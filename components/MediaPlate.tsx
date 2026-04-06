import type { MediaAsset, MediaTone } from "@/data/site";

type Props = {
  tone: MediaTone;
  label: string;
  caption?: string;
  className?: string;
  showMeta?: boolean;
  media?: MediaAsset;
};

export function MediaPlate({ tone, label, caption, className = "", showMeta = true, media }: Props) {
  const fit = media?.fit ?? "cover";
  const display = media?.display ?? "full";
  const align = media?.align ?? "center";
  const surface = media?.surface ?? "tone";
  const objectPosition = media?.objectPosition ?? "center";

  return (
    <figure
      className={[
        "media-plate",
        `media-plate--${tone}`,
        `media-plate--fit-${fit}`,
        `media-plate--display-${display}`,
        `media-plate--align-${align}`,
        `media-plate--surface-${surface}`,
        media ? `media-plate--asset-${media.kind}` : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="media-plate__surface" aria-label={!media || media.kind === "video" ? label : undefined}>
        {media ? (
          <div className="media-plate__asset">
            {media.kind === "video" ? (
              <video
                className="media-plate__video"
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                tabIndex={-1}
                aria-hidden="true"
                style={{ objectPosition, aspectRatio: `${media.width} / ${media.height}` }}
              />
            ) : (
              <img
                className="media-plate__image"
                src={media.src}
                alt={caption ? `${label}. ${caption}` : label}
                width={media.width}
                height={media.height}
                style={{ objectPosition }}
              />
            )}
          </div>
        ) : null}
      </div>
      {showMeta ? (
        <figcaption className="media-plate__meta">
          <span className="caption">{label}</span>
          {caption ? <span className="caption">{caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
