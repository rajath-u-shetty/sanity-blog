import Image from "next/image"
import { Post } from "../../../type"
import urlFor from "../../../lib/urlFor"
import category from "../../../sanity/schemas/category"


type Props = {
    posts: Post[]
}

export default function BlogList({posts}: Props) {
  return (
    <div>
      {posts.map((post)=>{
        return(
            <div key={post._id} className="flex justify-evenly  flex-wrap  lg:flex-nowrap sm:justify-evenly">
                <div className="border-2 border-white rounded-md mx-5 my-5  p-10">
                    <Image
                        className="object-cover object-left lg:object-center"
                        src={urlFor(post.mainImage).url()} 
                        alt={post.author.name}
                    />
                    <div>
                      <p className="text-bold text-3xl mb-3">{post.title}</p>
                    </div>
                    <div className="">
                      {post.categories.map((category) => ( 
                        <div key={category._id}>
                          <p>
                           {category.title}
                          </p>
                        </div>
                      ))}
                    </div>
                </div>
                ``
            </div>
        )
      })}
    </div>
  )
}
