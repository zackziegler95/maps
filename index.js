import 'ol/ol.css';
import {Map, View, Feature} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Polygon from 'ol/geom/Polygon';
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import {transform} from 'ol/proj';


var vertices = [
    [10.689697265625, -25.0927734375],
    [34.595947265625, -20.1708984375],
    [38.814697265625, -35.6396484375],
    [13.502197265625, -39.1552734375],
    [10.689697265625, -25.0927734375]
];

var feature = new Feature({
    geometry: new Polygon([vertices])
});
feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');


var vectorSource= new VectorSource({
    features: [feature ]
});

var vectorLayer = new VectorLayer({
    source: vectorSource
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
        center: transform([20, -30], 'EPSG:4326', 'EPSG:3857'),
        zoom: 3
  })
});
