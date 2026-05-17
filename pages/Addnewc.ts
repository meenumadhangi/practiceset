import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";


export class AddNewc extends BrowserInteractionImp{
    name:Locator;
    email:Locator;
    phonenum:Locator;
    constructor(page:Page,context:BrowserContext){
super(page,context);
this.name=page.locator("#contact_name");
this.email=page.locator("#email");
this.phonenum=page.locator("#company");
    }
    async entervalidname(data:string):Promise<void>{
        await this.fill(this.name,data,"entervalidname");
    }
async entervalidemail(data:string):Promise<void>{
    await this.fill(this.email,data,"entervalidpassword");
}
async entervalidphonenum(data:string):Promise<void>{
    await this.fill(this.phonenum,data,"entervalidphonenum");

}
}