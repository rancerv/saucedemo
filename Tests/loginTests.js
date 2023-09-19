import login from "../pageObjectSelector/loginObjects";
import common from "../Utils/commonFunctions";

const url = ("https://www.saucedemo.com");
const userName = "standard_user";
const password = "secret_sauce";
const wrongUserName = "ds";
const wrongPassword = "123";
const message = "Epic sadface: Username and password do not match any user in this service";
const userWarningMessage = "Epic sadface: Username is required";
const passwordWarningMessage = "Epic sadface: Password is required";
const homePage = "Products";
const acceptedUser = "Accepted usernames are:";


fixture("Login")
    .page(url)
    .beforeEach(async () => {
        await common.maximize();
    });

test("Log in - Login Known login", async ()=> {
   await login.loginIn(userName, password);
   await common.validateText (login.titleValidation, homePage);
});

test("Log in - Login with Wrong User Name", async ()=> {
    await login.loginIn(wrongUserName, password);
    await common.validateText (login.errorMessage, message);
 });

test("Log in - Login Wrong Password", async ()=> {
    await login.loginIn(userName, wrongPassword);
    await common.validateText (login.errorMessage, message);
 });

 test("Log in - No username, No password", async ()=> {
    await login.emptyLogin();
    await common.validateText (login.userPassWarning, userWarningMessage);
 });

 test("Log in - Username, No password", async ()=> {
   await login.userOnlyLogin(userName);
   await common.validateText (login.userPassWarning, passwordWarningMessage);
});

 test("Log in - No username, Password", async ()=> {
   await login.passOnlyLogin(password);
   await common.validateText (login.userPassWarning, userWarningMessage);
});

 test("Log out", async ()=> {
    await login.loginIn(userName, password);
    await login.logout();
    await common.validateText (login.acceptedUsernames, acceptedUser);
 });

 