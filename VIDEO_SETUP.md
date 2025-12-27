# Video Streaming Setup with Vercel Blob

Your video is currently set up to stream from Vercel Blob Storage with a local fallback.

## Current Setup

✅ Video file: `public/video.mp4` (26MB - fallback)
✅ Video player component created
✅ Integration complete in Sample Insight section

## Option 1: Use Local Video (Current - Works Immediately)

The video will be served from your Next.js public folder. This works immediately but:
- ⚠️ Increases deployment size by 26MB
- ⚠️ No CDN optimization
- ✅ No external setup required

**To use this:** Just deploy as-is. The video is already in `/public/video.mp4`

## Option 2: Upload to Vercel Blob (Recommended for Production)

For better performance and smaller deployments:

### Step 1: Set up Vercel Blob Storage

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Storage** tab
4. Click **Create Database** → Choose **Blob**
5. Copy the `BLOB_READ_WRITE_TOKEN`

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

### Step 3: Upload the Video

Run the upload script:

```bash
npm run upload-video
```

This will:
- Upload `public/video.mp4` to Vercel Blob
- Generate a CDN URL
- Display the URL to add to your environment variables

### Step 4: Add Video URL to Environment

Copy the URL from the upload output and add to `.env.local`:

```bash
NEXT_PUBLIC_SAMPLE_VIDEO_URL=https://xxxxxxxxx.public.blob.vercel-storage.com/sample-insight-video.mp4
```

### Step 5: Deploy

Add the `NEXT_PUBLIC_SAMPLE_VIDEO_URL` to your Vercel project environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_SAMPLE_VIDEO_URL` with the blob URL
3. Deploy!

## Benefits of Vercel Blob

✅ Global CDN delivery (faster loading worldwide)
✅ Automatic video optimization
✅ Smaller deployment size (video not in bundle)
✅ Better scalability
✅ Free tier: 1GB storage, 1GB bandwidth

## Video Player Features

The custom video player includes:
- ✅ Play/pause overlay
- ✅ Smooth blur effect when paused
- ✅ Responsive design
- ✅ Mobile-optimized (playsInline)
- ✅ Accessible controls

## Removing Local Video (After Upload)

Once you've uploaded to Vercel Blob, you can optionally remove the local file to reduce repo size:

```bash
rm public/video.mp4
```

The component will automatically use the Vercel Blob URL from environment variables.
