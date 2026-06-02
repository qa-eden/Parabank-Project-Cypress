import AccountOverview from "../../pages/AccountOverview.js";
describe('Account Overview',()=>{

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

    it("TC_Acct_001 - View Accounts Overview",()=>{
        Acc.clickAccountOverview();
        Acc.verifyAccountsTableVisible(); // Verify Account Table is Visible
        Acc.verifyAccountNumbersVisible(); // Verify Account Number is Visible
        Acc.verifyBalancesDisplayed(); // Verify Balances are Displayed
    })

    it("TC_Acct_005 - View Accounts Balance", ()=>{
        Acc.clickAccountOverview()
        Acc.verifyBalancesDisplayed()
        Acc.verifyAvailableAmountDisplayed()
        Acc.verifyTotalBalance()


    })
})
