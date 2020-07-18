const puppeteer = require('puppeteer');

const scrapeProp24 = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.property24.com/to-rent/rondebosch/cape-town/western-cape/8682/106290453?plId=607840&plt=2');

    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.p24_listingFeaturesWrapper')
        )
        .map(link => ({
            price: link.querySelector('.p24_price').textContent,
            room: link.querySelector('h1').textContent,
            place: link.querySelector('.p24_mB').querySelector('div').textContent
            // title: 'THis is the title'
        }))
        // Array.from(
        //     [
        //         document.querySelector('.p24_listingFeaturesWrapper').querySelector('.p24_price').textContent,
        //         document.querySelector('.p24_listingFeaturesWrapper').querySelector('h1').textContent,
        //         document.querySelector('.p24_listingFeaturesWrapper').querySelector('.p24_mB').querySelector('div').textContent,
        //     ]
        // )
    );

    // console.log("Scraped data:  ", scrapedData[0])

    await browser.close();
    return scrapedData;
}


module.exports.scrapeProp24 = scrapeProp24;