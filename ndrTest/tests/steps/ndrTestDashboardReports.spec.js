import {expect, test} from '@playwright/test'

test ('Validate dashboard reports menu buttons', async ({page}) => {
    await page.goto("https://10.31.7.138/", {waitUntil:'networkidle'});
    await page.locator("a[role='button'] span").click();
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1) > span:nth-child(2)").click();
    await page.waitForLoadState('networkidle');
    // await page.locator("select[name='reporting-dashboard-Table_length']").click();
    const dropdown = page.locator("select[name='reporting-dashboard-Table_length']");
    const numberOfOptions = await dropdown.locator('option').count()
    const randomIndex = Math.floor(Math.random() * numberOfOptions)
    console.log(randomIndex);
    await dropdown.selectOption({ index: randomIndex })
    // page.locator("tbody tr:nth-child(1) td:nth-child(9) div:nth-child(1) button:nth-child(1) i:nth-child(1)")
    // const row = await page.waitForSelector("#viewDashboardBTN");
    // var len = document.getElementById('#reporting-dashboard-Table').ariaRowSpan.length;
    // console.log(len);
    let len = await page.locator("#viewDashboardBTN").count();
    console.log(len)
    const randomClick = Math.floor(Math.random() * len)
    console.log(randomClick)
    let i = randomClick
    page.locator('tbody tr:nth-child('+randomClick+') td:nth-child(9) div:nth-child(1) button:nth-child(1) i:nth-child(1)')
})