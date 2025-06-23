import{ expect, test} from '@playwright/test';

test ('Validate menu buttons', async ({ page }) => {
  // let browser;
  // browser = await firefox.launch({ headless: false });
  await page.goto('https://10.31.7.138/', { waitUntil: "networkidle" });
  await expect(page.locator('.page-title-heading')).toHaveText('Analytics Dashboard')
  await expect(page.locator("div[class='col-md-8 pl-0'] div[class='card-header-title font-size-lg text-capitalize font-weight-normal']")).toHaveText('Location Wise Traffic Flow')
  await expect(page.locator("div[class='app-main'] li:nth-child(1)")).toContainText('Inbound Traffic');
  await expect(page.locator("div[class='app-main'] li:nth-child(2)")).toContainText('Outbound Traffic');
  await expect(page.locator("div[id='traffic-box-label'] div[class='widget-title']")).toContainText('Average Traffic');
  await expect(page.locator("div[id='tor-box-label'] div[class='widget-title']")).toContainText('TOR Networks Traffic');
  await expect(page.locator("div[id='mal-box-label'] div[class='widget-title']")).toContainText('Malware Traffic');
  await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(1)")).toContainText('Top Applications');
  await expect(page.locator("div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(1) h5:nth-child(1)")).toContainText('Top Application Categories');
  await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")).toContainText('Top Internal Services');
  await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")).toContainText('Top External Services');
  await expect(page.locator("#trafficType")).toContainText('Organization Wise Traffic');
  await page.locator("a[role='button'] span").click();
  await page.locator("//span[normalize-space()='Home']").click();
  //await page.locator("//li[@class='nav-item dropdown']").first().click();
  await page.locator(".icon-gradient.bg-ripe-malin").click()
  await page.locator(".icon-gradient.bg-ripe-malin").click()
  await page.locator("div[class='col-md-4 p-0'] i[class='fas fa-bars btn-icon-wrapper']").click()
  await page.locator("button[id='organizations-toggle-view'] span").click()
  await page.locator("button[id='organizations-download'] span").click()
  await page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(1) > span:nth-child(1) > i:nth-child(1)").click();
  await page.locator("div[id='top-applications'] button[aria-label='Previous']").click()   // clicking on to the top applications side navigation
  await page.locator("div[id='nr_geo_traffic__nonrealtime-summary'] i[class='fas fa-question-circle btn-icon-wrapper']").click(); // clicking on the location wise traffic arrow mark button
  await page.locator("div[id='nr_geo_traffic__nonrealtime-summary'] i[class='fas fa-question-circle btn-icon-wrapper']").click(); // unclick the location wise traffic arrow button
  await page.locator("div[id='top-appcategories'] button[aria-label='Previous']").click(); // click on the top applications category previous icon
  await page.locator("div[id='top-appcategories'] button[aria-label='Next']").click();  // click on the top applications category next icon
  await page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(1) > span:nth-child(1) > i:nth-child(1)").click(); // click on the downloads button in the top applications categories
  await page.locator("div[class='col-md-6 pl-0'] i[class='fas fa-bars btn-icon-wrapper']").click(); //  click on the hamburger icon in the top internal services
  await page.locator("div[class='col-md-6 pl-0'] i[class='fas fa-bars btn-icon-wrapper']").click(); //  unclick on the hamburger icon in the top internal services
  await page.locator("div[class='col-md-6 p-0'] i[class='fas fa-bars btn-icon-wrapper']").click();  //  click on the hamburger icon in the top external services
  await page.locator("div[class='col-md-6 p-0'] i[class='fas fa-bars btn-icon-wrapper']").click();  //  click on the hamburger icon in the top external services
  await page.locator("div[class='col-md-4 p-0'] i[class='fas fa-bars btn-icon-wrapper']").click();  // Organisation wise traffic download icon
  await page.locator("div[class='card mb-3 widget-chart widget-chart2 text-left slick-slide slick-active'] strong[title='Fastly']").click();   // click on any of the top applications 
  page.locator("div[id='tor-box-label'] avg")
  // await page.locator("div[class='slick-track'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click(); // click on any of the top applications categories
  // await page.close();
  page.locator(".plot[fill='#ff6f00'][stroke='#ffffff'][d='M1,-0.25L1.905491,0.655499L1,1.560998L0.09447499999999998,0.655499Z'][stroke-width='3']").hover;
  await page.locator("img[src='/assets/images/data-synchronization.png']").click();
  await expect(page.locator(".modal-content")).toContainText("Confirmation Required !");
  await page.waitForLoadState('networkidle')
});