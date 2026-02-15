import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { type ReactNode } from 'react';

type Props = {
    children: ReactNode
    onDrag: () => void
}

const MapView = ({ children, onDrag }: Props) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const mapId = import.meta.env.VITE_MAP_ID || "DEMO_MAP_ID"

    return (
        <div className="w-screen h-screen">
            <APIProvider apiKey={apiKey}>
                <Map
                    defaultCenter={{ lat: 34.98, lng: 135.76 }}
                    defaultZoom={14}
                    mapId={mapId}
                    onDragstart={onDrag}
                >
                    {children}

                </Map>

            </APIProvider>
        </div>

    )
}


export default MapView