import { Router } from "express";
import Ppto from '../controllers/ppto'
import Empleado from "../controllers/empleado";

const empleado = new Empleado();
const ppto = new Ppto();

const router = Router();

router.get('/',(req,res)=>{
   console.log("aAAAA");
    return res.status(200).json({
        "mensaje": "esta malo"
    })
})

router.get('/prueba',ppto.prueba);
router.post('/rut',empleado.login);

 

export default router;