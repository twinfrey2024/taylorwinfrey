# taylorwinfrey.com

Static site for Taylor Winfrey, A Creative Practice. Hosted on GitHub Pages.

## Files

`index.html` is the homepage, with the Footnote, Work and Contact sections on it.
`practice.html` is the About page and `services.html` is the full services menu.
`styles.css` holds every color, font and layout rule, so a change there updates all pages.
`images/` holds the photos. Replace a photo by uploading a new file with the same name.
`CNAME` tells GitHub Pages to serve the site at taylorwinfrey.com. Leave it in place.

## Quick edits

To change copy, open the page on github.com, click the pencil icon, edit the text between the tags, and commit. The live site updates within a minute or two.

Placeholders in square brackets, like `[Add price]` or `[Add email address]`, still need real content.

To add the Google Form, open the form, click Send, choose the `< >` embed tab, copy the iframe code, and paste it in `index.html` where it says `[Paste Google Form embed here]`.

## Gluten free guide

`gluten-free.html` is the Lincoln gluten free page. It is linked from the footer of every page.
`gluten-free-places.js` holds the list of places. To add one, open that file on github.com, click the pencil, copy a `{ name: ... }` line in the right group, change the details, and commit. Instructions are at the top of the file.

The page has a spot for a Google My Maps embed. Directions are in a note inside `gluten-free.html`, just above the map section.
