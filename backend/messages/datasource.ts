import { DataSource, DataSourceOptions } from 'typeorm';

export const configOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: ['dist/src/messages/**/*.entity.js'],
  synchronize: true,
};

export const dbConfig = new DataSource(configOptions);
