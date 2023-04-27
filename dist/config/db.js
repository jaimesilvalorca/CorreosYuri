"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conf_env_1 = __importDefault(require("./conf.env"));
const { database, username, password, host } = conf_env_1.default;
/* const dbType ='mysql'; */
const db = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: 'mariadb'
});
exports.default = db;
