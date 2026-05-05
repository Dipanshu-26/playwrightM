import {test,expect} from "@playwright/test"
import { asyncWrapProviders } from "node:async_hooks"

test("test radio buttons",async({page}) => {
    //AAA
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let rButtons  = await page.locator("#radio-btn-example>fieldset> legend").textContent()
    console.log(rButtons)
    await expect(rButtons).toEqual("Radio Button Example")

    let listRButtons = await page.locator("#radio-btn-example>fieldset> label")
    .evaluateAll(els => els.map(el=>el.textContent.trim()))
    console.log(listRButtons)
    let axpectedRButtons = [ 'Radio1', 'Radio2', 'Radio3' ]
    await expect(listRButtons).toEqual(axpectedRButtons)

    // let rB1 = page.locator('input[value="radio1"]')
    // await expect(rB1).not.toBeChecked()
    // await rB1.check()
    // await expect(rB1).toBeChecked()

//     let count = listRButtons.length
//     console.log(count)

//     for(let i=0;i<count;i++){
//         let rB1 = page.locator(`input[value="radio${i+1}"]`).check()
//         for(let j =0;j<count;j++){
//             if(i==j){
//                 await expect(page.locator(`input[value="radio${j+1}"]`)).toBeChecked()
//             }
//             else {
//                 await expect(page.locator(`input[value="radio${j+1}"]`)).not.toBeChecked()
//             }
//         }
//     }

    let radios = await page.locator('[type="radio"]')
    console.log(radios)
    let count = await radios.count()
    console.log(count)
    for(let i =0 ;i<count;i++){
        await radios.nth(i).check()
        for(let j =0;j<count;j++){
            if(i==j){
                await expect(radios.nth(j)).toBeChecked()
            }
            else {
                await expect(radios.nth(j)).not.toBeChecked()
            }
        }
    }
})
 
//npx playwright test tests/radio.spec.js --headed project = "chromium"

test.only("check box",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    let chBoxLebel = await page.locator("#checkbox-example>fieldset>legend").textContent()
    
    await expect(chBoxLebel).toEqual("Checkbox Example")

    let ckBoxOptions = await page.locator('[type="checkbox"]')
    let count_cb = await ckBoxOptions.count()
    console.log(count_cb)
     for(let i =0 ;i<count_cb;i++){
        await ckBoxOptions.nth(i).check()
        for(let j =0;j<count_cb;j++){
            if(i>=j){             
                await expect(ckBoxOptions.nth(j)).toBeChecked()
            }
            else {
                await expect(ckBoxOptions.nth(j)).not.toBeChecked()
            }
        }
    }

    //let name_cb =await page.locator('[type="checkbox"]')
    let name_cb = await page.locator("#checkbox-example > fieldset >label")
    .evaluateAll(els => els.map(el => el.textContent.trim()) )
    console.log(`cb name ${name_cb}`)
    let expected_cb_name = ['Option1','Option2','Option3']
    await expect(name_cb).toEqual(expected_cb_name)
})