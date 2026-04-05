import DemoBlazer from "../../pages/DemoBlazePage";
import {test, expect} from '@playwright/test'


test.describe('login and logout', ()=>{
    test.beforeEach('start point', async({page})=>{
        
        await page.goto('https://www.demoblaze.com/')
    })
    test('login', async({page})=>{
        const demoBlazer = new DemoBlazer(page);
        await demoBlazer.login('test', 'test');
        await expect(page).toHaveURL('https://www.demoblaze.com/');
    })
    test ('logout', async({page})=>{
        const demoBlazer = new DemoBlazer(page);
        await demoBlazer.login('test', 'test');
        await demoBlazer.logout();
        await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    })
})