---
name: weekly-moto-content
description: Use when producing the weekly or periodic Motor Kekal content drop — researching Malaysian motorcycle news, recommending one story to publish, and drafting the blog post plus the Facebook post. Also use when asked what Motor Kekal should blog or post about this week.
---

# Weekly Motor Kekal content

Research Malaysian motorcycle news, recommend **one** story, draft the blog post and the
Facebook post. Read `BLOG_AUTHORING.md` in the repo root first — it is the house style guide
and it wins any disagreement with this skill.

**Deliver four things, in this order:** sources (clickable, so they can be verified) → the
recommendation with reasoning → blog draft → Facebook draft. Never skip the sources; they vet
the facts and pick the images themselves.

## 1. What has already been published

Use the **public API**, not the admin panel. Admin is behind Google Auth and not worth the round trip:

```bash
curl -s "https://www.motorkekal.com/api/blog-posts?limit=20" | python3 -m json.tool
```

Gives title, slug, category, tags, publishedAt for every published post. Check for: topics
already covered, slugs already used (never reuse one), and which categories are thin.
Categories are `Reviews`, `News`, `Buying guides`, `Maintenance`.

To read an existing post's full text for voice, `curl -sL` the page and strip tags. Do **not**
use WebFetch for motorkekal.com — its helper model refuses to reproduce the site's own content
as copyrighted, and the `/en/` URL redirects, so `-L` is required.

## 2. Research the news

**Use at least three independent sources.** One source is not research, and paultan.org alone
skews the picture even though its bikes section is genuine news.

There is no WebSearch tool in this environment — fetch index pages directly and follow links.

| Source | Entry point |
|---|---|
| Paul Tan | `paultan.org/topics/bikes/` (also `/page/2/`) |
| BikesRepublic | `bikesrepublic.com/` |
| Zigwheels MY | `zigwheels.my/motorcycle-news` (the main `/news` is cars only) |
| Careta | `careta.my/` (homepage only — no working archive) |
| Motoqar | `motoqar.com/` front pages (tag pages are stale) |

Known dead ends — don't waste turns: `motorcycle.com.my` (blocked by Zscaler),
`motomalaya.net` (empty body), `wapcar.my` and `carsome.my` (403), `roda-pusing.com` (no DNS),
`oto.my` (no bike section, just syndicates Paul Tan).

For policy and regulation, **Malay Mail (`malaymail.com`) is the only national outlet that
reliably returns article text** — use it as the second source to confirm anything from Paul Tan.
These all failed and are not worth retrying: Free Malaysia Today (403), The Sun (connection
reset), NST and The Star (JS-rendered, nav shell only), The Edge (no content, search 404s),
Bernama (homepage works but both search endpoints are broken, so the archive is unqueryable),
`mot.gov.my` (press-release paths 404, news listing stale), `miros.gov.my` (no dated releases).

Because Bernama's search is down, "no newer update exists" is never provable here. Write
"as of publication, still under consideration; no allocation announced" rather than claiming
nothing has changed.

Window: anything published since the last post's `publishedAt`.

## 3. Filter for what actually sells

Relevance is decided by stock, not by how interesting the bike is. **Check the stock API before
recommending a model** — brand tags drive the "matching bikes from our stock" rail, so a post
about a model with no related stock surfaces the wrong bikes:

```bash
curl -s "https://www.motorkekal.com/api/motorcycles?limit=300" | python3 -c "
import json,sys,collections
items=json.load(sys.stdin)
print(collections.Counter(i['brand'] for i in items).most_common())"
```

Rank candidates on: is it in a brand and price band they stock · does it affect every rider
(fuel, road tax, insurance, licensing) · would it make someone walk into the shop · does it
fill a thin category.

**Confirmed vs proposed.** A government scheme that is "under consideration" must be labelled
that way in the draft. Telling customers a subsidy exists when it doesn't costs the shop trust.

**Every price needs its basis.** Malaysian bike prices are quoted excluding road tax, insurance
and registration — say so explicitly, and never present a foreign price converted to RM as a
Malaysian price.

## 4. Blog draft

Follow `BLOG_AUTHORING.md`. The shape that matches published posts:

