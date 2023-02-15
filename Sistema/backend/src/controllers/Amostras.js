import { Amostra } from '../models/amostrasModel.js'

export async function GetAmostras (req, res) {
    try {
        const amostras = await Amostra.findAll({
            attributes: ['id', 'num_rel', 'num_furo']
        });
        res.json(amostras)
    } catch (error) {
        console.error(error)
    }
}

export async function Enroll (req,res) {
    const { num_rel, num_furo, cooX, cooY, nspt1, nspt2 } = req.body;
    
    try {

        await Amostra.create({
            num_rel: num_rel,
            num_furo: num_furo,
            cooX: cooX,
            cooY: cooY,
            nspt1: nspt1,
            nspt2 : nspt2
        });
        res.json({msg: "Registration Successful"});
    } catch (error){
        res.status (400)
        res.send ({msg: "Erro 400", error})
        console.log(error);
    }
}