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
  //console.log("squareCoordinates:", squareCoordinates)

  return squareCoordinates;
}

export async function GetAmostras (req, res) {
    try {
        const amostras = await Amostra.findAll({
            attributes: ['coox', 'cooy', 'nspt12', 'nspt23']
        });
        
        const polygonDataArray = amostras.map((amostra) => {            
            let profundidade = 0;
            if (amostra.nspt23 === null){
                 profundidade = amostra.dataValues.nspt12;
            } 
            else {
                profundidade = amostra.dataValues.nspt23;
            }

            const x = amostra.dataValues.coox
            const y = amostra.dataValues.cooy
            let square = GetSquare(x,y);
            return {
                       
                type: "Feature",
                properties: {
                  name: `Polygon ${amostra.id}`,
                  index: profundidade,
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



// function converter (x, y){
    
//     // Define the projections
//     const sourceProj = '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs';
//     const destProj = '+proj=longlat +datum=WGS84 +no_defs';
    
//     var convertedCoords = proj4(sourceProj, destProj, [x, y]);
//     console.log("cx e cy:", convertedCoords)

//     return convertedCoords
// }

// function teste(){

// // Define the input and output projections
// // const inputProjection = '+proj=longlat +datum=WGS84 +no_defs';
// // const outputProjection = '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs';

// const inputProjection = '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs';
// const outputProjection = '+proj=longlat +datum=WGS84 +no_defs';
    

// // Define the input coordinates
// const X = 687706.78;
// const Y = 8150447.23;

// // Convert the coordinates to the output projection
// const [lon, lat] = proj4(inputProjection, outputProjection, [X, Y]);

// // Print the output coordinates
// console.log(`Y = ${lat}`);
// console.log(`X = ${lon}`);

// }
