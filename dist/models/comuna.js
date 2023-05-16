"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {  DataTypes }  from 'sequelize';
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Comuna = db_1.default.define('Comuna', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    rut: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        references: {
            model: 'Empleados',
            key: 'rut'
        }
    },
    nombre_comuna: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    cod_comuna: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Comuna',
    timestamps: false
});
exports.default = Comuna;
