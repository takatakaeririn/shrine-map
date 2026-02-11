import { InfoWindow } from "@vis.gl/react-google-maps";
import { type Shrine } from "../types/shrine";

type Props = {
    shrine: Shrine | null
    onClose: () => void
}

const ShrineInfo = ({ shrine, onClose }: Props) => {
    if (!shrine) return null
    return (
        <InfoWindow
            position={{ lat: shrine.lat, lng: shrine.lng }}
            onCloseClick={onClose}
        >
            <div style={{ color: 'black', padding: '10px', minWidth: '100px' }}>
                <h2>{shrine.name}</h2>
            </div>
        </InfoWindow>
    )
}

export default ShrineInfo