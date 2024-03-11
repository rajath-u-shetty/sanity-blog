import Image from "next/image"
import Link from "next/link"
// import { HiMenuAlt3 } from "react-icons/hi"

export default function Header() {
    return (
        <nav className={`p-5 bg-slate-900 flex justify-between w-auto items-center`}>
            <div className="flex items-center">
                <Image alt="profile pic" src="/images/profile.jpeg" width={50} height={50} className="rounded-full  mr-4 border-emerald-900" />
                <h1 className="text-4xl text-white font-bold xms:hidden">
                    <Link href={"/"}>
                        Rajath U Shetty
                    </Link>
                </h1>
            </div>
            <div className="gap-10 flex text-bold text-white text-xl ">
                <Link href={'/blogs'} >
                    <h2 className="transform transition duration-400 hover:scale-125 hover:text-amber-200">Blogs</h2>
                </Link>
                <Link href={'/categories'} >
                    <h2 className="transform transition duration-400 hover:scale-125 hover:text-amber-200">Categories</h2>
                </Link>
                <Link href={'/about'} >
                    <h2 className="transform transition duration-400 hover:scale-125 hover:text-amber-200">About</h2>
                </Link>
            </div>
        </nav>
    )
}
                

