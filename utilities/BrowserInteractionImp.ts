import {test,Locator, BrowserContext, Page} from "@playwright/test";
import { BrowserInteraction } from "./BrowserInteraction";




export class BrowserInteractionImp implements BrowserInteraction{
    page:Page;
    context:BrowserContext;

    constructor(page:Page,context:BrowserContext){
        this.page=page;
        this.context=context;

    }
    
  async  click(locator:Locator,Name:string):Promise<void>{
      await test.step(`click, ${Name}`,async()=>{
        
        await locator.click();
        
})
  }
   async fill(locator:Locator,data:string,elementName:string):Promise<void> {
        await test.step(`enter username ${elementName}`,async()=>{
            
            await locator.click();
            await locator.fill(data);
        

    })

   }
   async switchToPage(locator:Locator,name:string):Promise<Page>{
 return await test.step(`switch to nextpage ${name}`,async()=>{
  const[newPage]=await Promise.all([
this.context.waitForEvent("page"),
        locator.click()
  ]);
  await newPage.waitForLoadState();
         return newPage;
   }


   )}
async check(locator:Locator,value:string):Promise<void>{
    await test.step(`click ${value}`,async()=>{
await locator.check();
    });

}

    async selectDropDown(locator:Locator,options:{label?:string,index?:number,value?:string}):Promise<void>{
await test.step(`select DropDown value ,${options.label || options.value || options.index}`,async()=>{
await locator.selectOption(options);
    
})
    }

}
