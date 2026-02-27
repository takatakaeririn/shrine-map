import type { Shrine } from "../../types/shrine"

type Props = {
    shrines: Shrine[]
    favoriteIds: number[]
    activeTab: "list" | "favorites"
    onTabChange: (tab: "list" | "favorites") => void
    onSelectShrine: (shrine: Shrine) => void
}

const Sidebar = ({
    shrines,
    favoriteIds,
    activeTab,
    onTabChange,
    onSelectShrine,
}: Props) => {

    const displayShrines =
        activeTab === "favorites"
            ? shrines.filter(s => favoriteIds.includes(s.id))
            : shrines

    return (
        <div className="fixed bottom-0 left-0 w-full z-10 md:absolute md:bottom-auto md:top-20 md:left-6 md:w-80">
            <div className="flex flex-col bg-white/90 backdrop-blur-md rounded-t-2xl md:rounded-2xl shadow-xl overflow-hidden">

                <div className="flex px-3 pt-3 gap-2">
                    <button
                        onClick={() => onTabChange("list")}
                        className={`
                            px-4 py-1.5 text-xs font-semibold rounded-t-lg transition
                            ${activeTab === "list"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            }
                        `}
                    >
                        一覧
                    </button>
                    <button
                        onClick={() => onTabChange("favorites")}
                        className={`
                            px-4 py-1.5 text-xs font-semibold rounded-t-lg transition
                            ${activeTab === "favorites"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            }
                        `}
                    >
                        お気に入り
                    </button>
                </div>

                <div className="max-h-[33vh] md:max-h-[60vh] overflow-y-auto border-t border-gray-200">
                    {displayShrines.length === 0 ? (
                        <div className="p-4 text-xs text-gray-500">
                            神社をお気に入り登録しよう！
                        </div>
                    ) : (
                        <ul>
                            {displayShrines.map(shrine => (
                                <li
                                    key={shrine.id}
                                    onClick={() => onSelectShrine(shrine)}
                                    className="px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition"
                                >
                                    <p className="text-sm font-semibold text-gray-800">
                                        {shrine.name}
                                    </p>
                                    {shrine.hasGoshuin && (
                                        <span className="text-[10px] font-bold text-green-600">
                                            御朱印あり
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Sidebar