"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {  DataTypes }  from 'sequelize';
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Empleados = db_1.default.define('Empleados', {
    rut: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    departamento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    fecha_ingreso: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'empleados',
    timestamps: false
});
exports.default = Empleados;
