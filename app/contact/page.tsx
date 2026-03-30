import { siteSettings } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="page shell shell--text-page section-gap">
      <div className="text-page">
        <div className="contact-block">
          <a href={`mailto:${siteSettings.email}`} className="contact-email">
            {siteSettings.email}
          </a>
          <div className="contact-links">
            {siteSettings.socials.map((social) => (
              <a key={social.label} href={social.href} className="text-link">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div aria-hidden="true" />
      </div>
    </div>
  );
}
