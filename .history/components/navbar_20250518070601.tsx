'use client'
import GooeyNav from './GoevyNav'
import { useMobile } from '@/hooks/useMobile'

const Navbar = () => {
  const { isMobile } = useMobile();

  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Showcase", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div
      className={`navbar flex items-center justify-between absolute top-10 w-[95%] rounded-full px-4 md:px-10 left-1/2 -translate-x-1/2 bg-gray-800 py-2 transition-all duration-300 ${isMobile ? 'flex-col gap-4 py-4 px-2' : ''
        }`}
    >
      <img src="/logo.svg" className={`h-10 ${isMobile ? 'mb-2' : ''}`} alt="Logo" />
      {isMobile ? (
        <div className="flex flex-col items-center gap-2 w-full">
          {items.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-lg py-1 px-4 rounded hover:bg-gray-700 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : (
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      )}
    </div>
  )
}

export default Navbar