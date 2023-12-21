const opn = require("opn");

Cypress.on("run:end", (results) => {
    // Check if the run was successful (no failures)
    if (results.totalFailed === 0) {
        // Open Mochawesome HTML report in the default browser
        opn("/Users/aksamalikhalid/Desktop/SaezTech-Cypress-framework/cypress/mochawesomeresults/index.html", {
            wait: false,
        });
    }
});
