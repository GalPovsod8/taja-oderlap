import ExhibitionCard from "@/app/components/ExhibitionCard"

export const metadata = {
  title: 'Exhibitions Taja Oderlap',
  description: 'Exhibitions',
}

export default function exhibitions() {
    return (
      <main className="min-h-screen h-max sm:px-44 px-5 sm:py-20 py-28 flex items-center flex-col gap-14 text-NightDark dark:text-BabyPowder">
        <h1 className="text-6xl font-bold lg:self-start">EXHIBITIONS</h1>
        <section className="h-full w-full flex flex-1 gap-10 flex-wrap items-center justify-center lg:justify-between">
          <ExhibitionCard ECImgSrc="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ECImgAlt="EX1" ECTitle="EXH_1"/>
          <ExhibitionCard ECImgSrc="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1600" ECImgAlt="EX2" ECTitle="EXH_2"/>
          <ExhibitionCard ECImgSrc="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1600" ECImgAlt="EX3" ECTitle="EXH_3"/>
        </section>
      </main>
    )
  }