export default class TCBpage{
    visit(){
        cy.visit("/")
    }

    getcookiesettings(){
       return cy.get('#onetrust-pc-btn-handler') 
    }
    getcookiesettingsrej(){
       return cy.get('.ot-pc-refuse-all-handler')
    }
    getSigninBtn(){
      return cy.get(".loh-sign-in")
    }
}

