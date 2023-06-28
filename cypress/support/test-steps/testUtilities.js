const { expect } = require('chai').use(require('chai-json-schema'));

export function assertResponseBody(endpoint, method, expectedStatus, responseBodySchema = '', testData = '', urlParameter = '') {
  let apiUrl = `${Cypress.env('baseUrl')}${endpoint}`;
  let requestBody = null;
  
  switch (method) {
    case 'GET':
      if (!endpoint || !expectedStatus || !responseBodySchema) {
        throw new Error('ERROR - Missing required arguments in ${method} ${endpoint}');
      }
      // Handle GET method assertions here

      apiUrl = `${Cypress.env('baseUrl')}${endpoint}${testData}`;
      break;
  
    case 'POST':
      if (!testData || !endpoint || !expectedStatus) {
        throw new Error(`ERROR - Missing required arguments in: ${method} ${endpoint}`);
      }
      // Handle POST method assertions here

      requestBody = testData;
      break;
  
    case 'PUT':
      if (!testData || !endpoint || !expectedStatus || !responseBodySchema || !urlParameter ) {
        throw new Error(`ERROR - Missing required arguments in: ${method} ${endpoint}`);
      }
      // Handle PUT method assertions here
      apiUrl = `${Cypress.env('baseUrl')}${endpoint}${urlParameter}`;
      requestBody = testData;
      break;
  
    case 'DELETE':
      console.log(endpoint);
      console.log(method);
      console.log(expectedStatus);
      console.log(responseBodySchema);
      console.log(testData);
      console.log(urlParameter);
      if (!urlParameter || !endpoint || !expectedStatus) {
        throw new Error(`ERROR - Missing required arguments in: ${method} ${endpoint}`);
      }
      // Handle DELETE method assertions here
      apiUrl = `${Cypress.env('baseUrl')}${endpoint}${urlParameter}`;
      break;
  
    default:
      throw new Error(`ERROR - Unsupported HTTP method for: ${method}`);
  }

  return cy.request({
    method,
    url: apiUrl,
    headers: {
      'Authorization': Cypress.env('Authorization')
    },
    body: requestBody,
  }).then(response => {
    expect(response.status).to.eq(expectedStatus, `ERROR - STATUS CODE INCORRECT for ${method} ${endpoint}`);
    if(method === "DELETE"){
      expect(response.body).to.be.empty;
    }else{
      expect(response.body).to.have.jsonSchema(responseBodySchema, `ERROR - BODY RESPONSE INCORRECT for ${method} ${endpoint}`);
    }

    
    // Additional assertions can be added here
    // expect(response.body.property).to.equal(expectedValue);

    return response;
  });
}