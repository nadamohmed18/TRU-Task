import { productsPage } from '../../pages/productsPage.js';
import { utils } from '../../utils/utils.js';


const ProductsPage = new productsPage();
const Utils = new utils();
const loginCredentials = require('../../genericTestData/loginData.json');




beforeEach('Login', () => {
    Utils.navigateTowebsite();
    Utils.userLogin(loginCredentials.correctuser.correctemail, loginCredentials.correctuser.correctpassword);
  });

it('should add and remove products from cart', () => {


    ProductsPage.addProduct();
    ProductsPage.removeproduct();

});