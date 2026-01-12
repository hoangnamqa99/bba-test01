import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'My account' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


//luyên thêm đăng nhập vào fb
/* import { test, expect } from '@playwright/test';

test('đăng nhập fb', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.locator("input[name='email']").fill("naml05046@gmail.com");
    await page.locator("input[name='pass']").fill("SEHC@0258");
    await page.locator("button[name='login']").click();
});
*/
