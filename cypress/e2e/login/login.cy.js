import { LoginPage } from '../../pages/loginPage.js';
import { utils } from '../../utils/utils.js';
//import { ProductPage } from '../../Pages/addproductToCart';
//import { CartPage } from '../Automation-Task/cypress/Pages/CartPage';
//import { CheckoutPage } from '../Automation-Task/cypress/Pages/CheckoutPage';
//import { PaymentPage } from '../Automation-Task/cypress/Pages/PaymentPage';





const loginPage = new LoginPage();
const loginCredentials = require('../../genericTestData/loginData.json');
const Utils = new utils();
//const productPage = new ProductPage();
//const cartpage = new CartPage();
//const checkoutpage =new CheckoutPage();
//const paymentpage =new PaymentPage();

beforeEach('Login', () => {
  Utils.navigateTowebsite();
});

it('should login successfully', () => {


    Utils.userLogin(loginCredentials.correctuser.correctemail, loginCredentials.correctuser.correctpassword);
    

});


it('should login fail', () => {

  Utils.userLogin(loginCredentials.uncorrectuser.uncorrectemail, loginCredentials.uncorrectuser.uncorrectpassword);
  loginPage.errorMessageOfUncorrectUser().should('have.text', loginCredentials.uncorrectuser.errorMessageofUncorrectUser)

});

/*      // Step 2: Add product to cart
     productPage.addProductToCart();
     productPage.messageProductAddToCard().should('be.visible').and('contain.text', 'Your product has been added to cart.');


      // Step 3: Proceed to checkout
      cartpage.goToCheckout();
      cartpage.ProceedToCheckout();

    // Step 4: place order
    checkoutpage.placeOrder();

    //step 5 : Confiem payment
    paymentpage.NameOnCard(flowData.billing.nameOfCard);
    paymentpage.cardNumber(flowData.billing.cardNumber);
    paymentpage.cvvNumber(flowData.billing.cvv);
    paymentpage.monthExpiration(flowData.billing.monthOfExpiration);
    paymentpage.yearExpiration(flowData.billing.yearOfExpiration);
    paymentpage.confirmButton();
    paymentpage.messageOfConfiemationPayment().should('be.visible').and('contain.text', 'Order Placed!');

} */