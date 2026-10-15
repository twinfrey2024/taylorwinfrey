/* Gluten free in Lincoln: the list of places.

   HOW TO ADD A PLACE
   1. Find the group it belongs in (Sit down, Brunch, Pizza, and so on).
   2. Copy one whole line that starts with { name: and paste it as a new line in that group.
   3. Change the details. Keep the quotes, commas, and brackets exactly as they are.

   What each part means:
     name   The restaurant name.
     chips  Short gluten free tags, like ["GF buns", "Dedicated GF fryer"]. Leave it out if none.
     note   One short sentence of extra detail. Leave it out if none.
     menu   Link to the menu. Leave it out if none.
     site   Link to the website, Facebook, or Instagram. Add siteLabel: "Facebook" to rename the link.
     addr   Each location as ["Label", "Full street address"]. Use "" for the label when there is only one.
     chain  For chains with many stores, a search phrase like "Culver's Lincoln NE" instead of addresses.

   To add a whole new group, copy a group from { id: down to its closing ]}, and give it a new id and title.
*/

window.GF_GROUPS = [
  { id: "sitdown", title: "Sit down", places: [
    { name: "Carmela's Bistro & Wine Bar", site: "http://www.carmelasbistroandwinebar.com/", addr: [["", "4141 Pioneer Woods Dr, Lincoln, NE 68506"]] },
    { name: "Venue", menu: "https://www.yourvenue.net/menu/", addr: [["", "4111 Pioneer Woods Dr, Ste 100, Lincoln, NE 68506"]] },
    { name: "Piedmont Bistro", site: "https://piedmontbistro.com/", addr: [["", "1265 S Cotner Blvd, Ste 38, Lincoln, NE 68510"]] },
    { name: "Green Gateau", site: "http://www.greengateau.com/", addr: [["", "330 S 10th St, Lincoln, NE 68508"]] },
    { name: "The Oven", site: "http://www.theoven-lincoln.com/", addr: [["Downtown", "201 N 8th St, Lincoln, NE 68508"], ["East", "4101 Pioneer Woods Dr, #110, Lincoln, NE 68506"]] },
    { name: "Vincenzo's", menu: "https://www.vincenzos-ne.com/menu", addr: [["", "808 P St, Lincoln, NE 68508"]] },
    { name: "Fleetwood", menu: "https://getfleetwood.com/menu", addr: [["", "801 O St, Suite 100, Lincoln, NE 68508"]] },
    { name: "Toast", menu: "https://gettoasty.com/menu", addr: [["", "570 Fallbrook Blvd #105, Lincoln, NE"]] },
    { name: "Lazlo's", menu: "https://lazlosbreweryandgrill.com/menu/", addr: [["Haymarket", "210 N 7th St, Lincoln, NE 68508"], ["South", "5900 Old Cheney Rd, Lincoln, NE 68516"]] },
    { name: "Art & Soul", site: "https://www.lincolnartandsoul.com", addr: [["", "5740 Hidcote Dr, Lincoln, NE 68516"]] }
  ]},
  { id: "brunch", title: "Brunch", places: [
    { name: "Penelope's Lil' Cafe", chips: ["GF toast"], site: "https://www.facebook.com/penelopeslincoln", siteLabel: "Facebook", addr: [["", "4724 Pioneers Blvd, Lincoln, NE 68506"]] },
    { name: "Bagels & Joe", chips: ["GF bread"], menu: "https://bagelsandjoe.com/full-menus/", addr: [["South", "4701 Old Cheney Rd, Lincoln, NE 68516"], ["North", "1777 N 86th St, Lincoln, NE 68505"], ["Pioneers", "7811 Pioneers Blvd, Lincoln, NE 68506"], ["Foundry", "215 N 14th St, Lincoln, NE 68508"]] },
    { name: "Good Evans", menu: "https://goodevans.com/our-menu/", addr: [["Clock Tower", "6891 A St, Ste 102, Lincoln, NE 68510"], ["SouthPointe", "2820 Pine Lake Rd, Ste 1, Lincoln, NE 68516"]] },
    { name: "The Hub Cafe", chips: ["Labeled GF items"], note: "Avocado tostada can be made on GF bread", addr: [["", "250 N 21st St #3, Lincoln, NE 68503"]] },
    { name: "Saro Cider", chips: ["GF brunch, 1st Sunday monthly"], note: "Owner is celiac", site: "https://www.sarocider.com/", addr: [["Taproom", "1746 N St, Lincoln, NE 68508"]] }
  ]},
  { id: "pizza", title: "Pizza", places: [
    { name: "Lazzari's", chips: ["GF crust"], site: "https://lazzarislincoln.com/", addr: [["O Street", "1434 O St, Lincoln, NE 68508"], ["Old Cheney", "4701 Old Cheney Rd, Lincoln, NE 68516"]] },
    { name: "Ramos Pizza", chips: ["GF crust"], note: "10 inch cauliflower GF crust", menu: "https://order.toasttab.com/online/ramos-pizza-and-busters-bbq-2435-s-48th-st", addr: [["", "2435 S 48th St, Lincoln, NE 68506"]] },
    { name: "Vic's Pizza", chips: ["GF crust"], menu: "https://order.toasttab.com/online/vicspizza", addr: [["", "8340 Glynoaks Dr, Lincoln, NE 68516"]] }
  ]},
  { id: "burgers", title: "Burgers", places: [
    { name: "HF Crave", chips: ["Dedicated GF fryer", "GF buns"], site: "https://www.hfcrave.com/", addr: [["Holdrege", "4800 Holdrege St Ste 100, Lincoln, NE 68504"], ["Pine Lake", "2801 Pine Lake Rd, Lincoln, NE 68516"]] },
    { name: "Honest Abe's", chips: ["GF buns", "GF breaded nuggets"], site: "https://www.honestabesburgers.com/", addr: [["Downtown", "126 N 14th St, Lincoln, NE 68508"], ["Meadowlane", "840 N 70th St, Lincoln, NE 68505"], ["Glynoaks", "8340 Glynoaks Dr, Lincoln, NE 68516"], ["North", "2662 Cornhusker Hwy, Lincoln, NE 68521"]] },
    { name: "Red Robin", chips: ["Dedicated GF fryer"], site: "https://www.redrobin.com/", addr: [["South Ridge", "2707 Pine Lake Rd, Lincoln, NE 68516"]] }
  ]},
  { id: "mexican", title: "Mexican", places: [
    { name: "Mi Tierra", menu: "https://mitierralincoln.com/lincoln-mi-tierra-mexican-restaurant-food-menu", addr: [["North", "8320 Northwoods Dr, Lincoln, NE 68505"], ["South", "5500 Old Cheney Rd #4, Lincoln, NE 68516"]] },
    { name: "Hacienda Real", addr: [["", "3130 Pine Lake Rd, Lincoln, NE 68516"]] }
  ]},
  { id: "asian", title: "Sushi & Asian", places: [
    { name: "Blue Sushi Sake Grill", menu: "https://bluesushisakegrill.com/menus", addr: [["Haymarket", "808 R St, Lincoln, NE 68508"]] },
    { name: "Hiro 88", menu: "https://hiro88.com/dinner-menu/", addr: [["West Haymarket", "601 R St #100, Lincoln, NE 68508"], ["South", "5730 Hidcote Dr, Lincoln, NE 68516"]] },
    { name: "Ginger", menu: "https://ginger-grill.com/lincoln-ginger-grill-food-menu", addr: [["", "6055 Apples Way, Lincoln, NE 68516"]] },
    { name: "Grey Whale Poke", menu: "https://www.greywhalepokebowl.com/q-st-location", addr: [["Downtown", "1317 Q St Ste 130, Lincoln, NE 68508"], ["Gateway Mall", "6100 O St Ste D6, Lincoln, NE 68505"]] },
    { name: "Mr. Hui's #2", menu: "https://www.mrhuis2lincolnne.com/order", addr: [["", "4131 Pioneer Woods Dr, Lincoln, NE 68506"]] }
  ]},
  { id: "bars", title: "Sports bars", places: [
    { name: "Sportscasters", site: "https://www.facebook.com/150801348271616", siteLabel: "Facebook", addr: [["", "3048 N 70th St, Lincoln, NE 68507"]] },
    { name: "Tanner's", site: "https://tannersbarandgrill.com/", addr: [["Yankee Hill", "8600 S 30th St, Lincoln, NE 68516"]] },
    { name: "Liquid Assets", menu: "https://theliquidassetsbar.com/lincoln-liquid-assets-sports-bar-food-menu", addr: [["", "2755 Jamie Ln, Lincoln, NE 68516"]] },
    { name: "The LNK Grill", menu: "https://thelnkgrill.com/lincoln-prairie-lake-plaza-the-lnk-grill-food-menu", addr: [["", "8500 Andermatt Dr, Lincoln, NE 68526"]] }
  ]},
  { id: "sweets", title: "Bakery & sweets", places: [
    { name: "Goldenrod Pastries", chips: ["Mostly GF"], site: "https://www.instagram.com/goldenrodpastries/", siteLabel: "Instagram", addr: [["", "3947 S 48th St, Lincoln, NE 68506"]] },
    { name: "Rabbit Hole Bakery", chips: ["GF brownies, cookies, cupcakes"], note: "Fully GF cakes with a few days' notice", addr: [["", "800 Q St Suite 10, Lincoln, NE 68508"]] },
    { name: "Hurts Donut Co.", chips: ["GF donuts"], site: "https://www.wannahurts.com/locations/lincoln-ne/", addr: [["", "129 N 10th St #100, Lincoln, NE 68508"]] },
    { name: "402 Creamery", chips: ["GF flavors rotate"], addr: [["Fallbrook", "570 Fallbrook Blvd Suite 102, Lincoln, NE 68521"], ["Telegraph", "330 S 21st St Suite 101, Lincoln, NE 68510"], ["Village Gardens", "7101 Kentwell Ln, Lincoln, NE 68516"]] }
  ]},
  { id: "fast", title: "Fast food", places: [
    { name: "Culver's", site: "https://www.culvers.com/", chain: "Culver's Lincoln NE" },
    { name: "Chick-fil-A", site: "https://www.chick-fil-a.com/", chain: "Chick-fil-A Lincoln NE" },
    { name: "Jersey Mike's", site: "https://www.jerseymikes.com/", chain: "Jersey Mike's Lincoln NE" },
    { name: "Firehouse Subs", site: "https://www.firehousesubs.com/", chain: "Firehouse Subs Lincoln NE" },
    { name: "Taco John's", site: "https://www.tacojohns.com/", chain: "Taco John's Lincoln NE" },
    { name: "Noodles & Company", site: "https://www.noodles.com/", chain: "Noodles & Company Lincoln NE" }
  ]}
];
