export class SearchPage {

elements = {
    searchBar: () => cy.get('#z1-search-tablet'),
    searchBarInput: () => cy.get('#z1-searchfield'),
    searchBtn: () => cy.get('.gn-search-btn')
}

    validateSearch = (searchString, pageTitle, searchResult) => {
        this.elements.searchBar().click({force: true})
        this.elements.searchBarInput().type(searchString, {force: true})
        this.elements.searchBtn().click({force: true})
        cy.title().should('eq', pageTitle);
        cy.contains(searchResult).should('exist');
    }

    

}