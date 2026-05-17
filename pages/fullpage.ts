import { Locator, Page} from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";



export class fullPage extends BrowserInteractionImp{
    dashboard:Locator;
    contact&Leads:Locator;
    apiTesting:  Locator;
    querytesting:Locator;
    users:Locator;
    settings:Locator;
    reports:Locator;

    constructor(page:Page,context:Browsercontext){
        super(Page,context);
        this.page=Page;
        this.dashboard=page.getByRole("link",{name:"Contacts / Leads"});
    }


}


