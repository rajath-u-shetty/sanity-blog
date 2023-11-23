import Link from "next/link";
import Image from "next/image";
import { Post } from "../../../type";
import { getPosts } from "../../../sanity/lib/client";

export default async function Home() {
    const post: Post[] = await getPosts();

  return (
    <main className="text-white ">
        <div className=" mt-20 ">
          <div className=" flex justify-evenly flex-wrap  lg:flex-nowrap sm:justify-evenly ">
            {post.map((item) => (
              <div key={item._id} className=" border-2 border-white rounded-md mx-5 my-5 p-10 transform transition duration-500 hover:scale-105">
                <Link href={`/blogs/${item.slug.current}`}>
                  <div className="flex flex-col gap-10">
                    <Image alt="" src={item.logo} width={200} height={200} className="cover w-auto h-auto"/>
                    <p className="text-bold text-3xl mb-3">{item.title}</p>
                  </div>
                {/* <ul>
                  {item.info.map((infoItem, index) => (
                    <li key={index} className="leading-7">{infoItem}</li>
                  ))}
                </ul> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
    </main>
  )
}