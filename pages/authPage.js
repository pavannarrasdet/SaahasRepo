import BasePage from './basePage';

class AuthPage extends BasePage {
    constructor() {
        super();
        this.loginButton = element(by.xpath("//ion-button[contains(.,'Log in')]"));
        this.url = browser.baseUrl;

    }
    async gotoLoginPage()
    {
        await browser.get(this.url, this.timeout.xl);
        await this.isClickable(this.loginButton,this.timeout.xxl);
        await this.loginButton.click();
        await this.hasURL("/login",this.timeout.xs);
    }
}
export default new AuthPage();