import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@sanity/client';
import { UPCOMING_EVENTS, ALUMNI_HIGHLIGHTS, NEWS_UPDATES, GALLERY_PHOTOS } from './constants.ts';

// Load environment variables
dotenv.config({ path: path.resolve('.env.local') });

// Create client directly to avoid import.meta.env issues
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'gzqpmpjn',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
});

// Function to populate CMS with static data
async function populateCMS() {
  console.log('Starting CMS population...');

  try {
    // Populate Events
    console.log('Creating events...');
    for (const event of UPCOMING_EVENTS) {
      await client.create({
        _type: 'event',
        title: event.title,
        date: event.date,
        time: event.time || '',
        location: event.location,
        description: event.description,
        category: event.category
      });
    }

    // Populate Alumni Highlights
    console.log('Creating alumni highlights...');
    for (const alumni of ALUMNI_HIGHLIGHTS) {
      await client.create({
        _type: 'alumniHighlight',
        name: alumni.name,
        gradYear: alumni.gradYear,
        role: alumni.role,
        company: alumni.company,
        quote: alumni.quote,
        // Note: You'll need to upload the images to Sanity separately
        // image: { _type: 'image', asset: { _ref: 'image-ref' } }
      });
    }

    // Populate News Items
    console.log('Creating news items...');
    for (const news of NEWS_UPDATES) {
      await client.create({
        _type: 'newsItem',
        title: news.title,
        date: news.date,
        summary: news.summary,
        category: news.category
      });
    }

    // Populate Photos
    console.log('Creating photos...');
    for (const photo of GALLERY_PHOTOS) {
      await client.create({
        _type: 'photo',
        caption: photo.caption,
        // Note: You'll need to upload the images to Sanity separately
        // image: { _type: 'image', asset: { _ref: 'image-ref' } }
      });
    }

    console.log('CMS population completed!');
  } catch (error) {
    console.error('Error populating CMS:', error);
  }
}

// Run the population
populateCMS();
