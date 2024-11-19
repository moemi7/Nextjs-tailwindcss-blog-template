import Image from "next/image"
import Link from "next/link"
import sundigitalImg from "@/public/sundigital.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-48 md:w-20  overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
            <Image src={sundigitalImg} alt="sun-digital logo" className="w-full h-auto " sizes="20vw" priority />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">Sun-digital</span>
    </Link>
  )
}

export default Logo