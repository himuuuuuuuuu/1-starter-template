import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64a2b0691cb953e7f040');

    
export const account = new Account(client);

 export default client;