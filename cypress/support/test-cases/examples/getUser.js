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

import userListResponseSchema from "../../fixtures/response-schemas/userListResponseSchema.json";
import userDetailResponseScema from "../../fixtures/response-schemas/userDetailResponseScema.json";
import userPostsResponseSchema from "../../fixtures/response-schemas/userPostsResponseSchema.json";
import userTodosResponseSchema from "../../fixtures/response-schemas/userTodosResponseSchema.json";
import createUserTestData from "../../fixtures/test-data/createUserTestData.json";
import updatedUserTestData from "../../fixtures/test-data/updatedUserTestData.json";
import deletedUserTestData from "../../fixtures/test-data/deletedUserTestData.json";
import {assertResponseBody}   from "../test-steps/testUtilities.js" 

const endpoint = Cypress.env('usersEndPoint');

export function getUserList200OK() {    
    const method = 'GET';
    const expectedStatus = 200;

    assertResponseBody(endpoint, method, expectedStatus, userListResponseSchema)
}

export function getUserDetail200OK() {    
    const method = 'GET';
    const expectedStatus = 200;

    assertResponseBody(endpoint, method, expectedStatus, userListResponseSchema).then((response) => {
        response.body.forEach((element) => {
            assertResponseBody(endpoint, method, expectedStatus, userDetailResponseScema,element.id)
        });
    });
}

export function getUserPosts200OK() {  
    const method = 'GET';
    const expectedStatus = 200; 

    assertResponseBody(endpoint, method, expectedStatus, userListResponseSchema).then((response) => {
        response.body.forEach((element) => {
            const nestedResource = `${element.id}${Cypress.env('postsNestedResource')}`;
            assertResponseBody(endpoint, method, expectedStatus, userPostsResponseSchema,nestedResource)
        });
    });
}

export function getUserTodos200OK() {  
    const method = 'GET';
    const expectedStatus = 200;
    
    assertResponseBody(endpoint, method, expectedStatus, userListResponseSchema).then((response) => {
        response.body.forEach((element) => {
            const nestedResource = `${element.id}${Cypress.env('todosNestedResource')}`;
            assertResponseBody(endpoint, method, expectedStatus, userTodosResponseSchema,nestedResource)
        });
    });
}

export function postUser201Created() {   
    const method = 'POST';
    const expectedStatus = 201; 

    assertResponseBody(endpoint, method, expectedStatus, userDetailResponseScema,createUserTestData)
}

export function putUser200OK() {   
    const method = 'PUT';
    const expectedStatus = 200; 

    assertResponseBody(endpoint, method, expectedStatus, userDetailResponseScema,updatedUserTestData)
}

export function deleteUser204NoContent() {   
    const method = 'DELETE';
    const expectedStatus = 204; 

    assertResponseBody(endpoint, method, expectedStatus,undefined,deletedUserTestData)
}

export function createUpdateDelete() {   
    var method = 'POST';
    var expectedStatus = 201; 

    assertResponseBody(endpoint, method, expectedStatus, userDetailResponseScema,createUserTestData).then((createdUser) => {
        method = 'PUT';
        expectedStatus = 200; 

        assertResponseBody(endpoint, method, expectedStatus, userDetailResponseScema,updatedUserTestData,createdUser.body.id).then((updatedUser) => {
            method = 'DELETE';
            expectedStatus = 204; 
            console.log(method)

            assertResponseBody(endpoint, method, expectedStatus,undefined,undefined,updatedUser.body.id)
        });
    });
}