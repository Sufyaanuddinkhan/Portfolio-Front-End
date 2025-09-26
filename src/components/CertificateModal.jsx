import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CertificateModal = ({ isOpen, onClose, certificateUrl, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-xl shadow-lg max-w-4xl w-full h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </div>

            {/* PDF Preview */}
            <iframe
              src={certificateUrl}
              title={title}
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
