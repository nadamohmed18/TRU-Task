import { productsPage } from '../../pages/productsPage.js';
import { checkoutPage } from '../../pages/ckeckoutPage.js';
import { utils } from '../../utils/utils.js';


const ProductsPage = new productsPage();
const Utils = new utils();
const loginCredentials = require('../../genericTestData/loginData.json');
const CheckoutPage = new checkoutPage();
const flowData = require('./testData.json');





beforeEach('Login', () => {
    Utils.navigateTowebsite();
    Utils.userLogin(loginCredentials.correctuser.correctemail, loginCredentials.correctuser.correctpassword);
  });

it('should complete checkout successfully', () => {


    ProductsPage.addProduct();
    ProductsPage.cartIcon().click();
    CheckoutPage.checkoutProcess(flowData.checkoutData.fristName , flowData.checkoutData.lastName , flowData.checkoutData.postalCode );
   CheckoutPage.confirmationMessageOfOrder().should('have.text', flowData.checkoutData.confirmationMessageOfOrder)
});