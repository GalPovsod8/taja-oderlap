'use client'

import Link from "next/link"
import { Icon } from '@iconify/react';

export default function Socials() {
  return (
    <ul className="flex items-center justify-between gap-10">
       <li aria-label="instagram" className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://instagram.com/tajaoderlap_photography?igshid=ODM2MWFjZDg=" target="_blank"><Icon icon="ph:instagram-logo" width="50" height="50" /></Link></li>
       <li aria-label="twitter" className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://www.twitter.com" target="_blank"><Icon icon="ph:twitter-logo" width="50" height="50" /></Link></li>
       <li aria-label="facebook" className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://www.facebook.com/profile.php?id=100069542383055" target="_blank"><Icon icon="ph:facebook-logo" width="50" height="50" /></Link></li>
       <li aria-label="pexels" className="hover:text-EerieBlackHovered dark:hover:text-Beige transition-all ease-in-out duration-200"><Link href="https://pexels.com" target="_blank"><Icon icon="gg:pexels" width="60" height="60" /></Link></li>
    </ul>
  )
}
