import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#dbeafe] overflow-hidden">
      
      {/* Decorative Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        
        {/* Left Side - Photo */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-104 h-104 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/images/profile.JPG"
              alt="My Profile"
              className="w-full h-full object-cover"
            />
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 40px 10px rgba(59, 130, 246, 0.4)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm <span className="text-[#3b82f6]">Mohd Sufyaanuddin Khan</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl text-gray-700 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Full Stack MERN Developer
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I'm passionate about building modern, scalable web applications using
            the MERN stack. I love solving complex problems and delivering
            high-quality solutions that make a real impact.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="bg-[#3b82f6] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2563eb] transition shadow-md"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#3b82f6] px-6 py-3 rounded-lg border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
