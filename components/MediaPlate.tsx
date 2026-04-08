import type { MediaAsset, MediaTone } from "@/data/site";

type Props = {
  tone: MediaTone;
  label: string;
  className?: string;
  media?: MediaAsset;
};

export function MediaPlate({ tone, label, className = "", media }: Props) {
  const fit = media?.fit ?? "cover";
  const display = media?.display ?? "full";
  const surface = media?.surface ?? "tone";
  const objectPosition = media?.objectPosition ?? "center";

  return (
    <figure
      className={[
        "media-plate",
        `media-plate--${tone}`,
        `media-plate--fit-${fit}`,
        `media-plate--display-${display}`,
        `media-plate--surface-${surface}`,
        media ? `media-plate--asset-${media.kind}` : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="media-plate__surface" aria-label={!media || media.kind !== "image" ? label : undefined}>
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
            ) : media.kind === "embed" ? (
              <iframe
                className="media-plate__embed"
                src={media.src}
                title={label}
                allow="autoplay; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ aspectRatio: `${media.width} / ${media.height}` }}
              />
            ) : (
              <img
                className="media-plate__image"
                src={media.src}
                alt={label}
                width={media.width}
                height={media.height}
                style={{ objectPosition }}
              />
            )}
          </div>
        ) : null}
      </div>
    </figure>
  );
}
