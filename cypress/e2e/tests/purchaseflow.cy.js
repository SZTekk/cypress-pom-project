/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { PurchaseFlowPage } from "../../pages/purchaseflow.page";
const purchaseFlowPage = new PurchaseFlowPage;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("validate user can purchase an item from verizon", () =>{
    let testdata;
    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture('data.json').then((data) => {
            testdata = data
        })
    })

    it("validate user can purchase Apple Iphone 14 pro", async () => {
        purchaseFlowPage.selectProductToPurchase()
        purchaseFlowPage.selectColor()
        purchaseFlowPage.selectStorageCapacity(testdata.minimumStorage)
        purchaseFlowPage.selectCustomerType(testdata.newCustomer)
        purchaseFlowPage.selectPaymentOption(testdata.fullpayOption)
    })
})