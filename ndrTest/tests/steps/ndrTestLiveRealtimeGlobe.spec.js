import {expect, test} from '@playwright/test'

test ('Validate live realtime globe menu buttons', async ({page}) => {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#toggle-menu-button").click();
    await page.locator("#select2-selectCustomer-container").click();
    // await page.locator("#select2-selectCustomer-container").click();
    //  await page.locator("#select2-selectCustomer-result-2zyg-2").click();
    await page.locator("#select2-selectRouter-container").click();
    await page.locator("#select2-selectRouter-container").click();
    await page.locator("#select2-selectFlow-container").click();
    await page.locator("#select2-selectFlow-container").click();
    await page.locator("#applyFilter").click();
})