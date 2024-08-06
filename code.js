// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright"); // we are using an older way of importing chromium to this page

async function sortHackerNewsArticles() {// we are creating an asynchronous function that will await a promise or invoke on the promise
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");//this is the URL which the page is awaiting to load

  // Extract the titles of the first 100 articles
  const articles = await page.evaluate(() => {
    // Select article elements
    const articleElements = Array.from(document.querySelectorAll('.athing .titlelink'));
    // Return the first 100 titles
    return articleElements.slice(0, 100).map(element => element.innerText);
  });//we are going to the page using document.queryselectorall to select . we are returning the first 100 titles using the slice method and .map 

  // Close browser
  await browser.close(); 

  // Validate that the articles are sorted from newest to oldest
  const sortedArticles = [...articles].reverse(); //sorting function with the use of spread operator on articles as well as the reverse method
  for (let i = 0; i < articles.length; i++) { //iterating through articles
    if (articles[i] !== sortedArticles[i]) { // if the current index of articles does not equal to the current index of sorted articles
      console.log(`The articles are not sorted correctly.`); //error handling the articles are not sorted
      console.log(`Mismatch at index ${i}: "${articles[i]}"`); //console log the mismatched articles
      process.exit(1); //exit
    }
  }

  console.log(`The first 100 articles are correctly sorted from newest to oldest.`);
}

(async () => {
  await sortHackerNewsArticles();
})();



cons