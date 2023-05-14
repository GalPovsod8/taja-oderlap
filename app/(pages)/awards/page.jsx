import AwardCard from "@/app/components/AwardCard"

export const metadata = {
  title: 'Awards Taja Oderlap',
  description: 'Awards',
}

const awardi = {
  imgLink:'sdd'
}

export default function awards() {
    return (
      <main className="flex flex-col lg:gap-20 gap-28 min-h-screen h-max sm:px-44 px-5 sm:py-20 py-28 text-NightDark dark:text-BabyPowder">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold">AWARDS</h1>
          <h2 className="sm:text-5xl text-4xl font-semibold">Check out my awards</h2>
        </div>
        <section className="grid place-items-center gap-24">


          <AwardCard AwardLinkID="#" AwardImgSrc="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" AwardTitle="PHOTO OF THE YEAR AWARD" AwardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem."/>
          <div className="h-px w-full bg-NightDark dark:bg-BabyPowder"></div>
        

        </section>
      </main>
    )
  }