"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.configOptions = void 0;
const typeorm_1 = require("typeorm");
exports.configOptions = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: ['dist/src/messages/**/*.entity.js'],
    synchronize: true,
};
exports.dbConfig = new typeorm_1.DataSource(exports.configOptions);
//# sourceMappingURL=datasource.js.map