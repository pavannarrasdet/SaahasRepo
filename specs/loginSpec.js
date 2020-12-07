import loginPage from '../pages/loginPage';
import userData from '../data/userData';
import authPage from '../pages/authPage';

describe ('Login to Contractor application', () => {
    beforeEach(async () => {
        await authPage.gotoLoginPage();
    });

    it('user should be able to login successfully and should goto home page', async () => {
        await loginPage.loginAs(userData.testUser);

        //expect(await friendPage.loaded()).toBe(true);
    });
});