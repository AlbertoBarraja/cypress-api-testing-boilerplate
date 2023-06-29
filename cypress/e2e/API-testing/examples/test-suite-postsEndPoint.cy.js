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


import {getPostList200OK}  from "../../../support/test-cases/examples/getPost";
import {getPostDetail200OK}  from "../../../support/test-cases/examples/getPost";
import {getPostComments200OK}  from "../../../support/test-cases/examples/getPost";

describe("Test Suite #001: GET /public/v2/posts/ ", () => {
  
    it("Test Case #001 - should validate the post list.", () => {
        getPostList200OK();
    }); 

    it("Test Case #002 - should validate the post detail.", () => {
        getPostDetail200OK();
    });

    it("Test Case #003 - should validate the post comments.", () => {
        getPostComments200OK();
    });
});