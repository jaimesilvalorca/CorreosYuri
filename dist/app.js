"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./router/routes"));
const db_1 = __importDefault(require("./config/db"));
const empleados_1 = __importDefault(require("./models/empleados"));
const contactos_1 = __importDefault(require("./models/contactos"));
const cargas_1 = __importDefault(require("./models/cargas"));
const usuario_1 = __importDefault(require("./models/usuario"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.baseDatos();
        this.middleware();
    }
    middleware() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use(express_1.default.json());
            console.log("routa");
            this.app.use("/api", routes_1.default);
        });
    }
    baseDatos() {
        return __awaiter(this, void 0, void 0, function* () {
            /*   try {
                 await sequelize.authenticate();
                 console.log("conexion lista")
             } catch (error) {
                 console.log("error", error)
                 
             }  */
            yield empleados_1.default.sync({ alter: true });
            yield contactos_1.default.sync({ alter: true });
            yield cargas_1.default.sync({ alter: true });
            yield usuario_1.default.sync({ alter: true });
            yield db_1.default.sync({ alter: true });
        });
    }
    conexion() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.port, () => {
                console.log("servidor conectado");
            });
        });
    }
}
exports.default = App;
