import { siteSettings } from "@/data/site";

export default function InfoPage() {
  return (
    <div className="page shell section-gap">
      <div className="info-page">
        <section className="info-section">
          <div className="info-section__body">
            <p>Designer working across graphic, spatial, and moving image with a focus on fashion and cultural{"\u00A0"}contexts.</p>
            <p>
              The work is concerned with how visual systems organise information, image, and space into coherent environments.
              Projects tend toward structure and restraint, operating across interfaces, print, and spatial formats to form
              languages that hold across scales and{"\u00A0"}contexts.
            </p>
            <p>Currently based in Tokyo, studying at the Institute of Science Tokyo — with a particular interest in how interactive media and material environments shape experience within built{"\u00A0"}spaces.</p>
          </div>
        </section>

        <section className="info-section">
          <p className="info-section__heading">Education</p>
          <div className="info-list">
            <p>
              <span className="info-entry__label">
                Institute of Science{"\u00A0"}Tokyo
              </span>{" "}
              — <em>Academic Course Access Program,{"\u00A0"}2026–present</em>
            </p>
            <p>
              <span className="info-entry__label">
                The Architectural Association,{"\u00A0"}London
              </span>{" "}
              — <em>Visiting School, Winter{"\u00A0"}Program,{"\u00A0"}2025</em>
            </p>
            <p>
              <span className="info-entry__label">
                University of{"\u00A0"}Melbourne
              </span>{" "}
              — <em>Bachelor of Design, Graphic{"\u00A0"}Design,{"\u00A0"}2023–2026</em>
            </p>
          </div>
        </section>

        <section className="info-section">
          <p className="info-section__heading">Experience</p>
          <div className="info-list">
            <p>
              <span className="info-entry__label">Graphic Designer</span> — <em>Vava Store,{"\u00A0"}Melbourne,{"\u00A0"}2025</em>
            </p>
            <p>
              <span className="info-entry__label">Curatorial Team</span> — <em>Victorian College of the Arts Final
              Year{"\u00A0"}Exhibition,{"\u00A0"}2025</em>
            </p>
          </div>
        </section>

        <section className="info-section">
          <p className="info-section__heading">Contact</p>
          <div className="contact-block">
            <a href={`mailto:${siteSettings.email}`} className="contact-email">
              {siteSettings.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
