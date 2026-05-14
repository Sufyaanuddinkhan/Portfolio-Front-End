import { motion } from "framer-motion";
import {
  Code,
  Database,
  GitBranch,
  Users,
  MessageCircle,
  Zap,
} from "lucide-react";

const Skills = () => {
  // Technical Skills
  const technicalSkills = [
    {
      id: 1,
      name: "HTML5",
      icon: <Code className="w-6 h-6 text-orange-400" />,
      level: 90,
    },
    {
      id: 2,
      name: "CSS3",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      level: 85,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      level: 80,
    },
    {
      id: 4,
      name: "React.js",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      level: 88,
    },
    {
      id: 5,
      name: "Node.js",
      icon: <Database className="w-6 h-6 text-green-400" />,
      level: 82,
    },
    {
      id: 6,
      name: "Express.js",
      icon: <Database className="w-6 h-6 text-gray-300" />,
      level: 78,
    },
    {
      id: 7,
      name: "MongoDB",
      icon: <Database className="w-6 h-6 text-green-500" />,
      level: 84,
    },
    {
      id: 8,
      name: "Git & GitHub",
      icon: <GitBranch className="w-6 h-6 text-red-400" />,
      level: 86,
    },
    {
      id: 9,
      name: "Python",
      icon: <Code className="w-6 h-6 text-yellow-500" />,
      level: 75,
    }
  ];

  // Soft Skills
  const softSkills = [
    {
      id: 1,
      name: "Problem Solving",
      description:
        "Able to analyze complex problems and build effective technical solutions.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      id: 2,
      name: "Teamwork",
      description:
        "Collaborates efficiently within teams to achieve impactful results.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      id: 3,
      name: "Communication",
      description:
        "Clear communication for technical discussions and collaborative work.",
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
    },
    {
      id: 4,
      name: "Adaptability",
      description:
        "Quickly adapts to modern technologies, tools, and environments.",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020617]
        px-6
        py-32
      "
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-24"
        >
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-sm
              font-medium
            "
          >
            Expertise & Capabilities
          </p>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-black
              text-white
            "
          >
            My
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              Skills
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-lg
              text-gray-400
              leading-relaxed
            "
          >
            A blend of technical expertise, problem-solving, and modern
            development skills focused on creating scalable and immersive
            digital experiences.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-28">
          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              text-3xl
              font-bold
              text-white
              text-center
              mb-14
            "
          >
            Technical Skills
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-8
            "
          >
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-7
                  shadow-[0_10px_50px_rgba(0,0,0,0.45)]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    bg-gradient-to-br
                    from-cyan-500/10
                    via-blue-500/5
                    to-purple-500/10
                  "
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-white/5
                      border
                      border-white/10
                      backdrop-blur-lg
                    "
                  >
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <div className="flex justify-between items-center mt-6">
                    <h4
                      className="
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {skill.name}
                    </h4>

                    <span className="text-cyan-300 text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className="
                      mt-5
                      w-full
                      h-3
                      rounded-full
                      bg-white/10
                      overflow-hidden
                    "
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        via-blue-500
                        to-purple-500
                      "
                    ></motion.div>
                  </div>
                </div>

                {/* Bottom Accent */}
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
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              text-3xl
              font-bold
              text-white
              text-center
              mb-14
            "
          >
            Soft Skills
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-8
            "
          >
            {softSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  text-center
                  shadow-[0_10px_50px_rgba(0,0,0,0.45)]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    bg-gradient-to-br
                    from-cyan-500/10
                    via-blue-500/5
                    to-purple-500/10
                  "
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      mx-auto
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-white/5
                      border
                      border-white/10
                      backdrop-blur-lg
                    "
                  >
                    {skill.icon}
                  </div>

                  <h4
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {skill.name}
                  </h4>

                  <p
                    className="
                      mt-4
                      text-gray-400
                      leading-relaxed
                    "
                  >
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Accent */}
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
