/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { SearchPage } from "../../pages/search.page";
const searchPage = new SearchPage;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("validate user can perform search on Verizon main page", () =>{
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture('data.json').then((data) => {
            testdata = data
        })
    })

    it("validate user can search a product using ajax", async () => {
        await searchPage.validateAjaxSearch(testdata.searchString, testdata.searchPageTitle, testdata.searchResultData)
    })

    it("validate user perform a detailed search of product ", async () => {
        await searchPage.validateDetailedSearch(testdata.searchString, testdata.detailedSearchPageTitle, testdata.detailedSearchResultData)
    })
})