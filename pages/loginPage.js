import BasePage from './basePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.userInput = element(by.xpath("//input[@type='email']"));
        this.passInput = element(by.xpath("//input[@type='password']"));
        this.loginButton = element(by.xpath("//ion-button[contains(.,'Login')]"));
        this.signupButton = element(by.xpath("//ion-button[text()='Sign up']"));
        this.pageLoaded = this.inDom($("//ion-button[contains(.,'Log in')]"),this.timeout.xxl);

    }

    /**
     * convenience wrapper for login that allows you to login via
     * role object. eg. loginAs(admin)
     * @param  {obj} userObj - user data object
     * @return {promise}
     */
    loginAs(userObj) {
        return this.login(userObj.username, userObj.password);
    }

    /**
     * non-angular login
     * @param  {string} user
     * @param  {string} pass
     * @return {promise}
     */
    async login(user, pass) {
        await this.isClickable(this.userInput,this.timeout.xxl);
        await this.userInput.sendKeys(user);
        await this.isClickable(this.passInput,this.timeout.xxl);
        await this.passInput.sendKeys(pass);
        await this.isClickable(this.loginButton,this.timeout.xxl);
        await this.loginButton.click();
    }
}
export default new LoginPage();