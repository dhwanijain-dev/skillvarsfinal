'use client'
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
    <div className="flex items-center justify-between bg-gray-800 p-4">
         
<img src></img>
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
         
    </div>
  )
}

export default Navbar
