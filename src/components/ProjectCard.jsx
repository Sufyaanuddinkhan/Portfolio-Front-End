import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* Animated Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-gradient-to-br
          from-cyan-500/20
          via-blue-500/10
          to-purple-500/20
          blur-2xl
        "
      ></div>

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-60
            object-cover
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        ></div>

        {/* Floating Label */}
        <div
          className="
            absolute
            top-4
            left-4
            px-4
            py-1
            rounded-full
            bg-white/10
            backdrop-blur-lg
            border
            border-white/10
            text-white
            text-xs
            tracking-widest
            uppercase
          "
        >
          Featured Project
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Title */}
        <h3
          className="
            text-2xl
            font-bold
            text-white
            tracking-wide
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            text-gray-300
            leading-relaxed
            text-sm
          "
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.techStack.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                tracking-wide
                bg-cyan-500/10
                border
                border-cyan-400/20
                text-cyan-300
                backdrop-blur-md
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-7">
          {/* GitHub */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/10
              text-white
              hover:bg-white/20
              transition-all
              duration-300
              backdrop-blur-lg
            "
          >
            <FaGithub />
            GitHub
          </motion.a>

          {/* Live Demo */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              text-white
              font-medium
              shadow-lg
              hover:shadow-cyan-500/30
              transition-all
              duration-300
            "
          >
            <FaExternalLinkAlt className="text-sm" />
            Live Demo
          </motion.a>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          group-hover:w-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          transition-all
          duration-700
        "
      ></div>
    </motion.div>
  );
};

export default ProjectCard;
