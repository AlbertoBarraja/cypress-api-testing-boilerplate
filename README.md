# Cypress API Testing Boilerplate

The Cypress API Testing Boilerplate is a comprehensive and pre-configured GitHub repository specifically designed to assist teams and organizations in swiftly generating new QA automation projects for API testing. By leveraging this boilerplate, QA engineers can expedite the process of setting up a new automation framework and begin coding without delay.

## Key Features
---
- **Cypress Integration**
- **Pre-configured Setup**:
- **API Testing Focus**: 
- **Ready-to-use Structure**: 
- **Reusable Components**: 
- **Extensibility and Customization**: 

## Getting Started
---
To get started with the Cypress API Testing Boilerplate, simply clone the repository to your local machine and follow the provided documentation. It is assumed you have nothing installed except for node + git. **If you get stuck, here is more help:**  [Cypress Support](https://on.cypress.io/support)

The documentation provides step-by-step instructions on setting up the environment, configuring the necessary dependencies, and executing sample test cases. Additionally, the repository offers comprehensive examples and code snippets to guide QA engineers in writing efficient API test scripts.


### 1. Fork this repo

```shell
git clone git@github.com:AlbertoBarraja/cypress-api-testing-boilerplate.git
```

### 2. Install packages 

```shell
npm install
```


### 3. Run the tests

Run in chrome
```
npm run cy:dev

```

To run the test headless
```
npm run cy:run          # Runs smoke test

npm run cy:run:all      # Runs all test cases

npm run cy:run:smoke    # Runs smoke test
```

## Project Structure
---
``` bash
📂cypress/               # Root folder for cypress Project
  📁downloads/           # Files downloaded by cypress code
  📂e2e/                 # Contains the spec files
    📁test-suite/        # Collection of test suites, each test suites typically corresponds to a specific endpoint
  📂fixtures/            # Store static data files that are used by tests
    📁response-schemas/  # Fixtures used to store response schemas
    📁test-data/         # Fixtures used by TestCase functions
  📂support/             # Contains files that support the tests, such as reusable functions or global configuration 
    📁test-cases/        # Resusable complete test case functions
    📂test-utils/        # Resusable test utilities functions
📂node_modules/          # Contains the project's dependencies, which are installed using the npm install command
📄cypress.config.js      # Configs and Cypress.task functions
📄.gitignore             # Files and dirs ignored by git
📄package-lock.json      # Dependencies of dependencies
📄package.json           # Dependencies of the Project
```


## Contribution
---
Contributions to the Cypress API Testing Boilerplate are welcome! If you encounter any issues, have suggestions for improvements, or would like to contribute new features, feel free to create pull requests or submit issues through the repository's issue tracker.

## License
---
The Cypress API Testing Boilerplate is open-source software released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the codebase in accordance with the terms and conditions of the license.

## Happy Testing 
---
Start your API testing automation journey today with the Cypress API Testing Boilerplate and accelerate your team's productivity in creating reliable and efficient test suites for API testing!
