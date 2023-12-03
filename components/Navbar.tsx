import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 	">
      <Link href="/">
        <Image src="/logo001.png" alt="logo" width={70} height={80} />
      </Link>

      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="font-bold text-green-40 flexCenter cursor-pointer pb-1.5  transition duration-700 hover:text-gray-20">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden hover:bg-none transition duration-300">
        <Button 
          type="button"
          title="ACCEDER A MON ESPACE"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar