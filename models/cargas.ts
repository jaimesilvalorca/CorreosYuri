//import {  DataTypes }  from 'sequelize';
import {  Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';

import db from '../config/db';
import Empleados from './empleados';

export interface CargasModel extends Model<InferAttributes<CargasModel>, InferCreationAttributes<CargasModel>> {
    
	id:number;
	rut?: string;
	nombre_carga?: string;
	parentesco?: string;
	sexo?: string;
	rut_carga?: string;
}

const Cargas = db.define<CargasModel>('Cargas', {

	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},	
	rut: {
		type: DataTypes.STRING,
		allowNull: true,
		references:{
			model:'Empleados',
			key: 'rut'
		}
	},
	nombre_carga: {
		type: DataTypes.STRING, 
		allowNull: true		
	},
	parentesco:{
		type: DataTypes.STRING,
		allowNull: true
	},
	sexo:{
		type: DataTypes.STRING,
		allowNull: true
	},
	rut_carga:{
		type: DataTypes.STRING,
		allowNull: true
	},
}, {
	tableName: 'Cargas',
	timestamps: false
});


export default Cargas;