import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import urlFor from "../../../../../lib/urlFor";
import Image from "next/image";
import PortableText from "react-portable-text";
import { dataset,projectId } from "../../../../../sanity/env";
import { RichTextComponents } from "@/app/components/RichTextComponents";
import { Post } from "../../../../../type";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"]{
      "slug": slug.current
    }
  `;
  const slug: Post[] = await client.fetch(query);
  const slugRoutes = slug.map((slug) => slug.slug.current);

  console.log(slug);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;

  const post = await client.fetch(query, { slug });

  // console.log(post.body);

  return (
    <div className="min-h-screen">
      <section className="flex flex-col gap-10">
      <div className="text-center flex flex-col gap-2">
        <h3 className="text-5xl text-bold">{post.title}</h3>
        <p className="text-gray-200">
          {new Date(post._createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        </div>
        <div>
          <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              width={450}
              height={450}
              />
        </div>
      </section>

        <div className="">
          <article className="mx-12 xms:mx-16 lg:mx-80 md:mx-56">
            <PortableText content={post.body} serializers={RichTextComponents.block} projectId={projectId} dataset={dataset} />
          </article>
        </div>
    </div>
  )
  

  }
