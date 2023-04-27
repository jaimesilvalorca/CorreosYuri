import { Router } from "express";
import Ppto from '../controllers/ppto'

const ppto = new Ppto();

const router = Router();

router.get('/',(req,res)=>{
   console.log("aAAAA");
    return res.status(200).json({
        "mensaje": "esta malo"
    })
})

router.get('/prueba',ppto.prueba);


 

export default router;