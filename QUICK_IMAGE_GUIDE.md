# Quick Image Integration Guide

## 🚀 Quick Steps

### 1. Download Images

**Sora 2:** https://www.globalbrandsmagazine.com/wp-content/uploads/2025/10/Sora-2.webp
**Flow:** From the provided base64 link

### 2. Save to Correct Folder

```
public/images/
├── sora2-showcase.webp
└── flow-showcase.jpg
```

### 3. That's It! ✅

The website is already set up with:
- ✅ Image containers in VideoGeneration page  
- ✅ Image containers in Home page
- ✅ `<img>` tags with fallbacks to icons
- ✅ Path already configured: `/images/sora2-showcase.webp`

## 📍 Where Images Are Used

| Location | Component | Size | Image Path |
|----------|-----------|------|------------|
| Home Page | AI Tools Section | 128px height | `/images/flow-showcase.jpg` |
| Home Page | AI Tools Section | 128px height | `/images/sora2-showcase.webp` |
| VideoGeneration Page | Sora 2 Showcase | 256px height | `/images/flow-showcase.jpg` |
| VideoGeneration Page | Flow Showcase | 256px height | `/images/sora2-showcase.webp` |

## 🎨 Image Specifications

```
Format: WebP (Sora2) or JPG (Flow)
Dimensions: 1200 x 675 px (16:9)
File Size: <500KB
Quality: 75-85% compression
```

## 🔧 If Images Don't Show

1. **Check file exists:**
   ```
   public/images/sora2-showcase.webp exists? ✓
   public/images/flow-showcase.jpg exists? ✓
   ```

2. **Check file path:**
   - Use `/images/filename.ext` (starts with slash)
   - Not `images/filename.ext`
   - Not `./images/filename.ext`

3. **Clear cache:**
   - Ctrl+Shift+R (Windows)
   - Cmd+Shift+R (Mac)

4. **Check console:**
   - F12 → Console tab
   - Look for 404 errors

## 📝 File Checklist

```
□ Sora 2 image downloaded
□ Flow image downloaded
□ public/images/ folder exists
□ Images saved to public/images/
□ Dev server restarted (npm run dev)
□ Images appear on website
```

## 🖼️ Future Image Additions

Want to add more images? Just add them to `public/images/` and update:

**Home Page:** `src/pages/Home.tsx` (line ~268)
```tsx
{ name: 'Flow', image: '/images/flow-showcase.jpg' }
```

**VideoGeneration Page:** `src/pages/VideoGeneration.tsx` (line ~280)
```tsx
{i === 0 ? "/images/flow-showcase.jpg" : "/images/sora2-showcase.webp"}
```

**Portfolio:** `src/pages/Portfolio.tsx`
```tsx
<VideoShowcase imageUrl="/images/project-name.jpg" ... />
```

## 💡 Pro Tips

1. **Use WebP format** for Sora 2 image (smaller file size)
2. **Use JPG for Flow** (universal compatibility)  
3. **Optimize before uploading:** Use TinyPNG.com
4. **Test on mobile:** Images scale responsively
5. **Add titles:** Use `alt` attribute for SEO

---

That's it! 🎉 Your website is ready to display Sora 2 and Flow images.

**Questions?** Check `IMAGE_SETUP_GUIDE.md` for detailed instructions.
