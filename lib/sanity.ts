import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configured with a valid-format placeholder.
// The app will load static data until you replace 'your-project-id' with your actual Sanity Project ID.
export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'gzqpmpjn',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: true,
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
