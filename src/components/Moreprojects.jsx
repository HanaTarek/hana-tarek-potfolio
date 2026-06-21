import { Link } from "react-router-dom";
import "./MoreProjects.css";
import ProjectCard from "./ProjectCard";
import {reactExercises , figmaDesigns } from '../data.js';

export default function MoreProjects() {
  return (
    <div className="more-projects">
      <div className="more-projects__inner">
        <Link to="/" className="more-projects__back">
          ← Back to portfolio
        </Link>

        <div className="section-label">Hands-On Practice</div>
        <h1 className="section-title">
          React Exercises &amp; <em>Figma</em> Explorations
        </h1>

        <div className="course-banner">
          <span className="course-banner__icon">🎓</span>
          <p>
            These are small, focused React projects built to practice
            specific concepts and hooks — not full products. They're part of
            my ongoing training in{" "}
            <strong>"React – The Complete Guide (incl. Next.js, Redux)"</strong>{" "}
            on Udemy, alongside UI/UX work from{" "}
            <strong>"UI/UX Web Design in Figma 2026."</strong> Each card below
            targets one concept I wanted to understand deeply.
          </p>
        </div>

        {/* ── React exercises ── */}
        <p className="more-projects__group-title">React Concept Exercises</p>
        <div className="more-projects__grid">
          {reactExercises.map((proj) => (
            <ProjectCard project ={proj} key={proj.title} classname="mini-card"/>

             ))}
        </div>

        {/* ── Figma designs ── */}
        <p className="more-projects__group-title">Figma Design Work</p>
        <div className="figma-grid">
          {figmaDesigns.map((design) => (
            <ProjectCard key={design.title} project={design} classname="figma-card" />
          ))}
        </div>
      </div>
    </div>
  );
}