export default class BasePage {
    async open (path) {
        return await browser.url(`https://www.saucedemo.com/${path}`);
    }

    async clearInput (element) {
        await element.click();
        await browser.keys(['Control', 'a']);
        await browser.keys(['Backspace']);
    }
}