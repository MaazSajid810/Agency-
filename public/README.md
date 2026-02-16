# Public Assets

This folder contains all public assets that are served directly by the web server.

## Structure

```
public/
├── images/          # All image files (Sora2, Flow, projects, etc.)
│   ├── sora2-showcase.webp
│   ├── flow-showcase.jpg
│   └── ...
├── videos/          # Optional: Video files for hero section
└── ...
```

## How to Use

### Adding Images
1. Save your image files to the `images/` folder
2. Reference them in components with absolute paths:
   ```tsx
   <img src="/images/sora2-showcase.webp" alt="Sora 2" />
   ```

### Image Naming
Use descriptive, lowercase names with hyphens:
- ✅ `/images/sora2-ai-generation.webp`
- ✅ `/images/flow-motion-graphics.jpg`
- ❌ `/images/sora2.png`
- ❌ `/images/image_1.jpg`

## File Size Limits

- **Images:** <500KB each
- **Videos:** <5MB each
- **Total:** Keep total assets <10MB for fast loading

## Image Optimization

Before adding images:
1. **Compress:** Use TinyPNG or ImageOptim
2. **Format:** Convert to WebP for better compression
3. **Dimensions:** Resize to needed dimensions (don't rely on CSS scaling)
4. **Quality:** 75-85% JPEG quality is usually fine

## Todo

- [ ] Add `sora2-showcase.webp` image
- [ ] Add `flow-showcase.jpg` image
- [ ] Add project thumbnail images
- [ ] Optimize all images for web
- [ ] Add video assets if needed

See `images/README.md` for detailed image specifications.
