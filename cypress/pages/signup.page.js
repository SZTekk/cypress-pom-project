/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class SignUpPage {
    elements = {
        signinDropdown: () => cy.get("#gnav20-sign-id"),
        registerBtn: () => cy.get("#gnav20-sign-id-list-item-3"),
        firstSearchResult: () => cy.get('a[class="buttonCurved"]'),
    };

    openSignInDropdown = () => {
        this.elements.signinDropdown().click({ force: true });
    };

    openRegisterPage = () => {
        this.elements.registerBtn().click({ force: true });
    };
}
