import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      if (res.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>

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
            Let’s Connect
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
            Get In
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
              Touch
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
            Have an idea, collaboration, project, or opportunity? Feel free to
            send a message and let’s build something amazing together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
            p-8
            md:p-12
          "
        >
          {/* Card Glow */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-500/5
              via-blue-500/5
              to-purple-500/5
            "
          ></div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            {/* Name */}
            <div>
              <label className="text-gray-300 text-sm mb-3 block">
                Full Name
              </label>

              <div className="relative">
                <FaUser
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-cyan-400
                  "
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    py-4
                    pl-14
                    pr-5
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    transition-all
                  "
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm mb-3 block">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-cyan-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    py-4
                    pl-14
                    pr-5
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    transition-all
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-300 text-sm mb-3 block">
                Message
              </label>

              <div className="relative">
                <FaCommentDots
                  className="
                    absolute
                    left-5
                    top-6
                    text-cyan-400
                  "
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    py-4
                    pl-14
                    pr-5
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    transition-all
                    resize-none
                  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              type="submit"
              disabled={loading}
              className={`
                w-full
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                py-4
                text-lg
                font-semibold
                tracking-wide
                transition-all
                duration-300
                shadow-lg
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30"
                }
                text-white
              `}
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status Messages */}
            {status === "success" && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  text-center
                  text-green-400
                  font-medium
                "
              >
                ✅ Message sent successfully!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  text-center
                  text-red-400
                  font-medium
                "
              >
                ❌ Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
