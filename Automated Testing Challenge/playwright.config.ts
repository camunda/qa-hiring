import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 3 * 60 * 1000,
  workers: 1,
  retries: 1,
  use: {
    baseURL: 'https://weblogin.cloud.camunda.io/',
    actionTimeout: 20000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
