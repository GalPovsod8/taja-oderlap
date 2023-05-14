import Image from "next/image"

export const metadata = {
  title: 'About | Taja Oderlap',
  description: 'About',
}

export default function about() {
  return (
    <main className="min-h-screen h-max sm:px-44 px-5 sm:py-20 py-28 flex flex-col gap-14 text-NightDark dark:text-BabyPowder">
      <h1 className="text-6xl font-bold">ABOUT</h1>
      <section className="h-full w-full grid place-items-center sm:gap-32 gap-14 sm:grid-cols-2 grid-cols-1">
        <div className="grid gap-10">
          <article className="grid gap-4">
            <h2 className="sm:text-5xl text-4xl font-semibold">From a young age...</h2>
            <p className="text-2xl font-Merriweather sm:pr-[25%]">Hello, nice to meet you! 
              My name is Taja and I’m a young inspiring photographer 
              from Slovenia. Hello, nice to meet you! My name is Taja and I’m a 
              young inspiring photographer from Slovenia.</p>
          </article>
          <article className="grid gap-4">
            <h2 className="sm:text-5xl text-4xl font-semibold">Love for photography</h2>
            <p className="text-2xl font-Merriweather sm:pr-[25%]">In my free time I like to 
            enjoy my free time in nature and have fun with my friends and so on. 
            In my free time I like to enjoy my free time in nature.</p>
          </article>
          <article className="grid gap-4">
            <h2 className="sm:text-5xl text-4xl font-semibold">I like to cook</h2>
            <p className="text-2xl font-Merriweather sm:pr-[25%]">I began making photos 
            when I was very young. My passion for photography is growing 
            ever since.</p>
          </article>
        </div>
        <div className="max-h-maxAboutImgHeight aspect-square">
          <Image className="h-full w-full object-cover drop-shadow-xl" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Taja Oderlap" height={1000} width={1000}/>
        </div>
      </section>
    </main>
  )
}