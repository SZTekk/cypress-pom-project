export class SearchPage {

elements = {
    searchBar: () => cy.get('#z1-search-tablet'),
    searchBarInput: () => cy.get('#z1-searchfield')
}

    enterSearchQuery = () => {
        this.elements.searchBar().click({force: true})
        this.elements.searchBarInput().type("Apple Iphone 15", {force: true})
    }

}