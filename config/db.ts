import { Sequelize } from 'sequelize';
import configEnv from './conf.env';

const {database, username, password, host  } = configEnv;

/* const dbType ='mysql'; */


const db = new Sequelize(database, username, password, {
	host:  host,    
	dialect: 'mariadb'
});

export default db;