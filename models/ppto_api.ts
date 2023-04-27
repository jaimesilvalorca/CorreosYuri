//import {  DataTypes }  from 'sequelize';
import {  Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

import db from '../config/db';

export interface PptoApiModel extends Model<InferAttributes<PptoApiModel>, InferCreationAttributes<PptoApiModel>> {
    
	id:number  | null;
	anegocio: string;
	subcuenta: string;
	item_gasto: string;
	mes: number;
	periodo: number;
	saldo?: number;  
	ppto?: number;
	fecha_ingreso?: Date;
}

const PptoApi = db.define<PptoApiModel>('PptoApi', {

	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: true
	},	
	anegocio: {
		type: DataTypes.INTEGER,
	
		// allowNull defaults to true
	},
	subcuenta: {
		type: DataTypes.STRING, 
		
	},
	item_gasto:{
		type: DataTypes.STRING,
	},
	mes:{
		type: DataTypes.INTEGER,
	},
	periodo:{
		type: DataTypes.INTEGER,
	},
	saldo:{
		type: DataTypes.INTEGER,
	},
	ppto:{
		type: DataTypes.INTEGER,
	},
	fecha_ingreso:{
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
	
}, {
	tableName: 'ppto_api',
	timestamps: false
});

export default PptoApi;