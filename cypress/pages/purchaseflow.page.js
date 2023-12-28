/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class PurchaseFlowPage {
    elements = {
        verizonShop: () => cy.get('#gnav20-Shop-L1'),
        verizonShopAll: () => cy.get("#gnav20-Shop-L2-1"),
        searchAProduct: () => cy.get("#search_box_ShopLP_input"),
        selectedProduct: () => cy.get("1_tile"),
        colorOfProduct: () => cy.get("#clr10520005"),
        storageCapacity: (storage) => cy.get(`[aria-label="${storage} GB"]`),
        typeOfCustomer: (customerType) => cy.get(`[aria-label="${customerType}"]`),
        paymentOptions: (payOption) => cy.get(`[aria-label="${payOption}"]`),
    };

    openVerizonShop = () => {
        this.elements.verizonShop().click({force: true});
        this.elements.verizonShopAll().click({force: true})
    };

    searchAProduct = (product) => {
        this.elements.searchAProduct().type(product)
    }

    selectProductToPurchase = () => {
        this.elements.selectedProduct().click({ force: true });
    };

    selectColor = () => {
        this.elements.colorOfProduct().click({ force: true });
    };

    selectStorageCapacity = (storage) => {
        this.elements.storageCapacity(storage).click({ force: true });
    };

    selectCustomerType = (customerType) => {
        this.elements.typeOfCustomer(customerType).click({ force: true });
    };

    selectPaymentOption = (payOption) => {
        this.elements.paymentOptions(payOption).click({ force: true });
    };
}
