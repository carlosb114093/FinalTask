import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../test/pageobjects/login.page.js';
import fs from 'fs';

const testData = JSON.parse(fs.readFileSync('./data/loginData.json', 'utf-8'));

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

When(/^I execute the login flow for "([^"]*)"$/, async (testCase) => {
    const { username, password } = testData[testCase];

    if (testCase === 'UC-1') {
        
        await LoginPage.inputUserName.setValue(username);
        await LoginPage.inputPassword.setValue(password);
        await LoginPage.clearForm(); 
        await LoginPage.buttonSubmit.click();
    } else if (testCase === 'UC-2') {
        
        await LoginPage.inputUserName.setValue(username);
        await LoginPage.inputPassword.setValue(password);
        await LoginPage.clearInput(LoginPage.inputPassword); 
        await LoginPage.buttonSubmit.click();
    } else if (testCase === 'UC-3') {
        
        await LoginPage.login(username, password); 
    }
});

Then(/^I validate the expected result for "([^"]*)"$/, async (testCase) => {
    const { expectedResult } = testData[testCase];

    if (testCase === 'UC-3') {
        
        await expect(LoginPage.dashboardTitle).toHaveText(expectedResult);
    } else {
        
        await expect(LoginPage.errorMessage).toHaveText(expectedResult);
    }
});