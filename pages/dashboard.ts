import { BrowserContext,  Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";


export class DashBoard extends BrowserInteractionImp{
    contactAndLeads:Locator;
    
    constructor(page:Page,context:BrowserContext){
        super(page,context);
        
        
        
        
        this.contactAndLeads=page.getByRole("link",{name:"Contacts / Leads"});
    }

    async clickcontactAndLeads():Promise<void>{
await this.click(this.contactAndLeads,"contact&leads")
    }
}