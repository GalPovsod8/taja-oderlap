'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark")
    {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <nav className="h-max w-full">
      <button aria-label="navbar menu" role='button' onClick={() => setNavOpen(!navOpen)} className="relative z-20 h-6 sm:w-full w-16 grid place-items-center gap-1">
        <div className="relative h-max w-full grid place-items-start gap-1">
            <div className={`h-1 w-full transition-all ease-in-out duration-200 bg-NightDark dark:bg-BabyPowder ${navOpen ? 'rotate-45 absolute' : ''}`}></div>
            <div className={`h-1 w-3/4 bg-NightDark dark:bg-BabyPowder ${navOpen ? 'hidden' : 'block'}`}></div>
            <div className={`h-1 transition-all ease-in-out duration-200 bg-NightDark dark:bg-BabyPowder ${navOpen ? '-rotate-45 w-full absolute' : 'w-2/4'}`}></div>
        </div>
      </button>
      <nav className={`h-max grid gap-20 sm:w-[calc(100vw-17px)] w-full sm:py-4 py-28 transition-all ease-in-out duration-200 absolute top-0 left-0 bg-BabyPowder dark:bg-NightDark sm:bg-opacity-0 outline outline-1 outline-NightDark sm:dark:outline-BabyPowder ${navOpen ? 'translate-y-0' : 'sm:-translate-y-52 -translate-y-full'}`}>
          <ul className="flex items-center justify-evenly sm:flex-row flex-col gap-12 sm:gap-0 text-3xl font-medium">
              <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/">Home</Link></li>
              <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/awards">Awards</Link></li>
              <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/exhibitions">Exhibitions</Link></li>
              <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/about">About</Link></li>
              <li className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="/contact">Contact</Link></li>
          </ul>
          <ul className="flex items-center justify-between mx-16 sm:hidden">
            <li className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="" target="_blank"><Icon icon="ph:instagram-logo" width="40" height="40" /></Link></li>
            <li className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="" target="_blank"><Icon icon="ph:twitter-logo" width="40" height="40" /></Link></li>
            <li className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="" target="_blank"><Icon icon="ph:facebook-logo" width="40" height="40" /></Link></li>
            <li className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="" target="_blank"><Icon icon="gg:pexels" width="50" height="50" /></Link></li>
          </ul>
          <button aria-label="theme toggle button" onClick={handleTheme} className="grid place-items-center sm:hidden">
            <div className="h-8 w-8 relative rounded-full -right-4 dark:-right-8 dark:shadow-[-2rem_0rem_0_0_rgba(247,247,242)] shadow-[-.9rem_0rem_0_0_rgba(18,17,19)] transition-all ease-in-out duration-200"></div>
          </button>
      </nav>
    </nav>
  )
}
