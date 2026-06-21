export default function ProjectCard({ project, classname, featured, label }) {
  return (
    <div className={`${classname} ${featured ? "featured" : ""}`}>
      <div className={classname + "__img-wrap"}>
        <img src={project.img} alt={project.title} className={classname + "__img"} />
        {classname === "project-card" && <div className="project-img-overlay" />}
        {label && <span className="project-number">{label}</span>}
      </div>
      <div className={classname + "__body"}>
        {project.tags ? (
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tech">{tag}</span>
            ))}
          </div>
        ) : (
          project.concept && <span className={classname + "__tag"}>{project.concept}</span>
        )}

        <h3 className={classname + "__title"}>{project.title}</h3>
        <p className={classname + "__desc"}>{project.desc}</p>

        <div className={classname + "__links"}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={classname + "__link"}>
              Live ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={classname + "__link"}>
              GitHub ↗
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noopener noreferrer" className={classname + "__link"}>
              Figma ↗
            </a>
          )}
          {project.behance && (
            <a href={project.behance} target="_blank" rel="noopener noreferrer" className={classname + "__link"}>
              Behance ↗
            </a>
          )}
        </div>

        {project.meta && <p className={classname + "__meta"}>{project.meta}</p>}
      </div>
    </div>
  );
}