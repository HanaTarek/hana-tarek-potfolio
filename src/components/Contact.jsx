import { useEffect, useRef } from "react";
import "./Contact.css";

const links = [
  { icon: "✉", label: "hanatarek319@gmail.com", href: "mailto:hanatarek319@gmail.com" },
  { icon: "📱", label: "+20 100 260 9273", href: "tel:+201002609273" },
  { icon: "in", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/hana-tarek-2b5083204/", external: true },
  { icon: "</>", label: "GitHub Profile", href: "https://github.com/HanaTarek", external: true },
  { icon: "Be", label: "Behance Portfolio", href: "https://www.behance.net/hanatarek7", external: true },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal">
          Let's build
          <br />
          something <em>great</em>
        </h2>

        <div className="contact-inner">
          {/* ── Left: text + links ── */}
          <div className="contact-text reveal">
            <h3>Open to new opportunities</h3>
            <p>
              I'm currently looking for frontend developer roles and UI/UX
              design opportunities. If you have a project in mind or an open
              position, I'd love to hear from you.
            </p>
            <div className="contact-links">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="contact-link"
                >
                  <span className="contact-link-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: highlighted note ── */}
          <div className="contact-form-note reveal">
            <p>
              Based in Cairo, Egypt. Available for remote positions worldwide
              and open to relocation opportunities.
            </p>
            <a
              className="contact-email-big"
              href="mailto:hanatarek319@gmail.com"
            >
              hanatarek319@gmail.com
            </a>
            <a href="mailto:hanatarek319@gmail.com" className="btn-primary">
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}