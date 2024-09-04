import React from 'react'
import { User, Briefcase, GraduationCap, Code, Mail } from 'lucide-react'

const NavItem = ({ icon: Icon, label, section, activeSection, onClick }) => (
  <li className="mb-2">
    <button
      onClick={() => onClick(section)}
      className={`flex items-center w-full px-2 py-1 rounded hover:bg-gray-800 transition-colors duration-150 ${
        activeSection === section ? 'text-white bg-gray-800' : 'text-gray-400'
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      <span>{label}</span>
    </button>
  </li>
)

const Sidebar = ({ activeSection }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-64 bg-gray-800 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Resume</h1>
      </div>
      <ul>
        <NavItem icon={User} label="About" section="about" activeSection={activeSection} onClick={scrollTo} />
        <NavItem icon={Briefcase} label="Experience" section="experience" activeSection={activeSection} onClick={scrollTo} />
        <NavItem icon={GraduationCap} label="Education" section="education" activeSection={activeSection} onClick={scrollTo} />
        <NavItem icon={Code} label="Skills" section="skills" activeSection={activeSection} onClick={scrollTo} />
        <NavItem icon={Mail} label="Contact" section="contact" activeSection={activeSection} onClick={scrollTo} />
      </ul>
    </nav>
  )
}

export default Sidebar

