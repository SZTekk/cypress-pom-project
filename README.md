# cypress-pom

# Framework Structure

1- Framewor is based on Page Object Model developed in Cypress + Javascript and using modular approach

2- Framework is divided into Pages and Tests classes. Data is handled through fixtures folder

3- All the basic functionalities and elements on a page are placed in the Pages folder

4- All the tests using pages are placed in e2e/tests folder

# Installation

1- Clone this project using command: git clone <url to the repo>

2- Once the cloning is done, use the following command to install all the packages: npm install

# Running the framework

1- In order to run the test cases on terminal, use the command: npm run cy:run

2- In order to run the test cases on UI, use the command: npx cypress open

    a- Select E2E Testing
    b- Select Electron or Chrome as browser
    c- Start running the entire suite

# Reporting

1- This framework is using Mochawesome report. 

2- once the execution is done, use this url to see the reports locally: http://127.0.0.1:8080

