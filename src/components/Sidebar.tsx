import LayersControl from './LayersControl';
import OSM from 'ol/source/OSM';
import { XYZ } from 'ol/source';

type LayerType = 'Image' | 'Vector';

interface LayerData {
    name: string;
    type?: LayerType;
    source: OSM | XYZ;
    desc: string;
    opacity: number;
    visible: boolean;
}

const Sidebar = ({ layers }: { layers: LayerData[] }) => {

    //add layers from firstLayers to the map on load

    return (
        <div>
            {layers.map(layer => (
                <div key={layer.name}>
                    <LayersControl layerName={layer.name} layerDesc={layer.desc} opacity={layer.opacity} visibility={layer.visible} />
                </div>
            ))}
        </div>
    )
}

export default Sidebar;