//import {  DataTypes }  from 'sequelize';
import {  Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

import db from '../config/db';

export interface EmpleadosModel extends Model<InferAttributes<EmpleadosModel>, InferCreationAttributes<EmpleadosModel>> {
    
	rut:string;
	nombre?: string;
	sexo?: string;
	cargo?: string;
	fecha_ingreso?: Date;
	area?: string;
	departamento?: string;
	direccion?: string;  
	telefono?: string;
}

const Empleados = db.define<EmpleadosModel>('Empleados', {

	rut: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false
	},	
	nombre: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	sexo: {
		type: DataTypes.STRING, 
		allowNull: true		
	},
	cargo:{
		type: DataTypes.STRING,
		allowNull: true
	},
	area:{
		type: DataTypes.STRING,
		allowNull: true
	},
	departamento:{
		type: DataTypes.STRING,
		allowNull: true
	},
	direccion:{
		type: DataTypes.STRING,
		allowNull: true
	},
	telefono:{
		type: DataTypes.STRING,
		allowNull: true
	},
	fecha_ingreso:{
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		allowNull: true
	}
	
}, {
	tableName: 'empleados',
	timestamps: false
});


export default Empleados;