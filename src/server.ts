import {app} from './app';
import { postgresDB } from 'databases/postgres-db';

// Require dotenv as early as possible.
require('dotenv').config();

const bootstrap = async () => {

    // Initialize a connection to the database.
    await postgresDB();

    //Respond with a message to all client requests.
    app.use(async ctx => {
        ctx.body = "Welcome to the server!";
    });

    //Tell the app to listen on port 3000
    app.listen(3000);
}

bootstrap();