/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { SocialMediaIcons } from "../../pages/socialMediaIcons";
const socialMediaIcons = new SocialMediaIcons();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe("validate user can visit Verizon social media", () => {
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"));
        cy.fixture("data.json").then((data) => {
            testdata = data;
        });
    });

    it("validate user can visit different Verizon social media handles", async () => {
        await socialMediaIcons.validateSocialMediaIcons();
    });
});
