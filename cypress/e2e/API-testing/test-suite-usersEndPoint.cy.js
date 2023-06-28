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


import {getUserList200OK}  from "../../support/test-cases/getUser";
import {getUserDetail200OK}  from "../../support/test-cases/getUser";
import {getUserPosts200OK}  from "../../support/test-cases/getUser";
import {getUserTodos200OK}  from "../../support/test-cases/getUser";
//import {getUserComment200OK}  from "../../support/test-cases/getUser";

import {postUser201Created}  from "../../support/test-cases/getUser";
import {postUserPost201Created}  from "../../support/test-cases/getUser";
import {postUserTodo201Created}  from "../../support/test-cases/getUser";
import {postUserComment201Created}  from "../../support/test-cases/getUser";

import {putUser200OK}  from "../../support/test-cases/getUser";
import {putUserPost200OK}  from "../../support/test-cases/getUser";
import {putUserTodo200OK}  from "../../support/test-cases/getUser";
import {putUserComment200OK}  from "../../support/test-cases/getUser";

import {deleteUser204NoContent}  from "../../support/test-cases/getUser";
import {deleteUserPost204NoContent}  from "../../support/test-cases/getUser";
import {deleteUserTodo204NoContent}  from "../../support/test-cases/getUser";
import {deleteUserComment204NoContent}  from "../../support/test-cases/getUser";

import {createUpdateDelete}  from "../../support/test-cases/getUser";

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

    it("Test Case #005 - should validate the creation of a user", () => {
        postUser201Created();
    });

    it("Test Case #006 - should validate the update of a user detail", () => {
        putUser200OK();
    });

    it("Test Case #007 - should validate the deletion of a user", () => {
        deleteUser204NoContent();
    });
});