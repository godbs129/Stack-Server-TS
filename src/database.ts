import {
  Connection,
  createConnection,
  ConnectionOptions,
} from 'typeorm';
import dbconfig from './config/database.json';
import entities from './entities';

export const getConnection = async (): Promise<Connection> => {

  const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    database: dbconfig.datebase,
    synchronize: dbconfig.sync,
    logging: false,
    entities,
    host: dbconfig.host,
    port: dbconfig.port,
    username: dbconfig.username,
    password: dbconfig.password,
    charset: 'utf8mb4_unicode_ci'
  };

  try {
    const connection = createConnection(connectionOptions);
    console.log('DB connected');
    return connection;
  } catch (err) {
    console.log('DB connect error', err.message);
    return err;
  }
}