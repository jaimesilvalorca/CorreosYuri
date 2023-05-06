//import {  DataTypes }  from 'sequelize';
import {  Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';

import db from '../config/db';
import Empleados from './empleados';

export interface ContactosModel extends Model<InferAttributes<ContactosModel>, InferCreationAttributes<ContactosModel>> {
    
	id:number;
	rut?: string;
	nombre_contacto?: string;
	relacion?: string;
	telefono?: string;
}

const Contactos = db.define<ContactosModel>('Contactos', {

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
	nombre_contacto: {
		type: DataTypes.STRING, 
		allowNull: true		
	},
	relacion:{
		type: DataTypes.STRING,
		allowNull: true
	},
	telefono:{
		type: DataTypes.STRING,
		allowNull: true
	}
}, {
	tableName: 'contactos_emergencia',
	timestamps: false
});


export default Contactos;