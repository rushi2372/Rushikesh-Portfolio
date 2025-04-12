import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  return (
    <section className="min-h-screen p-8 md:p-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-400 mb-10 text-center"
      >
        Projects
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-md mb-8"
      >
        <h3 className="text-xl font-semibold text-blue-300 mb-1">
          1) Credit Card Fraud Detection Using Machine Learning
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          <a
            href="https://github.com/rushi2372/Credit-Card-Fraud-Detection-Using-Machine-Learning"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub Repository
          </a>
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-[15px]">
          <li>Developed a machine learning model to detect fraudulent transactions using supervised algorithms.</li>
          <li>Performed data cleaning, normalization, and handled class imbalance for better accuracy.</li>
          <li>Created visualizations and conducted EDA to identify key fraud patterns.</li>
          <li>Achieved high precision and recall using evaluation techniques like confusion matrix and AUC-ROC.</li>
        </ul>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-md mb-8"
      >
        <h3 className="text-xl font-semibold text-blue-300 mb-1">
          2) Customer Segmentation with K-Means Clustering
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          <a
            href="https://github.com/rushi2372/Customer-Segmentation-With-K-Means-Clustering-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub Repository
          </a>
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-[15px]">
          <li>Used K-Means Clustering for unsupervised segmentation of customers by income and spending.</li>
          <li>Applied Elbow Method and WCSS to find the optimal number of clusters.</li>
          <li>Created visualizations to help businesses target different customer groups effectively.</li>
          <li>Cleaned and selected relevant features from retail datasets to generate insights.</li>
        </ul>
      </motion.div>

      {/* Project 3 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-md"
      >
        <h3 className="text-xl font-semibold text-blue-300 mb-1">
          3) SQL-Based Customer Data Analysis
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-[15px]">
          <li>Designed and optimized SQL queries & stored procedures for large-scale customer datasets.</li>
          <li>Utilized Snowflake for scalable data storage and fast retrieval.</li>
          <li>Conducted analysis on customer behavior, transactions, and trends to generate business insights.</li>
          <li>Improved query execution time by 30% through performance tuning techniques.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
