'use client'

import Link from "next/link"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";

export default function AsideR() {
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
    <aside className="h-full w-16 hidden overflow-hidden sm:grid place-items-center absolute bottom-0 z-10 right-0 text-NightDark dark:text-BabyPowder outline outline-1 outline-NightDark dark:outline-BabyPowder">
      <button aria-label="theme toggle button" onClick={handleTheme} className="absolute top-5">
        <div className="h-8 w-8 relative rounded-full -right-4 dark:-right-8 dark:shadow-[-2rem_0rem_0_0_rgba(247,247,242)] shadow-[-.9rem_0rem_0_0_rgba(18,17,19)] transition-all ease-in-out duration-200"></div>
      </button>
      <ul className="grid place-items-center gap-24">
          <li aria-label="instagram" className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://instagram.com/tajaoderlap_photography?igshid=ODM2MWFjZDg=" target="_blank"><Icon icon="ph:instagram-logo" width="40" height="40" /></Link></li>
          <li aria-label="twitter" className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://www.twitter.com" target="_blank"><Icon icon="ph:twitter-logo" width="40" height="40" /></Link></li>
          <li aria-label="facebook" className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://www.facebook.com/profile.php?id=100069542383055" target="_blank"><Icon icon="ph:facebook-logo" width="40" height="40" /></Link></li>
          <li aria-label="pexels" className="dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://pexels.com" target="_blank"><Icon icon="gg:pexels" width="50" height="50" /></Link></li>
      </ul>
    </aside>
  )
}
