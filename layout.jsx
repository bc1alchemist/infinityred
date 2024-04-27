// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { DM_Serif_Display } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import './styles.css'

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_serif_display',
})
const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={dm_serif_display.variable + comfortaa.variable}>
        {children}
      </body>
    </html>
  )
}
