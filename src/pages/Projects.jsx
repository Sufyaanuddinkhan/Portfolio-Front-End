import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_URL}/projects`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div variants={headingVariants} className="mb-16 text-center">
          <h2 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A collection of things I've built
          </p>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-300">
            {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-gray-400">No projects to show yet.</p>
        )}

        {/* Project grid */}
        {!loading && !error && projects.length > 0 && (
          <motion.div
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id || project.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/50"
              >
                {/* Image */}
                {project.image && (
                  <div className="mb-5 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech stack */}
                {project.tech?.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-purple-400 transition-colors hover:text-purple-300"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
