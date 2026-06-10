import Bills from "../../pages/BillPay.js"

describe("Bills", ()=>{
    const bill=new Bills();
    let userdata;
    beforeEach("Bills", ()=>{
        cy.visit('/parabank/index.htm')
        cy.login('john','demo')

        cy.fixture("billpay.json")
        .then((data)=>{
            userdata=data;
        })
    })


    it("TC_Bill_001 - Pay a Bill Successfully", ()=>{
        bill.clickBillPay()
        bill.txtName(userdata.name)
        bill.txtAddress(userdata.address)
        bill.txtCity(userdata.city)
        bill.txtState(userdata.state)
        bill.txtZipCode(userdata.zip)
        bill.txtPhoneNo(userdata.phone)
        bill.txtAccount(userdata.acct)
        bill.txtVerifyacct(userdata.acct)
        bill.txtAmount(userdata.amount)
        bill.selectAcct()
        bill.clickSendPayment()
        bill.validatePayment()
    })

    it("TC_Bill_002 - Bill pay with Empty Payee Name", ()=>{
        bill.clickBillPay()
        bill.txtName(userdata.emptyName)
        bill.txtAddress(userdata.address)
        bill.txtCity(userdata.city)
        bill.txtState(userdata.state)
        bill.txtZipCode(userdata.zip)
        bill.txtPhoneNo(userdata.phone)
        bill.txtAccount(userdata.acct)
        bill.txtVerifyacct(userdata.acct)
        bill.txtAmount(userdata.amount)
        bill.selectAcct()
        bill.clickSendPayment()
        bill.validateError(userdata.errormsg)
    })

    it("TC_Bill_003 - Bill pay with Invalid Amount", ()=>{
        bill.clickBillPay()
        bill.txtName(userdata.name)
        bill.txtAddress(userdata.address)
        bill.txtCity(userdata.city)
        bill.txtState(userdata.state)
        bill.txtZipCode(userdata.zip)
        bill.txtPhoneNo(userdata.phone)
        bill.txtAccount(userdata.acct)
        bill.txtVerifyacct(userdata.acct)
        bill.txtAmount(userdata.invalidamount)
        bill.selectAcct()
        bill.clickSendPayment()
        bill.validateAmountError(userdata.amterrormsg)
    })

    it("TC_Bill_004 - Bill pay with Missing Fields", ()=>{
        bill.clickBillPay()
        bill.txtName(userdata.emptyName)
        bill.txtAddress(userdata.emptyaddress)
        bill.txtCity(userdata.emptycity)
        bill.txtState(userdata.emptystate)
        bill.txtZipCode(userdata.emptyzip)
        bill.txtPhoneNo(userdata.emptyphone)
        bill.txtAccount(userdata.emptyacct)
        bill.txtVerifyacct(userdata.emptyacct)
        bill.txtAmount(userdata.emptyacct)
        bill.selectAcct()
        bill.clickSendPayment()
        bill.validateError(userdata.errormsg)
    })
    
    it("TC_Bill_005 - Verify Payment Confirmation Message", ()=>{
        bill.clickBillPay()
        bill.txtName(userdata.name)
        bill.txtAddress(userdata.address)
        bill.txtCity(userdata.city)
        bill.txtState(userdata.state)
        bill.txtZipCode(userdata.zip)
        bill.txtPhoneNo(userdata.phone)
        bill.txtAccount(userdata.acct)
        bill.txtVerifyacct(userdata.acct)
        bill.txtAmount(userdata.amount)
        bill.selectAcct()
        bill.clickSendPayment()
        bill.validatePayment()
        bill.validateNameDisplayed(userdata.name)
        bill.validateAmountDisplayed(userdata.amount)

    })


})
