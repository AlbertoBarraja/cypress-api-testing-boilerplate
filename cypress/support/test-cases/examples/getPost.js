// ******************************************************************************
//
// This example getUser.js shows you how to create various custom test cases.
//
// ******************************************************************************

/**
 * This test case function, `getUserList200OK`, demonstrates how to create custom test cases.
 *
 * @function getUserList200OK
 * @description This function asserts the response status and body provided by the /public/v2/users/ endpoint.
 * @returns {void}
 */

import postListResponseSchema from "../../../fixtures/response-schemas/examples/postListResponseSchema.json";
import postDetailResponseSchema from "../../../fixtures/response-schemas/examples/postDetailResponseSchema.json";
import commentListResponseSchema from "../../../fixtures/response-schemas/examples/commentListResponseSchema.json";
import {assertResponseBody}   from "../../test-steps/testUtilities.js" 

const endpoint = Cypress.env('postsEndPoint');
const method = 'GET';
const expectedStatus = 200;

export function getPostList200OK() {    
    assertResponseBody(endpoint, method, expectedStatus, postListResponseSchema)
}

export function getPostDetail200OK() {    
    assertResponseBody(endpoint, method, expectedStatus, postListResponseSchema).then((response) => {
        response.body.forEach((element) => {
            assertResponseBody(endpoint, method, expectedStatus, postDetailResponseSchema,element.id)
        });
    });
}

export function getPostComments200OK() {    
    assertResponseBody(endpoint, method, expectedStatus, postListResponseSchema).then((response) => {
        response.body.forEach((element) => {
            const nestedResource = `${element.id}${Cypress.env('commentsNestedResource')}`;
            assertResponseBody(endpoint, method, expectedStatus, commentListResponseSchema,nestedResource)
        });
    });
}
