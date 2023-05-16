import express, {Express}  from 'express';
import cors from 'cors';
import router from './router/routes';
import sequelize  from './config/db';
import Empleados from './models/empleados';
import Contactos from './models/contactos';
import Cargas from './models/cargas';
import Usuario from './models/usuario';
import Comuna from './models/comuna';

class App{
    private app: Express;
    private port: number;

    constructor(){
        this.app = express();
        this.port = 3000;  
        this.baseDatos(); 
        this.middleware();     
    }

    async middleware(){
        this.app.use(express.json());
        console.log("routa");
        this.app.use("/api",router);
    }

    async baseDatos(){
       /*   try {
            await sequelize.authenticate();
            console.log("conexion lista")
        } catch (error) {
            console.log("error", error)
            
        }  */
        await Empleados.sync({alter:true})
        await Contactos.sync({alter:true})
        await Cargas.sync({alter:true})
        await Usuario.sync({alter:true})
        await Comuna.sync({alter:true})
        await sequelize.sync({ alter: true });
    }


    async conexion(){
        this.app.listen(this.port, ()=>{
            console.log("servidor conectado");
        })
    }

}

export default App;