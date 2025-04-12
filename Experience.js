import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <section className="min-h-screen p-8 md:p-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-400 mb-10 text-center"
      >
        Internship Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-md"
      >
        <h3 className="text-xl font-semibold text-blue-300 mb-1">
          Trainee Data Science & Analytics Engineer
        </h3>
        <p className="text-gray-300 text-lg">
          Cravita Technologies India Pvt Ltd
        </p>
        <p className="text-gray-400 text-sm mb-4">
          November 2024 - March 2025
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-[15px]">
          <li>
            Assisted in data preprocessing, cleaning, and normalization to ensure high-quality data.
          </li>
          <li>
            Conducted EDA to identify key insights and trends within large datasets.
          </li>
          <li>
            Designed machine learning models to extract business insights and enhance decision-making.
          </li>
          <li>
            Created visualizations using Python and Power BI for stakeholders.
          </li>
          <li>
            Helped automate data workflows, boosting accuracy and efficiency.
          </li>
          <li>
            Worked with cross-functional teams to optimize data pipelines and model performance.
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">
          This internship allowed me to refine my skills in data analysis, machine learning, and business intelligence, providing valuable exposure to real-world data challenges.
        </p>
      </motion.div>
    </section>
  );
};

export default Experience;
