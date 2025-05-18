import Image from 'next/image'

const navbar = () => {
  return (
    <nav>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
    </nav>
  )
}

export default navbar
