import {Request, Response} from 'express';
import {fn, col, Op} from 'sequelize';
import ppto_api from '../models/ppto_api';




export default class Ppto {

	async prueba(req: Request, res: Response){
		return res.json({msg: 'procesado'});
	}
	
/* 	async proceso(){

		const [results, metadata] = await sequelize.query('TRUNCATE `ppto_api`');
		
		
		const anegocios = await anegocio.findAll({
			where: {				
				id: {
					[Op.notIn]: [22, 64,27,33,36,37,58,59,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90, 92,93,94,95,96,97,98,99,100,102,103,104,105,106,107,108,110,111,112,113,114,116,117,118,119,120,123,134,135,136, 40, 57,  7, 8, 24, 34, 16,  77, 29,  18,  4, 112, 93, 94, 78, 21, 113, 51, 84, 65, 74, 135, 87, 42, 45, 43, 49,  46, 134, 41, 47, 54, 68, 79, 35,106, 102, 120, 81,32, 123, 100, 103]
				},estado:[1]
			},
		});
		const subcuentas = await subcuenta.findAll({
			attributes: ['item_gasto', 'subcuenta'],
			where: {
				
				codigo_cuenta: [441104, 440104],
			},
			group: ['item_gasto']
		});
		
		const pptos = await ppto.findAll({
			attributes: ['num_anegocio', 'anegocio', 'item_gasto' , 'mes', 'ano',
				[fn('sum', col('saldo')), 'saldo']],
			where: {
				ano: [ 2022,2023],
				alias_cuenta: [441104, 440104],
			},
			group: ['num_anegocio', 'anegocio', 'item_gasto' , 'mes', 'ano']
		});

		const saldos = await saldo.findAll({
			attributes: [['anegocio' , 'num_anegocio'],['descrip_anegocio' , 'anegocio'] , 'item_gasto' , 'mes', 'periodo',
				[fn('sum', col('saldo')), 'saldo']],
			where: {
				periodo: [ 2022,2023],
				alias_cuenta: [441104, 440104],
			},
			group: ['num_anegocio', 'anegocio', 'item_gasto' , 'mes', 'periodo']
		});

		//console.log(saldos);
		const today = new Date();
		const year = today.getFullYear();
		for(let a=2022;a<=(year );a++){
			const pptoProcesado = [];
			for(let i=1; i<=12; i++){
			
				for(const ane of anegocios){
	
					
					for(const sub of subcuentas){
	
						let presupuestoFinal = {
							id: null,
							anegocio: ane.anegocio,
							mes:i,
							periodo:a,
							subcuenta: sub.subcuenta,
							item_gasto:sub.item_gasto,
						};
						
						let resultPpto = 0;
						let resultSaldo = 0;
						const resultadoPpto = pptos.find( p =>{
							
							return p.mes === i  && p.item_gasto === sub.item_gasto && p.num_anegocio === ane.numaneg && p.ano===a; 
						});
						if(resultadoPpto){
							resultPpto = resultadoPpto.saldo;
						}
						const resultadoSaldo = saldos.find( p =>{
							//console.log(p.num_anegocio, ane.numaneg);
							return p.mes === i  && p.item_gasto === sub.item_gasto && p.num_anegocio === ane.numaneg && p.periodo===a ; 
						});
						if(resultadoSaldo){
							resultSaldo = resultadoSaldo.saldo;
						}
						
						presupuestoFinal = {...presupuestoFinal, ...{ppto:resultPpto},  ...{saldo:resultSaldo}};
						pptoProcesado.push(presupuestoFinal);
						
					}
				}
			} 
		
			await PptoApi.bulkCreate(pptoProcesado);
			
		}
		
		
		//console.log(pptoProcesado);
		
	}
	async service(req: Request, res: Response){
		await this.proceso();
		return res.json({msg: 'procesado'});
	}
	async ppto(req: Request, res: Response){
		const { periodo  } = req.params;
		//console.log(req.query);
		if(!periodo){
			return  res.json({state:0, message: 'must have year'});
		}
		const data = await PptoApi.findAll({
			attributes:['anegocio', 'subcuenta','item_gasto', 'mes', 'periodo', 'ppto',['saldo','real']],
			where:{
				periodo:[periodo]
			}
		});
		return res.json(data);
	}

	
 */
}