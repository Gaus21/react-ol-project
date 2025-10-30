import { useEffect, useState } from 'react';
import useMap from './useMap';

export function useLayerControls(name: string, initialOpacity: number, initialVisibility: boolean) {
    const [layerOpacity, setLayerOpacity] = useState(initialOpacity);
    const [layerVisibility, setLayerVisibility] = useState(initialVisibility);
    const mapRef = useMap();

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.getLayers().forEach((layer) => {
                if (layer.get('name') === name) {
                    layer.setOpacity(layerOpacity);
                }
            });
        }
    }, [layerOpacity, name, mapRef]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.getLayers().forEach((layer) => {
                if (layer.get('name') === name) {
                    layer.setVisible(layerVisibility);
                }
            });
        }
    }, [layerVisibility, name, mapRef]);

    const toggleLayerVisibility = () => {
        setLayerVisibility(!layerVisibility);
    };

    const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newOpacity = parseFloat(event.target.value);
        setLayerOpacity(newOpacity);
    };

    return {
        layerOpacity,
        layerVisibility,
        setLayerOpacity,
        setLayerVisibility,
        toggleLayerVisibility,
        handleOpacityChange,
    };
}