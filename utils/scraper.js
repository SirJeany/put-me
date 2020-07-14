const puppeteer = require('puppeteer');

const scrapeProp24 = async(url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('get the correct query to narrow down search')
        )
        .map(link => ({
            title: link.querySelector('title')
        }))
    );

    await browser.close();
    return scrapedData;
}


module.exports.scrapeProp24 = scrapeProp24;