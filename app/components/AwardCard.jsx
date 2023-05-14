import Image from "next/image"
import BtnPrimary from "./BtnPrimary"

export default function AwardCard({AwardTitle, AwardText, AwardImgSrc, AwardLinkID}) {
  return (
    <div className="h-[37.5rem] w-full grid gap-40 sm:grid-cols-2 place-items-center">
        <figure className="h-full w-full outline outline-4 outline-NightDark overflow-hidden group">
            <Image className="scale-110 h-full w-full object-cover group-hover:scale-100 transition-all ease-in-out duration-500" src={AwardImgSrc} alt="Award Image" height={1000} width={1000}/>
        </figure>
        <div className="grid gap-10">
            <article className="grid gap-5">
                <h3 className="text-4xl font-medium">{AwardTitle}</h3>
                <p className="text-2xl font-Merriweather text-justify">{AwardText}</p>
            </article>
            <BtnPrimary BtnPrimaryLink={AwardLinkID} BtnPrimaryText="Read more"/>
        </div>
    </div>
  )
}
