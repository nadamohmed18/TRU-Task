export class productsPage {
   

   addProductButton() {
    return cy.get('#add-to-cart-sauce-labs-backpack');
    }
    removeproductButton(){
      return cy.get('#remove-sauce-labs-backpack');
    }
    cartIcon(){
      return cy.get('#shopping_cart_container')
     }

    addProduct() {
      this.addProductButton().eq(0).click()
    }
  
    removeproduct(){
      this.removeproductButton().click()
    }
  }