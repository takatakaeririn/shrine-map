import { X } from "lucide-react";

type Props = {
    goshuinOnly: boolean
    onToggle: () => void
    searchQuery: string
    onSearchChange: (value: string) => void
}

const Header = ({ goshuinOnly, onToggle, searchQuery, onSearchChange }: Props) => {
    return (
        <div className="absolute top-4 left-6 z-10">
            <div className="flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="神社を検索"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full px-3 py-1 pr-8 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => onSearchChange("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                        >< X /></button>
                    )}
                </div>

                <button
                    onClick={onToggle}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 
                        ${goshuinOnly
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-green-100"
                        }`}
                >
                    <span>
                        {goshuinOnly ? "御朱印あり" : "すべて表示"}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header
