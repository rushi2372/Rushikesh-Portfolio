import React from 'react';

function Contact() {
  return (
    <section className="min-h-screen p-8 md:p-20 bg-black/40 backdrop-blur-lg rounded-2xl shadow-md text-gray-300">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Contact Me</h2>

      {/* Contact Info */}
      <div className="mb-8 text-[16px] space-y-2">
        <p><strong>Name:</strong> Rushikesh Ramesh Sangamnere</p>
        <p><strong>Email:</strong> <a href="mailto:rushikeshsangamnere4561@gmail.com" className="text-blue-400 underline">rushikeshsangamnere4561@gmail.com</a></p>
        <p><strong>Phone:</strong> (+91) 9096506345</p>
        <p><strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/rushikesh-sangamnere-66a413260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            rushikesh-sangamnere-66a413260
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-4 max-w-xl mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Name</label>
          <input type="text" id="name" placeholder="Your name" className="p-2 rounded bg-gray-800 border border-gray-600 text-white" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1">Phone Number</label>
          <input type="text" id="phone" placeholder="Your phone number" className="p-2 rounded bg-gray-800 border border-gray-600 text-white" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input type="email" id="email" placeholder="Your email" className="p-2 rounded bg-gray-800 border border-gray-600 text-white" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1">Message</label>
          <textarea id="message" rows="4" placeholder="Your message..." className="p-2 rounded bg-gray-800 border border-gray-600 text-white" />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all"
        >
          Send Message
        </button>
      </form>

      {/* Resume Download Button */}
      <div className="text-center mt-10">
        <a
          href="/path-to-your-resume.pdf" // replace this with your actual file path
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all"
        >
          View/Download Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
