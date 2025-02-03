// NFTデータを定義します。
const nftData = [
    {
        id: 1,
        title: "蒼波 - 波紋の継承者 NFT #1",
        description: `古都・鎌倉の染織師の家系に生まれた蒼波は、代々受け継がれる「絞り染め」の技を持つ青年アーティスト。
静かな湖のように落ち着いた雰囲気を持ちながらも、時に大きな波を巻き起こすような情熱を秘めている。
幼い頃から祖父母の工房で染めの技術とともに「波」という存在の意味を学び、その教えを胸に「動く波」となることを決意。

現在は東京を拠点に、デジタルアートと伝統染織の融合を目指し、波紋のような作品を生み出し続けている。
彼が身に纏う着物は、デジタルアートと手染めの技法が融合した唯一無二の一着。
その波模様には、伝統と革新の間で揺れ動く彼の生き様が表現されている。

「ただ古いものを守るのではなく、そこに新しい風を吹き込むこと」
それこそが、彼の信じる道。彼の作品は、波紋のようにじわじわと世界に広がりつつある。

四字熟語「温故知新」は、まさに彼の生き方そのものを表している。`,
        image: "assets/nft1.jpg",
        style: "現代絞り染め",
        method: "デジタル描画・絞り染め融合",
        accessory: "波模様の着物",
        collection: "MIYABI",
        traits: {
            personality: "静謐・情熱・完璧主義",
            specialty: "伝統とデジタルの融合",
            origin: "鎌倉",
            currentBase: "東京",
            fourCharacterIdiom: "温故知新"
        }
    },
    {
        id: 2,
        title: "MIYABI #002",
        description: "現代的なアレンジを加えた着物デザイン",
        image: "assets/nft2.jpg",
        style: "モダン",
        method: "デジタル描画",
        accessory: "簪",
        collection: "AZUKI"
    },
    {
        id: 3,
        title: "MIYABI #003",
        description: "四季の美しさを表現した着物アート",
        image: "assets/nft3.jpg",
        style: "季節",
        method: "デジタル描画",
        accessory: "花",
        collection: "AZUKI"
    }
];

// 追加のNFTデータを生成
for (let i = 4; i <= 20; i++) {
    nftData.push({
        id: i,
        title: `MIYABI #${i.toString().padStart(3, '0')}`,
        description: "日本の伝統美をモダンに解釈したデジタルアート",
        image: `assets/nft${i}.jpg`,
        style: i % 2 === 0 ? "モダン" : "古典",
        method: "デジタル描画",
        accessory: ["扇子", "簪", "花", "刀", "和傘"][i % 5],
        collection: "AZUKI"
    });
}

// データが正しく生成されたことを確認
console.log(`Generated ${nftData.length} NFT items`);
