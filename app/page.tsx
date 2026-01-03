"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function AccidentPropertySearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    // Java APIと統合する際、ここでAPIコールを追加
    // 例: const response = await fetch('/api/search', { method: 'POST', body: JSON.stringify({ query: searchQuery }) })

    // 仮のデータ（APIと接続後に削除）
    setSearchResults([
      {
        id: 1,
        type: "住宅（一戸建て）",
        content: "事件内容: ◆◇年■■月、◆◆住宅に住む■■■夫■■が殺害された。",
        additionalInfo: "捜索の結果、屋内からは■■■三痕トキロの口遺留物が発見され、■■は食※による※※されたと判■された。",
        name: "和也",
      },
    ])
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* ブラウザヘッダー */}
      <div className="bg-[#1e3a8a] text-white px-6 py-3 flex items-center justify-between">
        <span className="text-lg font-sans">Internet Browser</span>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-white"></div>
          <div className="w-4 h-4 bg-white"></div>
          <div className="w-4 h-4 bg-white"></div>
        </div>
      </div>

      {/* ナビゲーションバー */}
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold italic">事故物件</h1>
        <div className="flex gap-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ホーム
          </a>
          <a href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
            お問い合わせ
          </a>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="flex-1 bg-gradient-to-b from-[#4a1410] via-[#5a1815] to-[#3a1210] px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* 検索セクション */}
          <div className="mb-12 flex justify-center items-center gap-4">
            <Input
              type="text"
              placeholder="◯◯県◯◯市△△町15番地"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-2xl h-12 bg-[#d4d4d4] text-black placeholder:text-gray-600 border-none text-base"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch} className="h-12 px-8 bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white">
              検索
            </Button>
          </div>

          {/* 検索結果 */}
          {hasSearched && (
            <div>
              <h2 className="text-white text-2xl text-center mb-8">
                {searchResults.length}件の検索結果が見つかりました
              </h2>
              <hr className="border-t border-white/30 mb-8" />

              <div className="space-y-6">
                {searchResults.map((result) => (
                  <div key={result.id} className="flex items-start gap-4">
                    {/* 名前ラベル */}
                    <div className="bg-black text-white px-6 py-2 rounded text-sm min-w-[80px] text-center mt-24">
                      {result.name}
                    </div>

                    {/* 結果カード */}
                    <Card className="flex-1 bg-[#b8b8b8] border-2 border-gray-400 p-8">
                      <h3 className="text-xl font-bold mb-6 text-black">{result.type}</h3>
                      <div className="space-y-2 text-black leading-relaxed">
                        <p className="text-red-700">{result.content}</p>
                        <p className="text-red-700">{result.additionalInfo}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              {/* フッターテキスト */}
              <div className="mt-8 bg-black text-white px-6 py-4 text-center">
                <span className="text-sm">......</span>
              </div>
            </div>
          )}

          {/* 猫のイラスト（右下） */}
          <div className="fixed bottom-4 right-4">
            <img src="/black-cat-silhouette-illustration.jpg" alt="猫のイラスト" className="w-20 h-20 opacity-80" />
          </div>
        </div>
      </main>
    </div>
  )
}
