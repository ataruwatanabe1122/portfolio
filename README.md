# ポートフォリオサイト — 渡邊 暖

フロントエンドエンジニア / スクラムマスターとしての実績・スキルをまとめたポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org) (App Router)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com)
- **言語**: TypeScript

## ディレクトリ構成

```
src/
├── app/
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト・メタデータ
│   └── page.tsx          # トップページ
├── components/
│   ├── Navigation.tsx    # ヘッダーナビゲーション
│   ├── Hero.tsx          # 自己紹介セクション
│   ├── Skills.tsx        # スキル一覧セクション
│   ├── Projects.tsx      # プロジェクト実績セクション
│   ├── Contact.tsx       # お問い合わせセクション
│   └── Footer.tsx        # フッター
└── data/
    └── profile.ts        # プロフィール・スキル・プロジェクトデータ
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルド

```bash
npm run build
npm start
```

## データの編集

プロフィールやプロジェクト情報は `src/data/profile.ts` に集約されています。内容を変更する場合はこのファイルを編集してください。
