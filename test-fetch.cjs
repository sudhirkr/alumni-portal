const { createClient } = require('@sanity/client');
require('dotenv').config({ path: './.env.local' });

// Create client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'gzqpmpjn',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
});

// Test function
async function testFetch() {
  try {
    console.log('Testing CMS connection...');

    const events = await client.fetch('*[_type == "event"][0...3]');
    console.log(`Found ${events.length} events`);

    const highlights = await client.fetch('*[_type == "alumniHighlight"][0...3]');
    console.log(`Found ${highlights.length} alumni highlights`);

    const news = await client.fetch('*[_type == "newsItem"][0...3]');
    console.log(`Found ${news.length} news items`);

    const photos = await client.fetch('*[_type == "photo"][0...3]');
    console.log(`Found ${photos.length} photos`);

    if (events.length > 0) {
      console.log('Sample event:', events[0]);
    }

    console.log('CMS connection test completed successfully!');
  } catch (error) {
    console.error('Error testing CMS connection:', error.message);
  }
}

testFetch();
