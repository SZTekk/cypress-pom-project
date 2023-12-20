import { SearchPage } from "../../pages/search.page";
const searchPage = new SearchPage;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("validate user can perform search on AT&T main page", () =>{
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture('data.json').then((data) => {
            testdata = data
        })
    })

    it("validate user can search a product ", async () => {
        await searchPage.validateSearch(testdata.searchString, testdata.searchPageTitle, testdata.searchResultData)
    })
})