
import { useEffect } from 'react';

const Portfolio = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] opacity-20 bg-cover bg-center" />
        <div className="text-center z-10 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Computer Engineering</h1>
          <p className="text-xl md:text-2xl text-gray-300">Diploma Portfolio</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Educational Background</h2>
          <div className="bg-gray-900/50 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Diploma in Computer Engineering</h3>
            <p className="text-gray-300 mb-4">Specializing in Computer Systems and Networks</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advanced Computer Architecture</li>
              <li>Digital Systems Design</li>
              <li>Network Programming</li>
              <li>Embedded Systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Competencies</h2>
          <div className="tech-grid">
            {[
              "C++", "Python", "VHDL", "Embedded C",
              "Circuit Design", "PCB Layout", "Network Protocols",
              "Microcontrollers", "Linux", "MATLAB"
            ].map((skill) => (
              <div key={skill} className="skill-badge bg-blue-600/20 p-4 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Laboratory Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Embedded Systems Project</h3>
              <p className="text-gray-300">Designed and implemented an IoT-based home automation system using Arduino</p>
            </div>
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Digital Design Project</h3>
              <p className="text-gray-300">Developed a VHDL-based digital clock with alarm functionality</p>
            </div>
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Networking Project</h3>
              <p className="text-gray-300">Implemented a secure file transfer protocol using Socket Programming</p>
            </div>
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">PCB Design Project</h3>
              <p className="text-gray-300">Designed and fabricated a custom microcontroller development board</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Achievements</h2>
          <div className="space-y-6">
            <div className="bg-blue-600/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Dean's List</h3>
              <p className="text-gray-300">Consistently maintained top academic performance</p>
            </div>
            <div className="bg-blue-600/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Technical Paper Publication</h3>
              <p className="text-gray-300">Published research on Embedded Systems optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-gray-900">
        <p>© 2025 Computer Engineering Portfolio</p>
      </footer>
    </div>
  );
};

export default Portfolio;
