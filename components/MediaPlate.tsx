import type { MediaTone } from "@/data/site";

type Props = {
  tone: MediaTone;
  label: string;
  caption?: string;
  className?: string;
  showMeta?: boolean;
  videoSrc?: string;
};

export function MediaPlate({ tone, label, caption, className = "", showMeta = true, videoSrc }: Props) {
  return (
    <figure className={`media-plate media-plate--${tone} ${videoSrc ? "media-plate--video" : ""} ${className}`.trim()}>
      <div className="media-plate__surface" aria-label={label}>
        {videoSrc ? (
          <video
            className="media-plate__video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
          />
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
