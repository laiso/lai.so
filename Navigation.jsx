import { forwardRef, useState, useEffect } from 'react'

const Navigation = forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('data-section')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'home' },
    { id: 'portfolio', label: 'projects' },
    { id: 'about', label: 'about' },
    { id: 'contact', label: 'contact' }
  ]

  return (
    <nav ref={ref} className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-mono text-lg font-bold text-black">
            $ developer
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-black font-bold'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                ./{item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-xs text-right transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-black font-bold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation

