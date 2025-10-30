import React, { createContext, useRef } from "react";
import type { Map as OlMap } from "ol";

interface MapContextType {
    mapRef: React.RefObject<OlMap | null>;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const mapRef = useRef<OlMap | null>(null);
    return (
        <MapContext.Provider value={{ mapRef }}>
            {children}
        </MapContext.Provider>
    );
};

export { MapContext, MapProvider };
export default MapContext;