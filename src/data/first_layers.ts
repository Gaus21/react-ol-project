import OSM from 'ol/source/OSM';
import { XYZ } from 'ol/source';

type LayerType =  'Image' | 'Vector' ;

interface LayerData {
    name: string;
    type?: LayerType;
    source: OSM | XYZ;
    desc: string;
    opacity: number;
    visible: boolean;
}

export const firstLayers: LayerData[] = [
    {
        name: 'osm-layer',       
        source: new OSM(),
        desc: 'Open Street Map Layer',
        opacity: 1,
        visible: true,
    },
    {
        name: 'geocolor-layer',        
        source: new XYZ({
            url: 'http://172.29.60.170:81/geocolor/202510292330/{z}/{x}/{-y}.png',
        }),
        desc: 'Satellite Imagery Layer',
        opacity: 0.5,
        visible: true,
    },
    {
        name: 'estados-layer',        
        source: new XYZ({
            url: 'http://172.29.60.18/tile_layer/edos_mex_white_stroke/{z}/{x}/{y}.png',
        }),
        desc: 'Estados Layer',
        opacity: 1,
        visible: true,
    },

    {
        name: 'divisiones-municipales-layer',        
        source: new XYZ({
            url: 'http://172.29.60.18/tile_layer/entidades_municipios_2024/{z}/{x}/{y}.png',
        }),
        desc: 'Divisiones Municipales Layer',
        opacity: 1,
        visible: true,
    },
];