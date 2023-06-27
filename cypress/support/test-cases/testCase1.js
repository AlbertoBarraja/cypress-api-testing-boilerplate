// ******************************************************************************
//
// This example testCase1.js shows you how to create various custom test cases.
//
// ******************************************************************************


import testData from "../../fixtures/exampleResponseSchema.json";
import responseBodySchema from "../../fixtures/response-schemas/exampleResponseSchema.json";
import {assertResponseBody}   from "../test-steps/testUtilities.js" 

const endpoint = Cypress.env('usersEndPoint');
const method = 'GET';
const expectedStatus = 200;

export default function TestCase1() {    
    testData.forEach((element) => {
        assertResponseBody(element.id, endpoint, method, expectedStatus, responseBodySchema)
    });
}