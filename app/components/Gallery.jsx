import GalleryPhoto from "./GalleryPhoto"
import arrow from '../assets/arrow.svg'
import Image from "next/image"
import Link from "next/link"

export default function Gallery() {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 grid-flow-row sm:auto-rows-[calc(100vh/15)] w-full max-w-maxBodyWidth gap-8">
      <section className="flex flex-col justify-between sm:gap-0 gap-20 sm:my-0 my-5 sm:col-span-3 row-span-6 hover:cursor-default">
        <article className="grid gap-10 place-items-center sm:place-items-start">
          <h1 className="sm:text-9xl text-6xl font-bold">WELCOME</h1>
          <h2 className="sm:text-5xl text-4xl sm:text-left text-center font-medium w-full sm:w-4/6 leading-tight">I’m <span className="text-MossGreen font-medium">Taja Oderlap</span>. A photographer from Slovenia.</h2>
        </article>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-10 sm:gap-0 sm:pr-20">
          <h3 className="sm:text-4xl text-2xl text-center sm:text-left font-medium sm:w-max w-4/5">Check out my <Link href="/exhibitions" className="underline hover:opacity-90 transition-all ease-in-out duration-200">Gallery and more.</Link></h3>
          <Image className="sm:animate-arrowAnimation sm:rotate-0 rotate-90 h-auto w-2/12 dark:invert hover:translate-x-4 transition-all ease-in-out duration-500" src={arrow} alt="" height={200} width={200}></Image>
        </div>
      </section>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215101/pexels-photo-4215101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215103/pexels-photo-4215103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-3" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      {/* <article className="flex flex-col gap-4 col-span-1 row-span-6">
        <h2 className="text-3xl font-bold">More than photos.</h2>
        <p className="text-2xl text-justify font-Merriweather overflow-auto dark:text-BabyPowderHovered">Lorem ipsum dolor sit 
        amet consectetur adipisicing elit. Animi veniam et deserunt est delectus alias incidunt consequatur quasi nobis tempora dolore beatae fugit doloribus unde ea, illum assumenda modi
        dignissimos amet nihil excepturi! Cumque ex dicta voluptatum nisi, eum ea 
        nemo a eos minima est similique amet dolore assumenda quam? </p>
      </article> */}
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215105/pexels-photo-4215105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215106/pexels-photo-4215106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215107/pexels-photo-4215107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215108/pexels-photo-4215108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215109/pexels-photo-4215109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215101/pexels-photo-4215101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215103/pexels-photo-4215103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215105/pexels-photo-4215105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215106/pexels-photo-4215106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215108/pexels-photo-4215108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215109/pexels-photo-4215109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215101/pexels-photo-4215101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215103/pexels-photo-4215103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <article className="flex flex-col gap-4 sm:col-span-2 row-span-3">
        <h2 className="text-3xl font-bold">Photography. Reimagined.</h2>
        <p className="text-2xl text-justify font-Merriweather overflow-auto dark:text-BabyPowderHovered">Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Animi veniam et deserunt est delectus alias incidunt consequatur quasi nobis tempora dolore beatae fugit doloribus unde ea, illum assumenda modi
          dignissimos amet nihil excepturi! Cumque ex dicta voluptatum nisi, eum ea 
          nemo a eos minima est similique amet dolore assumenda quam? </p>
      </article>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215105/pexels-photo-4215105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215106/pexels-photo-4215106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215108/pexels-photo-4215108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215109/pexels-photo-4215109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215101/pexels-photo-4215101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-6" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215103/pexels-photo-4215103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-4" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215105/pexels-photo-4215105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215106/pexels-photo-4215106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215106/pexels-photo-4215106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-5" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
      <GalleryPhoto ImgSrc="https://images.pexels.com/photos/4215106/pexels-photo-4215106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ImgAlt="ALT" ImgColSpan="col-span-1" ImgRowSpan="row-span-3" ImgFigTitle="Under the sun" ImgFigLocation="Charinthia, Slovenia"/>
    </div>
  )
}
