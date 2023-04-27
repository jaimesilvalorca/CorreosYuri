/* import * as dotenv from 'dotenv';
dotenv.config(); */

interface Configuracion{
    database: string;
    username: string;
    password: string;
    host: string;
   
}

const configEnv:Configuracion = {
	database: 'correosyuri',
	username: 'root',
	password:  '',
	host:  'localhost',	
};

export default configEnv;