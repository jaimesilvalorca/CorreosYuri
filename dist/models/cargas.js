"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {  DataTypes }  from 'sequelize';
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Cargas = db_1.default.define('Cargas', {
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
    nombre_carga: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    parentesco: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    rut_carga: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    tableName: 'Cargas',
    timestamps: false
});
exports.default = Cargas;
