"use client";

import {definePreview }from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

if(!projectId || !dataset) {
  throw new Error(
    'Please set projectId and dataset in a .env file'
  )
}

export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})