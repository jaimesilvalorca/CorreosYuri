//import {  DataTypes }  from 'sequelize';
import {  Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';

import db from '../config/db';
import Empleados from './empleados';

export interface UsuarioModel extends Model<InferAttributes<UsuarioModel>, InferCreationAttributes<UsuarioModel>> {
    
	id:number;
	rut?: string;
	nombre_usuario?: string;
	contrasena?: string;
	perfil?: string;
}

const Usuario = db.define<UsuarioModel>('Usuario', {

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
	nombre_usuario: {
		type: DataTypes.STRING, 
		allowNull: true		
	},
	contrasena:{
		type: DataTypes.STRING,
		allowNull: true
	},
	perfil:{
		type: DataTypes.STRING,
		allowNull: true
	}
}, {
	tableName: 'Usuarios',
	timestamps: false
});


export default Usuario;