Sauce Demo Automation Project
WebdriverIO + Cucumber
Project Overview

This project is an automated testing solution for the Sauce website, built using a BDD (Behavior-Driven Development) approach.
The main goal is to validate key user flows related to authentication, covering three user cases:

UC-1: Login validation with incorrect credentials.

UC-2: Error handling during authentication.

UC-3: Successful login and navigation to the dashboard.

The project is designed to be apply best practices for test automation.

Tech Stack & Main Libraries

The following tools and libraries are used to run the automation suite:

Node.js
JavaScript runtime environment used to execute the test scripts.

WebdriverIO (v8+)
The main automation framework used to interact with web browsers in a flexible and scalable way.

@wdio/cucumber-framework
Integrates Cucumber with WebdriverIO, allowing tests to be written in a readable Gherkin format (Given / When / Then).

@wdio/local-runner
Runs the tests locally on your machine.

@wdio/spec-reporter
Provides clean and readable console output during test execution.

@wdio/allure-reporter
Generates detailed test execution data used to build visual reports.

Allure Commandline
Converts execution results into an interactive HTML report.

Design Patterns & Best Practices

This project follows several best practices to ensure clean and maintainable code:

Page Object Model (POM)
Page structure and actions are separated from test logic, making the tests easier to read and update.

Inheritance
A BasePage class contains common methods (such as open and clearInput) that are reused across all page objects.

Data Provider
Test data is externalized in data/loginData.json, allowing easy updates and test parametrization without changing code.

XPath Locators
All elements are located using XPath, as required by the technical specifications.

How to Run the Project
1. Prerequisites

Make sure Node.js is installed on your system.

2. Installation

Clone the repository and install the dependencies:

npm install
3. Test Execution

Run all tests in parallel using Chrome and Firefox:

npx wdio run wdio.conf.js
4. Generate Test Reports

Once the execution is finished, generate and open the Allure report:

npx allure generate allure-results --clean
npx allure open
Folder Structure

data/
Contains loginData.json, used as the data provider for test cases.

features/
Includes .feature files written in Gherkin and the corresponding step-definitions.

test/pageobjects/
Contains all Page Object classes (base.page.js, login.page.js, etc.).

wdio.conf.js
Main configuration file for browsers, reporters, and test hooks.