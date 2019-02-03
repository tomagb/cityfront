import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature'
import LineString from 'ol/geom/LineString'
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Stroke } from 'ol/style'

var coords = [
  [
    23.558324,
    46.760048
  ],
  [
    23.558392,
    46.760071
  ],
  [
    23.558728,
    46.760127
  ],
  [
    23.560215,
    46.760248
  ],
  [
    23.560614,
    46.7603
  ],
  [
    23.561202,
    46.760434
  ],
  [
    23.562008,
    46.760492
  ],
  [
    23.562442,
    46.760539
  ],
  [
    23.562491,
    46.760542
  ],
  [
    23.562591,
    46.760513
  ],
  [
    23.562664,
    46.760506
  ],
  [
    23.562798,
    46.760569
  ],
  [
    23.563609,
    46.760687
  ],
  [
    23.564753,
    46.760946
  ],
  [
    23.565723,
    46.761248
  ],
  [
    23.566356,
    46.761462
  ],
  [
    23.566793,
    46.761575
  ],
  [
    23.569098,
    46.762039
  ],
  [
    23.5701,
    46.762263
  ],
  [
    23.570877,
    46.762485
  ],
  [
    23.571848,
    46.762833
  ],
  [
    23.572827,
    46.763163
  ],
  [
    23.573143,
    46.763357
  ],
  [
    23.573572,
    46.763728
  ],
  [
    23.574222,
    46.764239
  ],
  [
    23.574398,
    46.764364
  ],
  [
    23.574794,
    46.76458
  ],
  [
    23.575038,
    46.764685
  ],
  [
    23.575488,
    46.764839
  ],
  [
    23.579175,
    46.766039
  ],
  [
    23.579859,
    46.766286
  ],
  [
    23.581148,
    46.766818
  ],
  [
    23.583335,
    46.767901
  ],
  [
    23.584993,
    46.768759
  ],
  [
    23.58594,
    46.767197
  ],
  [
    23.586696,
    46.767418
  ],
  [
    23.58836,
    46.768076
  ],
  [
    23.589797,
    46.768699
  ],
  [
    23.590943,
    46.769077
  ],
  [
    23.592642,
    46.769605
  ],
  [
    23.59756,
    46.770918
  ],
  [
    23.601507,
    46.771761
  ],
  [
    23.603757,
    46.772295
  ],
  [
    23.60424,
    46.772422
  ]
]

var styles = {
  'route': new Style({
    stroke: new Stroke({
      width: 6,
      color: [204, 0, 0, 0.8]
    })
  })  
};

var route = new LineString(coords)
  .transform('EPSG:4326', 'EPSG:3857');

var routeFeature = new Feature({
  type: 'route',
  geometry: route
});

var vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: [routeFeature]
  }),
  style: function (feature) {
    return styles[feature.get('type')];
  }
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer
  ],
  view: new View({
    center: [2627240.17026, 5905051.5256],
    zoom: 13
  })
});
