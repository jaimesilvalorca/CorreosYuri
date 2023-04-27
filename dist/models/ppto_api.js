"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {  DataTypes }  from 'sequelize';
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const PptoApi = db_1.default.define('PptoApi', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    anegocio: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull defaults to true
    },
    subcuenta: {
        type: sequelize_1.DataTypes.STRING,
    },
    item_gasto: {
        type: sequelize_1.DataTypes.STRING,
    },
    mes: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    periodo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    saldo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ppto: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    fecha_ingreso: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'ppto_api',
    timestamps: false
});
exports.default = PptoApi;
