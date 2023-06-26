import {
  PUBLIC_APPWRITE_ENDPOINT,
  PUBLIC_APPWRITE_PROJECT_ID,
  PUBLIC_APPWRITE_SECRET_KEY,
  PUBLIC_APPWRITE_LOCAL_API_KEY,
} from "$env/static/public";
import sdk from "node-appwrite";

// Init SDK
const client = new sdk.Client();

const storage = new sdk.Storage(client);

const health = new sdk.Health(client);

client
  .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
  .setProject(PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(PUBLIC_APPWRITE_LOCAL_API_KEY);

(() => {
  const promise = health.get();

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
})();
export const appwriteServer = { storage };
