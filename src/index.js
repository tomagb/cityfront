import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature'
import LineString from 'ol/geom/LineString'
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Stroke } from 'ol/style'
import './citySim'
import startWebsocket from './citySim';

var styles = {
  'route': new Style({
    stroke: new Stroke({
      width: 6,
      color: [204, 0, 0, 0.8]
    })
  })  
};

function addRoute(coords) {
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

    let layers = map.getLayers();
    layers.push(vectorLayer);
}

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [2627240.17026, 5905051.5256],
    zoom: 13
  })
});

function removeRoute(coords) {

}

function newDataCallback(event) {
  var eventObj = JSON.parse(event);
  if (eventObj.coords === null) {
    console.log('null' + event);
    return;
  }
  if (eventObj.density === 0) {    
    removeRoute(eventObj.coords);
  }
  else {
    addRoute(eventObj.coords);
  }  
}

//addRoute(coords);
startWebsocket(newDataCallback);
