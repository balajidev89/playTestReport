import {expect, test} from '@playwright/test'

test ('Validate test administration accounts menu buttons', async ({page}) => {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'}); // login and wait till network idle;
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)").hover();
    // manage entity section;
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#generateRuleBtn").click();
    await page.locator("div[id='ruleCreationModal'] span[aria-hidden='true']").click();
    await page.locator("#checkAllME").check();
    await page.locator("#checkAllME").uncheck();
    await expect(page.locator("#moListTab_info")).toContainText("Showing");
    await expect(page.locator("#downloadBtnME")).toContainText("Download");
    // management -> DDoS section;
})