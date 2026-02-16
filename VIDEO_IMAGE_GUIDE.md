# 📁 Video & Image File Placement Guide

Your website is now set up to display videos and images in service portfolios. Here's where to add your files:

## **Video Files Location**

### **Create/Add files to: `public/videos/`**

```
public/videos/
├── dog.mp4              (YouTube Shorts example)
├── ber.mp4              (Faceless YouTube Editing)
├── serum.mp4            (Brand Showcase)
├── lead-automation.mp4  (n8n CRM Automation)
├── email-automation.mp4 (n8n Email Marketing)
├── whatsapp-automation.mp4 (n8n WhatsApp)
├── data-sync.mp4        (n8n Data Sync)
├── ai-support.mp4       (Agentic AI Support Bot)
├── ai-sales.mp4         (Agentic AI Sales)
└── [add more videos here]
```

## **Image Files Location**

### **Create/Add files to: `public/images/`**

#### **Website Development Images**
```
public/images/
├── website-ecommerce.jpg    (E-Commerce Store)
├── website-saas.jpg         (SaaS Landing Page)
├── website-corporate.jpg    (Corporate Website)
├── website-booking.jpg      (Service Booking)
```

#### **App Development Images**
```
├── app-fitness.jpg          (Fitness Tracking App)
├── app-delivery.jpg         (Food Delivery App)
├── app-business.jpg         (Business Management)
├── app-education.jpg        (Educational Platform)
```

#### **Agentic AI Solution Images**
```
├── ai-leads.jpg             (AI Lead Generation)
├── ai-analytics.jpg         (AI Data Analysis)
```

## **Video Specifications**

- **Format:** MP4 (H.264 codec recommended)
- **Resolution:** 1080p (1920×1080) or higher
- **Frame rate:** 24-30 fps
- **File size:** Keep under 50MB for fast loading
- **Duration:** 15-60 seconds for preview videos

## **Image Specifications**

- **Format:** JPG or PNG
- **Resolution:** 1200×675px minimum (16:9 aspect ratio)
- **File size:** Keep under 500KB (use TinyPNG.com to compress)
- **Quality:** 75-85% compression for photos

## **Which Videos Go Where?**

### **YouTube Shorts Editing Service**
- **File:** `dog.mp4`
- **Location:** `public/videos/dog.mp4`
- **Use:** Shows in Services page under "YouTube Shorts Editing"

### **Faceless YouTube Editing Service**
- **File:** `ber.mp4`
- **Location:** `public/videos/ber.mp4`
- **Use:** Shows in Services page under "Faceless YouTube Video Editing"

### **Brand Showcase (Home Page)**
- **File:** `serum.mp4`
- **Location:** `public/videos/serum.mp4`
- **Use:** Plays in new "Brand Showcase" section on Home page

### **n8n Automation Service Details**
- Files: `lead-automation.mp4`, `email-automation.mp4`, `whatsapp-automation.mp4`, `data-sync.mp4`
- Use: In /service/n8n-automation page portfolio items

### **Agentic AI Solution Details**
- Files: `ai-support.mp4`, `ai-sales.mp4`
- Use: In /service/agentic-ai-solutions page portfolio items

## **Website Development Images**
- 4 images showing different website projects
- Use: In /service/website-development page portfolio

## **App Development Images**
- 4 images showing different app projects
- Use: In /service/app-development page portfolio

## **Agentic AI Images**
- 2 images for AI projects
- Use: In /service/agentic-ai-solutions page portfolio

## **How to Add Files**

### **Step 1: Create Directories**
Already created! ✅
- `public/videos/` - for all video files
- `public/images/` - for all image files (already exists)

### **Step 2: Add Your Files**

**Option A: Using File Explorer**
1. Navigate to `d:\bussiness\public\videos\`
2. Copy/paste your video files here
3. Navigate to `d:\bussiness\public\images\`
4. Copy/paste your image files here

**Option B: Using Terminal**
```powershell
# Copy videos
Copy-Item "C:\your\videos\dog.mp4" "d:\bussiness\public\videos\"
Copy-Item "C:\your\videos\ber.mp4" "d:\bussiness\public\videos\"
Copy-Item "C:\your\videos\serum.mp4" "d:\bussiness\public\videos\"

# Copy images
Copy-Item "C:\your\images\website-ecommerce.jpg" "d:\bussiness\public\images\"
```

### **Step 3: Verify Files**
Files should appear automatically on refresh. If not:
1. Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Restart dev server: Stop with `Ctrl+C`, then run `npm run dev`

## **Check File Status**

To verify files are in right place:

```powershell
# Check videos
Get-ChildItem "d:\bussiness\public\videos\" -Recurse

# Check images  
Get-ChildItem "d:\bussiness\public\images\" -Recurse
```

## **Where Files Appear**

| File | Shows Here | Service Page |
|------|-----------|--------------|
| `dog.mp4` | Services page | YouTube Shorts Editing |
| `ber.mp4` | Services page | Faceless YouTube Editing |
| `serum.mp4` | Home page | Brand Showcase section |
| `website-*.jpg` | Service detail page | Website Development |
| `app-*.jpg` | Service detail page | App Development |
| `ai-*.jpg` + `ai-*.mp4` | Service detail page | Agentic AI Solutions |

## **File Naming Convention**

Use descriptive names in lowercase with hyphens:
- ✅ `website-ecommerce.jpg`
- ✅ `app-fitness-demo.mp4`
- ✅ `ai-sales-assistant.mp4`
- ❌ `image1.jpg`
- ❌ `video_2.mp4`

## **Troubleshooting**

**Videos not showing?**
1. Check file path: `/videos/filename.mp4` (must start with `/`)
2. File uploaded to `public/videos/` folder
3. Browser cache cleared
4. Dev server restarted

**Images not showing?**
1. Check file path: `/images/filename.jpg`
2. File uploaded to `public/images/` folder
3. File not corrupted (try opening manually)
4. File size under 500KB

**Still having issues?**
- Use browser DevTools (F12 → Network tab)
- Look for 404 errors on missing files
- Check console for error messages

## **Next Steps**

1. ✅ Collect your video files
2. ✅ Collect your image files  
3. ✅ Compress images to <500KB at TinyPNG.com
4. ✅ Copy files to correct folders
5. ✅ Refresh website to see changes
6. ✅ Check each service page to verify

---

**Your website is ready!** Just add your files and it will display them automatically. 🎉
