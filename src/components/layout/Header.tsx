type Props = {
    goshuinOnly: boolean
    onToggle: () => void
    searchQuery: string
    onSearchChange: (value: string) => void
}

const Header = ({ goshuinOnly, onToggle, searchQuery, onSearchChange }: Props) => {
    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                <h1 className="text-sm font-black tracking-tighter text-gray-800">
                    神社マップ
                </h1>

                {/* 検索バー */}
                <input
                    type="text"
                    placeholder="神社を検索する"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="flex-1 px-3 py-1 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2"
                />

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
