import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps'
import { type ReactNode } from 'react'
import type { Shrine } from '../../types/shrine'
import { useEffect } from 'react'

type Props = {
    children: ReactNode
    selectedShrine: Shrine | null
    onDrag: () => void
}

const MapEffect = ({ selectedShrine }: { selectedShrine: Shrine | null }) => {
    const map = useMap()
    useEffect(() => {
        if (!map || !selectedShrine) return

        map.panTo({
            lat: selectedShrine.lat,
            lng: selectedShrine.lng
        })
    }, [map, selectedShrine])
    return null
}

const MapView = ({ children, selectedShrine, onDrag }: Props) => {
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
                    disableDefaultUI={true}
                    options={{
                        gestureHandling: "greedy"
                    }}
                >
                    <MapEffect selectedShrine={selectedShrine} />
                    {children}

                </Map>

            </APIProvider>
        </div>

    )
}


export default MapView