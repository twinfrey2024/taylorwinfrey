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
    { name: "Lazlo's", chips: ["GF menu"], note: "No dedicated fryer.", menu: "https://lazlosbreweryandgrill.com/menu/", addr: [["Haymarket", "210 N 7th St, Lincoln, NE 68508"], ["South", "5900 Old Cheney Rd, Lincoln, NE 68516"]] },
    { name: "Art & Soul", site: "https://www.lincolnartandsoul.com", addr: [["", "5740 Hidcote Dr, Lincoln, NE 68516"]] },
    { name: "Denton Daily Double", note: "Steakhouse and keno bar just west of Lincoln. One of my favorites.", menu: "https://dentondailydouble.com/menu", addr: [["Denton", "7230 Lancaster Ave, Denton, NE 68339"]] }
  ]},
  { id: "brunch", title: "Brunch", places: [
    { name: "Penelope's Lil' Cafe", chips: ["GF toast"], site: "https://www.facebook.com/penelopeslincoln", siteLabel: "Facebook", addr: [["", "4724 Pioneers Blvd, Lincoln, NE 68506"]] },
    { name: "Bagels & Joe", chips: ["GF bread"], note: "Ask them to toast it wrapped in paper.", menu: "https://bagelsandjoe.com/full-menus/", addr: [["South", "4701 Old Cheney Rd, Lincoln, NE 68516"], ["North", "1777 N 86th St, Lincoln, NE 68505"], ["Pioneers", "7811 Pioneers Blvd, Lincoln, NE 68506"], ["Foundry", "215 N 14th St, Lincoln, NE 68508"]] },
    { name: "Good Evans", chips: ["GF pancakes"], menu: "https://goodevans.com/our-menu/", addr: [["Clock Tower", "6891 A St, Ste 102, Lincoln, NE 68510"], ["SouthPointe", "2820 Pine Lake Rd, Ste 1, Lincoln, NE 68516"]] },
    { name: "The Hub Cafe", chips: ["Labeled GF items"], note: "Avocado tostada can be made on GF bread", addr: [["", "250 N 21st St #3, Lincoln, NE 68503"]] },
    { name: "Saro Cider", chips: ["GF brunch, 2nd Sundays"], note: "GF brunch the 2nd Sunday of every month, 10am to 2pm. Owner is celiac.", site: "https://www.sarocider.com/", addr: [["Taproom", "1746 N St, Lincoln, NE 68508"]] },
    { name: "The Eatery", chips: ["GF bread & buns", "GF pizza & pasta"], note: "GF French toast, garlic bread and a kids' GF pizza too.", addr: [["", "2548 S 48th St, Lincoln, NE 68506"]] },
    { name: "Ziggi's Coffee", chips: ["GF breakfast sandwiches"], site: "https://ziggiscoffee.com/locations/7050-s-69th-st-lincoln-ne/", addr: [["", "7050 S 69th St, Lincoln, NE 68516"]] },
    { name: "Early Bird", chips: ["GF waffles"], site: "https://earlybirdbrunch.com/", addr: [["", "1900 K St, Suite 180, Lincoln, NE 68510"]] }
  ]},
  { id: "pizza", title: "Pizza", places: [
    { name: "Lazzari's", chips: ["GF crust"], site: "https://lazzarislincoln.com/", addr: [["O Street", "1434 O St, Lincoln, NE 68508"], ["Old Cheney", "4701 Old Cheney Rd, Lincoln, NE 68516"]] },
    { name: "Ramos Pizza", chips: ["GF crust"], note: "10 inch cauliflower GF crust", menu: "https://order.toasttab.com/online/ramos-pizza-and-busters-bbq-2435-s-48th-st", addr: [["", "2435 S 48th St, Lincoln, NE 68506"]] },
    { name: "Vic's Pizza", chips: ["GF crust"], menu: "https://order.toasttab.com/online/vicspizza", addr: [["", "8340 Glynoaks Dr, Lincoln, NE 68516"]] },
    { name: "MōMō Pizzeria & Ristorante", chips: ["GF pasta swaps"], note: "The chef knows GF well. Ask for zucchini noodles.", addr: [["", "7701 Pioneers Blvd #2, Lincoln, NE 68506"]] },
    { name: "Mellow Mushroom", chips: ["GF crust"], site: "https://mellowmushroom.com/", addr: [["Haymarket", "601 R St, Suite 110, Lincoln, NE 68508"]] },
    { name: "Blaze Pizza", chips: ["GF crust"], site: "https://www.blazepizza.com/", addr: [["Downtown", "1317 Q St, Lincoln, NE 68508"]] }
  ]},
  { id: "burgers", title: "Burgers", places: [
    { name: "HF Crave", chips: ["Dedicated GF fryer", "GF buns"], site: "https://www.hfcrave.com/", addr: [["Holdrege", "4800 Holdrege St Ste 100, Lincoln, NE 68504"], ["Pine Lake", "2801 Pine Lake Rd, Lincoln, NE 68516"]] },
    { name: "Honest Abe's", chips: ["GF buns", "GF breaded nuggets"], site: "https://www.honestabesburgers.com/", addr: [["Downtown", "126 N 14th St, Lincoln, NE 68508"], ["Meadowlane", "840 N 70th St, Lincoln, NE 68505"], ["Glynoaks", "8340 Glynoaks Dr, Lincoln, NE 68516"], ["North", "2662 Cornhusker Hwy, Lincoln, NE 68521"]] },
    { name: "Red Robin", chips: ["Dedicated GF fryer"], site: "https://www.redrobin.com/", addr: [["South Ridge", "2707 Pine Lake Rd, Lincoln, NE 68516"]] }
  ]},
  { id: "mexican", title: "Mexican", places: [
    { name: "Mi Tierra", chips: ["GF marked on menu"], note: "Ask about the fryer before ordering chips.", menu: "https://mitierralincoln.com/lincoln-mi-tierra-mexican-restaurant-food-menu", addr: [["North", "8320 Northwoods Dr, Lincoln, NE 68505"], ["South", "5500 Old Cheney Rd #4, Lincoln, NE 68516"]] },
    { name: "Hacienda Real", addr: [["", "3130 Pine Lake Rd, Lincoln, NE 68516"]] }
  ]},
  { id: "asian", title: "Sushi & Asian", places: [
    { name: "Blue Sushi Sake Grill", menu: "https://bluesushisakegrill.com/menus", addr: [["Haymarket", "808 R St, Lincoln, NE 68508"]] },
    { name: "Hiro 88", menu: "https://hiro88.com/dinner-menu/", addr: [["West Haymarket", "601 R St #100, Lincoln, NE 68508"], ["South", "5730 Hidcote Dr, Lincoln, NE 68516"]] },
    { name: "Ginger", menu: "https://ginger-grill.com/lincoln-ginger-grill-food-menu", addr: [["", "6055 Apples Way, Lincoln, NE 68516"]] },
    { name: "Grey Whale Poke", menu: "https://www.greywhalepokebowl.com/q-st-location", addr: [["Downtown", "1317 Q St Ste 130, Lincoln, NE 68508"], ["Gateway Mall", "6100 O St Ste D6, Lincoln, NE 68505"]] },
    { name: "Kencono Bowl", menu: "https://kenconobowl.com/lincoln-lincoln-nebraska-kencono-bowl-food-menu", addr: [["", "2601 Jamie Ln, Suite 104, Lincoln, NE 68512"]] },
    { name: "Mr. Hui's #2", chips: ["Most dishes made GF"], note: "Call for takeout. They're super knowledgeable and can make most dishes gluten free. My favorite is the Hunan beef or chicken.", menu: "https://www.mrhuis2lincolnne.com/order", addr: [["", "4131 Pioneer Woods Dr, Lincoln, NE 68506"]] },
    { name: "Chopsticks", chips: ["GF fried rice"], note: "They'll make the fried rice gluten free.", menu: "https://www.chopstickslincoln.com/order", addr: [["", "6891 A St, Suite 215, Lincoln, NE 68510"]] }
  ]},
  { id: "bars", title: "Sports bars", places: [
    { name: "Sportscasters", chips: ["GF buns"], note: "No dedicated fryer.", site: "https://www.facebook.com/150801348271616", siteLabel: "Facebook", addr: [["", "3048 N 70th St, Lincoln, NE 68507"]] },
    { name: "Tanner's", site: "https://tannersbarandgrill.com/", addr: [["Yankee Hill", "8600 S 30th St, Lincoln, NE 68516"]] },
    { name: "Liquid Assets", chips: ["GF buns"], menu: "https://theliquidassetsbar.com/lincoln-liquid-assets-sports-bar-food-menu", addr: [["", "2755 Jamie Ln, Lincoln, NE 68516"]] },
    { name: "The LNK Grill", menu: "https://thelnkgrill.com/lincoln-prairie-lake-plaza-the-lnk-grill-food-menu", addr: [["", "8500 Andermatt Dr, Lincoln, NE 68526"]] }
  ]},
  { id: "sweets", title: "Bakery & sweets", places: [
    { name: "Goldenrod Pastries", chips: ["Mostly GF"], site: "https://www.instagram.com/goldenrodpastries/", siteLabel: "Instagram", addr: [["", "3947 S 48th St, Lincoln, NE 68506"]] },
    { name: "Rabbit Hole Bakery", chips: ["GF brownies, cookies, cupcakes"], note: "Fully GF cakes with a few days' notice", addr: [["", "800 Q St Suite 10, Lincoln, NE 68508"]] },
    { name: "Hurts Donut Co.", chips: ["GF donuts"], site: "https://www.wannahurts.com/locations/lincoln-ne/", addr: [["", "129 N 10th St #100, Lincoln, NE 68508"]] },
    { name: "402 Creamery", chips: ["GF flavors rotate"], addr: [["Fallbrook", "570 Fallbrook Blvd Suite 102, Lincoln, NE 68521"], ["Telegraph", "330 S 21st St Suite 101, Lincoln, NE 68510"], ["Village Gardens", "7101 Kentwell Ln, Lincoln, NE 68516"]] },
    { name: "Paper Moon Pastries", chips: ["Gluten friendly cakes & cupcakes"], note: "Small town bakery in Cortland, open Saturdays. Some cookies are gluten friendly too, and the menu changes weekly on Facebook.", site: "https://www.facebook.com/papermoonpastries", siteLabel: "Facebook", addr: [["Cortland", "325 W 4th St, Cortland, NE 68331"]] }
  ]},
  { id: "totry", title: "On my list", intro: "I haven’t tried these yet, but Lincoln celiacs swear by them.", places: [
    { name: "Hickman Bar & Grill", chips: ["GF fryer on request"], note: "I’ve heard great things.", site: "https://www.facebook.com/hickmanbar", siteLabel: "Facebook", addr: [["", "107 Locust St, Hickman, NE 68372"]] },
    { name: "Cheba Hut", chips: ["GF bread", "Hard cider"], note: "Owner is celiac. GF subs are toasted on their own paper.", site: "https://www.chebahut.com/locations/lincoln-ne", addr: [["Telegraph", "200 S 21st St, Lincoln, NE 68510"]] },
    { name: "Moxie’s", chips: ["Fully GF"], note: "Allergen-free kiosk in UNL’s Selleck food court, open to the public on weekdays.", addr: [["Selleck Hall", "600 N 15th St, Lincoln, NE 68508"]] },
    { name: "Heavenly Body Bakery", chips: ["Fully GF", "Food truck"], note: "Celiac-owned bakery truck from Omaha that pops up in Lincoln. Check Facebook for stops.", site: "https://www.facebook.com/p/Heavenly-Body-Bakery-61559630672857/", siteLabel: "Facebook" },
    { name: "Salt Mine City Brewing Co.", chips: ["GF beer"], site: "https://www.saltminecity.com/", addr: [["Haymarket", "801 R St, Suite 100, Lincoln, NE 68508"]] },
    { name: "ChefauChef", chips: ["Catering"], note: "Caterer that works around allergies, plus Wham Bam Meal in a Pan.", site: "https://www.chefauchef.com/", addr: [["", "2111 N 86th St, Lincoln, NE 68505"]] },
    { name: "Tico’s", chips: ["Lincoln favorite"], note: "Not my favorite, but most of Lincoln loves it.", addr: [["", "317 S 17th St, Lincoln, NE 68508"]] },
    { name: "Taco Inn", chips: ["Reader pick"], note: "Never been a fan myself, but readers recommend it. Send me your go-to order.", chain: "Taco Inn Lincoln NE" }
  ]},
  { id: "fast", title: "Fast food", places: [
    { name: "Culver's", site: "https://www.culvers.com/", chain: "Culver's Lincoln NE" },
    { name: "Chick-fil-A", site: "https://www.chick-fil-a.com/", chain: "Chick-fil-A Lincoln NE" },
    { name: "Jersey Mike's", site: "https://www.jerseymikes.com/", chain: "Jersey Mike's Lincoln NE" },
    { name: "Firehouse Subs", site: "https://www.firehousesubs.com/", chain: "Firehouse Subs Lincoln NE" },
    { name: "Taco John's", site: "https://www.tacojohns.com/", chain: "Taco John's Lincoln NE" },
    { name: "Noodles & Company", site: "https://www.noodles.com/", chain: "Noodles & Company Lincoln NE" },
    { name: "Raising Cane's", chips: ["Naked Bird"], note: "Order the tenders naked. No dedicated fryer.", site: "https://www.raisingcanes.com/", chain: "Raising Cane's Lincoln NE" },
    { name: "Slim Chickens", site: "https://www.slimchickens.com/", chain: "Slim Chickens Lincoln NE" }
  ]}
];
