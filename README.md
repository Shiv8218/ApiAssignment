## Cypress Automated Testing Framework

# Overview
This framework is built to streamline end-to-end testing using Cypress, providing a structured approach for scalable and maintainable test suites.

# Table of Contents
Features
Prerequisites
Getting Started
Project Structure
Running Tests
Configuration

# Features
Page Object Model (POM): Leverage the power of the Page Object Model to organize your tests systematically, enhancing maintainability and reusability.
Test Data Handling: Effectively manage test data to ensure the creation of a robust and scalable test suite.

# Prerequisites
Before diving in, please ensure you have the following prerequisites met:

Node.js installed locally on your machine.

# Getting Started
To get started with our framework, follow these steps:

Install dependencies by running the following command:

```terminal
npm install

Launch the Cypress UI:

terminal
npx cypress open

# Project Structure
Here's the structure of our Cypress project:

plaintext
cypress/
  ├── fixtures/            # Holds test data files
  ├── e2e/                 # Contains test scripts
  ├── support/             # Custom commands, utilities, and Pages
  └── reports/             # Stores test reports

# Running Tests
Execute tests in different modes:

To run all tests in Headless Mode:

terminal
npx cypress run
To run all tests in Headed Mode:

terminal
npx cypress run --headed
To execute all tests and generate a report:

terminal
npm run test
To run API tests and generate a report:

terminal
npm run testApi

# Configuration
Configure the Base URL:

- Navigate to cypress.config.js and update the baseUrl inside the e2e section with your desired base URL.
Activate/Deactivate Test Isolation:

- Modify the test isolation setting in cypress.config.js as follows:
To Activate: testIsolation: true,
To Deactivate: testIsolation: false,
