import {
  PUBLIC_APPWRITE_ENDPOINT,
  PUBLIC_APPWRITE_PROJECT_ID,
} from "$env/static/public";
import { Client as Appwrite, Databases, Account, Storage } from "appwrite";

const server = {
  endpoint: PUBLIC_APPWRITE_ENDPOINT,
  project: PUBLIC_APPWRITE_PROJECT_ID,
};

const client = new Appwrite();
const account = new Account(client);
const storage = new Storage(client);
client.setEndpoint(server.endpoint).setProject(server.project);

const sdk = { account, storage };
export { sdk, server };
