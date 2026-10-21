export type Weapon = {
  id: number
  name: string
  type: WeaponType
  sub: string
  special: string
} 

export const WEAPONS:Weapon[] = [
  // シューター
  { id: 1, name: "わかばシューター", type: "シューター", sub: "スプラッシュボム", special: "グレートバリア" },
  { id: 2, name: "スプラシューター", type: "シューター", sub: "キューバンボム", special: "ウルトラショット" },
  { id: 3, name: "シャープマーカー", type: "シューター", sub: "クイックボム", special: "カニタンク" },
  { id: 4, name: "N-ZAP85", type: "シューター", sub: "キューバンボム", special: "エナジースタンド" },
  { id: 5, name: "プロモデラーMG", type: "シューター", sub: "タンサンボム", special: "サメライド" },

  // ブラスター
  { id: 6, name: "ノヴァブラスター", type: "ブラスター", sub: "スプラッシュボム", special: "ショクワンダー" },
  { id: 7, name: "ホットブラスター", type: "ブラスター", sub: "ロボットボム", special: "グレートバリア" },
  { id: 8, name: "ロングブラスター", type: "ブラスター", sub: "キューバンボム", special: "ホップソナー" },
  { id: 9, name: "クラッシュブラスター", type: "ブラスター", sub: "スプラッシュボム", special: "ウルトラショット" },
  { id: 10, name: "ラピッドブラスター", type: "ブラスター", sub: "トラップ", special: "トリプルトルネード" },

  // ローラー
  { id: 11, name: "スプラローラー", type: "ローラー", sub: "カーリングボム", special: "グレートバリア" },
  { id: 12, name: "カーボンローラー", type: "ローラー", sub: "ロボットボム", special: "ショクワンダー" },
  { id: 13, name: "ダイナモローラー", type: "ローラー", sub: "スプリンクラー", special: "エナジースタンド" },
  { id: 14, name: "ヴァリアブルローラー", type: "ローラー", sub: "トラップ", special: "マルチミサイル" },
  { id: 15, name: "ワイドローラー", type: "ローラー", sub: "スプラッシュシールド", special: "キューインキ" },

  // フデ
  { id: 16, name: "パブロ", type: "フデ", sub: "スプラッシュボム", special: "メガホンレーザー5.1ch" },
  { id: 17, name: "ホクサイ", type: "フデ", sub: "キューバンボム", special: "ショクワンダー" },
  { id: 18, name: "パブロ・ヒュー", type: "フデ", sub: "トラップ", special: "ウルトラハンコ" },
  { id: 19, name: "フィンセント", type: "フデ", sub: "カーリングボム", special: "ホップソナー" },
  { id: 20, name: "ホクサイ・ヒュー", type: "フデ", sub: "ジャンプビーコン", special: "アメフラシ" },

  // チャージャー
  { id: 21, name: "スプラチャージャー", type: "チャージャー", sub: "スプラッシュボム", special: "キューインキ" },
  { id: 22, name: "スプラスコープ", type: "チャージャー", sub: "スプラッシュボム", special: "キューインキ" },
  { id: 23, name: "リッター4K", type: "チャージャー", sub: "トラップ", special: "ホップソナー" },
  { id: 24, name: "スクイックリンα", type: "チャージャー", sub: "ポイントセンサー", special: "グレートバリア" },
  { id: 25, name: "14式竹筒銃・甲", type: "チャージャー", sub: "ロボットボム", special: "メガホンレーザー5.1ch" },

  // スロッシャー
  { id: 26, name: "バケットスロッシャー", type: "スロッシャー", sub: "スプラッシュボム", special: "トリプルトルネード" },
  { id: 27, name: "ヒッセン", type: "スロッシャー", sub: "ポイズンミスト", special: "ジェットパック" },
  { id: 28, name: "スクリュースロッシャー", type: "スロッシャー", sub: "タンサンボム", special: "ナイスダマ" },
  { id: 29, name: "オーバーフロッシャー", type: "スロッシャー", sub: "スプリンクラー", special: "アメフラシ" },
  { id: 30, name: "エクスプロッシャー", type: "スロッシャー", sub: "ポイントセンサー", special: "アメフラシ" },

  // スピナー
  { id: 31, name: "スプラスピナー", type: "スピナー", sub: "クイックボム", special: "ウルトラハンコ" },
  { id: 32, name: "バレルスピナー", type: "スピナー", sub: "スプリンクラー", special: "ホップソナー" },
  { id: 33, name: "ハイドラント", type: "スピナー", sub: "ロボットボム", special: "ナイスダマ" },
  { id: 34, name: "クーゲルシュライバー", type: "スピナー", sub: "タンサンボム", special: "ジェットパック" },
  { id: 35, name: "ノーチラス47", type: "スピナー", sub: "ポイントセンサー", special: "アメフラシ" },

  // マニューバー
  { id: 36, name: "スプラマニューバー", type: "マニューバー", sub: "キューバンボム", special: "カニタンク" },
  { id: 37, name: "スパッタリー", type: "マニューバー", sub: "ジャンプビーコン", special: "エナジースタンド" },
  { id: 38, name: "デュアルスイーパー", type: "マニューバー", sub: "スプラッシュボム", special: "ホップソナー" },
  { id: 39, name: "ケルビン525", type: "マニューバー", sub: "スプラッシュシールド", special: "ナイスダマ" },
  { id: 40, name: "クアッドホッパーブラック", type: "マニューバー", sub: "ロボットボム", special: "サメライド" },

  // シェルター
  { id: 41, name: "パラシェルター", type: "シェルター", sub: "スプリンクラー", special: "トリプルトルネード" },
  { id: 42, name: "キャンピングシェルター", type: "シェルター", sub: "ジャンプビーコン", special: "キューインキ" },
  { id: 43, name: "スパイガジェット", type: "シェルター", sub: "トラップ", special: "サメライド" },
  { id: 44, name: "パラシェルターソレーラ", type: "シェルター", sub: "ロボットボム", special: "ジェットパック" },
  { id: 45, name: "24式張替傘・甲", type: "シェルター", sub: "ラインマーカー", special: "グレートバリア" },

  // ストリンガー
  { id: 46, name: "トライストリンガー", type: "ストリンガー", sub: "ポイズンミスト", special: "メガホンレーザー5.1ch" },
  { id: 47, name: "LACT-450", type: "ストリンガー", sub: "カーリングボム", special: "マルチミサイル" },
  { id: 48, name: "トライストリンガーコラボ", type: "ストリンガー", sub: "スプリンクラー", special: "デコイチラシ" },
  { id: 49, name: "フルイドⅤ", type: "ストリンガー", sub: "ロボットボム", special: "ウルトラハンコ" },
  { id: 50, name: "フルイドⅤカスタム", type: "ストリンガー", sub: "ポイントセンサー", special: "ホップソナー" },

  // ワイパー
  { id: 51, name: "ドライブワイパー", type: "ワイパー", sub: "トーピード", special: "ウルトラハンコ" },
  { id: 52, name: "ジムワイパー", type: "ワイパー", sub: "クイックボム", special: "ショクワンダー" },
  { id: 53, name: "ドライブワイパーデコ", type: "ワイパー", sub: "ジャンプビーコン", special: "マルチミサイル" },
  { id: 54, name: "デンタルワイパーミント", type: "ワイパー", sub: "キューバンボム", special: "グレートバリア" },
  { id: 55, name: "デンタルワイパースミ", type: "ワイパー", sub: "スプラッシュシールド", special: "ジェットパック" },
];

export const WEAPON_TYPES = [
  'シューター',
  'ブラスター',
  'ローラー',
  'フデ',
  'チャージャー',
  'スロッシャー',
  'スピナー',
  'マニューバー',
  'シェルター',
  'ストリンガー',
  'ワイパー'
] as const

export type WeaponType = (typeof WEAPON_TYPES)[number]