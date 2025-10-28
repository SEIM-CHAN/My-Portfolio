# 🚀 Vercel × GitHub CI/CD デプロイガイド

## 📋 設定手順

### 1. Vercel Dashboard設定
1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. GitHubリポジトリと連携
3. `Settings` → `Git` で Auto-deploy を有効化

### 2. GitHub Secrets設定
以下のSecretをGitHubリポジトリに追加：

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id  
VERCEL_PROJECT_ID=your_project_id
```

### 3. Secret取得方法

#### VERCEL_TOKEN
```bash
# Vercel CLIをインストール
npm i -g vercel

# ログイン
vercel login

# トークン生成
vercel --token
```

#### VERCEL_ORG_ID & VERCEL_PROJECT_ID
```bash
# プロジェクトルートで実行
vercel link
cat .vercel/project.json
```

## 🔄 ワークフロー

### 自動デプロイ
- `main` ブランチにpush → 本番環境に自動デプロイ
- PRの作成 → プレビュー環境に自動デプロイ

### 手動デプロイ
```bash
# 本番環境
vercel --prod

# プレビュー環境  
vercel
```

## 📁 ファイル構成

```
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # GitHub Actions設定
├── vercel.json              # Vercel設定
└── package.json             # NPMスクリプト
```

## ✅ CI/CDパイプライン機能

1. **コード品質チェック**
   - ESLint
   - TypeScript型チェック
   - ビルドテスト

2. **自動デプロイ**
   - mainブランチ → 本番環境
   - PR → プレビュー環境

3. **環境管理**
   - 本番/プレビュー環境の分離
   - 環境変数の管理

## 🎯 メリット

- ✅ mainにpushすると自動デプロイ
- ✅ PRごとにプレビュー環境作成
- ✅ コード品質の自動チェック
- ✅ デプロイ前のエラー検出
- ✅ ロールバック機能