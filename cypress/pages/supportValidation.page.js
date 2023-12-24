/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class SupportValidationPage {
    elements = {
        supportButton: () => cy.get("#gnav20-Support-L1"),
        homeSupportButton: () => cy.get("#gnav20-Support-L2-3"),
        mobileSupportButton: () => cy.get("#gnav20-Support-L2-2"),
        deviceSupportButton: () => cy.get("#gnav20-Support-L3-4"),
        businessSupportButton: () => cy.get("#gnav20-Support-L2-4"),
        homeSupportOverviewButton: () => cy.get("#gnav20-Support-L3-9"),
        supportSearchBox: () => cy.get("#search_box_support_input"),
        businessSupportSearchBox: () => cy.get('input[type="search"]'),
        firstDeviceTroubleshootButton: () => cy.get("#tsa-landing-link-anchor"),
    };

    navigateToHomeSupportPage = () => {
        this.elements.supportButton().click({ force: true });
        this.elements.homeSupportButton().click({ force: true });
        this.elements.homeSupportOverviewButton().click({ force: true });
    };

    navigateToBusinessSupportPage = () => {
        this.elements.supportButton().click({ force: true });
        this.elements.businessSupportButton().click({ force: true });
    };

    navigateToMobileDeviceSupportPage = () => {
        this.elements.supportButton().click({ force: true });
        this.elements.mobileSupportButton().click({ force: true });
        this.elements.deviceSupportButton().click({ force: true });
    };

    selectFirstDeviceTroubleShoot = () => {
        this.elements.firstDeviceTroubleshootButton().eq(0).click({ force: true });
    };

    searchForBusinessString = (searchSupportString) => {
        this.elements.businessSupportSearchBox().eq(0).click({ force: true });
        this.elements.businessSupportSearchBox().eq(0).type(searchSupportString, { force: true });
        this.elements.businessSupportSearchBox().eq(0).type("{enter}", { force: true });
        this.elements.businessSupportSearchBox().eq(0).type("{enter}", { force: true });
    };

    searchForString = (searchSupportString) => {
        this.elements.supportSearchBox().click({ force: true });
        this.elements.supportSearchBox().type(searchSupportString, { force: true });
        this.elements.supportSearchBox().type("{enter}", { force: true });
    };

    validateCorrectSearchIsDisplayed = (expectedSearchResult) => {
        cy.contains(expectedSearchResult).should("exist");
    };
}
