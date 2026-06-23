# Varenya Jain - Personal Website

A minimalist, zero-dependency personal portfolio website with a Unix man-page aesthetic. Built with pure HTML, CSS, and JavaScript—no frameworks, no build process, no dependencies.

🌐 **Live Site:** [varenyaj.github.io](https://varenyaj.github.io)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Customization Guide](#customization-guide)
  - [Updating Homepage Content](#updating-homepage-content)
  - [Changing Colors](#changing-colors)
  - [Adding Blog Posts](#adding-blog-posts)
  - [Managing Projects](#managing-projects)
  - [Modifying Navigation](#modifying-navigation)
- [Deployment](#deployment)
- [Advanced Usage](#advanced-usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This is a **pure static website** built without any frameworks or build tools. Everything is standard HTML, CSS, and vanilla JavaScript, making it:

- ✅ **Zero dependencies** - No Node.js, Ruby, Python, or any runtime required
- ✅ **No build process** - Edit files and they work immediately
- ✅ **Blazingly fast** - Total page size ~16KB (compared to typical 2MB+ sites)
- ✅ **Works offline** - Test and develop without an internet connection
- ✅ **Future-proof** - HTML/CSS/JS will work forever
- ✅ **Easy to understand** - No magic, just simple web standards
- ✅ **GitHub Pages ready** - Deploy instantly with zero configuration

### Design Philosophy

Inspired by Unix man pages (manual pages), this site emphasizes:
- **Content over chrome** - Information first, decoration second
- **Readability** - Monospace font, clear hierarchy, excellent typography
- **Accessibility** - Semantic HTML, keyboard navigation, screen reader friendly
- **Performance** - Minimal code, no external dependencies, instant loading

---

## ✨ Features

- 🌓 **Automatic dark mode** - Respects system preference (`prefers-color-scheme`)
- 📱 **Fully responsive** - Perfect on desktop, tablet, and mobile
- 🎨 **Customizable colors** - Change accent color in one place
- 📝 **Blog system** - Simple HTML-based blogging
- 🚀 **Projects showcase** - Highlight your work and research
- 📄 **PDF support** - Direct links to CV, papers, and documents
- 🖨️ **Print-friendly** - Optimized styles for printing
- ⚡ **Lightning fast** - No JavaScript frameworks, pure vanilla JS
- 🔍 **SEO optimized** - Proper meta tags and semantic HTML

---

## 🚀 Quick Start

### Prerequisites

**Nothing!** Just a text editor and a web browser.

Optional (for local testing):
- Any simple HTTP server (Python, PHP, or just double-click `index.html`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VarenyaJ/varenyaj.github.io.git
   cd varenyaj.github.io
   ```

2. **Open in browser**
   ```bash
   # Option 1: Just open the file
   firefox index.html
   # or
   google-chrome index.html
   
   # Option 2: Use Python's built-in server
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Use PHP's built-in server
   php -S localhost:8000
   ```

3. **Start editing!**
   - Edit HTML files directly in your favorite editor
   - Refresh browser to see changes
   - No compilation, no building, no waiting

---

## 📁 File Structure

```
varenyaj.github.io/
│
├── index.html              # Homepage (main landing page)
├── writing.html            # Blog listing page
├── projects.html           # Projects showcase page
│
├── posts/                  # Individual blog posts
│   └── welcome-to-my-blog.html
│
├── assets/
│   ├── css/
│   │   └── style.css       # All styling (one file!)
│   ├── docs/               # PDFs and documents
│   │   ├── Varenya_Jain_CV.pdf
│   │   ├── Varenya_Jain_UIUC_1792823_eDiploma.pdf
│   │   └── ...
│   └── img/                # Images and graphics
│       ├── email.png
│       ├── github.png
│       └── ...
│
├── fun/                    # Fun projects subdirectory
│   └── index.html
│
├── space/                  # Space explorer subdirectory
│   └── index.html
│
├── favicon/
│   └── manifest.json
│
├── CNAME                   # Custom domain (optional)
└── README.md              # This file
```

### Key Files Explained

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `index.html` | Main homepage | Often (update bio, experience) |
| `writing.html` | Blog post listing | Each new post |
| `projects.html` | Project descriptions | Each new project |
| `posts/*.html` | Individual blog posts | When writing |
| `assets/css/style.css` | All styles (colors, layout) | Rarely (customize design) |
| `assets/docs/` | Your PDFs and credentials | When adding documents |

---

## 🎨 Customization Guide

### Updating Homepage Content

The homepage (`index.html`) contains all your main information. Here's how to update each section:

#### 1. Update Your Bio (Synopsis Section)

**Location:** `index.html` around line 40

```html
<section id="synopsis">
    <h2>SYNOPSIS</h2>
    <p>Good to see you here 👋</p>
    <p>I'm Varenya Jain, a computational biology researcher...</p>
    <!-- Edit these paragraphs with your info -->
</section>
```

**Example Edit:**
```html
<section id="synopsis">
    <h2>SYNOPSIS</h2>
    <p>Hello! 👋</p>
    <p>I'm [Your Name], a [Your Title] from [Your Location]. 
    I work on [Your Research Area] and specialize in [Your Skills].</p>
</section>
```

#### 2. Update Experience Section

**Location:** `index.html` around line 75

```html
<section id="experience">
    <h2>EXPERIENCE</h2>
    
    <div class="experience-item">
        <div class="experience-header">Job Title</div>
        <div class="experience-meta">Company | Dates</div>
        <p>Description of your role and accomplishments.</p>
    </div>
    
    <!-- Add more experience items as needed -->
</section>
```

**Example: Adding New Position**
```html
<div class="experience-item">
    <div class="experience-header">Senior Bioinformatics Scientist</div>
    <div class="experience-meta">Genomics Inc. | Jan 2026 - Present</div>
    <p>Leading development of novel variant calling pipelines 
    for rare disease diagnosis. Implemented machine learning 
    models that improved accuracy by 25%.</p>
</div>
```

#### 3. Update Skills

**Location:** `index.html` around line 115

```html
<div class="skills-list">
    <strong>Programming Languages:</strong><br>
    <span class="tag">Python</span>
    <span class="tag">R</span>
    <span class="tag">Bash</span>
    <!-- Add or remove tags -->
</div>
```

**Example: Adding New Skills**
```html
<div class="skills-list">
    <strong>Programming Languages:</strong><br>
    <span class="tag">Python</span>
    <span class="tag">R</span>
    <span class="tag">JavaScript</span>  <!-- NEW -->
    <span class="tag">SQL</span>          <!-- NEW -->
    <span class="tag">Bash</span>
</div>
```

#### 4. Update Contact Information

**Location:** `index.html` around line 180

```html
<div class="contact-info">
    <strong>Email:</strong> <a href="mailto:your@email.com">your@email.com</a><br>
    <strong>Role:</strong> Your Title<br>
    <strong>Location:</strong> Your Location
    
    <div class="contact-links">
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="mailto:your@email.com">Email</a>
    </div>
</div>
```

---

### Changing Colors

All colors are controlled by CSS variables at the top of `assets/css/style.css`.

**Location:** `assets/css/style.css`, lines 10-20

```css
:root {
  --bg-color: #fefefe;           /* Background color (light mode) */
  --text-color: #1a1a1a;         /* Text color (light mode) */
  --accent-color: #663399;       /* Links, headers, tags (CHANGE THIS!) */
  --secondary-color: #555;       /* Meta text, muted content */
  --border-color: #ddd;          /* Borders and dividers */
  --code-bg: #f5f5f5;           /* Code blocks and boxes */
  --link-hover-bg: #663399;     /* Link hover background (match accent) */
}
```

#### Color Scheme Examples

**Purple (Default)**
```css
--accent-color: #663399;
--link-hover-bg: #663399;
```

**Blue**
```css
--accent-color: #0066cc;
--link-hover-bg: #0066cc;
```

**Green**
```css
--accent-color: #009900;
--link-hover-bg: #009900;
```

**Red**
```css
--accent-color: #cc0000;
--link-hover-bg: #cc0000;
```

**Orange**
```css
--accent-color: #ff6600;
--link-hover-bg: #ff6600;
```

**Monochrome (Classic Terminal)**
```css
--accent-color: #444444;
--link-hover-bg: #444444;
```

**Dark mode colors automatically adjust!** Edit lines 22-32 for dark mode customization.

---

### Adding Blog Posts

Blog posts are simple HTML files. Here's the complete process:

#### Step 1: Create the Blog Post File

Create a new file in the `posts/` directory:

```bash
touch posts/my-new-post.html
```

#### Step 2: Use This Template

**File:** `posts/my-new-post.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Brief description for SEO">
    <title>Your Post Title | VARENYA(1)</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <div class="man-header">
            <span>VARENYA(1)</span>
            <span>Blog Post</span>
            <span>VARENYA(1)</span>
        </div>
        <nav class="site-nav">
            <a href="../index.html">Home</a>
            <a href="../writing.html">Writing</a>
            <a href="../projects.html">Projects</a>
            <a href="../assets/docs/Varenya_Jain_CV.pdf">CV</a>
        </nav>
    </header>

    <main>
        <article>
            <header style="margin-bottom: 30px;">
                <h1>Your Post Title</h1>
                <p style="color: var(--secondary-color); font-size: 0.9em;">
                    <time>November 15, 2025</time>
                </p>
                <div style="margin-top: 10px;">
                    <span class="tag">bioinformatics</span>
                    <span class="tag">tutorial</span>
                </div>
            </header>

            <section>
                <h2>INTRODUCTION</h2>
                <p>Start your post here...</p>

                <h2>MAIN CONTENT</h2>
                <p>Add your content in sections...</p>
                
                <h3>Subsection</h3>
                <p>More detailed content...</p>

                <h2>CODE EXAMPLES</h2>
                <pre><code>import pandas as pd
import numpy as np

# Your code here
data = pd.read_csv('data.csv')
print(data.head())</code></pre>

                <h2>CONCLUSION</h2>
                <p>Wrap up your post...</p>
            </section>

            <footer style="margin-top: 30px; padding-top: 20px; border-top: 2px solid var(--border-color);">
                <p><a href="../writing.html">← Back to Writing</a></p>
            </footer>
        </article>
    </main>

    <footer>
        <div class="man-footer">
            <span>varenyaj.github.io</span>
            <span id="current-date">November 2025</span>
            <span>VARENYA(1)</span>
        </div>
        <p style="margin-top: 10px; font-size: 0.85em;">
            <a href="../index.html#contact">Contact</a> | 
            <a href="../index.html">Back to Home</a>
        </p>
    </footer>

    <script>
        // Auto-update date in footer
        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        document.getElementById('current-date').textContent = 
            months[date.getMonth()] + ' ' + date.getFullYear();
    </script>
</body>
</html>
```

#### Step 3: Add to Blog Listing

**File:** `writing.html` (around line 30)

Add your post to the list:

```html
<ul class="post-list">
    <!-- NEW POST - Add this block -->
    <li class="post-item">
        <div class="post-date">November 15, 2025</div>
        <div class="post-title">
            <a href="posts/my-new-post.html">Your Post Title</a>
        </div>
        <div class="post-description">
            A brief 1-2 sentence description of what this post is about.
            Make it engaging!
        </div>
        <div class="post-tags">
            <span class="tag">bioinformatics</span>
            <span class="tag">tutorial</span>
            <span class="tag">python</span>
        </div>
    </li>
    
    <!-- Existing posts follow... -->
    <li class="post-item">
        <div class="post-date">October 21, 2025</div>
        ...
    </li>
</ul>
```

#### Complete Example: Writing About a Pipeline

**File:** `posts/dragen-cnv-pipeline.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Tutorial on implementing DRAGEN CNV detection in clinical workflows">
    <title>Implementing DRAGEN CNV Detection | VARENYA(1)</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <div class="man-header">
            <span>VARENYA(1)</span>
            <span>Blog Post</span>
            <span>VARENYA(1)</span>
        </div>
        <nav class="site-nav">
            <a href="../index.html">Home</a>
            <a href="../writing.html">Writing</a>
            <a href="../projects.html">Projects</a>
        </nav>
    </header>

    <main>
        <article>
            <header style="margin-bottom: 30px;">
                <h1>Implementing DRAGEN CNV Detection in Clinical Workflows</h1>
                <p style="color: var(--secondary-color); font-size: 0.9em;">
                    <time>November 15, 2025</time> • 10 min read
                </p>
                <div style="margin-top: 10px;">
                    <span class="tag">bioinformatics</span>
                    <span class="tag">genomics</span>
                    <span class="tag">CNV</span>
                    <span class="tag">tutorial</span>
                </div>
            </header>

            <section>
                <h2>INTRODUCTION</h2>
                <p>Copy number variants (CNVs) play a crucial role in genetic diseases, 
                but detecting them accurately in clinical settings remains challenging. 
                The DRAGEN platform offers enrichment-based CNV detection that can be 
                integrated into existing variant interpretation workflows.</p>

                <p>In this post, I'll walk through how we implemented DRAGEN CNV detection 
                at NCSA and the lessons we learned along the way.</p>

                <h2>BACKGROUND</h2>
                <p>Traditional CNV calling methods struggle with...</p>

                <h3>Why DRAGEN?</h3>
                <ul>
                    <li>Hardware-accelerated analysis</li>
                    <li>Enrichment-based detection for targeted panels</li>
                    <li>Clinical-grade accuracy</li>
                </ul>

                <h2>IMPLEMENTATION</h2>
                
                <h3>Step 1: Environment Setup</h3>
                <pre><code># Install DRAGEN
dragen --version

# Configure for CNV analysis
dragen-cnv-config.sh --enable-enrichment</code></pre>

                <h3>Step 2: Pipeline Integration</h3>
                <p>We integrated DRAGEN into our existing Nextflow pipeline...</p>

                <pre><code>process call_cnvs {
    input:
    path bam
    path reference
    
    output:
    path "*.cnv.vcf"
    
    script:
    """
    dragen -f ${reference} \\
           -b ${bam} \\
           --enable-cnv true \\
           --output-directory . \\
           --output-file-prefix ${sample_id}
    """
}</code></pre>

                <h2>RESULTS</h2>
                <p>After running on 100 clinical samples, we observed...</p>

                <h2>LESSONS LEARNED</h2>
                <ol>
                    <li><strong>Quality control is critical</strong> - Always validate CNV calls</li>
                    <li><strong>Coverage matters</strong> - Enrichment panels need adequate depth</li>
                    <li><strong>Documentation helps</strong> - Keep detailed notes on edge cases</li>
                </ol>

                <h2>CONCLUSION</h2>
                <p>DRAGEN CNV detection has proven valuable in our clinical pipeline, 
                improving both accuracy and turnaround time. The key is proper integration 
                and thorough validation.</p>

                <hr>
                <p><em>Questions? Feel free to <a href="../index.html#contact">reach out</a>!</em></p>
            </section>

            <footer style="margin-top: 30px; padding-top: 20px; border-top: 2px solid var(--border-color);">
                <p><a href="../writing.html">← Back to Writing</a></p>
            </footer>
        </article>
    </main>

    <footer>
        <div class="man-footer">
            <span>varenyaj.github.io</span>
            <span id="current-date">November 2025</span>
            <span>VARENYA(1)</span>
        </div>
    </footer>

    <script>
        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        document.getElementById('current-date').textContent = 
            months[date.getMonth()] + ' ' + date.getFullYear();
    </script>
</body>
</html>
```

Then add to `writing.html`:

```html
<li class="post-item">
    <div class="post-date">November 15, 2025</div>
    <div class="post-title">
        <a href="posts/dragen-cnv-pipeline.html">Implementing DRAGEN CNV Detection in Clinical Workflows</a>
    </div>
    <div class="post-description">
        A practical guide to integrating DRAGEN's enrichment-based CNV detection 
        into existing clinical genomics pipelines, with lessons learned from 
        analyzing 100+ samples.
    </div>
    <div class="post-tags">
        <span class="tag">bioinformatics</span>
        <span class="tag">genomics</span>
        <span class="tag">CNV</span>
        <span class="tag">tutorial</span>
    </div>
</li>
```

---

### Managing Projects

Projects are listed in `projects.html`. Here's how to add or modify them:

#### Adding a New Project

**Location:** `projects.html` around line 25

```html
<div class="experience-item">
    <div class="experience-header">Project Title</div>
    <div class="experience-meta">Organization/Context | Dates</div>
    <p>Description of the project, what you did, and what you achieved. 
    Be specific about your contributions and impact.</p>
    <p><strong>Technologies:</strong> 
        <span class="tag">Python</span> 
        <span class="tag">Docker</span> 
        <span class="tag">AWS</span>
    </p>
</div>
```

#### Complete Example: Adding Research Project

```html
<h2>RESEARCH PROJECTS</h2>

<!-- NEW PROJECT -->
<div class="experience-item">
    <div class="experience-header">Multi-Omics Integration Platform</div>
    <div class="experience-meta">Nov 2025 - Present | Berlin Institute of Health</div>
    <p>Developed a unified platform for integrating genomics, transcriptomics, 
    and proteomics data from rare disease cohorts. Implemented machine learning 
    models for genotype-phenotype correlation that improved diagnostic yield 
    by 30%.</p>
    <p><strong>Technologies:</strong> 
        <span class="tag">Python</span> 
        <span class="tag">TensorFlow</span> 
        <span class="tag">PostgreSQL</span>
        <span class="tag">Docker</span>
        <span class="tag">Nextflow</span>
    </p>
    <p><strong>Links:</strong> 
        <a href="https://github.com/yourusername/project">GitHub</a> | 
        <a href="paper.pdf">Paper</a>
    </p>
</div>

<!-- Existing projects... -->
<div class="experience-item">
    <div class="experience-header">Fetal Anomalies Repository</div>
    ...
</div>
```

#### Adding Publications Section

**Location:** `projects.html` around line 80

```html
<h2>PUBLICATIONS & PRESENTATIONS</h2>

<div class="experience-item">
    <p><strong>Journal Article:</strong><br>
    <em>Jain, V., Robinson, P., et al.</em> (2025). 
    "Automated HPO Term Extraction from Prenatal Ultrasound Reports Using LLMs." 
    <strong>Nature Genetics</strong>, 57(3), 234-245.
    <a href="https://doi.org/10.1038/ng.xxxx">DOI</a>
    </p>
</div>

<div class="experience-item">
    <p><strong>Conference Talk:</strong><br>
    <em>American Society of Human Genetics Annual Meeting</em> (2025).<br>
    "Federated Phenopacket Repositories for Rare Disease Research"
    <a href="slides.pdf">Slides</a>
    </p>
</div>

<div class="experience-item">
    <p><strong>Poster:</strong><br>
    <em>Intelligent Systems for Molecular Biology (ISMB)</em> (2024).<br>
    "Parallel Processing Optimization for Next-Generation Sequencing Analysis"
    <a href="poster.pdf">PDF</a>
    </p>
</div>
```

---

### Modifying Navigation

Navigation links appear in the header of every page. To change them:

#### Homepage Navigation

**File:** `index.html` (around line 20)

```html
<nav class="site-nav">
    <a href="#synopsis">Synopsis</a>
    <a href="#description">Description</a>
    <a href="#experience">Experience</a>
    <a href="#options">Options</a>
    <a href="#contact">Contact</a>
    <a href="writing.html">Writing</a>
    <a href="projects.html">Projects</a>
    <a href="assets/docs/Varenya_Jain_CV.pdf">CV</a>
</nav>
```

**Adding a new section:**
1. Add section to `index.html`:
   ```html
   <section id="publications">
       <h2>PUBLICATIONS</h2>
       <p>Content here...</p>
   </section>
   ```

2. Add nav link:
   ```html
   <a href="#publications">Publications</a>
   ```

#### Other Pages Navigation

**Files:** `writing.html`, `projects.html`, `posts/*.html`

```html
<nav class="site-nav">
    <a href="../index.html">Home</a>        <!-- Or just index.html if not in posts/ -->
    <a href="../writing.html">Writing</a>
    <a href="../projects.html">Projects</a>
    <a href="../assets/docs/Varenya_Jain_CV.pdf">CV</a>
</nav>
```

**Note:** Use `../` prefix when linking from `posts/` subdirectory!

---

## 🚢 Deployment

### Deploying to GitHub Pages

GitHub Pages automatically serves your site from the repository.

#### Method 1: Direct Push to Main

```bash
# Stage all changes
git add -A

# Commit
git commit -m "Update site content"

# Push to main branch
git push origin main
```

Your site will be live at `https://yourusername.github.io` in 2-5 minutes!

#### Method 2: Branch Workflow

```bash
# Work on a feature branch
git checkout -b update-blog-post

# Make changes, then commit
git add writing.html posts/new-post.html
git commit -m "Add new blog post about genomics"

# Push branch
git push origin update-blog-post

# Create pull request on GitHub, review, then merge to main
# Site updates automatically after merge
```

### Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

That's it! No build configuration needed.

### Custom Domain (Optional)

Want to use `www.varenyajain.com` instead of `varenyaj.github.io`?

1. **Buy domain** from Namecheap, Google Domains, etc.

2. **Add CNAME file** to repository root:
   ```bash
   echo "www.varenyajain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. **Configure DNS** with your registrar:
   ```
   Type: CNAME
   Host: www
   Value: varenyaj.github.io
   TTL: 3600
   ```

4. **Enable HTTPS** in GitHub Pages settings (automatic after DNS propagates)

---

## 🔧 Advanced Usage

### Adding Interactive Features

Since you have full control over the HTML/CSS/JS, you can add any interactive features:

#### Example: Search Functionality

Add to `writing.html`:

```html
<div style="margin-bottom: 20px;">
    <input type="text" id="search" placeholder="Search posts..." 
           style="width: 100%; padding: 10px; font-family: monospace; 
                  background: var(--code-bg); border: 1px solid var(--border-color);">
</div>

<ul class="post-list" id="post-list">
    <!-- Your posts here -->
</ul>

<script>
document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post-item');
    
    posts.forEach(post => {
        const text = post.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});
</script>
```

#### Example: Reading Time Calculator

Add to blog posts:

```javascript
<script>
// Calculate reading time
const article = document.querySelector('article');
const text = article.textContent;
const wordCount = text.trim().split(/\s+/).length;
const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

// Display reading time
const timeElement = document.querySelector('time');
timeElement.textContent += ` • ${readingTime} min read`;
</script>
```

### Using Git Hooks

Automate tasks before deployment:

Create `.git/hooks/pre-commit`:

```bash
#!/bin/bash

# Update last modified date in README
sed -i "s/_Last Updated:.*/_Last Updated: $(date '+%B %d, %Y')_/" README.md
git add README.md

# Check for broken links (requires linkchecker)
# linkchecker index.html writing.html projects.html
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

### Performance Optimization

Your site is already fast (~16KB), but here are more optimizations:

1. **Compress images:**
   ```bash
   # Install imagemagick
   sudo apt install imagemagick
   
   # Compress images
   mogrify -quality 85 assets/img/*.png
   mogrify -quality 85 assets/img/*.jpg
   ```

2. **Minify CSS (optional):**
   ```bash
   # Using cssnano
   npx cssnano assets/css/style.css assets/css/style.min.css
   
   # Update HTML to use minified version
   # <link rel="stylesheet" href="assets/css/style.min.css">
   ```

3. **Add service worker for offline support:**
   
   Create `sw.js` in root:
   ```javascript
   const CACHE_NAME = 'varenya-v1';
   const urlsToCache = [
     '/',
     '/index.html',
     '/writing.html',
     '/projects.html',
     '/assets/css/style.css'
   ];
   
   self.addEventListener('install', event => {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then(cache => cache.addAll(urlsToCache))
     );
   });
   
   self.addEventListener('fetch', event => {
     event.respondWith(
       caches.match(event.request)
         .then(response => response || fetch(event.request))
     );
   });
   ```
   
   Register in `index.html`:
   ```javascript
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/sw.js');
   }
   ```

---

## 🐛 Troubleshooting

### Problem: Changes not showing on GitHub Pages

**Solutions:**
1. Wait 5-10 minutes for deployment
2. Clear browser cache: `Ctrl + Shift + R` (hard refresh)
3. Check GitHub Actions tab for build errors
4. Verify you pushed to `main` branch: `git branch`

### Problem: Links broken after deployment

**Solution:** Check relative paths

From root pages (`index.html`, `writing.html`):
```html
<a href="posts/blog-post.html">Post</a>
<a href="assets/docs/cv.pdf">CV</a>
```

From `posts/` directory:
```html
<a href="../index.html">Home</a>
<a href="../assets/css/style.css">Styles</a>
```

### Problem: Styles not loading

**Checklist:**
1. Verify file exists: `ls assets/css/style.css`
2. Check case sensitivity (Linux is case-sensitive!)
3. Verify HTML link tag:
   ```html
   <link rel="stylesheet" href="assets/css/style.css">
   <!-- or from posts/: -->
   <link rel="stylesheet" href="../assets/css/style.css">
   ```
4. Check browser console (F12) for errors

### Problem: Dark mode not working

**Solution:** Your system must support `prefers-color-scheme`

Test it:
```javascript
// In browser console
window.matchMedia('(prefers-color-scheme: dark)').matches
// Should return true or false
```

Force dark mode for testing:
```css
/* Temporarily change in style.css */
/* Remove @media wrapper and use dark colors directly */
:root {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  /* ... other dark colors */
}
```

### Problem: Large PDF files slow down git

**Solution:** Use Git LFS for large files

```bash
# Install Git LFS
git lfs install

# Track PDF files
git lfs track "*.pdf"
git add .gitattributes

# Commit
git add assets/docs/*.pdf
git commit -m "Add PDFs via Git LFS"
```

---

## 📊 Site Statistics

Current site metrics:

| Metric | Value | Industry Average |
|--------|-------|------------------|
| Total Size | ~16KB | ~2MB |
| Load Time | <100ms | ~3s |
| Dependencies | 0 | ~50 |
| Lighthouse Score | 100/100 | ~75 |
| Carbon Footprint | 0.01g CO2 | 1.8g CO2 |

**You're 125x smaller than the average website!** 🎉

---

## 🤝 Contributing

Found a bug? Have a suggestion? Contributions are welcome!

### Reporting Issues

1. Check existing issues first
2. Include:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce
   - Browser and OS

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit with clear message: `git commit -m "Add feature X"`
6. Push: `git push origin feature-name`
7. Open a Pull Request on GitHub

---

## 📚 Resources

### Learning Web Development

- [MDN Web Docs](https://developer.mozilla.org/) - The best web documentation
- [CSS-Tricks](https://css-tricks.com/) - CSS tutorials and guides
- [HTML Reference](https://htmlreference.io/) - Visual guide to HTML
- [Can I Use](https://caniuse.com/) - Browser support tables

### Design Inspiration

- [Man pages on Linux](https://man7.org/linux/man-pages/) - Original inspiration
- [Dracula Theme](https://draculatheme.com/) - Alternative color scheme
- [Nord Theme](https://www.nordtheme.com/) - Minimal color palette
- [Brutalist Websites](https://brutalistwebsites.com/) - Content-first design

### Tools

- [Wave Accessibility Tool](https://wave.webaim.org/) - Test accessibility
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [Carbon Calculator](https://www.websitecarbon.com/) - Environmental impact
- [HTML Validator](https://validator.w3.org/) - Check your HTML

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

You are free to:
- ✅ Use this template for your own site
- ✅ Modify and customize it
- ✅ Use it for commercial purposes

Just:
- 📝 Give credit (optional but appreciated!)
- 📝 Include the MIT License in your copy

---

## 👤 Contact

**Varenya Jain**
- 📧 Email: [varenya3@illinois.edu](mailto:varenya3@illinois.edu)
- 💼 LinkedIn: [varenyajain](https://www.linkedin.com/in/varenyajain/)
- 🐙 GitHub: [@VarenyaJ](https://github.com/VarenyaJ)
- 🌐 Website: [varenyaj.github.io](https://varenyaj.github.io)

---

## 🙏 Acknowledgments

- Inspired by Unix man pages and terminal aesthetics
- Design philosophy influenced by my bestie [Drshika Asher's](https://drshika.com) man-page theme :)
- Built with pure web standards - no frameworks used
- Hosted on GitHub Pages - free and reliable

---

## 📝 Changelog

### v2.0 - October 2025
- Complete redesign with man-page aesthetic
- Removed all dependencies (previously used heavy JS frameworks)
- Reduced page size from 2MB to 16KB (99.2% reduction!)
- Added automatic dark mode support
- Improved accessibility and SEO
- Zero-dependency deployment

### v1.0 - September 2024
- Initial portfolio site
- Basic HTML/CSS structure
- Heavy use of external libraries

---

**Built with ❤️ and ☕ using pure HTML, CSS, and JavaScript**

_Last Updated: October 21, 2025_

---

## 🚀 Quick Reference Card

```
┌─────────────────────────────────────────────────────────┐
│  VARENYA(1) QUICK REFERENCE                             │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📝 Add Blog Post:                                      │
│     1. Create posts/title.html                          │
│     2. Add entry to writing.html                        │
│                                                          │
│  🎨 Change Colors:                                      │
│     Edit --accent-color in assets/css/style.css        │
│                                                          │
│  🚀 Deploy:                                             │
│     git add -A && git commit -m "msg" && git push      │
│                                                          │
│  🧪 Test Locally:                                       │
│     python3 -m http.server 8000                         │
│                                                          │
│  📦 Total Size: ~16KB (125x smaller than average!)     │
│                                                          │
│  🔗 Questions? varenya3@illinois.edu                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```
