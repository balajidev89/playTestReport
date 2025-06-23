import {expect, test} from '@playwright/test'

test ('Validate test administration accounts menu buttons', async ({page}) => {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'}); // login and wait till network idle
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
    await page.waitForLoadState('networkidle');
    await page.locator("a[id='tab-c-3'] span").click();
    await page.locator("a[id='tab-c-1'] span").click();
    await page.locator("a[id='tab-c-0'] span").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > button:nth-child(1) > i:nth-child(1)").click();
    await page.locator("button[class='btn btn-light']").click();
})