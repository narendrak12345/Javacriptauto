const Page = require("./page")

const util=require("../util/Utilmethods")

class homepage extends Page{

    //Page locators

    get cancelpopup(){return $('//button[@class="_2KpZ6l _2doB4z"]')}
    get Search(){return $('//input[@name="q"]')}
    get clickonsearch(){return $('//button[@type="submit"]//*[name()="svg"]')}
    get waitelement(){return $('//div[@class="_10UF8M _3LsR0e"]')}
    get waitelement1(){return $$('//div[@class="_10UF8M _3LsR0e"]')}
    get Clickonmobile(){return $('//img[@alt="Mobiles"]')}
    get clickonmore(){return $$('//div[@class="go_DOp"]//div[@class="_28p97w"]')}
    get clickwait(){return $('//input[@value="Go"]')}
   

async Clickon_cancel_popup(){

    util.waitForClickable(this.cancelpopup,10)

}
async SendTextAndClick(){
    await this.Search.setValue('keyboard')
    await this.clickonsearch.waitForClickable()
    await this.clickonsearch.click()
    await this.waitelement.waitForDisplayed()
}
async GetTextofelement(){
    await this.waitelement.waitForDisplayed()
    return await this.waitelement.getText()
}

async clickandWait(){

    util.WaitAndClick(this.clickwait,10)
}
async hoverpage(){

    await this.hover.moveTo(30,60)
    browser.pause(3000)
}
}
module.exports = new homepage();