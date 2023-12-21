/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class SearchPage {

elements = {
    searchBar: () => cy.get('#gnav20-search-icon'),
    searchBarInput: () => cy.get('#search_box_gnav_input'),
    firstSearchResult: () => cy.get('a[class="buttonCurved"]')
}

    validateAjaxSearch = (searchString, pageTitle, searchResult) => {
        this.elements.searchBar().click({force: true})
        this.elements.searchBarInput().type(searchString, {force: true})
        cy.title().should('eq', pageTitle);
        cy.contains(searchResult).should('exist');
    }

    validateDetailedSearch = (searchString, pageTitle, searchResult) => {
        this.elements.searchBar().click({force: true})
        this.elements.searchBarInput().type(searchString, {force: true})
        this.elements.searchBarInput().type('{enter}', {force: true})
        cy.title().should('eq', pageTitle);
        this.elements.firstSearchResult().eq(0).click()
    }

    

}