const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://www.indiamart.com/aryaveer-enterprises/');

  // Scrape the product data
  const products = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('.prd-cont').forEach((item, index) => {
      const name = item.querySelector('.prd-name').innerText;
      const category = item.querySelector('.category')
        ? item.querySelector('.category').innerText
        : 'N/A';
      const size = 'N/A'; // Assuming size isn't available
      const material = 'N/A'; // Assuming material isn't available
      const description = item.querySelector('.prd-desc').innerText;
      const price = 'N/A'; // Assuming price isn't available
      const stock = 'N/A'; // Assuming stock isn't available
      const image = item.querySelector('img').src;

      items.push({
        id: index + 1,
        name,
        category,
        size,
        material,
        description,
        price,
        stock,
        image,
      });
    });
    return items;
  });

  console.log(products);

  await browser.close();
})();
