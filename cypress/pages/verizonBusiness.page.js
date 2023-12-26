/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class VerizonBusinessPage {
    elements = {
        businessBtn: () => cy.get("#gnav20-eyebrow-link-Business"),
        loginBtn: () => cy.get("#gnav20-account-link-id")
    };

    validateBusinessPage = async () => {
        this.elements.businessBtn().click();
        cy.url().should('eq', 'https://www.verizon.com/business/');
        this.elements.loginBtn().should('be.visible');
    };
}