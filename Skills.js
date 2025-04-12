import React from 'react';

function Skills() {
  return (
    <section className="min-h-screen p-8 md:p-20 bg-black/40 backdrop-blur-lg rounded-2xl shadow-md text-gray-300">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[16px]">
        <div>
          <h3 className="text-xl text-blue-300 mb-2">Programming & Tools</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Python, SQL</li>
            <li>GitHub, Jupyter Notebook</li>
            <li>Power BI, Tableau</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-blue-300 mb-2">Libraries & Frameworks</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>NumPy, Pandas, Matplotlib, Seaborn</li>
            <li>Scikit-learn, TensorFlow, PyTorch</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-blue-300 mb-2">Data Science & ML</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>EDA, Data Cleaning, Feature Engineering</li>
            <li>Supervised & Unsupervised Learning</li>
            <li>Model Evaluation, Handling Imbalanced Data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-blue-300 mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem-Solving, Analytical Thinking</li>
            <li>Collaboration, Communication</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
