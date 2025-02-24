# TRu-Task

This repository contains an automated test suite built with [Cypress](https://www.cypress.io/) to verify the checkout process on [saucedemo.com](https://www.saucedemo.com/).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Test Data](#test-data)
5. [File Overview](#file-overview)

## Prerequisites

- Node.js (14.x or higher)
- npm (Node package manager)
- A modern web browser (Chrome recommended)

## Installation

1. Clone the repository for this [link](https://github.com/sahil-kumar-yadav/Automation-Task)
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run cypress` to open the Cypress Test Runner
5. Run `npm run  cypress-headless` to run the tests headlessly

## Usage

- Open the Cypress Test Runner by running `npm run cypress`
- Run the tests headlessly by running `npm run cypress-headless`

## Test Data

- Test data for  the checkout process is stored in the `testData.json` file in the `Checkout` directory 
- Test data for the login process is stored in the `loginData.json` file in the `genericTestData` directory 

-

## File Overview

- `checkout.cy.js`: The main test file for the checkout process
- `testData.json`: Test data for the checkout process
- `productsInCart.cy.js`: The main test file for the add and remove products  process
- `login.cy.js`: The main test file for the login process
- `productsPage.js`: Page object for the productsPage
- `CheckoutPage.js`: Page object for the checkout page
- `LoginPage.js`: Page object for the login page
- `loginData.json`: Test data for the login process
- `utils.cy.js`: Page object for the loginPage and navigate to website 




-