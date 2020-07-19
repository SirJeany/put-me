// https://medium.com/@joshblf/web-scraping-with-express-and-puppeteer-1c1b47bb2a21
const puppeteer = require('puppeteer');
// Puppeteer is a headless browser surfer that we can use to surf and return data from a site.

// Async function to be used to return a promise:
const scrapeProp24 = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.property24.com/to-rent/rondebosch/cape-town/western-cape/8682/106290453?plId=607840&plt=2');
    // above self explanitory

    // Here is where we search the page for the [generalised] page and find the elements we want.
    // Array.from puts the big wrapper into an array.
    // Then we map each specific element that we want to a descriptive name.
    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.p24_listingFeaturesWrapper')
        )
        .map(link => ({
            price: link.querySelector('.p24_price').textContent,
            room: link.querySelector('h1').textContent,
            place: link.querySelector('.p24_mB').querySelector('div').textContent
        }))
    );

    await browser.close();
    return scrapedData;
}


module.exports.scrapeProp24 = scrapeProp24;