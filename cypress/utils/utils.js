export class utils {
    email() {
        return cy.get('#user-name');
        }
        password(){
          return cy.get('#password');
        }
    
        loginButton(){
         return cy.get('#login-button')
        }

        userLogin(email,password) {
            this.email().type(email);
            this.password().type(password);
            this.loginButton().click();

          }
    

    navigateTowebsite() {
      cy.visit('https://www.saucedemo.com/'); 
    }
}