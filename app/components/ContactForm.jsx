export default function ContactForm() {
  return (
    <form className="h-[590px] w-[500px] flex flex-col gap-5">
        <label className="relative" htmlFor="Name">
            <p className="absolute top-3 left-3 text-3xl">Name</p>
            <input className="w-full z-10 p-3 text-3xl outline outline-2 outline-NightDark" type="text"/>
        </label>
        <label htmlFor="Email">
            <p className="text-3xl"></p>
            <input className="w-full p-3 text-3xl outline outline-2 outline-NightDark" type="text"/>
        </label>
        <label className="flex-1" htmlFor="Message">
            <p className="text-3xl"></p>
            <textarea className="p-3 resize-none grid place-items-start h-full w-full text-3xl outline outline-2 outline-NightDark" type="text"/>
        </label>
    </form>
  )
}
