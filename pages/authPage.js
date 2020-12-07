import BasePage from './basePage';

class AuthPage extends BasePage {
    constructor() {
        super();
        this.loginButton = element(by.xpath("//ion-button[contains(.,'Log in')]"));
        this.singUPButton=element(by.xpath("//ion-button[contains(.,'Sign up')]"));
        this.url = browser.baseUrl;

    }
    async gotoLoginPage()
    {
        await browser.get(this.url, this.timeout.xl);
        await this.isClickable(this.loginButton,this.timeout.xxl);
        await this.loginButton.click();
        await this.hasURL("/login",this.timeout.xs);
    }

    async gotoRegistrationPage()
    {
        await browser.get(this.url, this.timeout.xl);
        await this.isClickable(this.singUPButton,this.timeout.xxl);
        await this.singUPButton.click();
        await this.hasURL("/register",this.timeout.xs);
    }
}
export default new AuthPage();