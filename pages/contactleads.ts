import {BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";


export class ContactLeadPage extends BrowserInteractionImp{
    addNewContact:Locator;
    constructor(page:Page,context:BrowserContext){
        super(page,context);
        
        this.addNewContact=page.getByRole("link",{name:"Add New Contact"});

    }

    async enteraddNewContact():Promise<Page>{
      return  await this.switchToPage(this.addNewContact,"Addnewcontact")
    }
}
