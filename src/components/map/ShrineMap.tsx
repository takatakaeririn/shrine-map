import type { Shrine } from "../../types/shrine"
import { useState, useEffect } from 'react';
import MapView from './MapView'
import ShrineMarkers from "./ShrineMarkers";
import ShrineInfo from "./ShrineInfo";

type props = {
    goshuinOnly: boolean
}

const ShrineMap = ({ goshuinOnly }: props) => {
    const [shrines, setShrines] = useState<Shrine[]>([])
    const [selectedShrine, setSelectedShrine] = useState<Shrine | null>(null)
    const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
        // お気に入り読み込み
        try {
            const stored = localStorage.getItem("favoriteShrines")
            return stored ? JSON.parse(stored) : []
        } catch (error) {
            console.error("読み込み失敗：", error)
            return []
        }
    })

    // お気に入り保存
    useEffect(() => {
        localStorage.setItem(
            "favoriteShrines",
            JSON.stringify(favoriteIds)
        )
    }, [favoriteIds])

    // お気に入り機能
    const toggleFavorite = (id: number) => {
        setFavoriteIds(prev =>
            prev.includes(id)
                ? prev.filter(fid => fid !== id)
                : [...prev, id]
        )
    }
    const isFavoriteId = (id: number) => {
        return favoriteIds.includes(id)
    }

    useEffect(() => {
        const fetchShrines = async () => {
            try {
                const response = await fetch('/data/shrines.json')
                const data = await response.json()
                // データをセット
                setShrines(data)
            } catch (error) {
                console.log("データの取得に失敗しました:", error)
            }
        }
        fetchShrines()
    }, [])

    // 御朱印フィルター
    const filterdShrines = goshuinOnly
    ? shrines.filter(shrine => shrine.hasGoshuin)
    : shrines

    return (
        <MapView onDrag={() => setSelectedShrine(null)}>
            <ShrineMarkers
                shrines={filterdShrines}
                onSelect={setSelectedShrine}
            />

            <ShrineInfo
                shrine={selectedShrine}
                isFavorite={
                    selectedShrine
                        ? isFavoriteId(selectedShrine.id)
                        : false
                }
                onToggleFavorite={
                    selectedShrine
                        ? () => toggleFavorite(selectedShrine.id)
                        : undefined
                }
                onClose={() => setSelectedShrine(null)}
            />
        </MapView >


    )
}

export default ShrineMap