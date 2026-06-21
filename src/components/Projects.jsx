import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import {projects} from "../data.js";
import ProjectCard from "./ProjectCard.jsx";


export default function Projects() {
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
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="section-label reveal">Work</div>
      <h2 className="section-title reveal">
        Selected <em>projects</em>
      </h2>

      <div className="projects-grid reveal">
        {projects.map((p) => (
          <ProjectCard 
            key={p.id}
            project={p}
            classname="project-card"
            featured={p.featured}
            label={p.label}/>
        ))}
      </div>

      <div className="projects-see-more reveal">
        <p className="projects-see-more-text">
          Also building focused React exercises and UI design work as part of
          ongoing training.
        </p>
        <Link to="/more-projects" className="btn-see-more">
          See More Details
        </Link>
      </div>
    </section>
  );
}