export default class Loginpage {
    visit(){
        cy.visit("/logon")
    }
    setEmail(email){
        return cy.get('#txtEmail').type(email)
    }
    setPassword(password){
        return cy.get('#loginPasswordInput').type(password)
    }
    getLoginBtn(){
       return cy.get('#Loginbtn')
    }
}