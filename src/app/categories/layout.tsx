import Footer from "../components/Footer"
import Header from "../components/Header"
import "../(user)/globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
