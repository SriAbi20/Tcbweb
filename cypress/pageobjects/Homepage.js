export default class Homepage{
    visit(){
        cy.visit("/home")
    }
    setSearch(value){
      return cy.get('input[placeholder="Search Merchant / Store Name"]').type(value);
    }
    getSearch(){
        return cy.get('input[placeholder="Search Merchant / Store Name"]')
    }
    getFirstelement(){
        return cy.get('#ctl00_GeckoTwoColPrimary_SearchResultsContentPanel').first()
    }
    getAccount(){
        return cy.get('#accountIcon').click()
    }
}