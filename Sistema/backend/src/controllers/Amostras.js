import { Amostra } from '../models/amostrasModel.js'

export async function GetAmostras (req, res) {
     try{
        const amostras = await Amostra.findAll({
            attributes: ['coox', 'cooy', 'nspt12', 'nspt23']
        });
        res.json(amostras)
     }catch (error) {
        console.error(error)
    }
}

export async function Enroll (req,res) {
    const { num_rel, cooX, cooY, nspt1, nspt2, num_amostra } = req.body;
    
    try {

        await Amostra.create({
            num_rel: num_rel,
            cooX: cooX,
            cooY: cooY,
            nspt1: nspt1,
            nspt2 : nspt2,
            num_amostra: num_amostra
        });
        res.json({msg: "Registration Successful"});
    } catch (error){
        res.status (400)
        res.send ({msg: "Erro 400", error})
        console.log(error);
    }
}