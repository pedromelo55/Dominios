import React, {useState, useCallback} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {LinearInterpolator} from '@deck.gl/core';
import {CartoLayer, setDefaultCredentials, API_VERSIONS, MAP_TYPES} from '@deck.gl/carto';
import {GeoJsonLayer} from '@deck.gl/layers';


const INITIAL_VIEW_STATE = {
  latitude: -16.686897,
  longitude: -49.264812,
  zoom: 11,
  pitch: 60,
  bearing: 0
};

// Colors for the breaks of the polygon layer
const POLYGON_COLORS = {
  COLOR_1: [225, 83, 131],
  COLOR_2: [241, 109, 122],
  COLOR_3: [250, 138, 118],
  COLOR_4: [255, 166, 121],
  COLOR_5: [255, 194, 133],
  COLOR_6: [255, 221, 154],
  OTHER: [254, 246, 181]
};

setDefaultCredentials({
  apiVersion: API_VERSIONS.V2,
  username: 'public',
  apiKey: 'SdBjYyF8NhILWw7kU0n2NQ'
});

const transitionInterpolator = new LinearInterpolator();

export default function App({
  mrliIndex = 'txn_amt',
  industry = 'ret',
  week = ['2020-01-01', '2020-01-05'],
  mapStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
}) {
  const [viewState, updateViewState] = useState(INITIAL_VIEW_STATE);

  const rotateCamera = useCallback(() => {
    updateViewState(v => ({
      ...v,
      bearing: v.bearing + 0.5,
      transitionDuration: 1000,
      transitionInterpolator,
      onTransitionEnd: rotateCamera
    }));
  }, []);

  const polygonData = [  
    {    
      type: 'Feature',    
      properties: {      
        name: 'Polygon 1',
        index: 500    
      },
      geometry: {      
        type: 'Polygon',      
        coordinates: [        
          [          
            [-49.264812, -16.686897],
            [-16.690329,-49.253840]
        ]
      ],
     
    }
  },
  {
    type: 'Feature',
    properties: {
      name: 'Polygon 2',
      index: 500
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-16.690329,-49.253840],
          [-16.690329,-49.253840]
        ]
      ],
      index: 500
    }
  }
];

// const geojsonLayer = new GeoJsonLayer ({
//   id: 'geojson-layer',
//   data: polygonData,
//   stroked: true,
//   filled: true,
//   lineWidthMinPixels: 2,
//   getLineColor: [0, 0, 0, 0],
//   getFillColor: object => {
//     if (object.properties.index > 1000) {
//       return POLYGON_COLORS.COLOR_1;
//     } else if (object.properties.index > 500) {
//       return POLYGON_COLORS.COLOR_2;
//     } else if (object.properties.index > 300) {
//       return POLYGON_COLORS.COLOR_3;
//     } else if (object.properties.index > 100) {
//       return POLYGON_COLORS.COLOR_4;
//     } else if (object.properties.index > 50) {
//       return POLYGON_COLORS.COLOR_5;
//     } else if (object.properties.index > 25) {
//       return POLYGON_COLORS.COLOR_6;
//     }
//     return POLYGON_COLORS.OTHER;
//   },
//   getLineWidth: 1,
//   pickable: true,
// });

  // const SQL = [
  //   { 
  //     the_geom_webmercator: [8156948.55, 687359.26],
  //     index: 500
  //   },
  //   { 
  //     the_geom_webmercator: [8156190.15, 686830.14],
  //     index: 800
  //   },
  //   { 
  //     the_geom_webmercator: [8154546.45, 684838.29],
  //     index: 300
  //   },
  //   { 
  //     the_geom_webmercator: [8154555.76, 684869.69 ],
  //     index: 2000
  //   }
  // ];
  

  const layers = [
    new GeoJsonLayer({
      id: 'geojson-layer',
     // type: MAP_TYPES.TILESET,
      data: polygonData,      
      getLineColor: [0, 0, 0, 0],
      getFillColor: object => {
        if (object.properties.index > 1000) {
          return POLYGON_COLORS.COLOR_1;
        } else if (object.properties.index > 500) {
          return POLYGON_COLORS.COLOR_2;
        } else if (object.properties.index > 300) {
          return POLYGON_COLORS.COLOR_3;
        } else if (object.properties.index > 100) {
          return POLYGON_COLORS.COLOR_4;
        } else if (object.properties.index > 50) {
          return POLYGON_COLORS.COLOR_5;
        } else if (object.properties.index > 25) {
          return POLYGON_COLORS.COLOR_6;
        }
        return POLYGON_COLORS.OTHER;
      },
      lineWidthMinPixels: 0,
      pickable: true,
      filled: true,
      extruded: true,
      wireframe: true,
      getElevation: f => {
        return f.properties.index ? f.properties.index : 0;
      },
      transitions: {
        getElevation: {
          duration: 1000,
          enter: () => [0]
        }
      }
    })
  ];

  const getTooltip = ({object}) => {
    if (!object) return false;
    const {index} = object.properties;

    return `Index: ${index.toFixed(2)}`;
  };

  return (
    <div style={{backgroundColor: '', display:'flex', justifyContent:'center' ,width: '100%', height:'100vh', flexWrap: 'wrap', alignItems:'center'}}>
      <div style={{backgroundColor: 'white', display:'flex', justifyContent:'center' ,width: '80%', height:'80%', flexWrap: 'wrap', borderRadius:'20px', padding: '20px'}}>
    <DeckGL
      style={{backgroundColor: '', position: 'relative', display:'flex', justifyContent:'center' ,width: '100%', height:'100%', flexWrap: 'wrap', borderRadius:'20px', opacity : '0.98'}}
      controller={true}
      viewState={viewState}
      layers={layers}
      getTooltip={getTooltip}
      onLoad={rotateCamera}
      onViewStateChange={v => updateViewState(v.viewState)}
    >
      <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />
    </DeckGL>

      </div>



    </div>
  );
}

export function renderToDOM(container) {
  render(<App />, container);
}

