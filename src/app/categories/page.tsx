'use client'
import Link from "next/link";
import { getPosts } from "../../../sanity/lib/client";
import { Post } from "../../../type";

export default async function Page() {
    const post: Post[] = await getPosts();
    const categoryCounts = new Map<string, number>();

    post.forEach((item) => {
      item.categories.forEach((category) => {
        const categoryTitle = category.title;
  
        categoryCounts.set(categoryTitle, (categoryCounts.get(categoryTitle) || 0) + 1);
      });
    });
    
  return (
    <main>
        <div>
            <h1 className="text-white text-bold text-5xl mx-12 xms:mx-16 lg:mx-52 md:mx-36 sm:mx-20 mb-12 mt-10">All Categories</h1>
        </div>
        <hr className="mx-12 xms:mx-16 lg:mx-52 md:mx-36 sm:mx-20" />
        <div className="justify-center flex md:gap-36 my-32 gap-8">
          <h1 className="text-4xl">Tags</h1>
          <div className="flex justify-center">
          {[...categoryCounts.entries()].map(([categoryTitle, count]) => (
          <div key={categoryTitle}>
            <Link href={`/categories/${categoryTitle}`}>
              <h1 className="text-2xl md:mx-4 mx-1 text-green-500 hover:text-green-400">
                {categoryTitle} 
                <span className="text-white">
                  ({count})
                </span>
              </h1>
            </Link>
          </div>
        ))}
        </div>
        </div>
        <hr className="mx-12 xms:mx-16 lg:mx-52 md:mx-36 sm:mx-20" />
    </main>
  )
}
