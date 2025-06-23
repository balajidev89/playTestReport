// @ts-check
import { defineConfig, devices } from '@playwright/test';
import path from "path";
export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/login-data.json');
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: './tests',
  timeout: 150_000,
  fullyParallel:true,
  reporter: "allure-playwright",
/* Configure projects for major browsers */
projects: [

  //setup ptoject

  {
    name: 'setup',
    testMatch: '**/*.setup.js',
    
  },
  {
    name: 'chromium',
   
    use: { ...devices['Desktop Chrome'],
    storageState: STORAGE_STATE,
	  ignoreHTTPSErrors: true,
   },
    testMatch: ['**/*.spec.js'],
    dependencies: ['setup'],

  },

  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'],
    // User prepared auth state.
    storageState: STORAGE_STATE,
	ignoreHTTPSErrors: true,
   },
   testMatch: '**/*.spec.js',
   dependencies: ['setup'],
  },

  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] ,
    // User prepared auth state.
    storageState: STORAGE_STATE,
	ignoreHTTPSErrors: true,
   },
   testMatch: '**/*.spec.js',
   dependencies: ['setup'],
  },
  {
    name: 'edge',
    use: { ...devices['Desktop Edge'] ,
    // User prepared auth state.
    storageState: STORAGE_STATE,
	ignoreHTTPSErrors: true,
   },
   testMatch: '**/*.spec.js',
   dependencies: ['setup'],
  },
],
});




