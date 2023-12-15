const puppeteer = require("puppeteer");

const A1Format = {
    inches: {
        width: 33.1,
        height: 46.8
    },
    pixels: {
        "96dpi":{
            width: 3177,
            height: 4492
        }
    },
}

const browserOptions = {
    headless: false
}
async function printPDF() {
    const browser = await puppeteer.launch(browserOptions);
    const page = await browser.newPage();
    await page.goto("http://localhost:3000", { waitUntil: 'networkidle0' });

    if (browserOptions.headless) {
        await page.pdf({ path: "./cv.pdf", format: "tabloid" });
        await browser.close();
        return true;
    }
    return false;
}

printPDF().then((success) => {
    if (success) console.log("Sucessful save to file...");
}).catch((err) => { console.error(err) });