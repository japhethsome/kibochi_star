# Kibochi Star Coffee — Full Website Documentation

**Project:** kibochi-nextjs
**Framework:** Next.js 14 (App Router)
**Purpose:** Company presence and credibility site for Kibochi Star Coffee Limited

---

## Table of Contents

1. What this project is
2. Project structure
3. How the page is assembled
4. Design system
5. Editing content
6. Navigation and links
7. Adding images
8. Running the project
9. A note on fonts
10. Deploying the site
11. Maintenance checklist
12. Possible next steps

---

## 1. What this project is

This is the Next.js version of the Kibochi Star Coffee website — a company presence site built
from the details provided about the estate, the milling factory, the pulping network, and the
farmers served across three counties.

The site communicates one thing clearly: Kibochi Star Coffee is a vertically connected operation,
from cherry delivered by smallholder farmers, through an 11-station pulping network, to a milling
factory that produces both clean and buni coffee for local and export trade.

Unlike a plain HTML file, this project uses Node.js and a build step. Section 8 covers exactly
how to run it.

---

## 2. Project structure

```
kibochi-nextjs/
├── app/
│   ├── layout.js       Root layout: page head, fonts, page title and description
│   ├── page.js         Home page: imports and assembles every section in order
│   └── globals.css     All site styling: colors, type, spacing, responsive rules
├── components/
│   ├── Nav.js           Fixed top navigation bar
│   ├── Hero.js          Headline, intro line, county tags, route strip
│   ├── About.js         Company description and Company Snapshot data card
│   ├── Network.js       Three county cards and the "11 pulping sites" strip
│   ├── Quality.js       Clean Coffee and Buni Coffee product cards
│   ├── Farmers.js       Three-step farmer network explanation
│   ├── Footer.js        Company summary, locations, contact links
│   └── ScrollReveal.js  Client component powering the scroll-in animation
├── package.json         Project dependencies and scripts
├── next.config.mjs      Next.js configuration
├── jsconfig.json        Enables the "@/components/..." import shortcut
├── .gitignore
└── README.md            Quick-start instructions
```

Each visible section of the page lives in its own file. Editing the Farmers section, for example,
only ever means opening `components/Farmers.js` — there is no need to search through one long
file to find the right part.

---

## 3. How the page is assembled

`app/page.js` stays short by design. It simply lists the sections in the order they should
appear:

```jsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Network from "@/components/Network";
import Quality from "@/components/Quality";
import Farmers from "@/components/Farmers";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Network />
      <Quality />
      <Farmers />
      <Footer />
      <ScrollReveal />
    </>
  );
}
```

To reorder sections, change the order of these lines. To remove a section, delete its line here —
the component file itself can remain unused without causing errors.

---

## 4. Design system

### Colors

Defined once in `app/globals.css` under `:root`. Changing a value here updates it everywhere it
is used across the site.

| Variable | Hex | Used for |
|---|---|---|
| `--loam` | `#2A1B14` | Hero and footer background, a deep roast brown |
| `--parchment` | `#EFE6D2` | Main page background and light text on dark sections |
| `--parchment-2` | `#E4D8BC` | Secondary and muted text on dark sections |
| `--cherry` | `#A5301F` | Accent for county labels and the Clean Coffee tag |
| `--highland` | `#435C46` | Background of the "11 pulping sites" highlight strip |
| `--buni` | `#C08A3E` | Primary accent: eyebrow labels, links, the Buni Coffee tag, the star mark |
| `--ink` | `#1C130E` | Main body text on light backgrounds |
| `--ink-soft` | `#4A3A30` | Secondary and paragraph text on light backgrounds |

### Typography

Three Google Fonts, loaded through a link tag in `app/layout.js`:

- **Fraunces**, a serif used for all headings and the brand name, carrying the estate's character.
- **IBM Plex Sans**, used for all body copy.
- **IBM Plex Mono**, used for data-like details — county tags, route-strip labels, and the
  Company Snapshot figures — giving factual details the feel of a ledger or shipping manifest,
  which echoes real coffee trade paperwork.

### Layout breakpoints

| Screen width | What changes |
|---|---|
| Below 900px | The three-column network grid becomes one column |
| Below 820px | The About section's two-column layout becomes one column |
| Below 760px | Footer and farmer-list columns stack; top navigation links are hidden |
| Below 640px | Page side padding narrows for small screens |

