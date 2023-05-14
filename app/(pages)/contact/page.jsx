import ContactForm from "@/app/components/ContactForm"
import Socials from "@/app/components/Socials"
import Link from "next/link"


export const metadata = {
  title: 'Contact Taja Oderlap',
  description: 'Contact',
}

export default function contact() {
    return (
      <main className="min-h-screen flex flex-col h-max sm:px-44 px-5 py-24 text-NightDark dark:text-BabyPowder">
        <h1 className="text-6xl font-bold">CONTACT</h1>
        <section className="h-full w-full flex-1 flex items-center justify-center gap-10 flex-wrap">
          <div className="grid lg:gap-20 gap-10 lg:w-1/2">
            <article className="h-max w-full grid gap-2">
              <h2 className="sm:text-5xl text-4xl font-semibold">Get in touch</h2>
              <p className="text-2xl font-Merriweather">Send me a message and I’ll reply shortly. Leave any kind of 
                suggestion or offer for work. Besides that you can also find 
                me on social media. </p>
            </article>
            <div className="h-max w-max grid gap-2">
              <h3 className="text-4xl font-medium">MY EMAIL</h3>
              <Link className="text-3xl" href="mailto:taja.oderlap@gmail.com">taja.oderlap@gmail.com</Link>
            </div>
            <div className="h-max w-max grid gap-2">
              <h3 className="text-4xl font-medium">SOCIALS</h3>
              <Socials/>
            </div>
          </div>
          <ContactForm/>
        </section>
      </main>
    )
  }