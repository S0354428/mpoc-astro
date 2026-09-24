# MPOC Website Editing Guide

Welcome! This website was designed so that future officers and members can update text, add new members, and change photos **without needing deep coding knowledge**.

---

## 1. Quick Reference: What File Edits What?

All website content lives in `src/content/`. You only need to touch the files listed below:

| Page / Section | What It Contains | File to Edit |
| :--- | :--- | :--- |
| **Home Page** | Hero text, buttons, stats, club pillars, team intro | [`src/content/homepage/home.yaml`](src/content/homepage/home.yaml) |
| **Navigation Bar** | Logo name, initial, menu links, CTA button | [`src/content/homepage/home.yaml`](src/content/homepage/home.yaml) (under `nav:`) |
| **Exec Board / Team** | Officers, roles, bios, and headshots | Individual files in [`src/content/team/`](src/content/team/) |
| **About** | Mission, Article II purpose, club history, faculty advisors | [`src/content/about/about.yaml`](src/content/about/about.yaml) |
| **Get Involved** | Committees, leadership roles, how to join | [`src/content/get-involved/get-involved.yaml`](src/content/get-involved/get-involved.yaml) |
| **Vietnam Program** | Program intro, links to MOM Vietnam, VSA dinner note | [`src/content/vietnam/vietnam.yaml`](src/content/vietnam/vietnam.yaml) |
| **Stories** | Filter categories & intros | [`src/content/stories-page/stories-page.yaml`](src/content/stories-page/stories-page.yaml) |
| **Member Stories** | Quotes, reflections, member photos | Individual files in [`src/content/stories/`](src/content/stories/) |
| **Alumni Directory** | Spotlight alum & alumni list | Individual files in [`src/content/alumni/`](src/content/alumni/) |
| **Support Us** | Ways to give, donation breakdown, tiers, events | [`src/content/support-us/support-us.yaml`](src/content/support-us/support-us.yaml) |
| **Partners** | VSA partnership, joint events | [`src/content/partners/partners.yaml`](src/content/partners/partners.yaml) |
| **Contact** | Club email, Instagram, general meeting time/place | [`src/content/contact/contact.yaml`](src/content/contact/contact.yaml) |

---

## 2. Editing Text on Pages (YAML Files)

YAML files use simple `key: "value"` lines.

### Tips for Editing YAML:
1. Keep the quotation marks around your text: `title: "Your New Title Here"`
2. Keep the indentation (spaces) intact. Do not use the Tab key; use standard spaces.
3. If you need multiple sentences or paragraphs, you can keep it in quotes or use standard text.

---

## 3. Managing Images & Headshots

All images live in the **`public/images/`** folder.

```
public/
└── images/
    ├── logo/       # Club logos (PNG or SVG)
    ├── hero/       # Large hero images
    ├── team/       # Exec board headshots
    ├── alumni/     # Alumni photos
    ├── stories/    # Member / lab / trip photos
    └── partners/   # Sponsor and club partner logos
```

### How to Add a Photo:
1. Save your image into the appropriate subfolder inside `public/images/` (e.g. `public/images/team/sarah.jpg`).
2. In the corresponding YAML or Markdown file, set the path starting with `/images/...`:
   ```yaml
   photo: "/images/team/sarah.jpg"
   ```
3. **No photo yet?** Simply omit the `photo:` line or leave it empty (`photo: ""`). The website will automatically render the styled placeholder box.

### Recommended Image Specs:
- **Team Headshots**: Square (1:1 aspect ratio), at least 400x400 px, `.jpg` or `.png`.
- **Hero Photo**: 4:5 aspect ratio (vertical) or 16:10 (landscape), at least 1000x800 px.
- **Stories & Events**: 16:9 or 16:10 aspect ratio, at least 800x450 px.
- **Logo**: Transparent `.png` or `.svg`, roughly 34px to 68px tall.

---

## 4. How to Update the Navbar Logo

By default, the navigation bar displays the orange circle with the letter **M** and the text **MPOC**.

To replace the orange "M" circle with an image logo:
1. Place your logo file in `public/images/logo/logo.png`.
2. Open [`src/content/homepage/home.yaml`](src/content/homepage/home.yaml).
3. In the `nav:` section, add the `logoImage` property:
   ```yaml
   nav:
     logoImage: "/images/logo/logo.png"
     brandInitial: "M"
     brandName: "MPOC"
   ```
4. If you ever want to revert back to the text circle, simply delete or comment out the `logoImage` line!

---

## 5. Adding & Editing Repeatable Items (Markdown `.md`)

### Exec Board Members (`src/content/team/`)
To add an officer, create a file like `src/content/team/secretary.md`:

```markdown
---
name: "Alex Smith"
role: "Secretary"
order: 3
photo: "/images/team/alex.jpg"
---

Alex is a junior Biomedical Engineering major who manages club communications and meeting records.
```

- `order`: Controls who appears first (1 = President, 2 = VP, etc.).
- `photo`: Optional path to their picture in `public/images/team/`.
- The text below `---` is their bio.

---

### Member Stories (`src/content/stories/`)
To add a story, create a file like `src/content/stories/trip-reflection.md`:

```markdown
---
name: "Jordan Lee"
role: "Lab Volunteer"
category: "Lab"
quote: "Working in the lab taught me how clinical design affects real patients."
anonymous: false
featured: false
order: 2
photo: "/images/stories/lab-work.jpg"
---

Full reflection or interview text can go here.
```

- `category`: Must be one of: `'Lab'`, `'Vietnam Trip'`, `'Committee Life'`, or `'Alumni Reflections'`.
- `featured: true`: Puts this story in the large highlight card at the top.
- `anonymous: true`: Hides the student's name and displays "Anonymous".

---

### Alumni Profiles (`src/content/alumni/`)
To add an alum, create a file like `src/content/alumni/jane-doe.md`:

```markdown
---
name: "Jane Doe"
gradYear: "2023"
currentRole: "Resident Orthotist at Hanger Clinic"
tag: "Clinical Practice"
linkedin: "https://linkedin.com/in/example"
anonymous: false
featured: false
order: 2
photo: "/images/alumni/jane.jpg"
---

Jane shares how her time in MPOC helped her get into her residency program.
```

- `tag`: Must be one of: `'Clinical Practice'`, `'Grad School'`, `'Industry'`, or `'Research'`.
- `featured: true`: Marks them as the spotlight alumni on the Alumni page.

---

## 6. Testing Changes Locally

If you are working on your computer:

```bash
# Start local preview server
npm run dev
```

Open your browser to `http://localhost:4321` to see your changes live.

To test building the site for deployment:
```bash
npm run build
```
