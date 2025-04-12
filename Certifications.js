import React from 'react';

function Certifications() {
  return (
    <section className="min-h-screen p-8 md:p-20 bg-black/40 backdrop-blur-lg rounded-2xl shadow-md text-gray-300">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Certifications</h2>
      
      <ul className="list-disc list-inside space-y-4 text-[16px]">
        <li>
          <span className="font-semibold text-white">HackerRank</span> – SQL Certification
        </li>
        <li>
          <span className="font-semibold text-white">LinkedIn Learning</span> – Google Cloud Professional Machine Learning Engineer: Framing ML Problems
        </li>
        <li>
          <span className="font-semibold text-white">British Airways (Forage)</span> – Data Science Job Simulation
        </li>
      </ul>
    </section>
  );
}

export default Certifications;
