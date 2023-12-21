/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class SupportValidationPage {
    elements = {
        supportButton: () => cy.get("#gnav20-Support-L1"),
        homeSupportButton: () => cy.get('#gnav20-Support-L2-3'),
        homeSupportOverviewButton: () => cy.get('#gnav20-Support-L3-9'),
        supportSearchBox: () => cy.get('#search_box_support_input')
    };

    navigateToHomeSupportPage = () => {
        this.elements.supportButton().click({ force: true });
        this.elements.homeSupportButton().click({ force: true });
        this.elements.homeSupportOverviewButton().click({ force: true });
    };

    searchForString = (searchSupportString) => {
        this.elements.supportSearchBox().click({ force: true });
        this.elements.supportSearchBox().type(searchSupportString, { force: true });
        this.elements.supportSearchBox().type("{enter}", { force: true });
    };

    validateCorrectSearchIsDisplayed = (expectedSearchResult) => {
        cy.contains(expectedSearchResult).should("exist");
    }
}
