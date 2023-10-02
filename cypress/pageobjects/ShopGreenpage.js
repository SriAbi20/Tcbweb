export default class ShopGreenpage {
    visit(){
        cy.visit("/category/green-cashback/")
    }
    getOrderByDropdown(){
        // Locate the parent div with the specified class
       return cy.get('div.gecko-data-table-account-overview.gecko-inline-block') .find('select')
    }
    selectOptionFromDropdown(optionText){
     this.getOrderByDropdown().select(optionText);
   
    }
    assertSelectedOption(expectedOptionText) {
        // Assert that the selected option text matches the expected value
        this.getOrderByDropdown()
        .find('option:selected') // Get the selected option
          .invoke('text') // Get the value of the selected option
          .should('eq', expectedOptionText); // Compare it with the expected text
      }
    
    clickListelement(listIndex){
        cy.get('.gecko-single-container')
  // Find the anchor tags with class 'category-panel'
  .find('a.category-panel')
  // Use .eq(4) to select the fifth element (index is 0-based)
  .eq(listIndex)
  // Click on the selected element
  .click();
    }
}