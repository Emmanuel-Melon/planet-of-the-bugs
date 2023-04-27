import MindsDB from 'mindsdb-js-sdk';

try {
  await MindsDB.connect({
    user: 'mindsdbuser@gmail.com',
    password: 'mypassword'
  });
} catch(error) {
  // Failed to authenticate.
}