import {  motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaLaptopCode } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "10th Grade High School",
      institution: "St Paul's High School - 2020",
      year: "Completed",
      description:
        "Successfully completed 10th grade with a strong foundation in core subjects.",
        icon: <FaGraduationCap className="text-white text-4xl transition transform hover:scale-110" title="High School"/>, // 🎓

    },
    {
      id: 2,
      title: "Intermediate - Mathematics - Physics - Chemistry(MPC)",
      institution: "M S Junior College",
      year: "Completed",
      description:
        "Completed intermediate education with specialization in Mathematics, Physics, and Chemistry.",
        icon: <FaBookOpen className="text-white text-4xl transition transform hover:scale-110" title="Intermediate"/>, // 🎓
    },
    {
      id: 3,
      title: "B.Tech - Computer Science Engineering",
      institution: "Shadan College of Engineering & Technology",
      year: "Currently Pursuing (4th Year)",
      description:
        "Currently in the final year of Computer Science Engineering, focusing on software development, algorithms, and full-stack web development.",
        icon: <FaLaptopCode className="text-white text-4xl transition transform hover:scale-110" title="Bachelor's Degree" />, // 🎓
    },
  ];

// Certifications Timeline Data
  const certificationsData = [
  {
    id: 1,
    title: "MERN Stack Web Development",
    institution: "Udemy",
    year: "2025",
    description:
      "Comprehensive course covering MongoDB, Express.js, React, and Node.js for full-stack web development.",
    certificateUrl: "https://example.com/mern-cert",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    institution: "Coursera",
    year: "2024",
    description:
      "In-depth understanding of algorithms, data structures, and problem-solving techniques.",
    certificateUrl: "https://example.com/dsa-cert",
  },
  {
    id: 3,
    title: "Cloud Computing Fundamentals",
    institution: "AWS Academy",
    year: "2023",
    description:
      "Learned the essentials of cloud services, deployment strategies, and serverless computing.",
    certificateUrl: "https://example.com/cloud-cert",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each card animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type:"spring", stiffness: 120, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-10">
        My Education
      </h2>

      {/* Timeline Container */}
      <motion.div
        className="relative border-l-4 border-[#3b82f6]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
      >
        {educationData.map((edu) => (
          <motion.div
            key={edu.id}
            className="mb-10 ml-6"
            variants={cardVariants}
          >
            {/* Timeline Dot */}
            <div className="absolute flex items-center justify-center w-11 h-11 bg-[#3b82f6] rounded-full -left-12 mt-1 shadow-md">{edu.icon} </div>

            {/* Card */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#0f172a]">
                {edu.title}
              </h3>
              <p className="text-gray-600">{edu.institution}</p>
              <span className="block text-sm text-gray-500 mb-2">{edu.year}</span>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
