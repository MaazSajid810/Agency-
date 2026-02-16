# Images Folder

Add all promotional and showcase images here for the website.

## Image Files to Add

### Sora 2 Images
- `sora2-showcase.webp` - Main showcase image for Sora 2 tool
- `sora2-features.jpg` - Features/capabilities image
- `sora2-demo.jpg` - Demo/example video frame

**Source:** https://www.globalbrandsmagazine.com/wp-content/uploads/2025/10/Sora-2.webp

### Flow Images  
- `flow-showcase.jpg` - Main showcase image for Flow tool
- `flow-features.jpg` - Features/capabilities image
- `flow-demo.jpg` - Demo/example animation

### Project Images (Optional)
- `history-video-sample.jpg` - Sample history video thumbnail
- `sora2-project-1.jpg` - Sora 2 project example
- `flow-project-1.jpg` - Flow project example
- `portfolio-sample.jpg` - Portfolio showcase

## Naming Convention

Use descriptive names in kebab-case:
- ✅ `sora2-ai-generation.webp`
- ✅ `flow-motion-graphics.jpg`
- ❌ `image1.png`
- ❌ `tool_showcase.jpg`

## Image Specifications

### Web Optimization
- **Format:** WebP (preferred), JPG (fallback)
- **Quality:** 75-85% for photos, 90% for graphics
- **Size:** Compress to <500KB per image
- **Dimensions:** 
  - Showcase: 1200x675px (16:9)
  - Thumbnails: 400x300px
  - Project cards: 800x450px

### Tools to Optimize Images
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- FileZilla or built-in tools to convert to WebP

## Usage in Components

```tsx
// Simple image
<img src="/images/sora2-showcase.webp" alt="Sora 2" />

// With fallback
<picture>
  <source srcSet="/images/sora2-showcase.webp" type="image/webp" />
  <img src="/images/sora2-showcase.jpg" alt="Sora 2" />
</picture>

// With lazy loading
<img src="/images/flow-showcase.jpg" alt="Flow" loading="lazy" />
```

## Current Placeholder Locations

### VideoGeneration Page
- Lines ~280-300: Sora 2 and Flow showcase space (ready for images)

### Home Page
- Lines ~264-280: AI tools section (ready for images)

### Services Page
- Professional Tools section (can add images)

### Portfolio Page
- Project showcases (can add images to VideoShowcase components)

---

**Instructions:** Download images from the provided URLs and save them here, then update component paths to use them.
