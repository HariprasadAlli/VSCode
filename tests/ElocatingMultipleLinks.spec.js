    import {test, expect} from '@playwright/test';

    test('LocatingMultipleLinks', async ({page})=>{

        await page.goto('https://glams61qa.glams.ie');

        const Links = await page.$$('a');

        for(const link of Links){
            const linkText = await link.textContent();
            console.log(linkText);
        }


        page.close();




    })