import { Flower, Flower2 } from "lucide-react"

type Props = {
    goshuinOnly: boolean
    onToggle: () => void
}

const Header = ({ goshuinOnly, onToggle }: Props) => {
    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                <h1 className="text-sm font-black tracking-tighter text-gray-800">
                    神社マップ
                </h1>

                <button
                    onClick={onToggle}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 
                        ${goshuinOnly
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-green-100"
                        }`}
                >
                    {goshuinOnly ? (
                        <Flower size={14} strokeWidth={3} className="animate-in zoom-in duration-300" />
                    ) : (
                        <Flower2 size={14} strokeWidth={2.5} className="text-red-400" />
                    )}

                    <span>
                        {goshuinOnly ? "御朱印あり" : "すべて表示"}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header
