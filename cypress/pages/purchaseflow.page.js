export class PurchaseFlowPage {

    elements = {
        iphone14pro: () => cy.get('#hero-tile2'),
        colorOfProduct: () => cy.get('#clr10520005'),
        storageCapacity: (storage) => cy.get(`[aria-label="${storage} GB"]`),
        typeOfCustomer: (customerType) => cy.get(`[aria-label="${customerType}"]`),
        paymentOptions: (payOption) => cy.get(`[aria-label="${payOption}"]`)
    }

    selectProductToPurchase = () => {
        this.elements.iphone14pro().click({force: true})
    }

    selectColor = () => {
        this.elements.colorOfProduct().click({force: true})
    }

    selectStorageCapacity = (storage) => {
        this.elements.storageCapacity(storage).click({force: true})
    }

    selectCustomerType = (customerType) => {
        this.elements.typeOfCustomer(customerType).click({force:true})
    }

    selectPaymentOption = (payOption) => {
        this.elements.paymentOptions(payOption).click({force: true})
    }
}