/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { SignUpPage } from "../../pages/signup.page";
const signUpPage = new SignUpPage();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe("validate user can register on verizon", () => {
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"));
        cy.fixture("data.json").then((data) => {
            testdata = data;
        });
    });

    it("validate user can do register", async () => {
        await signUpPage.openSignInDropdown();
        await signUpPage.openRegisterPage();
    });
});
