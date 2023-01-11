import { DataSource, DataSourceOptions } from 'typeorm';

export const configOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['**/*.entity.js'],
};

export const dbConfig = new DataSource(configOptions);
