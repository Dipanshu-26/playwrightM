import { test, expect } from '@playwright/test'
test('Element state methods', async ({ page }) => {

    // Element info methods 

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // const frame = page.frameLocator('#courses-iframe');
    // let frameText = await frame.locator('h2').first().innerText()
    // console.log(frameText)

    // element in iframe
    //let elementFrame = await page.locator('h2').first()    
    //console.log(elementFrame.textContent())

    // frame object --- content frame
    //    let iframeElement =  page.locator('#courses-iframe')
    //    const frame = await iframeElement.contentFrame()
    //    console.log(frame)

    //evalute()

    // let e = await page.locator('#name').evaluate((el) => el.tagName)
    // console.log(e)

    // type = "text"
    // type = "number"
    // <input type = number/>

    // program 1

    // let type = await page.locator('#name').evaluate((el)=>el.type)
    // console.log(type)
    // let placeholder = await page.locator('#name').evaluate((el)=>el.placeholder)
    // console.log(placeholder)
    // let id = await page.locator('#name').evaluate((el)=>el.id)
    // console.log(id)

    // program 2
    // single elements attribue
    //  let q2 = await page.locator('#name').evaluate((el) => ({
    //     type: el.type,
    //     id: el.id,
    //     placeholder:el.placeholder
    // }));
    // console.log(q2);

    // program 3
    // ids
    // let q22 = await page.locator('input[type="checkbox"]')
    // .evaluateAll((els)=>els.map(function(el,index,arr){
    //     return el.id
    // }))
    // console.log(q22)

   // table -- th text
//    let q23 = await page.locator('#product')
//    .first()
//    .locator('tr').first()
//    .locator('th')
//    .evaluateAll(els=>els.map((el)=>el.textContent))
//     console.log(q23)

    // let a = [11,22,33]
    // let q11 = a.map(function(ell,index,arr){
    //     return ell + 10
    // })
    // console.log(a)

    // evalute --- single element 
    // evalute --- multiple elements

    // Changing UI for debug
    //await page.locator('#name').evaluate(el=>el.style.border = "3px solid red")

    // scroll element manually
    await page.locator('#mousehover').evaluate(el=>el.scrollIntoView())

    // Scenario 

    // Need width/height           =====> evalute()
    // Need custome style          =====> evalute()
    // Need DOM    values          =====> evalute()
    // Need many element texts     =====> evaluteAll()
    // Need ids of all checkboxs   =====> evaluteAll()
    // filer   -----> map() , filter() , reduce(), forEach(),every(),some(),find(),findIndex()

    let prices = await page.locator('#product')
    .first()
    .locator('tr td:nth-child(3)')
    .evaluateAll(els => els.map(el=>Number(el.textContent)))
    console.log(prices)
    let acc = prices.reduce(function(acc,el){
        return el + acc
    },0)
    console.log(acc)
    // assertion for total

    let cities = await page.locator('#product')
    .last()
    .locator('tr td:nth-child(3)')
    .evaluateAll(els => els.map(el=>el.textContent))
    console.log(cities)
    let result = cities.some((el)=>el == "Chennai")
    console.log(result)
    //await expect(result).toBe(true)
    
    // Test ---> Arrangement ---> action and assertion

    let citiesE = await page.locator('#product')
    .last()
    .locator('tr td:nth-child(3)') // [el,el,el,el] ==> [el,el]
    .evaluateAll(els => els.filter(el=>el.textContent.trim() == "Chennai"))
    console.log(citiesE)
   

});