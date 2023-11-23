import React from 'react'
import urlFor from '../../../lib/urlFor'
import Link from 'next/link'
import Image from 'next/image'


export const RichTextComponents = {
    types: {
        image: ({value} :any) => {
            return (
                <div className='relative w-full h-96 lg:m-5 mx-auto'>
                    <Image src = {urlFor(value).url()} alt = "Blog Post Image" className='object-contain w-full' fill/>
                </div>
            )
        }
    },

    list: {
        bullet: ({children} :any) =>(
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({children} :any) =>(
            <ol className="mt-lg">{children}</ol>
        )
    },

    block: {
        h1: ({children} :any) => <h1 className="py-10 text-4xl font-bold md:text-3xl text-yellow-300 ">{children}</h1>,
        h2: ({children} :any) => <h2 className="py-10 text-3xl font-bold md:text-3xl text-yellow-200 ">{children}</h2>,
        normal: ({children} :any) => <h5 className="text-md text-gray-200">{children}</h5>,
        h4 : ({children} :any) => <div className="py-10 text-sm text-center text-gray-500">{children}</div>,
        blockquote: ({children} :any) => <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">{children}</blockquote>,
        code: ({children} :any) => <code className="text-gray-200">{children}</code>,
    },

    marks :{
        link: ({children, value} :any) => {
            const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined;

            return (
                <Link href={value.href}
                rel={rel}
                className= "underline decoration-[#F7AB0A] hover:decoration-black">
                    {children}
                </Link>
            )
        }
    }
}
      