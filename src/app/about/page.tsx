import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import BlogList from "../components/BlogList";

export default function Home() {
    return (
        <main className="h-[100%] text-white mx-8">
            <div className="flex justify-evenly  text-[20px] mt-28 gap-4">
            <div className=" flex flex-col justify-center border py-9 px-12 rounded-xl border-purple-600">
                <Image src="/images/profile.jpeg" alt="Rajath's pic" width={250} height={250} className="rounded-md  " />
                <div className="flex pt-8 gap-4 justify-center">
                    <Link href={"https://github.com/rajath-u-shetty"} className="text-2xl rounded-md">
                        <FaGithub />
                    </Link>
                    <Link href={"www.facebook.com"} className="text-2xl rounded-md">
                        <FaFacebook />
                    </Link>
                    <Link href={"www.instagram.com"} className="text-2xl rounded-md">
                        <FaInstagram />
                    </Link>
                    <Link href={"www.linkedin.com"} className="text-2xl rounded-md">
                        <FaLinkedin />
                    </Link>
                </div>
                <p className="pt-2 flex justify-center">Bengaluru, India</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-5 items-start border border-purple-600 rounded-xl p-9">
                <p className="">
                    I&apos;m Rajath, a passionate and creative frontend developer based in the heart of Bengaluru. With a strong focus on building exceptional user experiences, I specialize in utilizing cutting-edge technologies like React and Next.js to bring web applications to life.
                </p>
                <p>
                    <span className="block font-bold">React.js:</span>
                    I have a deep understanding of React, one of the most popular JavaScript libraries for building user interfaces. I can create reusable and interactive components to make web applications more dynamic and responsive.
                </p>
                <p>
                    <span className="block font-bold">Next.js:</span>
                    I excel in using Next.js, the leading React framework for building production-ready, server-rendered applications. I leverage server-side rendering (SSR) and static site generation (SSG) for optimized performance and SEO.
                </p>
            </div>
            </div>
        </main>
    )
}