import {Request, Response} from 'express';
import {fn, col, Op} from 'sequelize';
import Empleados from '../models/empleados';




export default class Empleado {

	async login(req: Request, res: Response){

		const {rut} = req.body;
		
		const empleados = Empleados.create({
			rut: rut
		})
		/* return res.json({msg: 'procesado'}); */
	}
	
}