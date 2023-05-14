import Header from './Header'


export default function AsideL({AsideLChildren}) {
  return (
    <aside className='absolute z-20 bg-BabyPowder dark:bg-NightDark sm:left-0 top-0 sm:h-full w-full sm:w-16 flex items-center justify-between sm:flex-col outline outline-1 outline-NightDark dark:outline-BabyPowder'>
      <Header/>
      {AsideLChildren}
    </aside>
  )
}
