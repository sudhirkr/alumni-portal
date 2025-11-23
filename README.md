## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## CMS Setup (Sanity)

This project uses [Sanity CMS](https://sanity.io) for content management. The CMS is already configured but needs setup:

### 1. Sanity Project Setup
- Visit [sanity.io](https://sanity.io) and create an account
- Create a new project (Project ID: `gzqpmpjn`)
- Add the schemas to your Sanity project by deploying via CLI or copying the schemas manually

### 2. Environment Variables
Update `.env.local` with your Sanity credentials:
```
SANITY_PROJECT_ID=gzqpmpjn
SANITY_DATASET=production
```

### 3. Studio Setup (Optional - for content management)
The Sanity Studio allows you to manage content through a web interface.

**Option 1: Use existing config**
If you want to set up a separate studio project:
```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create new studio project
cd ..
mkdir alumni-studio
cd alumni-studio
sanity init --template blank --project gzqpmpjn --dataset production
```

**Option 2: Copy schemas to your Sanity project**
Go to your Sanity project dashboard, navigate to API schemas, and manually add the 4 schema types defined in the `schemas/` folder.

### 4. Populate Content
Run the population script to import static data:
```bash
node populate-cms.js
```

### 5. Content Types
The CMS manages 4 content types:
- **Events**: Alumni events, reunions, talks
- **Alumni Highlights**: Featured alumni profiles with photos
- **News Items**: Announcements and updates
- **Photos**: Gallery images with captions

Content falls back to static data if CMS is unavailable.
