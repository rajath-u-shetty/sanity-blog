import Link from "next/link";
import { Post } from "../../../../type";
import { getPosts } from "../../../../sanity/lib/client";

export default async function Page() {
    const post: Post[] = await getPosts();
    return (
        <main className="text-white ">
            <div className="text-3xl my-10 ml-40 sm:text-2xl">All Posts</div>
            <hr className="mb-14 mx-9"/>  
            
            <div className="">
                <div className="flex justify-center flex-col gap-2  mx-5">
                    
                    {post.map((item) => (
                        <div className="flex ml-10 items-center   gap-24 text-zinc-300 " key={item._id}>{new Date(item.publishedAt).toLocaleDateString( 'en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          } )
                        }                     
                        <div key={item._id} className="">
                            <Link href={`/blogs/${item.slug.current}`}>
                                <h1 className="text-white text-bold text-3xl mt-8 mb-2">{item.title}</h1>
                            </Link>
                            <ul className="flex gap-5 text-green-500  text-xl">
                                {item.categories.map((categoryItem, index) => (
                                    <Link href={item.slug.current} key={index}>
                                        <li  className="leading-7 hover:text-green-300  duration-300">{categoryItem.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        </div>
                    ))}
                </div>
                </div>
                <hr className="mt-14 mx-9"/>  
        </main>
    )
}
