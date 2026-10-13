import { test, expect } from '@playwright/test';

const jobPageUrl = 'https://crew.tinobritty.me/jobs/qa-engineer-gxRYZg';

test.describe('QA Engineer Job Page', () => {
  test('TC001 - Job page loads successfully', async ({ page }) => {
    const response = await page.goto(jobPageUrl);

    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
  });

  test('TC002 - Page has a title', async ({ page }) => {
    await page.goto(jobPageUrl);

    await expect(page).toHaveTitle(/.+/);
  });

  test('TC003 - Job page displays a main heading', async ({ page }) => {
    await page.goto(jobPageUrl);

    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('TC004 - Page contains visible text content', async ({ page }) => {
    await page.goto(jobPageUrl);

    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('TC005 - Page does not display a browser error page', async ({ page }) => {
    await page.goto(jobPageUrl);

    await expect(page.locator('body')).not.toContainText(
      'This site can’t be reached'
    );
  });
});