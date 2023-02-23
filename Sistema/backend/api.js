import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import { GetAmostras } from './src/routes/obterAmostras.js';
import { conexao } from './src/config/db.js';
import { Enroll } from './src/controllers/Amostras.js';

dotenv.config();

//iniciando banco
await conexao.sync();

const app = express()
const port = 8080;

app.use(express.json())
app.use(cors())

//rotas sistema
app.get('/getamostras', GetAmostras)
app.post('/salvar', Enroll);


app.listen(port,()=>{
    console.log(`Server is running in the port: ${port}`)
})