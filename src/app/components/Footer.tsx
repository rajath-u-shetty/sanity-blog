import Link from "next/link"
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-slate-200  bottom-0  mt-28 w-full text-neutral-950 ">
            <div>
                <div className="flex items-center gap-4 text-3xl justify-center p-2 ">
                    <Link href={"https://github.com/rajath-u-shett"} className="hover:bg-sky-500 transform transition duration-300 rounded-md p-1 hover:opacity-60">
                        <FaGithub />
                    </Link>
                    <Link href={"www.facebook.com"} className="hover:bg-sky-500 transform transition duration-300 rounded-md p-1 hover:opacity-60">
                        <FaFacebook />
                    </Link>
                    <Link href={"www.instagram.com"} className="hover:bg-sky-500 transform transition duration-300 rounded-md p-1 hover:opacity-60">
                        <FaInstagram />
                    </Link>
                    <Link href={"www.linkedin.com"} className="hover:bg-sky-500 transform transition duration-300 rounded-md p-1 hover:opacity-60">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold flex justify-center gap-4">Rajath U Shetty
                    <span  className="text-md ">  &#183;</span>
                    <span > &#169; 2023</span>
                    <span>  &#183;</span>
                    <span>  Rajath U Shetty &apos; s Blog</span>
                </h3>
                <h3 className="flex justify-center text-black">
                    Tailwind CSS and Next.js
                </h3>
            </div>
        </footer>
    )
}