import Image from "next/image"

export default function ExhibitionCard({ECImgSrc, ECImgAlt, ECTitle}) {
  return (
    <figure className="h-ExhibitionCardHeight w-96 group hover:cursor-pointer">
        <div className="h-5/6 overflow-hidden grid place-items-center drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] group-hover:drop-shadow-[4px_4px_0px_rgba(0,0,0,.80)] transition-all ease-in-out duration-500">
            <h3 className="absolute z-50 text-5xl font-bold text-BabyPowder opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">ENTER</h3>
            <Image className="object-cover h-full scale-105 group-hover:scale-100 group-hover:brightness-75 transition-all ease-in-out duration-500" src={ECImgSrc} alt={ECImgAlt} height={1000} width={1000}/>
        </div>
        <figcaption className="h-max w-full pt-5 grid place-items-center text-5xl font-semibold">{ECTitle}</figcaption>
    </figure>
  )
}
