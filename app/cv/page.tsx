export default function CvPage() {
  return (
    <div className="page shell section-gap">
      <div className="archive-head">
        <p className="eyebrow">CV / Experience</p>
        <h1>Selected roles, collaborations and capabilities.</h1>
      </div>
      <div className="cv-grid">
        <div className="cv-section">
          <p className="eyebrow">Experience</p>
          <div className="cv-entry">
            <h2>Independent Designer</h2>
            <p className="caption">2022 - Present</p>
            <p>Digital, spatial and identity systems for fashion, retail and cultural clients.</p>
          </div>
          <div className="cv-entry">
            <h2>Design Direction Collaborations</h2>
            <p className="caption">2020 - 2022</p>
            <p>Motion, sonic and environmental design support across exhibitions, campaigns and installations.</p>
          </div>
        </div>
        <div className="cv-section">
          <p className="eyebrow">Capabilities</p>
          <div className="cv-entry">
            <h2>Systems</h2>
            <p>Identity, art direction, interface systems, grid design and information hierarchy.</p>
          </div>
          <div className="cv-entry">
            <h2>Media</h2>
            <p>Moving image direction, sonic integration, environmental graphics and digital deployment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
