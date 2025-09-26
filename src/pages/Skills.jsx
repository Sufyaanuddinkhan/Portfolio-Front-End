import { motion } from "framer-motion";
import { Code, Database, GitBranch, Users, MessageCircle, Zap } from "lucide-react";

const Skills = () => {
  // Technical Skills Data
  const technicalSkills = [
    { id: 1, name: "HTML5", icon: <Code className="w-6 h-6 text-orange-500" />, level: 90 },
    { id: 2, name: "CSS3", icon: <Code className="w-6 h-6 text-blue-500" />, level: 85 },
    { id: 3, name: "JavaScript", icon: <Zap className="w-6 h-6 text-yellow-500" />, level: 80 },
    { id: 4, name: "React.js", icon: <Code className="w-6 h-6 text-cyan-500" />, level: 85 },
    { id: 5, name: "Node.js", icon: <Database className="w-6 h-6 text-green-500" />, level: 80 },
    { id: 6, name: "Express.js", icon: <Database className="w-6 h-6 text-gray-700" />, level: 75 },
    { id: 7, name: "MongoDB", icon: <Database className="w-6 h-6 text-green-600" />, level: 80 },
    { id: 8, name: "Git & GitHub", icon: <GitBranch className="w-6 h-6 text-red-500" />, level: 85 },
  ];

  // Soft Skills Data
  const softSkills = [
    {
      id: 1,
      name: "Problem Solving",
      description: "Able to analyze complex problems and design effective solutions.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 2,
      name: "Teamwork",
      description: "Collaborates effectively within teams to achieve common goals.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 3,
      name: "Communication",
      description: "Clear and concise communication for technical and non-technical audiences.",
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
    },
    {
      id: 4,
      name: "Adaptability",
      description: "Quickly adapts to new tools, environments, and challenges.",
      icon: <Zap className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <section className="mt-20 px-6">

      {/* Technical Skills Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-[#0f172a] mb-8 text-center">
          Technical Skills
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {technicalSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl p-6 transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <span className="text-lg font-medium text-gray-800">{skill.name}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-[#3b82f6] transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <p className="text-right text-sm text-gray-600 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h3 className="text-2xl font-semibold text-[#0f172a] mb-8 text-center">
          Soft Skills
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {softSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl p-6 text-center transition flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
              <p className="mt-2 text-sm text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
