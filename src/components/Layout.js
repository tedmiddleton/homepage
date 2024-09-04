import React, { useRef, useEffect } from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const mainContentRef = useRef(null);
  const [activeSection, setActiveSection] = React.useState('about');

  const handleScroll = () => {
    const scrollPosition = mainContentRef.current.scrollTop;
    const sections = mainContentRef.current.querySelectorAll('section');

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPosition + 100) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    const mainContent = mainContentRef.current;
    mainContent.addEventListener('scroll', handleScroll);
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

