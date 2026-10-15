# taylorwinfrey.com

Static site for Taylor Winfrey, A Creative Practice. Hosted on GitHub Pages.

## Pages

`index.html` Home
`practice.html` The Practice
`services.html` Services (the full menu and prices)
`footnote.html` Footnote ($5 and $20 question packs, PayPal button)
`work.html` Work (photo grid)
`extras.html` A Little Bit Extra (list of guides and posts)
`gluten-free.html` Gluten free in Lincoln. The list of places lives in `gluten-free-places.js`.
`contact.html` Contact (hours, phone, email and the Google Form)

`styles.css` holds every color, font and layout rule, so a change there updates all pages.
`images/` holds the photos. Replace a photo by uploading a new file with the same name.
`CNAME` tells GitHub Pages to serve the site at taylorwinfrey.com. Leave it in place.

## Quick edits

To change copy, open the page on github.com, click the pencil icon, edit the text between the tags, and commit. The live site updates within a minute or two.

To add a new extra, open `extras.html` and follow the note above the list.

## When you change styles.css

Every page loads the stylesheet as `styles.css?v=` plus a number. After editing `styles.css`, change that number on every page (any new number works) so visitors' browsers pick up the new version right away instead of using a saved copy.
