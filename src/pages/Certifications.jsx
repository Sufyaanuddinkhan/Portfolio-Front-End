import { useState } from "react";
import CertificateModal from "../components/CertificateModal";
import { motion } from "framer-motion";

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
      title: "Web Development ",
      institution: "Siasat’s Mahboob Hussain Jigar Career Guidance Centre",
      year: "2022",
      description:
        "Beginner training on HTML, CSS, JavaScript, and modern web development practices.",
      certificateUrl: "/certificates/dsa.pdf",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="mt-20 min-h-screen px-6">
      <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-10">
        Certifications 
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 border border-gray-100 flex flex-col justify-between"
            variants={cardVariants}
          >
            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm">{cert.institution}</p>

              {/* Year Badge */}
              <span className="inline-block bg-[#3b82f6] text-white text-xs font-medium rounded-full px-3 py-1 mt-3">
                {cert.year}
              </span>

              {/* Description */}
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Open Modal Button */}
            <div className="mt-5">
              <button
                onClick={() => setSelectedCert(cert)}
                className="block w-full text-center bg-[#3b82f6] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563eb] transition"
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

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
