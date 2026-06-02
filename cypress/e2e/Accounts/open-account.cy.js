import AccountOverview from "../../pages/AccountOverview.js";
describe('Open Account',()=>{

    const Acc=new AccountOverview();
    let userdata;
    beforeEach("Launch Website",()=>{
        cy.visit('/parabank/index.htm')
        cy.fixture("users")
        .then((data)=>{
            userdata=data;
        })

        cy.login('john','demo')
    });

    it("TC_Acct_002 - Open a new Checking Acount", ()=>{
        Acc.clickCreateAccount()
        Acc.selectCheckingAcct()
        Acc.selectFromAccount()
        Acc.clickOpenAccount()
        Acc.verifyAccountOpened()
    })

    it("TC_Acct_003 - Open a New Savings Account", ()=>{
        Acc.clickCreateAccount()
        Acc.selectSavingAcct()
        Acc.selectFromAccount()
        Acc.clickOpenAccount()
        Acc.verifyAccountOpened()
    })
})
