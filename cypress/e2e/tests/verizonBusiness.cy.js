/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { VerizonBusinessPage } from "../../pages/verizonBusiness.page";
const verizonBusinessPage = new VerizonBusinessPage();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe("validate user can switch to Business", () => {
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"));
        cy.fixture("data.json").then((data) => {
            testdata = data;
        });
    });

    it("validate user can land on business page", async () => {
        verizonBusinessPage.validateBusinessPage();
    });
});