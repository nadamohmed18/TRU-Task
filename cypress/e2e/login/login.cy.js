import { LoginPage } from '../../pages/loginPage.js';
import { utils } from '../../utils/utils.js';






const loginPage = new LoginPage();
const loginCredentials = require('../../genericTestData/loginData.json');
const Utils = new utils();


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
