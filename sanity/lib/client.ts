import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export async function getPosts() {
  return client.fetch(
    groq`*[_type == 'post'] {
      _id,
      title,
      slug,
      author->{
        _id,
        name
      },
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      "logo": logo.asset->url,
      categories[]->{
        _id,
        title
      },
      publishedAt,
      body,
    }`
  );
}

