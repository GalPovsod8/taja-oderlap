import AsideL from './components/AsideL'
import AsideR from './components/AsideR'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Taja Oderlap - Photography',
  description: 'Taja Oderlap Photography. Reimagined.',
  keywords: 'photo, photography, beautiful, picture, pictures, images',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-BabyPowder dark:bg-NightDark'>
        <AsideL/>
        {children}
        <AsideR/>
        <Footer/>
      </body>
    </html>
  )
}