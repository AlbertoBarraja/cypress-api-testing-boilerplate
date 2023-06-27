

export function assertResponseBody(testData, endpoint, method, expectedStatus, responseBodySchema) {
    if (!testData || !endpoint || !method || !expectedStatus || !responseBodySchema) {
      throw new Error('ERROR - Missing required arguments in assertAPIResponse');
    }
  
    const apiUrl = `${Cypress.env('baseUrl')}${endpoint}${testData}`;
  
    cy.request({
      method,
      url: apiUrl,
      headers: {
        'apikey': Cypress.env('apiKey')
      }
    }).then(response => {
      expect(response.status).to.eq(expectedStatus, `ERROR - STATUS CODE INCORRECT for ${endpoint} - Test Data: ${testData}`);
      expect(response.body).to.have.jsonSchema(responseBodySchema, `ERROR - BODY RESPONSE INCORRECT for ${endpoint} - Test Data:: ${testData}`);
      
      // Additional assertions can be added here
      // expect(response.body.property).to.equal(expectedValue);
    });
  }