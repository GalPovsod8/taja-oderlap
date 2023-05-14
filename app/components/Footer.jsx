import Link from "next/link"
import Socials from "./Socials"


export default function Footer() {
  return (
    <footer className='h-max w-full py-24 border-t text-NightDark dark:text-BabyPowder border-t-NightDark dark:border-t-BabyPowder grid place-items-center'>
        <div className="grid place-items-center gap-14">
            <nav>
                <ul className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-20 text-3xl font-medium">
                    <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/">Home</Link></li>
                    <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/awards">Awards</Link></li>
                    <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/exhibitions">Exhibitions</Link></li>
                    <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/about">About</Link></li>
                    <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div>
                <Socials/>
            </div>
            <div className="flex sm:flex-row text-lg flex-col-reverse items-center justify-center gap-3 hover:cursor-default">
                <p>©{new Date().getFullYear()}</p>
                <p>All Rights Reserverd</p>
            </div>
        </div>
    </footer>
  )
}
