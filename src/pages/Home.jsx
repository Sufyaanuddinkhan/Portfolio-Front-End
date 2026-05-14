import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020617]
        px-6
        pt-32
        pb-20
        flex
        items-center
      "
    >
      {/* Background Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          top-20
          left-10
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[160px]
          rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          right-10
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[170px]
          rounded-full
        "
      />

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

      {/* Floating Gradient Orb */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-gradient-to-br
          from-cyan-500/10
          via-blue-500/10
          to-purple-500/10
          blur-[150px]
        "
      ></div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Small Label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              text-cyan-300
              text-sm
              tracking-[0.2em]
              uppercase
              mb-8
            "
          >
            Full Stack MERN Developer
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-black
              leading-tight
              text-white
            "
          >
            Hi, I'm{" "}
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
              Mohd
              <br />
              Sufyaanuddin
              <br />
              Khan
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              mt-8
              text-lg
              md:text-xl
              text-gray-400
              leading-relaxed
              max-w-2xl
            "
          >
            I craft premium, scalable, and immersive web experiences using the
            MERN stack — combining modern frontend aesthetics with powerful
            backend engineering to build impactful digital products.
          </motion.p>

          {/* Stats */}
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
              delay: 0.7,
            }}
            className="
              flex
              flex-wrap
              gap-10
              mt-10
            "
          >
            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-gray-400 text-sm mt-1">Projects Built</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">MERN</h3>
              <p className="text-gray-400 text-sm mt-1">Stack Expertise</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">4th</h3>
              <p className="text-gray-400 text-sm mt-1">Year CSE Student</p>
            </div>
          </motion.div>

          {/* Buttons */}
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
              delay: 0.9,
            }}
            className="
              flex
              flex-wrap
              gap-5
              mt-12
            "
          >
            {/* Projects Button */}
            <Link
              to="/projects"
              className="
                group
                relative
                overflow-hidden
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                shadow-lg
                hover:shadow-cyan-500/30
                transition-all
                duration-300
              "
            >
              <span className="relative z-10">View Projects</span>

              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-white/10
                "
              ></div>
            </Link>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            flex
            justify-center
          "
        >
          {/* Outer Glow */}
          <div
            className="
              absolute
              w-[450px]
              h-[450px]
              rounded-full
              bg-gradient-to-br
              from-cyan-500/20
              via-blue-500/20
              to-purple-500/20
              blur-[120px]
            "
          ></div>

          {/* Image Card */}
          <motion.div
            whileHover={{
              y: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              shadow-[0_10px_80px_rgba(0,0,0,0.45)]
              p-4
            "
          >
            {/* Gradient Border */}
            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                p-[1px]
                bg-gradient-to-br
                from-cyan-400/40
                via-white/10
                to-purple-500/40
                pointer-events-none
              "
            ></div>

            <img
              src="/images/profile.JPG"
              alt="Profile"
              className="
                relative
                z-10
                w-[380px]
                h-[500px]
                object-cover
                rounded-[32px]
              "
            />

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute
                bottom-8
                left-1/2
                -translate-x-1/2
                px-6
                py-3
                rounded-2xl
                border
                border-white/10
                bg-black/40
                backdrop-blur-xl
                text-white
                text-sm
                tracking-wide
              "
            >
              MERN Stack Developer
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
