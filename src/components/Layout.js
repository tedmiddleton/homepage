import React, { useRef, useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const mainContentRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const scrollPosition = mainContentRef.current.scrollTop;
    const viewportHeight = mainContentRef.current.clientHeight;
    const scrollHeight = mainContentRef.current.scrollHeight;

    const sections = mainContentRef.current.querySelectorAll('section');
    let newActiveSection = activeSection;

    // Check if we're at the bottom of the page
    if (scrollPosition + viewportHeight >= scrollHeight - 20) {
      newActiveSection = sections[sections.length - 1].id;
    } else {
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - scrollPosition;
        const sectionBottom = sectionTop + section.offsetHeight;

        // If the section is in view
        if (sectionTop < viewportHeight / 2 && sectionBottom > viewportHeight / 2) {
          newActiveSection = section.id;
          break;
        }
      }
    }

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    const mainContent = mainContentRef.current;
    mainContent.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 antialiased">
      <Sidebar activeSection={activeSection} />
      <main ref={mainContentRef} className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

