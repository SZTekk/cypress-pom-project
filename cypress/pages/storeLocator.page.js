/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class StoreLocatorPage {

elements = {
    toggleNavMenu: () => cy.get('#gnav20-nav-toggle'),
    storesButton: () => cy.get('[aria-label="Stores"]'),
    storeBarInput: () => cy.get('#storesData'),
    storeSearchDropdown: () => cy.get('#autocomplete-options--stores'),
    storeSearchDropdownFirstEntry: () => cy.get('ul[id="autocomplete-options--stores"] > li')

}
    validateStoreLocator = (searchStore, storeSearchDropdownFirstEntry, storeSearchResultValidation) => {
        this.elements.toggleNavMenu().click({force: true})
        this.elements.storesButton().eq(1).click({force: true})
        this.elements.storeBarInput().click()
        this.elements.storeBarInput().type(searchStore, {force: true})
        this.elements.storeSearchDropdown().click();
        this.elements.storeSearchDropdownFirstEntry().contains(storeSearchDropdownFirstEntry).click()
        cy.contains(storeSearchResultValidation).should('exist');
    }
}