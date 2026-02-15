import type { Shrine } from "../../types/shrine"
import { useState, useEffect } from 'react';
import MapView from './MapView'
import ShrineMarkers from "./ShrineMarkers";
import ShrineInfo from "./ShrineInfo";

type Props = {
    goshuinOnly: boolean
    searchQuery: string
}

const ShrineMap = ({ goshuinOnly, searchQuery }: Props) => {
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

    useEffect(() => {
        localStorage.setItem(
            "favoriteShrines",
            JSON.stringify(favoriteIds)
        )
    }, [favoriteIds])

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
                setShrines(data)
            } catch (error) {
                console.error("データの取得に失敗:", error)
            }
        }
        fetchShrines()
    }, [])

    // 神社検索・御朱印フィルター
    // クエリ正規化
    const query = searchQuery.trim().toLowerCase()

    const filteredShrines = shrines.filter(shrine => {
        if (goshuinOnly && !shrine.hasGoshuin) return false
        if (!query) return true

        return (
            shrine.name.toLowerCase().includes(query) ||
            shrine.kana?.toLowerCase().includes(query)
        )
    })

    return (
        <MapView onDrag={() => setSelectedShrine(null)}>
            <ShrineMarkers
                shrines={filteredShrines}
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