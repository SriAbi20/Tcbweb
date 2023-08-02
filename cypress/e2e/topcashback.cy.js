// cypress/integration/topcashback.spec.js;
import TCBpage from "../pageobjects/TCBpage";
import Loginpage from "../pageobjects/Loginpage";
import Homepage from "../pageobjects/Homepage";

describe('TopCashback Website', () => {
  beforeEach(() => {
   Cypress.on('uncaught:exception',(err,runnable)=>{
    Cypress.log({
      name:'uncaught exception',
      message:err.message,
      consoleProps:()=>{
        return {
          'Error message': err.message,
          'Error stack': err.stack,
        };
      },
    });
    return false;
   });
  });

  it('Should load the homepage and then navigate to login page', () => {
    
    const oTCB = new TCBpage();
    oTCB.visit()
    oTCB.getcookiesettings().click();
    oTCB.getcookiesettingsrej().click();
    oTCB.getSigninBtn().click();
    const oLogin = new Loginpage();
    //oLogin.visit()
    oLogin.setEmail("sriabinaya1997@gmail.com")
    oLogin.setPassword("Sriabi@20")
    oLogin.getLoginBtn().click().wait(7000);
  
  
    const oHome = new Homepage();
    oHome.visit()
    oHome.setSearch("Nike")
    oHome.getSearch().type('{enter}');
    //Assert the first elemet 
    oHome.getFirstelement().contains('a', 'Nike Exclusive Offer').should('be.visible');// Looks for an anchor element containing the text 'Nike'
    //Click the first element
    oHome.getFirstelement().find('a').first({timeout:2000}).click()
    cy.get('.gecko-primary').contains('span', 'Nike').should('be.visible');
    cy.go('back');
    //cy.go('back');
    oHome.getAccount()
    cy.get('.dropdown-container').then((dropdownContainer) => {
      if (Cypress.$(dropdownContainer).find('a:contains("Sign Out"):visible').length > 0) {
        // If "Sign Out" is visible, click on it
        cy.get(dropdownContainer).contains('Sign Out').click();
      } else {
        // If "Sign Out" is not visible, click on "Member Sign-In"
        cy.get(dropdownContainer).contains('Member Sign-In').click();
      }
    });
    
    
    
    
    
  });
});
