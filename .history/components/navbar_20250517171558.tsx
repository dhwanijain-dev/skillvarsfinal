'use client'
import Image from 'next/image'
import GooeyNav from './GoevyNav'
const Navbar = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Showcase", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },

      ];
  return (
    <nav cla>
        <Image src="/logo.svg" alt="Logo" width={100} height={50} />
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
    </nav>
  )
}

export default Navbar
