=== component.jsx ===

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tqjp836m5hY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, CardFooter, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] text-white font-['Alchemy']">
      <header className="w-full max-w-5xl px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-[#ff4d4d]">
              <AvatarImage alt="InfinityRed" src="/placeholder-avatar.jpg" />
              <AvatarFallback>IR</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-white">InfinityRed</h1>
              <p className="text-sm text-gray-400">Co-Founder Alchemix Labs & 3D Artist</p>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full max-w-5xl px-4 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h1 className="text-4xl font-bold text-white col-span-full">My Creations</h1>
          <Card className="bg-[#222222] rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img
                alt="Philosopher's Stone"
                className="aspect-[4/3] object-cover"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Philosopher's Stone</h3>
                  <p className="text-sm text-gray-400">3D Model</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img
                alt="Transmutation Circle"
                className="aspect-[4/3] object-cover"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Transmutation Circle</h3>
                  <p className="text-sm text-gray-400">3D Model</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img alt="Potion" className="aspect-[4/3] object-cover" height={300} src="/placeholder.svg" width={400} />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Potion</h3>
                  <p className="text-sm text-gray-400">3D Model</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img
                alt="Land of Stones"
                className="aspect-[4/3] object-cover"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Land of Stones</h3>
                  <p className="text-sm text-gray-400">3D Model</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="w-full max-w-5xl px-4 py-6 md:px-6 md:py-8 text-center text-gray-400">
        <p className="text-base leading-relaxed">© 2023 InfinityRed. All rights reserved.</p>
      </footer>
    </div>
  )
}

=== styles.css ===

:root {
  --radius: 0rem;
}

body {
  font-family: var(--font-comfortaa), serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-dm_serif_display), serif;
}

=== layout.jsx ===

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
