import {test , expect} from "@playwright/test"

test("test redio buttons",async ({page})=>{
    //AAA
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let radio_text = await page.locator("#radio-btn-example >fieldset >legend").textContent()
    console.log(radio_text)

    await expect(radio_text).toEqual("Radio Button Example")

    //get texts of all radio buttons 

    let radioBtnList = await page.locator("#radio-btn-example >fieldset >label")
    .evaluateAll(els => els.map(el=> el.textContent.trim()))
    console.log(radioBtnList)

    let expected_rb_name = [ 'Radio1', 'Radio2', 'Radio3' ]

    await expect(radioBtnList).toEqual(expected_rb_name)

    //check uncheck 

    let radios = await page.locator('[type="radio"]')
    let count = await radios.count()
    console.log(radios)
    console.log(count)

    for(let i=0;i<count;i++){            //0        1          2 
        await radios.nth(i).check()
        for(let j=0;j<count;j++){        //0,1,2    0,1,2     0,1,2
            if(i==j){
                await expect(radios.nth(j)).toBeChecked()
            }
            else{
                await expect(radios.nth(j)).not.toBeChecked()
            }
        }
    }

})

//check box

