import Login from "../../pages/LoginPage.js"; // To import the class

describe("Login Module", ()=>{

    const ln=new Login();
    let userdata;

    beforeEach("Launch Website",()=>{   
        cy.visit('/parabank/index.htm')  
        cy.fixture("users")
        .then((data)=>{
            userdata=data;
        })
    })

    it("TC_Auth_001 Login with Valid Credentials",()=>{
        cy.login(userdata.username,userdata.password)
    })
    
    it("TC_Auth_002 Login with Invalid Password", ()=>{
        ln.setUsername(userdata.username)
        ln.setPassword(userdata.invalidPassword)
        ln.clickLoginbtn()
        ln.validateErrormsg(userdata.invalidExpectedMsg)
    })

    it("TC_Auth_003 Login with Invalid Username", ()=>{
        ln.setUsername(userdata.invalidUsername)
        ln.setPassword(userdata.password)
        ln.clickLoginbtn()
        ln.validateErrormsg(userdata.invalidExpectedMsg)
    })   

    it("TC_Auth_004 Login with Empty Fields", ()=>{
        ln.setUsername(userdata.emptyUsername)
        ln.setPassword(userdata.emptyPassword)
        ln.clickLoginbtn()
        ln.validateErrormsg(userdata.emptyExpectedMsg)
    })
})
