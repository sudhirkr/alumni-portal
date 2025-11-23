import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configured with a valid-format placeholder.
// The app will load static data until you replace 'your-project-id' with your actual Sanity Project ID.
export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'gzqpmpjn',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: false, // Disabled for faster, more frequent updates from CMS
  apiVersion: '2024-03-01',
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return undefined;
  try {
    return builder.image(source);
  } catch (error) {
    return undefined;
  }
}

// GROQ queries for fetching data
export async function fetchEvents() {
  return client.fetch(`*[_type == "event"] | order(date asc) {
    _id,
    title,
    date,
    time,
    location,
    description,
    category
  }`);
}

export async function fetchAlumniHighlights() {
  return client.fetch(`*[_type == "alumniHighlight"] {
    _id,
    name,
    gradYear,
    role,
    company,
    quote,
    imageUrl
  }`);
}

export async function fetchNews() {
  return client.fetch(`*[_type == "newsItem"] | order(date desc) {
    _id,
    title,
    date,
    summary,
    category
  }`);
}

export async function fetchPhotos() {
  return client.fetch(`*[_type == "photo"] {
    _id,
    caption,
    url
  }`);
}
