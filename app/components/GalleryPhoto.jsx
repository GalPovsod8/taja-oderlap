import Image from "next/image"

export default function GalleryPhoto({ImgSrc, ImgAlt, ImgFigTitle, ImgColSpan, ImgRowSpan, ImgFigLocation}) {
  return (
    <figure className={`relative overflow-hidden group hover:cursor-pointer ${ImgColSpan} ${ImgRowSpan}`}>
        <Image className="scale-110 h-full w-full object-cover group-hover:scale-100 group-hover:brightness-75 transition-all ease-in-out duration-500" src={ImgSrc} alt={ImgAlt} height={3000} width={3000}/>
        <figcaption className="absolute text-BabyPowder grid gap-2 p-5 bottom-0 left-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500">
            <div>
              <h2 className="font-bold text-3xl uppercase">{ImgFigTitle}</h2>
              <h3 className="font-normal text-xl text-BabyPowderHovered opacity-90">{ImgFigLocation}</h3>
            </div>
            {/* <p className="translate-y-96 group-hover:translate-y-0 transition-all ease-in-out duration-500"></p> */}
        </figcaption>
    </figure>
  )
}
