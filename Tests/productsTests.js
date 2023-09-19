import products from "../pageObjectSelector/productsObjects";
import account from "../pageObjectSelector/loginObjects";
import common from "../Utils/commonFunctions";

const url = ("https://www.saucedemo.com");
const userName = "standard_user";
const password = "secret_sauce";
const firstLetters = "Sauce Labs Backpack";
const lastLetters = "Test.allTheThings() T-Shirt (Red)";
const nameAZ = "Name (A to Z)";
const nameZA = "Name (Z to A)";
const lowHigh = "Price (low to high"
const highLow = "Price (high to low)"
const lowPrice = "$7.99";
const highPrice = "$49.99";
const singIn = "Sign in"


fixture("Swag Labs Dropdowns")
    .page(url)
    .beforeEach(async () => {
        await common.maximize();
        await account.loginIn(userName, password);
    });

test("Arrange by Name A to Z", async ()=> {
    await products.arrangeBy(nameAZ)
    await common.validateText(products.backpack, firstLetters);
});

test("Arrange by Name Z to A", async ()=> {
    await products.arrangeBy(nameZA)
    await common.validateText(products.shirt, lastLetters);
});

test("Arrange by Price Low to High", async ()=> {
    await products.arrangeBy(lowHigh)
    await common.validateText(products.price, lowPrice);
});

test("Arrange by Price High to Low", async ()=> {
    await products.arrangeBy(highLow)
    await common.validateText(products.price, highPrice);
});

fixture("Swag Labs Header")
    .page(url)
    .beforeEach(async () => {
        await common.maximize();
        await account.loginIn(userName, password);
    });

    test("Go to All Items", async ()=> {
        await products.goAllItems();
        await common.validateText(products.shirt, lastLetters);
    });

    test("Go to About", async ()=> {
        await products.goAbout();
        await common.validateText(products.signInButton, singIn);
    });

    test("Reset App State", async ()=> {
        await products.resetAppState();
        const value = await common.exist(products.cartIconNumber);
        await common.notOkay(value);

    });


 