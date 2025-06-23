import { PickleTagFilter } from "@cucumber/cucumber/lib/pickle_filter";
import test, { expect } from "@playwright/test";


test("Validate live Threat Map page", async({page})=> {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)").click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000);
    await expect(page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)")).toContainText('Threat map');
    await expect(page.locator("div[class='side-bar-left top-countries side-bar-widgets'] div[class='card-header']")).toContainText("Top Countries");
    await expect(page.locator("div[class='top-asn side-bar-widgets side-bar-left'] div[class='card-header']")).toContainText("Top Malware Categories");
    await expect(page.locator("div[class='top-asn-pps side-bar-widgets side-bar-right'] div[class='card-header']")).toContainText("Top Malware Subcategories");
    await expect(page.locator("div[class='side-bar-left top-countries-pps side-bar-widgets'] div[class='card-header']")).toContainText("Top Ports");
    await expect(page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > svg:nth-child(1) > text:nth-child(12) > tspan:nth-child(1)")).toContainText("Traffic Rate in bps");
})