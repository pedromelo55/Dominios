import { Amostra } from '../models/amostrasModel.js';
import proj4 from 'proj4';

export async function GetAmostras (req, res) {
    try {
        const amostras = await Amostra.findAll({
            attributes: ['coox', 'cooy', 'nspt12', 'nspt23']
        });

        amostras.forEach(async (amostra) => {
            console.log("amostra:", amostra)
            console.log("aaaaa", amostra.dataValues.coox)
            console.log("amostra.dataValues.coox:", amostra.dataValues.coox)
            console.log("amostra.dataValues.cooy:", amostra.dataValues.cooy)

            const conv = converter(amostra.dataValues.coox, amostra.dataValues.cooy)
            console.log("conv:", conv)
            const longitude = conv.x;
            const latitude = conv.y;
            console.log("lat e long:", latitude, longitude)

            var profundidade = 0;
            if (amostra.nspt23 === null){
                 profundidade = amostra.dataValues.nspt12;
            } 
            else {
                profundidade = amostra.dataValues.nspt23;
            }
        });

        console.log("amostras:", amostras)
        res.json(amostras)
    } catch (error) {
        console.error(error)
    }
}

function converter (x, y){
    const sourceProj = 'EPSG:3857';
    const destProj = 'EPSG:4326';

    const latitude = y;
    const longitude = x;

    var convertedCoords = proj4(sourceProj, destProj, [x, y]);
    console.log("cx e cy:", convertedCoords)

    return convertedCoords
}