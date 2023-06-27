// ******************************************************************************
//
// This example test-suite-endpoint1.cy.js shows you how to create various 
// custom test suite.
//
// ******************************************************************************

/**
 * Test Suite: Endpoint1 API Testing
 * Description: This test suite verifies the behavior of Endpoint1 API.
 * */ 


import testCase1 from "../../support/test-cases/testCase1";
import testCase2 from "../../support/test-cases/testCase2";
import testCase3 from "../../support/test-cases/testCase3";
import testCase4 from "../../support/test-cases/testCase4";

describe("Test Suite #001: Endpoint1 API Testing ", () => {
  
    it("Test Case #001 - should validate the expected behavior of the endpoint when provided with valid inputs.", () => {
        testCase1();
    }); 

    it("Test Case #002 - should verify how the endpoint handles invalid or unexpected inputs.", () => {
        testCase2();
    });

    it("Test Case #003 - should verify how the endpoint handles encountered errors or exceptions.", () => {
        testCase3();
    });

    it("Test Case #004 - should verify how the endpoint handles authentication and authorization.", () => {
        testCase4();
    });
});