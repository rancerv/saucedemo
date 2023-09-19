import { Selector } from "testcafe";
import common from "../Utils/commonFunctions";
import login from "../pageObjectSelector/loginObjects";



class Products {
    constructor(){
        this.dropdown = Selector("div.header_secondary_container div span select");
        this.backpack = Selector("#item_4_title_link > div");
        this.shirt = Selector("#item_3_title_link > div");
        this.price = Selector("div.inventory_item_description div.pricebar div");
        this.allITemsButton = Selector("#inventory_sidebar_link");
        this.aboutButton = Selector("#about_sidebar_link");
        this.resetButton = Selector("#reset_sidebar_link");
        this.signInButton = Selector("div.MuiBox-root.css-1xsl160 a button");
        this.addToCartBackpack = Selector("#add-to-cart-sauce-labs-backpack");
        this.cartIcon = Selector("#shopping_cart_container a");
        this.cartIconNumber = Selector("#shopping_cart_container a span");
    }

    async arrangeBy(option){
        const dropdown = this.dropdown;
        const dropdownOption = dropdown.find("option");
        await common.clickElement(this.dropdown);
        await common.clickElement(dropdownOption.withText(option));
    }

    async goAllItems(){
        await common.clickElement(this.backpack);
        await common.clickElement(login.menuButton);
        await common.clickElement(this.allITemsButton);
    }

    async goAbout(){
        await common.clickElement(login.menuButton);
        await common.clickElement(this.aboutButton);
    }

    async resetAppState(){
        await common.clickElement(this.addToCartBackpack);
        await common.clickElement(login.menuButton);
        await common.clickElement(this.resetButton);
    }

    async other(){
        await common.clickElement(this.employeeNameBar);
        const eName= this.EmployeeName.innerText;
        await common.type(eName);
        await common.clickElement(this.EmployeeNameOption);
        await common.clickElement(this.searchButton);
    }

    async hideSystemUser(){
        await common.clickElement(this.hideButton);
    }
    
}

export default new Products();