import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const backdropVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(12px)",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: {
      duration: 0.25,
    },
  },
};

const CertificateModal = ({ isOpen, onClose, certificateUrl, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
        >
          {/* Glow Effect */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

          <motion.div
            variants={modalVariants}
            className="
              relative
              w-full
              max-w-6xl
              h-[92vh]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            "
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-white/10 to-purple-500/30 pointer-events-none"></div>

            {/* Header */}
            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
                px-6
                py-5
                border-b
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {title}
                </h2>

                <p className="text-sm text-gray-300 mt-1">
                  Certificate Preview
                </p>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  text-white
                  hover:bg-red-500
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <FaTimes className="w-4 h-4" />
              </motion.button>
            </div>

            {/* PDF Container */}
            <div className="relative w-full h-[calc(92vh-88px)] bg-black/20">
              <iframe
                src={certificateUrl}
                title={title}
                className="w-full h-full"
              />
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
