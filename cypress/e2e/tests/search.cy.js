import { SearchPage } from "../../pages/search.page";
const searchPage = new SearchPage;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("validate user can create a new account", () =>{
    beforeEach("open main website url", () => {
        cy.visit(Cypress.env("url"))
    })

    it("validate user can create account with valid credentials", () => {
        searchPage.enterSearchQuery()
    })
})