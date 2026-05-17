import { BrowserContext, Locator, Page } from "@playwright/test";



export interface BrowserInteraction{

    click(locator:Locator,Name:string):Promise<void>;
fill(locator:Locator,data:string,elementName:string):Promise<void>;
switchToPage(locator:Locator,name:string):Promise<Page>;
selectDropDown(
    locator:Locator,
    option:{label?:string; index?: number; value?: string}

):Promise<void>;
check(locator:Locator,data:string):Promise<void>;
}