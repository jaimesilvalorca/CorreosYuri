"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ppto_1 = __importDefault(require("../controllers/ppto"));
const ppto = new ppto_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log("aAAAA");
    return res.status(200).json({
        "mensaje": "esta malo"
    });
});
router.get('/prueba', ppto.prueba);
exports.default = router;
