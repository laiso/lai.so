import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="back-to-top fixed bottom-6 right-6 z-50 rounded-full bg-black text-white px-4 py-3 shadow-lg hover:bg-gray-800"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTop

