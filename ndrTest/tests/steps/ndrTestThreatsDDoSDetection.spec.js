import { expect, test} from "@playwright/test";

test ('validate the test threats DDoS Detection', async ({page})=> {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)").hover();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(5) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
    await page.waitForLoadState('networkidle');
    await page.locator("div[class='card mb-2 widget-content high-widget'] div[class='widget-content-wrapper']").click();
    await page.locator("#view-org-wise-BTN").click();
    await page.locator(".fa.fa-filter").click(); //click the filter icon
    await page.locator(".fa.fa-filter").click(); //unclick the filter icon
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)").hover();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(5) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click();
    await page.waitForLoadState('networkidle');
})