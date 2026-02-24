import BasePage from './base.page.js';

class LoginPage extends BasePage {
    get inputUserName() { return $("//input[@id='user-name']"); }
    get inputPassword() { return $("//input[@id='password']"); }
    get buttonSubmit() { return $("//input[@id='login-button']"); }
    get errorMessage() { return $("//h3[@data-test='error']"); }  
    get dashboardTitle() { return $("//div[@class='app_logo']"); }

    async login(username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    async clearForm() {
        await this.clearInput(this.inputUserName);
        await this.clearInput(this.inputPassword);
    }

    open() {
        return super.open('');
    }
}

export default new LoginPage();