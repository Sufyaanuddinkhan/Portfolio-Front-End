import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaLaptopCode } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "10th Grade High School",
      institution: "St Paul's High School",
      year: "2020",
      description:
        "Successfully completed 10th grade with a strong foundation in core academic subjects and analytical learning.",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      title: "Intermediate - Mathematics, Physics & Chemistry",
      institution: "M S Junior College",
      year: "2022",
      description:
        "Completed intermediate education with specialization in Mathematics, Physics, and Chemistry.",
      icon: <FaBookOpen />,
    },
    {
      id: 3,
      title: "B.Tech - Computer Science Engineering",
      institution: "Shadan College of Engineering & Technology",
      year: "Currently Pursuing",
      description:
        "Final year Computer Science Engineering student focused on software engineering, full-stack web development, and modern technologies.",
      icon: <FaLaptopCode />,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

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
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-[170px] rounded-full"></div>

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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
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
            Academic Journey
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
              Education
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-gray-400
              text-lg
              leading-relaxed
            "
          >
            A timeline of my academic background, learning milestones, and
            technical growth throughout my journey in technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative"
        >
          {/* Timeline Line */}
          <div
            className="
              absolute
              left-5
              top-0
              w-[3px]
              h-full
              bg-gradient-to-b
              from-cyan-400
              via-blue-500
              to-purple-500
              rounded-full
            "
          ></div>

          <div className="space-y-16">
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                className="
                  relative
                  flex
                  items-start
                  gap-8
                "
              >
                {/* Timeline Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="
                    relative
                    z-10
                    min-w-[44px]
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600
                    text-white
                    text-xl
                    shadow-lg
                    shadow-cyan-500/30
                  "
                >
                  {edu.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    flex-1
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                    shadow-[0_10px_60px_rgba(0,0,0,0.45)]
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

                  {/* Year Badge */}
                  <div
                    className="
                      absolute
                      top-6
                      right-6
                      px-4
                      py-1
                      rounded-full
                      bg-white/10
                      border
                      border-white/10
                      text-cyan-300
                      text-xs
                      tracking-widest
                      uppercase
                      backdrop-blur-lg
                    "
                  >
                    {edu.year}
                  </div>

                  <div className="relative z-10">
                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-white
                        leading-snug
                      "
                    >
                      {edu.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-cyan-300
                        text-sm
                        tracking-wide
                      "
                    >
                      {edu.institution}
                    </p>

                    <p
                      className="
                        mt-5
                        text-gray-400
                        leading-relaxed
                      "
                    >
                      {edu.description}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
