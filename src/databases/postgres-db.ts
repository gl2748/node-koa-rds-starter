//postgres-db.ts
/*
This file initializes your PostgreSQL database. You need to supply
the host name, username, password and database name for your database.
*/
import { createConnection } from 'typeorm';
export const postgresDB = async () => {
    return await createConnection({
        type     : 'postgres',
        host     : process.env.RDS_HOSTNAME,
        port     : 5432,
        username : process.env.RDS_DB_USERNAME,
        password : process.env.RDS_DB_PASSWORD,
        database : process.env.RDS_DB_NAME,
        ssl: true,
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
    });
};