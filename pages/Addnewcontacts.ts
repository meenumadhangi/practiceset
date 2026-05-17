import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";



export class AddNewContact extends BrowserInteractionImp{
    Name:Locator;
    email:Locator;
    phonenum:Locator;
    company:Locator;
    gender:Locator;
    statusDropDown:Locator;
    contactsource:Locator;
    leadscore:Locator;
    deals:Locator;
    totalvalue:Locator
    support:Locator;
    Selectpriority:Locator;
    Lastcontact:Locator;
    notes:Locator;


    constructor(page:Page,context:BrowserContext){
        super(page,context);
        this.page=page;
    
        this.Name=page.locator("#contact_name");
        this.email=page.locator("#email");
        this.phonenum=page.locator("#phone");
      this.company=page.locator("#company");
        this.gender=page.locator(`input[type="radio"]`);
        this.statusDropDown=page.locator('select[name="status"]');
        this.contactsource=page.locator('select[name="source"]');
        this.leadscore=page.locator("#lead_score");
this.deals=page.locator("#deals");
this.totalvalue=page.locator("#total_value");
this.Selectpriority=page.locator("#priority");
this.support=page.getByRole("checkbox",{name:"Support"});
this.Lastcontact=page.locator("#last_contact");
this.notes=page.locator("#notes");

    }
async enterName(data:string):Promise<void>{
    await this.fill(this.Name,data,"entervalidname");
}

async enteremail(data:string):Promise<void>{
    await this.fill(this.email,data,"entervalidemail");

}
async enterphonenum(data:string):Promise<void>{
    await this.fill(this.phonenum,data,"entervalidphonenum");
}
async entercompany(data:string):Promise<void>{
    await this.fill(this.company,data,"entervalidcompany");


}

async selectgender(value:string):Promise<void>{
    const radio=this.page.locator(`input[type="radio"][value="${value}"]`);
await this.check(radio,value);

}
async selectstatusDropDown(value:string):Promise<void>{
  await   this.selectDropDown(this.statusDropDown ,{label:value});
}

async selectcontactsource(value:string):Promise<void>{
   await  this.selectDropDown(this.contactsource,{label:value});
}
async selectleadscore(data:string):Promise<void>{
  await   this.fill(this.leadscore,data,"entervalidnumber");
  }
  

async selectdeals(data:string):Promise<void>{
   await  this.fill(this.deals,data,"entervalidnumber");
}
async entertotalvalue(data:string):Promise<void>{
   await this.fill(this.totalvalue,data,"entervalidnumber");
}
async checkpriority(value:string):Promise<void>{
  await  this.selectDropDown(this.Selectpriority,{label:value});

}
async entersupport():Promise<void>{
  await  this.check(this.support,"check the correctvalue");

}

async enterLastcontact(data:string):Promise<void>{
  await  this.fill(this.Lastcontact,data,"enterlastcontact");
}
async enternotes(data:string):Promise<void>{
  await  this.fill(this.notes,data,"entervaliddata");

}

}

