export class checkoutPage {
   

    fristName() {
     return cy.get('#first-name');
     }
     lastName(){
       return cy.get('#last-name');
     }
 
 
     postalCode() {
        return cy.get('#postal-code');
     }
   
     continueButton(){
       return cy.get('#continue');
     }
     finishButton(){
        return cy.get('#finish') 
        }
  checkoutButton (){
       return cy.get('#checkout');
        }

    confirmationMessageOfOrder(){
         return cy.get('.complete-header')
         }

         checkoutProcess(firstName , lastName , postalCode){
            this.checkoutButton().click();
            this.fristName().type(firstName);
            this.lastName().type(lastName);
            this.postalCode().type(postalCode)
            this.continueButton().click();
            this.finishButton().click();
         }
   }