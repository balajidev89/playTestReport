import { expect, test } from '@playwright/test';

const {firefox} = require ('playwright');

test ('Validate ndr test login with correct credentials', async ({ page }) => {
  let browser
  browser = await firefox.launch({ headless: false })
  await page.goto('https://10.31.7.138/', { waitUntil: "networkidle" });
  await expect(page).toHaveTitle('FlowInt')
  await page.close();
});
