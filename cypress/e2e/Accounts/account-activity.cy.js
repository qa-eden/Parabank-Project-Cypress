import AccountOverview from "../../pages/AccountOverview.js";
describe('Account Activity',()=>{

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

    it("TC_Acct_004 - View Account Activity", ()=>{
        Acc.clickAccountOverview()
        Acc.clickFirstAccountNumber()
        Acc.verifyPageLoads()
        Acc.verifyTransactionTableDisplayed()

    })
})
