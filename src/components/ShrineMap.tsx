import type { Shrine } from "../types/shrine"
import { useState, useEffect } from 'react';
import MapView from './MapView'
import ShrineMarkers from "./ShrineMarkers";
import ShrineInfo from "./ShrineInfo";

const ShrineMap = () => {
    const [shrines, setShrines] = useState<Shrine[]>([])
    const [selectedShrine, setSelectedShrine] = useState<Shrine | null>(null)

    useEffect(() => {
        fetch('/data/shrines.json')
            .then(response => response.json())
            .then(data => { setShrines(data) })
            .catch(error => console.error("データの取得に失敗しました:", error))
    }, [])

    return (
        <MapView onDrag = {() => setSelectedShrine(null)}>
            <ShrineMarkers
            shrines = {shrines}
            onSelect = {setSelectedShrine}/>
            <ShrineInfo
            shrine = {selectedShrine}
            onClose = {() => setSelectedShrine(null)}/>
        </MapView >
        
                    
    )
}

export default ShrineMap