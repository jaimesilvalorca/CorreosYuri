"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {  DataTypes }  from 'sequelize';
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Contactos = db_1.default.define('Contactos', {
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
    nombre_contacto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    relacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'contactos_emergencia',
    timestamps: false
});
exports.default = Contactos;
