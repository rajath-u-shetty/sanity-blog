import "../../globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogs',
  description: 'Generated by create next app',
}

export default function BlogsLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
    </div>
  )
}