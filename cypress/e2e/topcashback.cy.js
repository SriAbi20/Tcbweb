// cypress/integration/topcashback.spec.js
import TCBpage from "../pageobjects/TCBpage";
import Loginpage from "../pageobjects/Loginpage";
import Homepage from "../pageobjects/Homepage";
import ShopGreenpage from "../pageobjects/ShopGreenpage";

describe('TopCashback Website', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      Cypress.log({
        name: 'uncaught exception',
        message: err.message,
        consoleProps: () => {
          return {
            'Error message': err.message,
            'Error stack': err.stack,
          };
        },
      });
      return false;
    });
  });

  const oTCB = new TCBpage();
  const oLogin = new Loginpage();
  const oHome = new Homepage();
  const oShopGreenpage = new ShopGreenpage();

  before(() => {
    oTCB.visit();
    oTCB.getcookiesettings().click();
    oTCB.getcookiesettingsrej().click();
    oTCB.getSigninBtn().click();
    oLogin.setEmail("sriabinaya1997@gmail.com");
    oLogin.setPassword("Sriabi@20");
    oLogin.getLoginBtn().click().wait(7000);
  });

  it('Should load the homepage and then navigate to login page', () => {
    oHome.visit();
    oHome.setSearch("Nike");
    oHome.getSearch().type('{enter}');

    // Assert the first element
    oHome.getFirstelement().contains('a', 'Nike Exclusive Offer').should('be.visible');

    // Click the first element
    oHome.getFirstelement().find('a').first({ timeout: 2000 }).click();
    cy.get('.gecko-primary').contains('span', 'Nike').should('be.visible');
    cy.go('back');

    const dropdownContainer = oHome.getAccount();
    const signOutOrSignIn = Cypress.$(dropdownContainer).find('a:contains("Sign Out"):visible').length > 0 ? 'Sign Out' : 'Member Sign-In';

    // Click on "Sign Out" if visible, otherwise click on "Member Sign-In"
    cy.get(dropdownContainer).contains(signOutOrSignIn).click();
  });

  it('Should select the highest £ option on ShopGreen page', () => {
    oShopGreenpage.visit();
    oShopGreenpage.selectOptionFromDropdown('Highest £');
    oShopGreenpage.clickListelement('3');
    cy.go('back');
    oShopGreenpage.assertSelectedOption('Highest £');
  });
});
