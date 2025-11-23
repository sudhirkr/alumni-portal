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
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-01',
});

// Function to parse date strings like "Aug 15, 2025" to "2025-08-15"
function parseDate(dateStr) {
  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };

  const parts = dateStr.replace(',', '').split(' ');
  const month = months[parts[0]];
  const day = parts[1].padStart(2, '0');
  const year = parts[2];
  return `${year}-${month}-${day}`;
}

// Function to clear existing documents of a specific type
async function clearDocuments(documentType: string) {
  console.log(`Clearing existing ${documentType} documents...`);
  try {
    const documents = await client.fetch(`*[_type == "${documentType}"]._id`);
    if (documents.length > 0) {
      await client.delete({ query: `*[_type == "${documentType}"]` });
      console.log(`Cleared ${documents.length} ${documentType} documents`);
    } else {
      console.log(`No existing ${documentType} documents to clear`);
    }
  } catch (error) {
    console.error(`Error clearing ${documentType}:`, error);
  }
}

// Function to populate CMS with static data
async function populateCMS() {
  console.log('Starting CMS population...');

  try {
    // Clear existing documents first
    await clearDocuments('event');
    await clearDocuments('alumniHighlight');
    await clearDocuments('newsItem');
    await clearDocuments('photo');

    // Populate Events
    console.log('Creating events...');
    for (const event of UPCOMING_EVENTS) {
      await client.create({
        _type: 'event',
        title: event.title,
        date: parseDate(event.date),
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
        imageUrl: alumni.imageUrl
      });
    }

    // Populate News Items
    console.log('Creating news items...');
    for (const news of NEWS_UPDATES) {
      await client.create({
        _type: 'newsItem',
        title: news.title,
        date: parseDate(news.date),
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
        url: photo.url
      });
    }

    console.log('CMS population completed successfully!');
  } catch (error) {
    console.error('Error populating CMS:', error);
  }
}

// Run the population
populateCMS();
