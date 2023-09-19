import { t } from "testcafe";

class Common {

    async clickElement(testObject){
        await t
            .click(testObject);
    }

    async type(testObject, text){
        await t
            .typeText(testObject, text);
    }

    async maximize(){
        await t
            .maximizeWindow();
    }

    async validateText(testObject, text){
        await t
            .expect(await testObject.innerText).eql(text);
    }

    async exist(testObject){
        await t
            testObject.exists;
    }

    async okay(value){
        await t
            .expect(value).ok();
    }

    async notOkay(value){
        await t
            .expect(value).notOk();
    }

}

export default new Common();