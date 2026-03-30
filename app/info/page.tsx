import { siteSettings } from "@/data/site";

export default function InfoPage() {
  return (
    <div className="page shell shell--text-page section-gap">
      <div className="text-page">
        <div className="rich-text">
          <p>{siteSettings.statement}</p>
          <p>{siteSettings.infoText}</p>
          <p>
            The portfolio is structured as a restrained digital editorial environment. Projects are positioned as systems rather than isolated outputs, with emphasis on hierarchy, temporal sensitivity, spatial deployment and measured sonic integration.
          </p>
        </div>
        <div aria-hidden="true" />
      </div>
    </div>
  );
}
