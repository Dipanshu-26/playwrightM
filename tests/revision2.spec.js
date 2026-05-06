import{test,expect} from "@playwright/test"

test("test check box",async({page})=>{
    //AAA
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let checkBoxLabel = await page.locator("#checkbox-example fieldset legend").textContent()

    await expect(checkBoxLabel).toEqual("Checkbox Example")

    let options = await page.locator('[type="checkbox"]')
    console.log(options)
    let count = await options.count()
    console.log(count)

    for(let i =0;i<count;i++){
        await options.nth(i).check()               //0  1      2
        for(let j=0;j<count;j++){
            if(i>=j){                                 //0 1,2   0,1,2     0,1,2
                await expect(options.nth(j)).toBeChecked()
            }
            else{
                await expect(options.nth(j)).not.toBeChecked()
            }
        }

    }

    //find names options validation 
})