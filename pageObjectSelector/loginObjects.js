import { Selector } from "testcafe";
import common from "../Utils/commonFunctions";



class Login {
    constructor(){
        this.usernameInput = Selector("#user-name");
        this.passwordInput = Selector("#password");
        this.loginButton = Selector("#login-button");
        this.titleValidation = Selector("div.header_secondary_container > span");
        this.errorMessage = Selector("div.error-message-container.error");
        this.userPassWarning = Selector("div.error-message-container.error h3");
        this.menuButton = Selector("#react-burger-menu-btn");
        this.logoutButton = Selector("#logout_sidebar_link");
        this.acceptedUsernames = Selector("#login_credentials h4");
    }

    async loginIn(userName, password){
        await common.type(this.usernameInput, userName);
        await common.type(this.passwordInput, password);
        await common.clickElement(this.loginButton);
    }

    async userOnlyLogin(userName){
        await common.type(this.usernameInput, userName);
        await common.clickElement(this.loginButton);
    }

    async passOnlyLogin(password){
        await common.type(this.passwordInput, password);
        await common.clickElement(this.loginButton);
    }

    async emptyLogin(){
        await common.clickElement(this.loginButton);
    }

    async logout(){
        await common.clickElement(this.menuButton);
        await common.clickElement(this.logoutButton);
    }

    async searching(searchItem){
        await common.type(this.searchBar, searchItem);
    }
}

export default new Login();