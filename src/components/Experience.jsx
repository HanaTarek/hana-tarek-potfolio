import { useEffect, useRef } from "react";
import "./Experience.css";
import Logo from "./Logo";

const timeline = [
  {
    date: "Sep 2024 — Feb 2026",
    role: "Teaching Assistant",
    org: "German University in Cairo (GUC)",
    logo: "/guc.png",
    bullets: [
      "Delivered weekly programming tutorials and lab sessions to 30+ CS students",
      "Guided students in Java, Python, debugging, algorithms, and OOP",
    ],
  },
{
  date: "Sep 2025 — Oct 2025",
  role: "Frontend Developer — DEBI Initiative",
  org: "Digital Egypt Builders Initiative — in partnership with National Bank of Egypt",
  logo: "/nbe.jpeg",
  bullets: [
    "Built React frontend for MentorHub, a national mentorship platform developed for the National Bank of Egypt",
    "Integrated with Django backend via RESTful APIs",
  ],
},
  {
    date: "Oct 2024 — Sep 2025",
    role: "Web Development Trainee",
    org: "Digital Egypt Builders Initiative (DEBI)",
    logo: "/debi.png",
    link: "https://debi.gov.eg",
    bullets: [
      "Intensive full-stack program: frontend, backend, REST APIs, databases",
      "Built production projects including NBE collaboration",
    ],
  },
  {
    date: "Sep 2020 — Jul 2024",
    role: "B.Sc. Computer Science",
    org: "Ain Shams University — GPA 3.8",
    logo: "/ains.jpg",
    bullets: [
      "Specialized in Software Engineering",
      "Graduation project: CareGiver AI healthcare assistant",
    ],
  },
];

const certifications = [
  { badge: "R", title: "React — The Complete Guide (incl. Next.js, Redux)", org: "Udemy · Feb 2026 — Present", logo: "/logos/udemy.png" },
  { badge: "F", title: "UI/UX Web Design in Figma 2026 | AI & Big Projects", org: "Udemy · Mar — Apr 2026", logo: "/logos/udemy.png" },
  { badge: "D", title: "Digital Egypt Builders Initiative", org: "Full-stack Web Development · Oct 2024 — Sep 2025", logo: "/logos/debi.png" },
];

const award = {
  logo: "/dell.png",
  title: "3rd Place — Dell AI Empower Egypt Hackathon",
  text: "Competed nationally in a food waste management AI hackathon. Designed and built an AI-powered prototype in just 5 hours demonstrating rapid prototyping and teamwork. — Aug 2024",
};

export default function Experience() {
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
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="experience__inner">
        <div className="section-label reveal">Background</div>
        <h2 className="section-title reveal">
          Experience &amp;
          <br />
          <em>Education</em>
        </h2>

        <div className="exp-grid">
          {/* ── Left: Timeline ── */}
          <div>
            <div className="exp-timeline reveal">
              {timeline.map((item) => (
                <div key={item.role} className="exp-item">
                  <div className="exp-head">
                    <Logo
                      src={item.logo}
                      alt={`${item.org} logo`}
                      fallback={item.org.charAt(0)}
                      className="exp-logo"
                    />
                    <div className="exp-head-text">
                      <div className="exp-date">{item.date}</div>
                      <div className="exp-role">{item.role}</div>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-org exp-org-link"
                        >
                          {item.org}
                        </a>
                      ) : (
                        <div className="exp-org">{item.org}</div>
                      )}
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Certifications + Award ── */}
          <div className="reveal">
            <p className="exp-side-label">Certifications</p>
            <div className="cert-list">
              {certifications.map((cert) => (
                <div key={cert.title} className="cert-item">
                  <Logo src={cert.logo} alt={cert.title} fallback={cert.badge} className="cert-badge" />
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-org">{cert.org}</div>
                </div>
              ))}
            </div>

            <div className="award-banner">
              <span className="award-icon">🏆</span>
              <div className="award-text">
                <div className="award-heading">
                  <Logo src={award.logo} alt="Dell logo" fallback="D" className="award-logo" />
                  <h3>{award.title}</h3>
                </div>
                <p>{award.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}