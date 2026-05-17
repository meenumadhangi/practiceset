import {test} from "playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";
import { DashBoard } from "../pages/dashboard";
import { ContactLeadPage } from "../pages/contactleads";
import { LoginPage } from "../pages/loginpage";

import { AddNewContact } from "../pages/Addnewcontacts";


test("AddLead",async({page,context})=>{
await page.goto("https://apps.theauto-mate.com/crm/login.php");


const loginPage= new LoginPage(page,context);
await loginPage.enterUsername("automate.crm");
await loginPage.enterPassword("test@123");
await loginPage.clickSignin();

 const dashboard=new DashBoard(page,context);
 await dashboard.clickcontactAndLeads();

  const contactLeadPage=new ContactLeadPage(page,context);
  const newPage=await contactLeadPage.enteraddNewContact();
  

const addNewContact=new AddNewContact(newPage,context)

await addNewContact.enterName("meenu");
await addNewContact.enteremail("meenu@gmail.com");
await addNewContact.enterphonenum("9500925404");
await addNewContact.entercompany("bny");

await addNewContact.selectgender("male");
await addNewContact.selectcontactsource("Website");
await addNewContact.selectstatusDropDown("Cold");
//await addNewContact.selectgender("male");
await addNewContact.selectdeals("3");
// await addNewContact.selectstatusDropDown("Cold");
await addNewContact.entersupport();
await addNewContact.entertotalvalue("10");
await addNewContact.checkpriority("High");
await addNewContact.enternotes("itsgood");
await addNewContact.enterLastcontact("2026-05-09");


// });

    // const addNewc=new AddNewc(newPage,context);
//     await addNewc.entervalidname("meenu");
//     await addNewc.entervalidemail("meenu@gmail.com");
//     await addNewc.entervalidphonenum("9500925404");
// });
});