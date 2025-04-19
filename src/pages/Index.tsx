
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
      {/* Hero Section with Profile */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] opacity-20 bg-cover bg-center" />
        <div className="text-center z-10 animate-fadeIn space-y-6">
          <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-500">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Umesh Pokharel"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Umesh Pokharel</h1>
          <p className="text-xl md:text-2xl text-gray-300">Computer Engineering Graduate</p>
          <p className="text-lg text-gray-400 max-w-2xl">
            Passionate computer engineer with expertise in embedded systems and network programming.
            Committed to developing innovative solutions and pushing technological boundaries.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Educational Journey</h2>
          <div className="bg-gray-900/50 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Diploma in Computer Engineering</h3>
            <p className="text-gray-300 mb-4">Institute of Engineering and Technology</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advanced Computer Architecture and Design</li>
              <li>Digital Systems and Microprocessors</li>
              <li>Network Programming and Security</li>
              <li>Embedded Systems Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="tech-grid">
            {[
              "C++", "Python", "VHDL", "Embedded C",
              "Circuit Design", "PCB Layout", "Network Security",
              "Microcontrollers", "Linux", "IoT Development"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Smart Home Automation</h3>
              <p className="text-gray-300">IoT-based home automation system with mobile app control</p>
            </div>
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Security System Design</h3>
              <p className="text-gray-300">FPGA-based security system with facial recognition</p>
            </div>
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Network Monitor</h3>
              <p className="text-gray-300">Real-time network traffic analysis and visualization tool</p>
            </div>
            <div className="project-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Embedded Weather Station</h3>
              <p className="text-gray-300">Solar-powered weather monitoring system with LoRa communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Achievements */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Recognition</h2>
          <div className="space-y-6">
            <div className="bg-blue-600/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Academic Excellence Award</h3>
              <p className="text-gray-300">Top performer in Computer Engineering batch</p>
            </div>
            <div className="bg-blue-600/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Innovation Challenge Winner</h3>
              <p className="text-gray-300">First place in National Engineering Innovation Competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-gray-900">
        <p>© 2025 Umesh Pokharel | Computer Engineer</p>
      </footer>
    </div>
  );
};

export default Portfolio;
