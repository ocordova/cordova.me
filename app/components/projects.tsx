const projects = [
  {
    name: "Berry Trail",
    href: "https://berrytrail.io",
    description:
      "A reading room for 13F filings. What 98 superinvestors hold, every quarter since 2013, as filed.",
  },
];

const Projects = () => {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-lg font-medium tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mt-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block py-2"
          >
            <span className="text-sm link-underline">{project.name}</span>
            <p className="mt-0.5 text-[0.8125rem] text-muted-foreground">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
