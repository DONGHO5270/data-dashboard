// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [
    ['html'],
    ['list']
  ],
  
  use: {
    baseURL: 'http://localhost:5173',
    
    // 모든 테스트에서 자동으로 스크린샷 캡처
    screenshot: 'only-on-failure',
    
    // 모든 테스트에서 트레이스 수집
    trace: 'retain-on-failure',
    
    // 브라우저 컨텍스트 옵션
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
  },

  /* 테스트할 브라우저 설정 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* 로컬 개발 서버 자동 실행 설정 */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2분
  },
});