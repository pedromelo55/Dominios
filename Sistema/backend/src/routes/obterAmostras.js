import { Amostra } from '../models/amostrasModel.js';
import proj4 from 'proj4';

function GetSquare(x, y){
  const longitude = x;
  const latitude = y;
  const sideLength = 0.1; // in degrees

  const topLeft = [longitude - sideLength/500, latitude + sideLength/500];
  const topRight = [longitude + sideLength/500, latitude + sideLength/500];
  const bottomRight = [longitude + sideLength/500, latitude - sideLength/500];
  const bottomLeft = [longitude - sideLength/500, latitude - sideLength/500];

  const squareCoordinates = [topLeft, topRight, bottomRight, bottomLeft, topLeft];

  return squareCoordinates;
}

export async function GetAmostras (req, res) {
    try {
        const amostras = await Amostra.findAll({
            attributes: ['coox', 'cooy', 'nspt12', 'nspt23', 'num_amostra']
        });
        
        const polygonDataArray = amostras.map((amostra) => {            
            let profundidade = amostra.dataValues.num_amostra + 1;
            let penetravel = false;
            let golpes = 0;

            if (amostra.dataValues.nspt23 === null){
                golpes = amostra.dataValues.nspt12;
            } 
            else {
                golpes = amostra.dataValues.nspt23;
            }

            golpes < 50 ? penetravel = true : penetravel = false;


            const x = amostra.dataValues.coox
            const y = amostra.dataValues.cooy
            let square = GetSquare(x,y);
            return {
                       
                type: "Feature",
                properties: {
                  name: `Polygon ${amostra.id}`,
                  index: profundidade,
                  penetravel,
                },
                geometry: {
                  type: "Polygon",
                  coordinates: [square],
                },
            };
            });


        res.json(polygonDataArray)
    } catch (error) {
        console.error(error)
    }
}


