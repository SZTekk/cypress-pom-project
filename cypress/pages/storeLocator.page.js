/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class StoreLocatorPage {

elements = {
    toggleNavMenu: () => cy.get('#gnav20-nav-toggle'),
    storesButton: () => cy.get('[aria-label="Stores"]'),
    storeBarInput: () => cy.get('#storesData'),
    firstSearchResult: () => cy.get('a[class="buttonCurved"]')
}

    validateStoreLocator = () => {
        this.elements.toggleNavMenu().click({force: true})
        this.elements.storesButton().eq(1).click({force: true})
    }

    

}