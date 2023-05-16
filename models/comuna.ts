//import {  DataTypes }  from 'sequelize';
import {  Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';

import db from '../config/db';
import Empleados from './empleados';

export interface ComunaModel extends Model<InferAttributes<ComunaModel>, InferCreationAttributes<ComunaModel>> {
    
	id:number;
	rut: string;
	nombre_comuna: string;
	cod_comuna: number;
	}

const Comuna = db.define<ComunaModel>('Comuna', {

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
	nombre_comuna: {
		type: DataTypes.STRING, 
		allowNull: true		
	},
	
	cod_comuna:{
		type: DataTypes.INTEGER,
		allowNull: true
	}
}, {
	tableName: 'Comuna',
	timestamps: false
});


export default Comuna;

//holaaaaaaaaaaaaaaaaaaa