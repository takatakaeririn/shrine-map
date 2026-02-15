import { InfoWindow } from "@vis.gl/react-google-maps";
import { type Shrine } from "../types/shrine";
import { Star } from "lucide-react";

type Props = {
    shrine: Shrine | null
    isFavorite: boolean
    onToggleFavorite?: () => void
    onClose: () => void
}

const ShrineInfo = ({ shrine, isFavorite, onToggleFavorite, onClose }: Props) => {
    if (!shrine) return null

    return (
        <InfoWindow
            position={{ lat: shrine.lat, lng: shrine.lng }}
            onCloseClick={onClose}
        >
            <div className="w-[240px] p-1 text-gray-800">
                {shrine.imageUrl && (
                    <img
                        src={shrine.imageUrl}
                        alt={shrine.name}
                        // 画像の遅延読み込み
                        loading="lazy"
                        className="w-full h-32 object-cover object-center rounded-md mb-2" />
                )}
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-lg font-bold">{shrine.name}</h2>
                    <button
                        onClick={onToggleFavorite}
                        className="flex-shrink-0 pt-0.5"
                    >
                        <Star size={20}
                            className={isFavorite
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-400"
                            } />
                    </button>

                </div>
                <span
                    className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${shrine.hasGoshuin
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                        }`}
                >
                    {shrine.hasGoshuin ? "御朱印あり" : "御朱印なし"}
                </span>
                {shrine.description && (
                    <p className="mt-1 text-sm text-gray-600 leading-snug">{shrine.description}</p>
                )}
            </div>
        </InfoWindow>
    )
}

export default ShrineInfo