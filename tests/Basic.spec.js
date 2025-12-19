const {test} = require('@playwright/test');

test('First', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('np.tpsmartsol.com');
});

test('Second', async ({page})=> 
{
    
    await page.goto('np.tpsmartsol.com');
});