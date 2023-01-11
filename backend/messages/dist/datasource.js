"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.configOptions = void 0;
const typeorm_1 = require("typeorm");
exports.configOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/src/**/*.entity.js'],
};
exports.dbConfig = new typeorm_1.DataSource(exports.configOptions);
//# sourceMappingURL=datasource.js.map