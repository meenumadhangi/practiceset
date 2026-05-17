
import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserInteractionImp";


export class LoginPage extends BrowserInteractionImp{
    userName:Locator;
    password:Locator;
    signIn:Locator;


    constructor(page:Page,context:BrowserContext){
        super(page,context);
        
        
        this.userName=page.getByRole("textbox",{name:"Username"});
        this.password=page.getByRole("textbox",{name:"Password"});
        this.signIn=page.getByRole("button",{name:"Sign In"});
    }
        async enterUsername(data:string):Promise<void>{
            await this.fill(this.userName,data," username")
        }

        async enterPassword(data:string){
            await this.fill(this.password,data,"password")
        }
        async clickSignin(){
            await this.click(this.signIn,"clicksignin")

        }
    }
    

