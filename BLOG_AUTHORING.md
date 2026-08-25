# How to write a Motor Kekal blog post

For whoever is drafting posts for the Motor Kekal blog. You do not need to touch
any code — everything here is done through the admin dashboard.

Read the image section first. Images are the single biggest factor in whether the
blog looks professional, and the easiest thing to get wrong, because **nothing
resizes or compresses your images for you.**

---

## 1. Images

### The one rule that matters most

**Whatever image file you upload is exactly what every visitor downloads.**
There is no automatic shrinking. Upload a 4 MB photo straight off a phone and
every reader on mobile data downloads 4 MB, the page crawls, and Google marks
the page down for it.

**Resize and compress every image before you upload it.** Always. Free tools:
[Squoosh](https://squoosh.app) (best), TinyPNG, or any phone photo editor's
"resize" option.

### Cover image spec

Every post needs one cover image.

| | |
|---|---|
| **Shape** | Landscape **16:9** |
| **Size to upload** | **1600 × 900 pixels** (ideal) · 1200 × 675 (minimum) |
| **Format** | JPEG, quality around 80 — or WebP |
| **File size** | **Under 250 KB.** Never above 400 KB. |
| **Never** | Portrait, square, or narrower than 1200 pixels |

Two reasons 1200 pixels is a hard floor:

- The cover is also the thumbnail people see when the post is **shared on
  WhatsApp or Facebook**. Below 1200 px wide those previews look broken, and
  Google Discover ignores the image entirely.
- On the blog's front page the newest post gets a large panel. A small image
  stretched into it looks blurry.

### The same image gets cropped three different ways

Your one upload is reused in three places, each cutting it differently:

| Where it appears | How it's cropped |
|---|---|
| Small cards in the post grid | 16:9 |
| Large image at the top of the article | 16:9, but not very tall |
| The big featured panel on the blog front page | **Wider and shorter than 16:9** — trims top and bottom |

So compose for all three:

- **Keep the bike dead centre.** The centre survives every crop.
- **Leave the outer edges empty** — roughly the outer 10%. No wheel, number
  plate or logo near the edges; they get sliced off.
- **Nothing important in the top or bottom 15%** — the featured panel cuts there.
- **Never put text in the image.** It gets cropped three ways, and the same file
  is used for the English, Malay and Chinese versions of the post, so any text
  will be wrong in two of them.

### Every post must have a cover

A post with no cover shows a flat grey rectangle. One of those in the grid makes
the entire page look unfinished. **Do not publish without a cover image.**

### Where images should come from

In order of preference:

1. **A photo of the actual bike, taken at the shop.** Nothing builds more trust,
   and it's a picture that exists nowhere else on the internet, which Google
   rewards.
2. **The manufacturer's official press photo**, for a launch or news post.
3. **Stock photography** — last resort, and only for posts that aren't about a
   specific model: maintenance guides, wet-weather riding, general advice.

**A stock photo must never stand in for a specific motorcycle.** A post titled
"Yamaha XSR155 arrives at RM12,998" showing a different manufacturer's bike is
misleading. Anyone who knows bikes spots it immediately and stops trusting the
rest of the article.

### If you are an AI agent drafting a post

**Do not choose or download images yourself.** Instead:

1. Draft the text.
2. **Give me the source links you used** — the article, the press release, the
   manufacturer page — as plain clickable URLs, and open them for me.
3. I will read the sources myself to check the facts, and pull the images I want
   from them.
4. Tell me plainly **how many images the post needs and what each one should
   show** — for example: "1 cover, 16:9, the XSR155 three-quarter front" and "1
   body image showing the instrument cluster".

I vet the content and choose the images. You draft and point me at the sources.

### Taking your own cover photos

- Hold the phone **horizontally**. Landscape, always.
- Whole bike in frame, three-quarter front angle, with a little space around it.
- **Fill the frame with the bike.** Don't shoot from across the yard.
- Overcast light or shade beats direct midday sun — no harsh shadow across the tank.
- Plain background. A wall or the shutter beats a car park full of other bikes.
- Crop to 16:9 before uploading.

### What actually makes the blog look good

Not expensive photography — **consistency**. The front page looks designed when:

- Every post has a cover, so there are no grey gaps.
- Every cover is the same shape and similar size.
- The covers look like a set — similar framing, similar lighting. Not one bright
  studio shot next to one dark night shot.
- The newest post fills the big featured panel, giving the page a clear starting point.

Get those four right with ordinary phone photos and it will look better than
expensive photos used inconsistently.

### Images inside the article body

Different rules apply to images placed within the text:

- They are always **stretched to the full width of the text column**, whatever
  their real size. Upload at least **1568 pixels wide** or they look soft.
- Same weight limit: **under 250 KB each.**
- **Always write alt text** — a short description of what's in the picture.
  Leaving it blank means screen readers and Google get nothing.
- **Captions are not supported.** If a picture needs one, write it as the next
  paragraph in italics.
- Two or three body images in a 1,000-word post is plenty.

### Alt text

- The cover's alt text is filled in automatically from the post title. Leave it.
- Body images: describe what's in the frame and why it's there. "Worn rear
  sprocket with hooked teeth" — not "motorcycle part", not "image1".

---

## 2. Filling in the post

### The fields

| Field | What to put |
|---|---|
| **Category** | Exactly one of: Reviews, News, Buying guides, Maintenance. This decides which section page the post shows up on. |
| **Slug** (the web address) | Lowercase, words joined by hyphens. Include the model and the hook: `yamaha-xsr155-malaysia-rm12998`. **Never change or reuse the slug of an already-published post** — it breaks every existing link and loses the Google ranking. |
| **Tags** | Comma-separated, lowercase. **Always include the brand** (`yamaha`, `honda`, `kawasaki`). The brand tag is what makes the article automatically show matching bikes from our stock — get it wrong and it shows unrelated bikes. |
| **Excerpt** | One or two sentences, around 140–180 characters. It appears on the cards, so it must make sense on its own, away from the article. |
| **Meta title** | 60 characters maximum. Include the model, and the price if there is one. |
| **Meta description** | 160 characters maximum. Say what the reader will learn. Not "click here to read more". |

The editor shows a live Google-result preview with length warnings as you type.
Use it — if it's showing a warning, the text is too long and Google will cut it off.

### Headings

The article page shows an "On this page" contents list in the sidebar, built
automatically from your main headings. It only appears if the post has **three
or more** main headings.

- Aim for **3 or more main headings** on any substantial post so readers get the
  contents list.
- Write headings that make sense on their own — they become the navigation.
- Use sub-headings freely for smaller points; they're left out of the contents list.

### Always link out at least once

Every post must link somewhere useful on our own site:

- **Link to the listings page** when a bike is available to buy now.
- **Link to the services page** on maintenance and servicing topics.
- **Link to another blog post** where it genuinely helps.

Write links as `/listing` or `/service` — starting with a slash, no
`https://www.motorkekal.com` in front — so the reader stays in their own language.

### Malay and Chinese versions

Write the post in English first, then use the translate button for each language.
**Always read the translation before saving.** Prices, model names and rules must
come through unchanged. A post with no translation for a language simply won't
appear in that language, which is better than showing English there.

---

## 3. How to write

- **Write from the workshop floor.** "We see this on the ramp constantly" beats
  "industry sources indicate".
- **Be useful before being promotional.** Recommend the cheaper bike when it's
  the right answer. That's what makes the recommendation worth anything.
- **Always give the real on-the-road cost**, not only the showroom price, and say
  clearly which one you're quoting.
- **Check every fact, and say where it came from.** Prices, rebates and road
  rules change constantly. End the post with an italic line giving the source
  and the month, plus "confirm current pricing before purchase".
- **Never copy and paste text from another website.** Write it in your own words
  from the facts. Copied text gets the page pushed down by Google, quite apart
  from being someone else's property.

---

## 4. Before you publish

**Images**

- [ ] Cover image present, landscape 16:9, at least 1200 px wide
- [ ] Cover under 250 KB
- [ ] Bike centred; nothing important near the edges or the top/bottom
- [ ] No text inside the image
- [ ] The cover actually shows the bike the post is about
- [ ] Body images at least 1568 px wide, under 250 KB, each with alt text

**Content**

- [ ] Category chosen; brand included in the tags
- [ ] Slug includes the model, and is not one that's been used before
- [ ] Excerpt reads well on its own
- [ ] Meta title and description within the limits, no warnings showing
- [ ] Three or more main headings if the post is long
- [ ] At least one link to our listings, services, or another post
- [ ] Every price and claim checked, with the source and date noted
- [ ] Post viewed on a phone, not just a computer