- Open with the counter: someone walked in and asked this. Name a JB landmark where it fits.
- 3+ H2 headings so the "On this page" sidebar renders.
- Real figures with their source. Spec numbers in prose, not a spec dump.
- A "what it really costs" section: sticker price, then the reminder that insurance, road tax
  and registration vary per rider, so two buyers walk out with different totals.
- At least one internal link, written as `/listing` or `/service` — leading slash, no domain,
  so the reader stays in their language.
- Close with an italic source line naming the publication and the month, plus a line telling
  the reader to confirm current pricing.
- Supply Category, Slug, Tags, Excerpt (140–180 chars), Meta title (≤60), Meta description (≤160).

**Do not choose or download images.** State how many are needed and what each should show —
e.g. "1 cover, 16:9, Z15GT three-quarter front in Lime Green". They pick the images.

## 5. Facebook draft

Voice: colloquial Bahasa Malaysia, short lines, `✅` bullets, a couple of emoji. Not translated
English — write it as BM.

The page has two post formats. **Use the blog-promo one** (the awareness/"we built a website"
posts have a different, longer suffix — don't copy that one):

1. Hook question naming the number, plus an emoji: `RM27,999 untuk fairing 250cc paling berkuasa dalam kelas ni — confirm worth it ke? 🏍️🔥`
2. Three or four `✅` lines, each a concrete fact with figures
3. A `⚠️` line whenever a price is quoted: `⚠️ RRP ni belum masuk cukai jalan, insurans & pendaftaran`
4. A CTA question ending `WhatsApp kami sekarang 👇`
5. `Baca review penuh:` or `Baca penuh:` + the **full** blog URL (`https://www.motorkekal.com/blog/<slug>`)
6. `📷 Gambar rasmi:` crediting the photo source — omit if there is no press photo
7. The suffix block

**Suffix block — reproduce verbatim, including the website line:**

```
📍 Address: 5, Jalan Seroja 49, Taman Johor Jaya, 81100, Johor.
📍 Google Map: https://goo.gl/maps/rn9fkE75xtBvAVt79
📲 Whatsapp: +012 - 712 6128 （https://wa.link/l830fp）
🌍 Website: www.motorkekal.com

#perniagaanmotorkekal #motorjohorbahru #kedaimotorjb #motorjohor #YamahaMalaysia #hondamalaysia #KawasakiMalaysia #ktmmalaysia #tradeinmotor #loanmotor
```

Insert one or two topical hashtags (`#budi95`, `#bajet2027`) after `#motorjohor`, keep the rest.

### Driving Facebook

Facebook is blocked by Zscaler by default and server-side fetches only reach a login wall — ask
them to clear Zscaler, then expect an Arkose security check and a 2FA prompt they approve on
their phone. Read posts with `browser_evaluate` on `innerText`, stripping the zero-width `͏`
characters Facebook injects; a full snapshot is far too large.

To write: go straight to `business.facebook.com/latest/composer` (the "Create post" button on
the Content page is unreachable — a dialog layer intercepts pointer events). Insert text by
dispatching a `paste` ClipboardEvent with `text/plain` at the `[contenteditable="true"]`;
typing multi-line text does not survive.

**"Finish later" saves a true draft** — Facebook Pages *do* have drafts, under Content →
Drafts. Prefer it over scheduling: a scheduled post publishes itself if it isn't reviewed in
time, a draft never does. Playwright's own click is intercepted by the dialog layer, so click it
with `element.click()` in `browser_evaluate`, matching `textContent.trim() === 'Finish later'`
so you cannot hit **Publish** by accident.

**Order matters:** the blog post must be published before the Facebook post goes out, or the
`Baca penuh` link 404s.

## Common mistakes

| Mistake | Fix |
|---|---|
| Researching only paultan.org | Three sources minimum |
| Recommending a bike with no related stock | Check the motorcycles API first |
| Quoting a price with no basis | State "excludes road tax, insurance and registration" |
| Presenting a converted foreign price as Malaysian | Label it as a conversion, or leave it out |
| Calling a proposed subsidy a real one | Say "under consideration" |
| Picking images | Hand over sources and an image brief instead |
| Writing the FB post in English then translating | Write it in BM from the start |
| Dropping the website from the FB suffix | The suffix drives blog traffic — keep all four lines |
