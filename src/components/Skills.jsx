import { useEffect, useRef } from "react";
import "./Skills.css";

const categories = [
  {
    title: "Frontend Technologies",
    tags: [
      { name: "React", primary: true },
      { name: "JavaScript", primary: true },
      { name: "HTML5", primary: true },
      { name: "CSS3", primary: true },
      { name: "Tailwind CSS" },
      { name: "Angular" },
      { name: "Redux" },
      { name: "React Router" },
      { name: "Next.js" },
    ],
  },
  {
    title: "Backend & Databases",
    tags: [
      { name: "Django", primary: true },
      { name: "REST APIs", primary: true },
      { name: "Python", primary: true },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "Java" },
      { name: "SQL" },
    ],
  },
  {
    title: "Design & Tools",
    tags: [
      { name: "Figma", primary: true },
      { name: "UI/UX Design", primary: true },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "Netlify" },
      { name: "Vercel" },
      { name: "Responsive Design" },
    ],
  },
];

export default function Skills() {
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
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills__inner">
        <div className="section-label reveal">Expertise</div>
        <h2 className="section-title reveal">
          My <em>technical</em>
          <br />
          toolkit
        </h2>

        <div className="skills-wrap">
          {categories.map((cat) => (
            <div key={cat.title} className="skills-category reveal">
              <div className="skills-cat-title">{cat.title}</div>
              <div className="skills-list">
                {cat.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`skill-tag ${tag.primary ? "primary" : ""}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}