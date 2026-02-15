export type Shrine = {
    // 一覧表示項目
    id: number
    name: string
    kana: string
    lat: number
    lng: number

    // 詳細表示項目
    description?: string
    imageUrl?: string

    // 御朱印項目
    hasGoshuin: boolean
}

// ユーザー状態
export type UserShrineState = {
    favoriteIds: number[]
}