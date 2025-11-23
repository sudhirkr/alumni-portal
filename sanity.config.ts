import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { eventType } from './schemas/event';
import { alumniHighlightType } from './schemas/alumniHighlight';
import { newsItemType } from './schemas/newsItem';
import { photoType } from './schemas/photo';

export default defineConfig({
  name: 'default',
  title: 'CMI Alumni Portal',

  projectId: process.env.SANITY_PROJECT_ID || 'gzqpmpjn',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: [
      eventType,
      alumniHighlightType,
      newsItemType,
      photoType,
    ],
  },
});
