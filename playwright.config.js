// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
    timeout: 50 * 1000,
      expect: {
    timeout: 50*1000,
  },
 
  use: {
    

  },

  
});

