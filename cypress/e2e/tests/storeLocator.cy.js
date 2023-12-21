/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { StoreLocatorPage } from "../../pages/storeLocator.page";
const storeLocatorPage = new StoreLocatorPage();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe("validate user can locate a store", () => {
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"));
        cy.fixture("data.json").then((data) => {
            testdata = data;
        });
    });

    it("validate user can search for store using store locator", async () => {
        await storeLocatorPage.navigateToStoreLocator();
        await storeLocatorPage.searchForStore(testdata.storeSearch, testdata.storeSearchDropdownResult);
        await storeLocatorPage.validateStoreSearchedCorrectly(testdata.storeSearchResultValidation);
    });
});
