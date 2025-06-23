import test, { expect } from "@playwright/test";

test ("Validate the Test Live Traffic", async ({page}) => {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(8000);
    await expect(page.locator("div[class='text-primary']")).toContainText("Live Traffic Summary");
    await expect(page.locator("div[class='row mt-3'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Traffic");
    await expect(page.locator("div[class='row mt-3'] div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1) h6:nth-child(1)")).toContainText("Protocols");
    await expect(page.locator("div[class='col-lg-3 pl-0 pr-0'] div[class='card-header-title font-size-lg text-capitalize font-weight-normal']")).toContainText("TCP Flags");
    // await expect(page.locator("div[class='col-lg-9 pl-0'] h6[class='text-primary']")).toContainText("Top Applications");
    // await expect(page.locator("div[class='col-lg-3 pl-0 p-0'] h6[class='text-primary']")).toContainText("Threat and Anonymous Traffic");
    // await expect(page.locator("#topSrcLabel")).toContainText("Top Internal Hosts");
    // await expect(page.locator("#topDestLabel")).toContainText("Top External Hosts");
    // await expect(page.locator("#topSrcPortLabel")).toContainText("Top Internal Ports");
    // await expect(page.locator("#topDestPortLabel")).toContainText("Top External Ports");
    // await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > h6:nth-child(2)")).toContainText("Top Internal IPv6 Hosts");
    // await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > h6:nth-child(2)")).toContainText("Top External IPv6 Hosts");
})