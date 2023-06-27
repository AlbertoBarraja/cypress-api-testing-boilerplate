# Test Utilities Documentation
This documentation provides an overview of two test utilities for API testing.

## assertResponseBody
---
The `assertResponseBody` function is a reusable test utility for asserting the response of an API request. It provides a flexible and convenient way to validate various aspects of the API response.

### Parameters
- `testData` (object): The test data object containing the necessary information for the API request and assertions.
- `endpoint` (string): The API endpoint to send the request to.
- `method` (string): The HTTP method to use for the request (e.g., GET, POST, PUT, DELETE).
- `expectedStatus` (number): The expected HTTP status code of the response.
- `responseBodySchema` (object): The JSON schema object representing the expected structure of the response body.

### Usage
The `assertResponseBody` function makes an API request using the provided endpoint, method, and test data. It then performs assertions on the response to verify if it meets the expected criteria.

#### Example usage:
```javascript
import { assertResponseBody } from 'cypress/support/test-steps/testUtilities.js';

// Assuming Cypress environment variables are properly configured
import testData from "cypress/fixtures/test-data/exampleTestData.json";
import responseBodySchema from "cypress/fixtures/response-schemas/exampleResponseSchema.json";
const endpoint = Cypress.env('usersEndPoint');
const method = 'GET';
const expectedStatus = 200;

// Call the assertResponseBody function with the provided arguments
assertResponseBody(testData, endpoint, method, expectedStatus, responseBodySchema);
```
## Second utlity function
---