### Motion

`components/ScrollReveal.js` fades and raises each section into view as it enters the viewport,
using the browser's IntersectionObserver. It respects a visitor's operating-system setting for
reduced motion — when that setting is on, content appears immediately with no animation.

---

## 5. Editing content

All text lives directly inside the JSX of each component file. There is no separate content file
or content management system.

To change any wording:

1. Open the relevant file in `components/`, using the structure table in Section 2 as a guide.
2. Find the text between the relevant tags, for example between `<p>` and `</p>`.
3. Edit only the words, not the surrounding tags — removing a tag can break that section's layout.
4. Save the file. If `npm run dev` is running, the browser updates automatically.

### Edits to make before publishing

| Location | File | Current placeholder |
|---|---|---|
| Footer contact | `components/Footer.js` | `info@kibochistarcoffee.co.ke` |
| Footer contact | `components/Footer.js` | `+254 7XX XXX XXX` |
| Footer note | `components/Footer.js` | "Update with your registered contact details" |

---

## 6. Navigation and links

Every clickable element on the site was traced directly against the code — not assumed from the
visible text — to confirm it leads where it should.

| Element | File | Type | Destination | Status |
|---|---|---|---|---|
| About (nav) | `components/Nav.js` | In-page anchor | `#about`, About section | Confirmed correct |
| Mill & Network (nav) | `components/Nav.js` | In-page anchor | `#network`, Mill & Network section | Confirmed correct |
| Coffee (nav) | `components/Nav.js` | In-page anchor | `#quality`, Our Coffee section | Confirmed correct |
| Farmers (nav) | `components/Nav.js` | In-page anchor | `#farmers`, Farmers section | Confirmed correct |
| Contact (nav) | `components/Nav.js` | In-page anchor | `#contact`, Footer | Confirmed correct |
| Email address | `components/Footer.js` | `mailto:` link | Opens an email app addressed to the listed address | Working, holds placeholder address |
| Phone number | `components/Footer.js` | `tel:` link | Opens the phone dialer with the listed number | Working, holds placeholder number |

### Fixing the two placeholders

Open `components/Footer.js` and locate:

```jsx
<a href="mailto:info@kibochistarcoffee.co.ke">info@kibochistarcoffee.co.ke</a>
<a href="tel:+254700000000">+254 7XX XXX XXX</a>
```

Replace both the `href` value and the visible text with the real details, for example:

```jsx
<a href="mailto:sales@kibochistarcoffee.co.ke">sales@kibochistarcoffee.co.ke</a>
<a href="tel:+254712345678">+254 712 345 678</a>
```

The `mailto:` value must contain no spaces. The `tel:` value should use international format with
a leading `+` and no spaces or dashes, since that is what allows tap-to-call to work reliably on
mobile devices.

### The three link types

**In-page anchors** jump to a section already on the page, and are what the current navigation
uses:

```jsx
<a href="#network">See our network</a>
```

This only works if a section elsewhere on the page carries a matching `id`, exactly, including
case:

```jsx
<section id="network"> ... </section>
```

**Links to other pages** apply once the site grows beyond a single page. Use Next.js's own `Link`
component rather than a plain anchor tag, since it enables faster client-side navigation:

```jsx
import Link from "next/link";

<Link href="/contact">Contact us</Link>
```

This requires a matching file at `app/contact/page.js`. The current site has no separate pages,
so this only becomes relevant if the site is expanded later.

**External links** point to another website, a chat app, or a downloadable file. Use a plain
anchor tag with the full address, opened in a new tab:

```jsx
<a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
  Chat on WhatsApp
</a>
```

Common external formats for later use:

| Purpose | Format |
|---|---|
| WhatsApp chat | `https://wa.me/2547XXXXXXXX`, no plus sign, no spaces |
| Email | `mailto:address@example.com` |
| Phone call | `tel:+2547XXXXXXXX` |
| Facebook page | `https://facebook.com/yourpage` |
| PDF download | `/company-profile.pdf`, if the file is placed in the `public/` folder |

### Adding a new button

As an example, a "Get in Touch" button in the hero that jumps to the contact section can be added
inside `components/Hero.js`:

