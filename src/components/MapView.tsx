import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { type ReactNode } from 'react';

type Props = {
    children: ReactNode
    onDrag: () => void
}

const MapView = ({ children, onDrag }: Props) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    return (

        <div style={{ width: '100vw', height: '100vh' }}>

            <APIProvider apiKey={apiKey}>
                <Map
                    defaultCenter={{ lat: 34.67, lng: 135.50 }}
                    defaultZoom={15}
                    mapId="DEMO_MAP_ID"
                    onDragstart={onDrag}
                >
                    {children}

                </Map>

            </APIProvider>
        </div>

    )
}


export default MapView