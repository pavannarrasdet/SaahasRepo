import registrationPage from '../pages/registrationPage';
import registerData from '../data/registerData';
import authPage from '../pages/authPage';

describe ('Login to Contractor application', () => {
    beforeEach(async () => {
        await authPage.gotoRegistrationPage();
    });

    it('user should be able to register successfully', async () => {
        await registrationPage.registerUser(registerData);

        //expect(await friendPage.loaded()).toBe(true);
    });
});