
export default class BasePage {
    constructor() {
        /**
         * wrap this.timeout. (ms) in t-shirt sizes
         */
        this.timeout = {
            'xs': 5000,
            's' : 10000,
            'm' : 15000,
            'l' : 25000,
            'xl': 40000,
            'xxl': 65000
        };

        /**
         * get an element's width
         * extends protractor's ElementFinder
         * @return {int} - the width of the element
         */
        protractor.ElementFinder.prototype.getWidth = async function() {
            return await this.getSize().then(size => {
                return size.width;
            });
        };
    }

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    async loaded() {
        return browser.wait(async () => {
            return await this.pageLoaded();
        }, this.timeout.xl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via loaded()
     * @requires page have both `url` and `pageLoaded` properties
     */
    async goto() {
        await browser.get(this.url, this.timeout.xl);
        return await this.loaded();
    }

    /**
     * wait and then click an element
     * @param  {obj} element
     */
    async waitAndClick(element,syncTime) {
        await this.isClickable(element,syncTime);
        await element.click();
    }

    /**
     * Wrappers for expected conditions
     * I find ECs to be poorly named, so we wrap them in methods
     * that are 9% more sexy, and allow us to add logging, etc...
     * @returns {ExpectedCondition}
     */
    isVisible(locator,syncTime) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(locator),syncTime);
    }

    isNotVisible(locator) {
        return protractor.ExpectedConditions.invisibilityOf(locator);
    }

    inDom(locator,syncTime) {
        return browser.wait(protractor.ExpectedConditions.presenceOf(locator),syncTime);
    }

    notInDom(locator) {
        return protractor.ExpectedConditions.stalenessOf(locator);
    }

    isClickable(locator,syncTime) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(locator),syncTime);
    }

    hasText(locator, text,syncTime) {
        return browser.wait(protractor.ExpectedConditions.textToBePresentInElement(locator, text),syncTime);
    }

    and(arrayOfFunctions,syncTime) {
        return brower.wait(protractor.ExpectedConditions.and(arrayOfFunctions),syncTime);
    }

    titleIs(title,syncTime) {
        return browser.wait(protractor.ExpectedConditions.titleIs(title),syncTime);
    }

    hasURL(urlVal,syncTime) {
        return browser.wait(protractor.ExpectedConditions.urlContains(urlVal),syncTime);
    }

    /**
     * test if an element has a class
     * @param  {elementFinder} locator - eg. $('div#myId')
     * @param  {string}  klass  - class name
     * @return {Boolean} - does the element have the class?
     */
    hasClass(locator, klass) {
        return locator.getAttribute('class').then(classes => {
            return classes.split(' ').indexOf(klass) !== -1;
        });
    }

    /**
     * Webdriver equivalent to hitting Enter/Return key.
     */
    async hitEnter() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    /**
     * switches focus to a new (last) window
     */
    async switchToNewWindow() {
        await browser.getAllWindowHandles().then(handles => {
            browser.switchTo().window(handles[handles.length - 1]);
        });
    }

    /**
     * close the current window and switch to its parent window
     * @param {obj} parentPage - the parent page object we want to load
     */
    async closeNewWindow() {
        await browser.getAllWindowHandles().then(handles => {
            browser.close();
            // the parent should be 2 less than the length of all found window handlers
            browser.switchTo().window(handles.length - 2);
        });
    }
}