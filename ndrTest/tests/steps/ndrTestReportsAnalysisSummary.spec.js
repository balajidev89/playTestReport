import test, { expect } from "@playwright/test";

test("Validate the ndr test reports analysis summary", async({page})=> {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(4000);
    await expect(page.locator("span[class='text-primary']")).toContainText("Analysis Summary");
    await expect(page.locator("div[id='traffic-box-label'] div[class='widget-title']")).toContainText("Average Traffic");
    await expect(page.locator("div[class='widget-subtitle']")).toContainText("Statistics");
    await expect(page.locator("div[id='tor-box-label'] div[class='widget-title']")).toContainText("TOR Networks Traffic");
    await expect(page.locator("div[id='tor-box-label'] div[class='widget-subtitle text-muted']")).toContainText("Statistics");
    await expect(page.locator("div[id='mal-box-label'] div[class='widget-title']")).toContainText("Malware Traffic");
    await expect(page.locator("div[id='mal-box-label'] div[class='widget-subtitle text-muted']")).toContainText("Statistics");
    // await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1)")).toContainText("Top Traffic");
    // await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")).toContainText("Top Applications");
    // await expect(page.locator("div[class='app-main__outer'] div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Top Countries");
    // await expect(page.locator("div[class='app-main__inner'] div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Top Countries");
    // await expect(page.locator("div[class='app-main__outer'] div:nth-child(1) div:nth-child(3) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Top Internal Hosts");
    // await expect(page.locator("div[class='app-main__outer'] div:nth-child(1) div:nth-child(4) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Top External Ports");
    // await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)")).toContainText("Top Internal Ports");
    // await expect(page.locator("div[class='app-main__outer'] div:nth-child(1) div:nth-child(5) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Top ASN");
    // await expect(page.locator("div[class='app-main__inner'] div:nth-child(2) div:nth-child(5) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Top Flags")
})