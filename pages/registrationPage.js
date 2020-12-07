import BasePage from './basePage';

class RegistrationPage extends BasePage {
    constructor() {
        super();
        this.firstNameInput = element(by.xpath("//input[@placeholder='First Name']"));
        this.lastNameInput = element(by.xpath("//input[@placeholder='Last Name']"));
        this.roleInput = element(by.xpath("//input[@placeholder='Title/Role']"));
        this.emailInput = element(by.xpath("//input[@placeholder='E-mail']"));
        this.phoneNumInput = element(by.xpath("//input[@placeholder='Phone Number']"));
        this.passWordInput = element(by.xpath("//input[@placeholder='Password']"));
        this.signUpButton = element(by.xpath("//ion-button[text()='Sign up' and @type='submit']"));

    }

    /**
     * convenience wrapper for login that allows you to register via
     * role object. eg. registerUser(user)
     * @param  {obj} registerObj - user data object
     * @return {promise}
     */
    registerUser(registerObj) {
        return this.register(registerObj.firstName, registerObj.lastName,registerObj.role,
            registerObj.email,registerObj.phoneNumber,registerObj.password);
    }

    /**
     * Register
     * @param  {string} user
     * @param  {string} pass
     * @return {promise}
     */
    async register(fname, lname,role,email,phn,pwd) {
        await this.isClickable(this.firstNameInput,this.timeout.xxl);
        await this.firstNameInput.sendKeys(fname);
        await this.isClickable(this.lastNameInput,this.timeout.xxl);
        await this.lastNameInput.sendKeys(lname);
        await this.isClickable(this.roleInput,this.timeout.xxl);
        await this.roleInput.sendKeys(role);
        await this.isClickable(this.emailInput,this.timeout.xxl);
        await this.emailInput.sendKeys(email);
        await this.isClickable(this.phoneNumInput,this.timeout.xxl);
        await this.phoneNumInput.sendKeys(phn);
        await this.isClickable(this.passWordInput,this.timeout.xxl);
        await this.passWordInput.sendKeys(pwd);
        await this.isClickable(this.signUpButton,this.timeout.xxl);
        await this.signUpButton.click();
    }
}
export default new RegistrationPage();