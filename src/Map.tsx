import { Map, } from 'react-openlayers';
import 'react-openlayers/dist/index.css';
import useMap from './hooks/useMap';
import { firstLayers } from './data/first_layers';
import Sidebar from './components/Sidebar';
import LayerMap from './components/LayerMap';

export default function MyMap() {
    const mapRef = useMap();
    return (
        <div>
            <Sidebar layers={firstLayers} />
            <Map ref={mapRef} layers={[]} style={{ width: '100%', height: '80vh' }}>
                {firstLayers.map(layer => (
                    // <TileLayer key={layer.name} source={layer.source} name={layer.name} visible={layer.visible} opacity={layer.opacity} />
                    <LayerMap key={layer.name} {...layer} />
                ))}
            </Map>
        </div>
    );
}