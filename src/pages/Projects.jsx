import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#dbeafe] py-16 px-6">
      <div className="max-w-9xl mx-auto">
        <h1 className="text-3xl  text-center font-bold text-[#1C1917] mb-8">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#1C1917]">
                  {project.title}
                </h2>
                <p className="text-[#6B7280] mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#FAF7F2] text-[#D97706] px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D97706] hover:text-[#B45309]"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLinkf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D97706] hover:text-[#B45309]"
                  >
                    GitHub Front-End
                  </a>
                  <a
                    href={project.githubLinkb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D97706] hover:text-[#B45309]"
                  >
                    GitHub Back-End
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
