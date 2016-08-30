# kintone × Markdown プラグイン

## Description
kintone のテキストフィールドで Markdown を使えるようにするプラグインです。

## Features
- kintone アプリのテキストフィールドで Markdown が使えます
- プレビューボタンを押下してプレビューを表示できます

## Prepare
現在、kintone アプリのフォームで下記を事前準備する必要があります。

| フィールド名(フィールドコード)  |  フィールドタイプ   |  備考               |
|----------------------- | -------------- | ------------------ |
| md_contents            |  文字列(複数行)  | 本文                |
| btn_preview            |  スペース        | プレビューボタンになります |
| md_preview             |  スペース        | プレビュー表示先       |

[アプリテンプレート](https://github.com/dai0916/kintone-markdown/releases/download/v0.9.0/MarkdownAppTemplate.zip)も用意していますので、kintone に [読み込む](https://help.cybozu.com/ja/k/admin/import_template.html) ことでプラグイン動作確認できます。

## Usage
1. プラグイン（plugin.zip）を [ダウンロード](https://github.com/dai0916/kintone-markdown/releases) する。
1. プラグインを kintone に [インストール](https://help.cybozu.com/ja/k/admin/plugin.html) する。
