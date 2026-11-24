# Open Graph cover prompts

The four tool pages use a shared cover design. To make a cover for another tool, copy the prompt below, replace the two placeholders, and use one of the linked covers as a visual reference. The homepage has its own artwork.

## Shared prompt

```text
Create a finished Open Graph sharing image for the Simple Icons website.
Use a wide 1.905:1 landscape canvas and a Swiss editorial layout on a warm
ivory, full-bleed background.

In the left column, set the small uppercase publisher credit “SIMPLE ICONS”
above the headline “[TOOL TITLE]”. Use bold black grotesk typography. Wrap
the headline across two or three lines as needed and keep it legible at
thumbnail size.

In the right half, show [SUBJECT] as one clear composition. Use cobalt
blue as the main accent. Keep important details within the central 70%
of the height and aim for 10% horizontal breathing room. Keep the cover
borderless and limit the lettering to the publisher credit and headline.
```

## Subjects for the current covers

| Cover and headline | Subject prompt |
| --- | --- |
| [Icon Previewer](../public/social/preview.jpg) | Repeat a crisp black GitHub Octocat silhouette at three different sizes on an ivory specimen sheet. Use faint alignment guides and a single cobalt blue accent. |
| [3D Magnet Generator](../public/social/3d.jpg) | Photograph a cobalt blue 3D-printed Octocat on a thick matching contour base. Place a detached round silver magnet below it. Show fine filament layers and soft shadows on an ivory studio surface. |
| [Simple Icons CDN](../public/social/cdn.jpg) | Connect a navy Octocat tile to three offset miniature browser windows with cobalt routing lines. Show the same icon in a different color in each window. Use light and dark window backgrounds. |
| [Open Graph Generator](../public/social/og.jpg) | Photograph a slightly angled stack of three landscape print proofs. Give the black top card a grid of colorful technology brand symbols, with cobalt blue and white backing cards beneath it. |

Export the finished cover as a **1200 × 630 JPEG** in [public/social](../public/social/). Set the page’s `image` path and describe the final artwork in `imageAlt` in [src/page-metadata.ts](../src/page-metadata.ts).
