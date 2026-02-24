//Configured for parallel execution on Chrome & Firefox.
// Note: Services were removed to rely on WDIO's internal driver management (v8+).

exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
    capabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        {
            maxInstances: 3,
            browserName: 'firefox',
            acceptInsecureCerts: true
        }
    ],
    
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 8500,
    connectionRetryTimeout: 95000,
    connectionRetryCount: 2,
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true, 
            addConsoleLogs: true,
        }]
    ],
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'], 
        tagExpression: '', 
    },
    beforeCommand: function (commandName, args) {        
        if (['click', 'setValue', 'url'].includes(commandName)) {
            console.log(`[ACTION] Executing ${commandName} with params: ${JSON.stringify(args)}`);
        }
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {        
        if (passed) {
            console.log(`[PASSED] Step: "${step.text}" finished in ${duration}ms`);
        } else {
            console.log(`[FAILED] Step: "${step.text}" failed. Checking system state...`);
            await browser.takeScreenshot();
        }
    },
}
