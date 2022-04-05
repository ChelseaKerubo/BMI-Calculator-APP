const { remote } = require('webdriverio');
const assert =require('assert');


let browser ;

;(async () => {

    browser =await remote ({
        capabilities : {browserName :'chrome'}
    })

    await browser.navigateTo('http://localhost:3000')
    

    const heightInput = await browser.$('height')
    await heightInput.setValue('1.54')

    const weightInput = await browser.$('weight')
    await weightInput.setValue('89')

    const searchBtn = await browser.$('submitbutton')
    await searchBtn.click()

     const pageTitle = await browser.getTitle();

    // assert(pageTitle === 'BMI');

    //await browser.deleteSession();
})().catch((err) => {
    console.error(err);
    return browser.deleteSession();
})