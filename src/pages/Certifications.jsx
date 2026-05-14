import { useState } from "react";
import CertificateModal from "../components/CertificateModal";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificationsData = [
    {
      id: 1,
      title: "MERN Stack Web Development",
      institution: "Talent Development Center (TDC)",
      year: "2025",
      description:
        "Comprehensive course covering MongoDB, Express.js, React, and Node.js for full-stack web development.",
      certificateUrl: "/certificates/mern-stack.pdf",
    },
    {
      id: 2,
      title: "Web Development",
      institution: "Siasat’s Mahboob Hussain Jigar Career Guidance Centre",
      year: "2022",
      description:
        "Beginner training on HTML, CSS, JavaScript, and modern web development practices.",
      certificateUrl: "/certificates/dsa.pdf",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>

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
          className="text-center mb-20"
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
            Achievements & Learning
          </p>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-black
              text-white
              leading-tight
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
              Certifications
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
            A collection of certifications and learning milestones that showcase
            my journey in modern web development and continuous skill growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
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

              {/* Top Icon */}
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-cyan-500
                  to-blue-600
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                <FaAward className="text-white text-2xl" />
              </div>

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
                {cert.year}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    leading-snug
                  "
                >
                  {cert.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-cyan-300
                    text-sm
                    tracking-wide
                  "
                >
                  {cert.institution}
                </p>

                <p
                  className="
                    mt-5
                    text-gray-400
                    leading-relaxed
                    text-sm
                  "
                >
                  {cert.description}
                </p>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setSelectedCert(cert)}
                className="
                  relative
                  z-10
                  mt-8
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-5
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  font-semibold
                  tracking-wide
                  shadow-lg
                  hover:shadow-cyan-500/30
                  transition-all
                  duration-300
                "
              >
                <FaExternalLinkAlt className="text-sm" />
                View Certificate
              </motion.button>

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

      {/* Modal */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certificateUrl={selectedCert?.certificateUrl}
        title={selectedCert?.title}
      />
    </section>
  );
};

export default Certifications;
