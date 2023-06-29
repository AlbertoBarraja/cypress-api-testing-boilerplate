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

import {getUserList200OK}  from "../../../support/test-cases/examples/getUser.js";
import {getUserDetail200OK}  from "../../../support/test-cases/examples/getUser.js";
import {getUserPosts200OK}  from "../../../support/test-cases/examples/getUser.js";
import {getUserTodos200OK}  from "../../../support/test-cases/examples/getUser.js";
//import {getUserComment200OK}  from "../../../support/test-cases/examples/getUser.js";

import {postUser201Created}  from "../../../support/test-cases/examples/getUser.js";
import {postUserPost201Created}  from "../../../support/test-cases/examples/getUser.js";
import {postUserTodo201Created}  from "../../../support/test-cases/examples/getUser.js";
import {postUserComment201Created}  from "../../../support/test-cases/examples/getUser.js";

import {putUser200OK}  from "../../../support/test-cases/examples/getUser.js";
import {putUserPost200OK}  from "../../../support/test-cases/examples/getUser.js";
import {putUserTodo200OK}  from "../../../support/test-cases/examples/getUser.js";
import {putUserComment200OK}  from "../../../support/test-cases/examples/getUser.js";

import {deleteUser204NoContent}  from "../../../support/test-cases/examples/getUser.js";
import {deleteUserPost204NoContent}  from "../../../support/test-cases/examples/getUser.js";
import {deleteUserTodo204NoContent}  from "../../../support/test-cases/examples/getUser.js";
import {deleteUserComment204NoContent}  from "../../../support/test-cases/examples/getUser.js";

import {createUpdateDelete}  from "../../../support/test-cases/examples/getUser.js";

describe("Test Suite #001: GET /public/v2/users/ ", () => {
  
    it("Test Case #001 - should validate the user list.", () => {
        getUserList200OK();
    }); 

    it("Test Case #002 - should validate the user detail.", () => {
        getUserDetail200OK();
    });

    it("Test Case #003 - should validate the user posts.", () => {
        getUserPosts200OK();
    });

    it("Test Case #004 - should validate the user Todos.", () => {
        getUserTodos200OK();
    });

    it("Test Case #005 - should validate the creation, update and deletion of details and deletion of a user", () => {
        createUpdateDelete();
    });
});