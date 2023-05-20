import MindsDB from 'mindsdb-js-sdk';
import dotenv from 'dotenv';
import { PUBLIC_MINDS_DB_USER, PUBLIC_MINDS_DB_PASSWORD } from "$env/static/public";

dotenv.config();


try {
  await MindsDB.connect({
    user: PUBLIC_MINDS_DB_USER,
    password: PUBLIC_MINDS_DB_PASSWORD
  });
} catch(error) {
  // Failed to authenticate.
}