import { InfoWindow } from "@vis.gl/react-google-maps";
import { type Shrine } from "../types/shrine";
import { Heart } from "lucide-react";

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
            <div className="max-w-[200px] p-1 text-gray-800">
                {shrine.imageUrl && (
                    <img src={shrine.imageUrl} alt={shrine.name}
                        // 画像の遅延読み込み
                        loading="lazy"
                        className="w-full h-24 object-cover rounded-t-md mb-2" />
                )}
                <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">{shrine.name}</h2>

                        <span
                            className={`text-xs px-2 py-0.5 rounded-full ${shrine.hasGoshuin
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                                }`}
                        >
                            {shrine.hasGoshuin ? "御朱印あり" : "御朱印なし"}
                        </span>
                    </div>

                    <button
                        onClick={onToggleFavorite}
                        className="transition-all duration-200 hover:scale-110 active:scale-95"
                    >
                        <Heart size={18}
                            className={`transition-colors duration-200 ${isFavorite
                                ? "text-red-500 fill-red-500" : "text-gray-400"
                                }`} />
                    </button>

                </div>
                {shrine.description && (
                    <p className="text-sm text-gray-600 leading-snug">{shrine.description}</p>
                )}
            </div>
        </InfoWindow>
    )
}

export default ShrineInfo