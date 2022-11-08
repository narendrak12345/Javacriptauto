
const homepage = require('../pageobjects/page.flipkarthome')

const assert=require('assert');
const { Enter } = require('wd/lib/special-keys');

    describe('test flipkart home page',function(){

        it('Check on search page and click', async (done) => {
            await homepage.open()
            browser.maximizeWindow()
            await $('//select[@title="Search in"]').click()
            let list= await $$('//select[@title="Search in"]')
            let clickone=await $('//*[@id="searchDropdownBox"]/option[4]')
            await clickone.waitForExist()
            
            console.log(await clickone.getText())
            await clickone.click()
            
            let search=await $('//input[@name="field-keywords"]')
            await search.waitForDisplayed()
            await search.setValue('tavel')
            browser.keys(Enter)
            let links=await $('(//a[@class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"])[2]')
            links.waitForDisplayed()
            console.log(links.getText())
            links.click()

            it('Test other functionality',async()=>{

            });
           
        });

    });
