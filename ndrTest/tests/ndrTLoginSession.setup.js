import{ expect, test as setup } from '@playwright/test';
// import { STORAGE_STATE } from './playwright.config';
import { STORAGE_STATE } from '../playwright.config';
const ndrlogin = require('./fixtures/ndrLogin');

setup('Validate Session Login', async({page})=>{
	await page.goto("https://10.31.7.138/login");
	await page.locator('#login-name').fill(ndrlogin.selectors.username);
	await page.locator('#login-field').fill(ndrlogin.selectors.password);
	await page.click(ndrlogin.selectors.loginButtonSelect);
	await page.waitForLoadState('networkidle');
    await page.context().storageState({ path: STORAGE_STATE });
	await page.close();
});