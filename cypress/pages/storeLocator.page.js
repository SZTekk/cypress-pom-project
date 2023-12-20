export class StoreLocatorPage {

elements = {
    toggleNavMenu: () => cy.get('#gnav20-nav-toggle'),
    storesButton: () => cy.get('[aria-label="Stores"]'),
    storeBarInput: () => cy.get('#storesData'),
    firstSearchResult: () => cy.get('a[class="buttonCurved"]')
}

    validateStoreLocator = (searchStore) => {
        this.elements.toggleNavMenu().click({force: true})
        this.elements.storesButton().eq(1).click({force: true})
        //this.elements.storeBarInput().click().type(searchStore, {force: true})
    }

    

}