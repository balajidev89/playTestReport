import test, { expect } from "@playwright/test";


test("Validate the test Live Traffic Map page", async({page})=> {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(8000);
    await expect(page.locator("div[class='text-primary']")).toContainText('Traffic Map');
    await expect(page.locator("div[class='side-bar-left top-countries side-bar-widgets'] div[class='card-header']")).toContainText('Top Countries');
    await expect(page.locator("div[class='top-asn side-bar-widgets side-bar-left'] div[class='card-header']")).toContainText('Top ASN in');
    await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)")).toContainText('tcp');
    await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)")).toContainText('udp');
    await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)")).toContainText('icmp');
    await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > span:nth-child(2)")).toContainText('others');
    await page.locator("#toggle-menu-button").click();
    await page.waitForTimeout(2000)
})