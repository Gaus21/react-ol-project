import { TileLayer } from "react-openlayers"
import { OSM, XYZ } from "ol/source";


//chance to types, repeated in layers data file
 type LayerType =  'Image' | 'Vector' ;
interface LayerData {
    name: string;
    type?: LayerType;
    source: OSM | XYZ;
    desc: string;
    opacity: number;
    visible: boolean;
}

const LayerMap = (
  layer: LayerData
) => {

    console.log(layer);
    
  return (
    
      <TileLayer
        key={layer.name}
        source={layer.source}
        name={layer.name}
        visible={layer.visible}
        opacity={layer.opacity}
      />
  )
}
export default LayerMap;