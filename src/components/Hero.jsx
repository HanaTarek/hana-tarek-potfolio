import "./Hero.css";
import Screen from "./Screen";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "4+", label: "Projects Shipped" },
  { value: "2+", label: "Happy Clients" },
];

export default function Hero() {


  return (
    <section className="hero">
      {/* Left column */}
      <div className="hero__left">
        {/* Availability badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>Available</span>
        </div>

        {/* Headline */}
        <p className="hero__greeting">Hi there, I'm</p>
        <h1 className="hero__name">
          <span className="hero__name--pink">Hana </span>
          <span className="hero__name--dark">Tarek </span>
        </h1>
        <h2 className="hero__title">Frontend Developer</h2>

        {/* Description */}
        <p className="hero__desc">
          React frontend developer and Computer Science graduate building production web applications with React, Django, REST APIs, PostgreSQL, and Supabase — previously a Teaching Assistant at GUC, now building a volunteer platform for Dar Ahl Al Quran.
        </p>

        {/* CTAs */}
        <div className="hero__actions">
          <a href="#contact" className="hero__btn--primary">
            Let's Talk <span className="hero__btn-arrow">↗</span>
          </a>
          <a href="#projects" className="hero__btn--outline">
            My Work
          </a>
          <a href="/resume.pdf" className="hero__btn--ghost" download>
            <span className="hero__resume-icon">⬇</span> Resume
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Screen/>
    </section>
  );
}
