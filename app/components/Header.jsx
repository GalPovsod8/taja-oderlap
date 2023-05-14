import Link from "next/link"
import Navbar from "./Navbar"
import Image from "next/image"
import TajaODERLAPlogo from '../assets/TajaODERLAPlogo.svg'

export default function Header() {
  return (
    <header className="sm:h-screen h-20 w-full py-5 px-4 flex items-center justify-between sm:flex-col text-NightDark dark:text-BabyPowder">
        <Navbar/>
        <Link className="rotate-90 sm:rotate-0 w-7 sm:w-auto absolute sm:right-0 right-24 sm:relative" href="/"><Image className="dark:invert" src={TajaODERLAPlogo} alt="TajaODERLAP" width="256px" height="56px" priority={true}/></Link>
    </header>
  )
}
