# Cypress API Testing Project

This project automates the testing of APIs using Cypress, focusing on endpoints provided by Reqres.

## Overview

The goal of this project is to ensure the reliability and accuracy of the APIs provided by Reqres. The tests cover various scenarios including positive, negative, and edge cases to validate the functionality and behavior of the API endpoints.

## Features
Comprehensive test coverage of API endpoints.
Automated testing with Cypress, a powerful testing framework.
Detailed test plan and documentation for easy reference and maintenance.

## Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (with npm)
Cypress

## Installation
1. Clone the repository:
git clone <repository_url>

2. Navigate to the project directory:
cd cypress-api-testing

3. Install dependencies:
npm install


## Project Structure
cypress/
  ├── fixtures/            # Test data files
  ├── e2e/                 # Test scripts
  ├── ApiMethods           # API Request Methods
  ├── support/             # Custom commands and utilities & Pages
  └── reports/             # Reports 


## Running Tests
 Execute all tests in Headless Mode:
 npx cypress run
 Execute all tests in Headed Mode:
 npx cypress run --headed


## Test Plan
The test plan is documented in JSON format and can be found in the project directory as testPlan.json. It outlines the test scenarios and cases for each API endpoint covered in the project.
