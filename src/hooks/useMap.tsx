import { useContext } from "react";
import MapContext from "../context/MapContext";
import type { Map as OlMap } from "ol";

const useMap = (): React.RefObject<OlMap | null> => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error("useMap must be used within a MapProvider");
    }
    return context.mapRef;
};

export default useMap;
