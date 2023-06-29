// ******************************************************************************
//
// This example templateTestSuite.cy.js shows you how to create various 
// custom test suite.
//
// ******************************************************************************

/**
 * Test Suite: Name_of_the_test_suite
 * Description: Description_of_the_test_suite
 * */ 


describe('Test Suite Name', () => {
    before(() => {
      // Runs once before all tests in the suite
      // Set up any necessary test data or configurations
    })
  
    beforeEach(() => {
      // Runs before each test in the suite
      // Set up any necessary preconditions for each test
    })
  
    afterEach(() => {
      // Runs after each test in the suite
      // Clean up any resources or reset state after each test
    })
  
    after(() => {
      // Runs once after all tests in the suite
      // Perform any necessary clean-up tasks or tear down test data
    })
  
    it('Test Case 1', () => {
      // Test case 1 logic
      // Use Cypress commands to interact with the application and perform assertions
    })
  
    it('Test Case 2', () => {
      // Test case 2 logic
      // Use Cypress commands to interact with the application and perform assertions
    })
  
    // Add more test cases as needed
  })
  