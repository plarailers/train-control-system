
# train-controle-system

## 概要

新たにいちから作るということで、[Hono](https://hono.dev/) というWebアプリケーションフレームワークを使用したコントロールシステムです。

## 開発の仕方

最初にこのレポジトリを手元の PC にクローンします。

```
git clone git@github.com:plarailers/train-controle-system.git
```

次にブランチを切ります。必ず行ってください。<br>
ブランチは誰のブランチものかわかるようにしてもらえると嬉しいです。

```
git switch -c <ブランチ名>
```

npm パッケージをインストールし、実行します。

```
npm install
npm run dev
```

## ディレクトリ構成

```
train-controle-system
    |
     -- node_modules    # npm パッケージが入っているディレクトリです。
    |
     -- src
         |
          -- pages      # HTML を描画するファイルです。React の書き方で実装しています。
         |
          -- style      # css を定義した `.tsx` ファイルを置く予定のディレクトリです。
         |
          -- train-controle     # 車両制御のプログラムを置く予定のディレクトリです。

```
