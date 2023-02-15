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