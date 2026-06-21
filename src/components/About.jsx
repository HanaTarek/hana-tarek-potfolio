import { useEffect, useRef } from "react";
import "./About.css";
import WORK from '../assets/mil.jpg';
import CODE from '../assets/code.jpg';

const highlights = [
  { title: "Education", value: "B.Sc. Computer Science" },
  { title: "Specialization", value: "Software Engineering" },
  { title: "University", value: "Ain Shams University" },
  { title: "Languages", value: "Arabic · English (IELTS 6.5)" },
];

export default function About() {
  const sectionRef = useRef(null);

  // Scroll-triggered reveal animation for elements with the .reveal class
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="section-label reveal">About</div>

      <h2 className="section-title reveal">
        Crafting <em>interfaces</em>
        <br />
        people love to use
      </h2>

      <div className="about-grid">
        {/* ── Image collage ── */}
        <div className="about-image-collage reveal">
          <img
            src={WORK}
            alt="Code on screen"
            className="about-img-main"
          />
          <img
            src={CODE}
            alt="UI design wireframes"
            className="about-img-accent"
          />
          <div className="about-accent-badge">
            3.8 GPA
            <span>Ain Shams University</span>
          </div>
        </div>

        {/* ── Text column ── */}
        <div className="about-text reveal">
          <h3>Building where code meets design</h3>
          <p>
            I'm a React Frontend Developer and CS graduate specialized in
            Software Engineering. I bring both technical depth and design
            sensibility to every project — from pixel-perfect UIs to scalable
            architecture.
          </p>
          <p>
            Currently working as a Teaching Assistant at GUC, I guide 30+
            students weekly through programming fundamentals, algorithms, and
            OOP, while building real-world applications on the side.
          </p>
          <p>
            My recent work spans healthcare AI, banking platforms, and event
            management systems — each built with React, Django, REST APIs,
            and a strong focus on user experience.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div key={item.title} className="about-highlight">
                <div className="about-highlight-title">{item.title}</div>
                <div className="about-highlight-val">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}