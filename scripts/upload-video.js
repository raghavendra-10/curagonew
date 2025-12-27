/**
 * Script to upload video to Vercel Blob Storage
 *
 * Usage:
 * 1. Set your BLOB_READ_WRITE_TOKEN in .env.local:
 *    BLOB_READ_WRITE_TOKEN=your_token_here
 *
 * 2. Run: node scripts/upload-video.js
 */

import { config } from 'dotenv'
import { put } from '@vercel/blob'
import { readFileSync } from 'fs'
import { join } from 'path'

// Load environment variables from .env.local
config({ path: '.env.local' })

async function uploadVideo() {
  try {
    const videoPath = join(process.cwd(), 'public', 'video.mp4')
    const videoBuffer = readFileSync(videoPath)

    console.log('Uploading video to Vercel Blob...')
    console.log('File size:', (videoBuffer.length / 1024 / 1024).toFixed(2), 'MB')

    const blob = await put('sample-insight-video.mp4', videoBuffer, {
      access: 'public',
      contentType: 'video/mp4',
    })

    console.log('✅ Upload successful!')
    console.log('Video URL:', blob.url)
    console.log('\nAdd this to your .env.local file:')
    console.log(`NEXT_PUBLIC_SAMPLE_VIDEO_URL=${blob.url}`)

    return blob.url
  } catch (error) {
    console.error('❌ Upload failed:', error.message)

    if (error.message.includes('BLOB_READ_WRITE_TOKEN')) {
      console.log('\n⚠️  Please set up your Vercel Blob token:')
      console.log('1. Go to https://vercel.com/dashboard')
      console.log('2. Select your project > Storage > Create Database > Blob')
      console.log('3. Copy the BLOB_READ_WRITE_TOKEN')
      console.log('4. Add it to .env.local file')
    }

    process.exit(1)
  }
}

uploadVideo()
