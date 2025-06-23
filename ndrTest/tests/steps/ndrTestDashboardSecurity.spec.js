import { expect, test} from "@playwright/test"

test ('validate the dashboard Security menu', async ({page})=> {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("a[role='button'] span").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)").click();
    await expect(page.locator("div[class='text-primary']")).toContainText("Security Dashboard")
    await expect (page.locator("div[id='traffic-box-label'] div[class='widget-title']")).toContainText("Average Traffic");
    await expect(page.locator("div[id='traffic-box-label'] div[class='widget-subtitle']")).toContainText("Statistics");
    await expect(page.locator("div[id='tor-box-label'] div[class='widget-title']")).toContainText("TOR Traffic");
    await expect(page.locator("div[id='tor-box-label'] div[class='widget-subtitle']")).toContainText("Statistics");
    await expect(page.locator("div[id='mal-box-label'] div[class='widget-title']")).toContainText("Malware Traffic");
    await expect(page.locator("#alertsHeader")).toContainText("Alerts Count By Category ");
    page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(10)");
    // await page.locator(".highcharts-point[x='334.5']").hover();
    // await page.hover(".highcharts-point[x='251.5']");
    // await page.hover(".highcharts-point[x='196.5']");
    // await page.hover(".highcharts-point[x='225.5']");
    // await page.waitForTimeout(5000);
})