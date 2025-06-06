'use client'
import Image from 'next/image'
import GooeyNav from './GoevyNav'
const navbar = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Showca", href: "#" },
      ];
  return (
    <nav>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
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

export default navbar
