
import { useLayerControls } from "../hooks/useLayerControls";
const LayersControl = ({ layerName, layerDesc, opacity, visibility }: { layerName: string, layerDesc: string, opacity: number, visibility: boolean }) => {
    const { layerOpacity, layerVisibility, toggleLayerVisibility, handleOpacityChange } = useLayerControls(layerName, opacity, visibility);
    return (
        <div>

            <strong>{layerDesc}</strong>
            <input
                type="checkbox"
                checked={layerVisibility}
                onChange={toggleLayerVisibility}
            />
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={layerOpacity}
                onChange={handleOpacityChange}
            /> Opacidad
        </div>
    )
}

export default LayersControl