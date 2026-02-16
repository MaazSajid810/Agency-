# Image Setup Guide for Rajowalia Automation Studio

This guide explains how to add images for **Sora 2** and **Flow** throughout your website.

## Quick Start

### 1. **VideoGeneration Page** (Primary Tools Showcase)
Location: `src/pages/VideoGeneration.tsx`

The page has placeholder containers ready for:
- **Sora 2 Image** - Replace the purple placeholder with your Sora 2 image
- **Flow Image** - Replace the blue placeholder with your Flow image

### 2. **Adding Images to VideoShowcase Component**

The `VideoShowcase` component in `src/components/VideoShowcase.tsx` now supports:
```tsx
<VideoShowcase
  title="Project Title"
  description="Description"
  tool="sora2" // or "flow"
  imageUrl="path/to/image.jpg" // NEW: Add image URL here
  videoUrl="path/to/video.mp4" // Optional: Add video URL
/>
```

## Image Files to Add

### Sora 2 Images
From your provided URL: https://www.globalbrandsmagazine.com/wp-content/uploads/2025/10/Sora-2.webp

**Recommended Steps:**
1. Download the Sora 2 image from the URL above
2. Save it to `public/images/sora2-showcase.webp`
3. Update the image path in the VideoGeneration page

### Flow Images
From your base64 data, you'll need to:
1. Download the Flow image from Google Images
2. Save it to `public/images/flow-showcase.jpg`
3. Update the image path

## File Structure
```
public/
├── images/
│   ├── sora2-showcase.webp
│   ├── flow-showcase.jpg
│   ├── sora2-features.jpg
│   ├── flow-features.jpg
│   └── ...
```

## Where Images Are Used

### 1. VideoGeneration Page
- **Location:** `src/pages/VideoGeneration.tsx` (lines ~250-300)
- **Two large showcase containers** for Sora 2 and Flow
- **Size:** 300px height with aspect-video on mobile

### 2. Home Page
- **Location:** `src/pages/Home.tsx`
- **Section:** "AI-Powered Video Generation"
- **Two tool cards** with placeholder images

### 3. Video Examples Section
- Uses `VideoShowcase` component with `imageUrl` prop
- Can display individual project images

## Implementation Steps

### Step 1: Create Public Images Directory
```bash
mkdir -p public/images
```

### Step 2: Add Images
1. Download Sora 2 image from the provided URL
2. Download Flow image 
3. Save them to `public/images/`

### Step 3: Update VideoGeneration.tsx (Around line 280)

Find this section:
```tsx
{/* Image Placeholder */}
<div className={`w-full h-64 bg-gradient-to-br ${
  i === 0 ? 'from-blue-500 to-cyan-500' :
  'from-purple-500 to-pink-500'
} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group`}>
```

And replace with:
```tsx
{/* Sora 2 / Flow Image */}
<img
  src={i === 0 ? "/images/flow-showcase.jpg" : "/images/sora2-showcase.webp"}
  alt={tool.name}
  className="w-full h-64 object-cover rounded-xl mb-6"
/>
```

### Step 4: Update VideoShowcase Usage

In `src/pages/VideoGeneration.tsx` or `src/pages/Portfolio.tsx`:

```tsx
<VideoShowcase
  title="Motion Graphics Project"
  description="Created with Flow technology"
  tool="flow"
  imageUrl="/images/flow-project-1.jpg"  // Add this
/>
```

## Image Recommendations

### Size Guidelines
- **Showcase Images:** 1200x675px (16:9 aspect ratio)
- **Project Images:** 800x450px minimum
- **Format:** WebP for Sora 2, JPG for Flow (flexible)

### File Size
- Compress images to <500KB each
- Use tools like: ImageOptim, TinyPNG, or WEBP converters

## CSS Classes for Images

Ready-made image containers:
- `.glass` - Glassmorphic frame
- `.rounded-xl` - Rounded corners
- `.smooth-transition` - Hover effects
- `group-hover/video:scale-110` - Zoom on hover

## Example: Adding a Complete Image Flow

```tsx
// In VideoGeneration.tsx or any page
<motion.div className="glass p-2 rounded-xl hover:scale-105 smooth-transition">
  <img 
    src="/images/sora2-showcase.webp" 
    alt="Sora 2 AI Video Generation"
    className="w-full rounded-lg object-cover"
  />
  <div className="p-4">
    <h3 className="font-bold">Sora 2 in Action</h3>
    <p className="text-gray-400">AI-powered video generation</p>
  </div>
</motion.div>
```

## Testing Images Locally

1. **Place image in public folder:**
   ```
   public/images/sora2-showcase.webp
   ```

2. **Reference in component:**
   ```tsx
   <img src="/images/sora2-showcase.webp" alt="Sora 2" />
   ```

3. **Run dev server:**
   ```bash
   npm run dev
   ```

4. **View at:**
   ```
   http://localhost:5173/video-generation
   ```

## Optimization Tips

1. **Web Optimization:**
   - Use WebP format for modern browsers
   - Provide JPG fallback for older browsers
   - Compress all images aggressively

2. **Responsive Images:**
   ```tsx
   <picture>
     <source srcSet="/images/sora2-showcase.webp" type="image/webp" />
     <img src="/images/sora2-showcase.jpg" alt="Sora 2" />
   </picture>
   ```

3. **Lazy Loading:**
   ```tsx
   <img src="/images/sora2-showcase.webp" alt="Sora 2" loading="lazy" />
   ```

## Need Help?

If images don't appear:
1. Check file path is correct
2. Verify image is in `public/images/` folder
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for errors (F12)

---

**Last Updated:** February 14, 2026
**Website:** Rajowalia Automation Studio
