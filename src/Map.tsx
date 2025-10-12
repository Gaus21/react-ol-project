import { OSM } from 'ol/source';
import { Map, View, TileLayer, FullScreenControl, MousePositionControl, GraticuleLayer, HeatmapLayer, ImageLayer } from 'react-openlayers';
import 'react-openlayers/dist/index.css';
import { createStringXY } from 'ol/coordinate';
import Stroke from 'ol/style/Stroke';
import KML from 'ol/format/KML';
import ImageWMS from 'ol/source/ImageWMS';
import TileArcGISRest from 'ol/source/TileArcGISRest';


import VectorSource from 'ol/source/Vector';
export default function () {
    const strokeStyle = new Stroke({
        color: 'rgba(255,120,0,0.9)',
        width: 2,
        lineDash: [0.5, 4],
    })

    const source = new VectorSource({
        url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
        format: new KML({ extractStyles: false }),
    });
    const weight = function (feature) {
        const name = feature.get('name');
        const magnitude = parseFloat(name.substr(2));
        return magnitude - 5;
    };

    const sourceImage = new ImageWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: { 'LAYERS': 'topp:states' },
        ratio: 1,
        serverType: 'geoserver',
    })

    const sourceOtherTileLayer = new TileArcGISRest({
        url: 'https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer',
    });



    const format = createStringXY(4);
    return (
        <Map style={{ width: '100vw', height: '100vh' }}>

            <TileLayer source={new OSM()} />
            <ImageLayer source={sourceImage} extent={[-13884991, 2870341, -7455066, 6338219]} properties={{ key: 'myLayer' }} />
            <HeatmapLayer {...{ source, weight, blur: 9, radius: 20 }} />
            <View center={[-10997148, 4569099]} zoom={4} />
            <MousePositionControl coordinateFormat={format} projection='EPSG:4326' />
            <FullScreenControl />
            <GraticuleLayer showLabels={true} strokeStyle={strokeStyle} />
            <TileLayer source={sourceOtherTileLayer} />

        </Map>

    );
}