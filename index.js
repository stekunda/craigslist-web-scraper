const puppeteer = require("puppeteer");

// Data Structure
const scrapingResults = [
    {
        title: "Software engineering Mentorship to jumpstart your career",
        datePosted: new Date("2019-07-26 12:00:00"),
        neighborhood: "Washington, DC",
        url: "https://washingtondc.craigslist.org/doc/sof/d/arlington-free-job-placement-devops-sql/7601644639.html",
        jobDescription: "100% Placement Assistance for our consultants.",
        compensation: "DOE",
    },
];

async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
}

main();