```jsx
<a href="#contact" className="county-tag mono" style={{ marginTop: "24px", display: "inline-block" }}>
  Get in touch
</a>
```

This reuses the existing pill styling so it matches the site without any new CSS. A more
prominent, filled button style can be added on request.

### Pre-launch testing checklist

- Click every navigation link and confirm it scrolls to the correct section
- Click the email link and confirm the correct address is filled in
- Click the phone link on an actual phone and confirm the dialer opens with the correct number
- If WhatsApp or social links are added, open each in a private browser window to confirm they
  work without being logged into a personal account
- Test all of the above on a phone as well as a desktop browser, since most visitors are likely
  to view the site on mobile

---

## 7. Adding images

There is no `public/` folder yet, since the site currently relies on color and typography rather
than photography. To add images:

1. Create a `public/` folder at the project root if it does not already exist.
2. Place image files inside it, for example `public/mill-koru.jpg`.
3. Reference the file from any component with a path starting at the root:

```jsx
<img src="/mill-koru.jpg" alt="Kibochi Star Coffee milling factory at Koru" />
```

Or, for automatic resizing and lazy loading, use Next.js's built-in image component:

```jsx
import Image from "next/image";
<Image src="/mill-koru.jpg" alt="Kibochi Star Coffee milling factory at Koru" width={800} height={600} />
```

Always write a real, descriptive `alt` value, since this matters for both accessibility and
search engines. Compress photos before adding them, aiming for under 300KB each, so the page
stays fast to load on slower mobile connections, which are common in rural coverage areas.

---

## 8. Running the project

Requires Node.js version 18.18 or later.

**Local development**, with automatic reloading on save:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in a browser.

**Production build**, the version that actually gets deployed:

```bash
npm run build
npm run start
```

This project has already been built once during development. The build completed successfully,
and the rendered output was checked directly against the intended design.

---

## 9. A note on fonts

Fonts are loaded through a plain link tag in `app/layout.js`, the same approach the original HTML
file used, rather than through Next.js's built-in `next/font` system. This is a deliberate
choice: `next/font` needs to reach Google's font servers during the build itself, which fails in
network-restricted environments such as certain continuous-integration pipelines or sandboxed
development environments. The link-tag approach instead fetches fonts in the visitor's browser,
which is simpler and works everywhere. The performance benefits of `next/font` — fonts bundled
with the app rather than fetched from Google at runtime — can be added later once the project is
being built from an environment with normal internet access.

---

## 10. Deploying the site

The most direct path is Vercel, built by the team behind Next.js and requiring no configuration:

1. Push this project to a GitHub repository.
2. Visit vercel.com/new and import that repository.
3. Vercel detects Next.js automatically and deploys the site.
4. Add a custom domain under Project, then Settings, then Domains, and set the DNS records Vercel
   provides at the domain registrar.

Netlify also supports Next.js projects directly, with a similar import process, if preferred.

---

## 11. Maintenance checklist

- Replace the placeholder email and phone number in `components/Footer.js`
- Confirm all county, location, and station-count figures against current company records
- Add a real domain and matching email addresses, such as `info@yourdomain.co.ke`
- Add a favicon once a logo is finalized, placed as `favicon.ico` inside `app/`
- Add real photography once available, following Section 7
- Keep dependencies current: run `npm outdated` occasionally and update `next`, `react`, and
  `react-dom` when new versions are released, particularly for security patches
- Re-test the site on a phone after any content change, since most visitors are likely to view it
  on mobile

---

## 12. Possible next steps

- A Company Profile document, in PDF or Word format, reusing this site's content for buyers,
  banks, or partners
- A certifications or grading section, once formal certifications such as organic or Fair Trade,
  or specific export grades, are available to display
- A photo gallery of the estate, mill, and pulping stations
- Separate pages, such as `/about` or `/contact`, using Next.js's file-based routing, rather than
  one continuous scroll — straightforward to add given the current component structure
- A contact form, which requires a backend or a third-party service such as Formspree, since this
  project is currently a fully static frontend with no server-side logic of its own

---

*This documentation covers the Next.js version of the Kibochi Star Coffee website. For the
standalone single-file HTML version delivered earlier, refer to the documentation provided
alongside `kibochi-star-coffee.html`.*
