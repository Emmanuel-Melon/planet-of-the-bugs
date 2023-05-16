import { Client, Functions } from "appwrite";
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from "$env/static/public";

const client = new Client();

const functions = new Functions(client);

client
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
;

const promise = functions.listExecutions('[FUNCTION_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});