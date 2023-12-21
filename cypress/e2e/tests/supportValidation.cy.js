/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { SupportValidationPage } from "../../pages/supportValidation.page";
const supportValidation = new SupportValidationPage();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe("validate user can get support", () => {
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"));
        cy.fixture("data.json").then((data) => {
            testdata = data;
        });
    });

    it("validate user can get home support by search", async () => {
        supportValidation.navigateToHomeSupportPage();
        supportValidation.searchForString(testdata.searchSupportString)
        supportValidation.validateCorrectSearchIsDisplayed(testdata.expectedSearchResult)
    });
});
