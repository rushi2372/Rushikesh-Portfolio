import React from 'react';

function AboutMe() {
  return (
    <section className="min-h-screen p-8 md:p-20 bg-black/40 backdrop-blur-lg rounded-2xl shadow-md text-gray-300">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">About Me</h2>
      <p className="text-lg leading-relaxed">
        I am a passionate and results-driven Data Scientist & Data Analyst with a solid foundation in machine learning, data analysis, and business intelligence. 
        I enjoy transforming complex datasets into actionable insights that drive decision-making and strategy. 
        With hands-on experience from internships and self-initiated projects, I am constantly learning and exploring new tools and techniques in the data science ecosystem.
        <br /><br />
        My goal is to leverage data to solve real-world problems, bring value to organizations, and grow continuously as a professional in the field.
      </p>
    </section>
  );
}

export default AboutMe;
