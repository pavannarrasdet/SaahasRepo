import loginPage from '../pages/loginPage';
import userData from '../data/userData';
import authPage from '../pages/authPage';

describe ('Login to Contractor application', () => {
    beforeEach(async () => {
        await authPage.gotoLoginPage();
    });

    /* it('should display message for invalid credentials', async () => {
        await loginPage.login('invalid_user', 'invalid_password');

        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    }); */

   /*  it('should display message for empty credentials', async () => {
        await loginPage.login('', '');

        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    }); */

    it('user should be able to login successfully and should goto home page', async () => {
        await loginPage.loginAs(userData.testUser);

        //expect(await friendPage.loaded()).toBe(true);
    });
});