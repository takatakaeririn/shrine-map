import { useState } from "react"
import ShrineMap from "./components/map/ShrineMap"
import Header from "./components/layout/Header"

function App() {
    const [goshuinOnly, setGoshuinOnly] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const goshuinToggle = () => setGoshuinOnly(prev => !prev)

    return (
        <div className="h-screen relative">
            <Header
                goshuinOnly={goshuinOnly}
                onToggle={goshuinToggle}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            <main className="flex-1">
                <ShrineMap
                    goshuinOnly={goshuinOnly}
                    searchQuery={searchQuery}
                />
            </main>
        </div>
    )
}

export default App