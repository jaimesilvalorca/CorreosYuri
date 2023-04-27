import express, {Express}  from 'express';
import cors from 'cors';
import router from './router/routes';
import sequelize  from './config/db';

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
        console.log("routa");
        this.app.use("/api",router);
    }

    async baseDatos(){
        try {
            await sequelize.authenticate();
            console.log("conexion lista")
        } catch (error) {
            console.log("error", error)
            
        }
    }


    async conexion(){
        this.app.listen(this.port, ()=>{
            console.log("servidor conectado");
        })
    }

}

export default App;