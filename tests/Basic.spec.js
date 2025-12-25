const {test, expect} = require('@playwright/test');

test('First', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://np.tpsmartsol.com');
    console.log(await page.title());
});

test.only('Second', async ({page})=> 
{
    await page.goto('https://np.tpsmartsol.com');
    console.log(await page.title());
    await expect(page).toHaveTitle("TP SmartSol");
});