# Covid-19 対策サイト 概要

## 経緯

- 政府関連のコロナ対策サイトは数字ばかりで感覚的に理解しにくい
  - 色分けとかされているけどちょっと情報が多い
- 「増えた」「減った」「検査数と併せてみるとどうだ」みたいに感覚的な指標もあっていいのではないか
  - 数値的な指標は専門家の方々がたくさん出してくれているので...
- コーディングの練習もかねて自分なりのコロナ情報ポータルを作ってみよう

## 使用技術
  - JavaScript(React.js)：UI周り
    - HTTP Request : axios(https://github.com/axios/axios)
  - Python：オープンデータ加工？
  - 国が提供するオープンデータ：JSONやCSV

## 内閣官房 コロナ関連データサイト

### 県別累積感染者数など

- 累積の陽性者数
  - https://data.corona.go.jp/converted-json/covid19japan-npatients.json
- 入院治療を要する者
  - https://data.corona.go.jp/converted-json/covid19japan-ncures.json
- 累積の志望者数
  - https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json
- 都道府県別累積の陽性者数
  - https://data.corona.go.jp/converted-json/covid19japan-all.json

### 全国医療機関の医療提供体制の状況 オープンデータ
- https://opendata.corona.go.jp/api/covid19DailySurvey
- 全国の医療機関の医療提供状況をJSON形式で利用可能
- 
```
・データの絞り込み
    クエリ文字列をJSONのKey名=値の形で付与すれば絞り込みデータの抽出が可能です。
    例　石川県のデータ
    https://opendata.corona.go.jp/api/covid19DailySurvey?prefName=石川県
    例　北海道　函館市のデータ
    https://opendata.corona.go.jp/api/covid19DailySurvey?localGovCode=012025
    ※複数は指定できません

    ・日付を指定したデータ
    2020年5月19日以降のデータを取得できます。
    URLの最後に /yyyymmdd　で日付を指定してください
    例
    https://opendata.corona.go.jp/api/covid19DailySurvey/20200519
    ※さらに絞り込み用のクエリ文字列を付与し絞り込むことも可能です
    例
    https://opendata.corona.go.jp/api/covid19DailySurvey/20200519?prefName=北海道

    全国の医療機関の医療提供状況をCSV形式でご利用いただけます。
    https://covid-19-monitoring.s3-ap-northeast-1.amazonaws.com/public_data/covid-19_daily_survey.csv
```

## オープンデータ - 厚生労働省

- https://www.mhlw.go.jp/stf/covid-19/open-data.html
- CSV形式なのでJSONで使うなら変換が必要

## 新型コロナウイルス対策ダッシュボード

- https://www.stopcovid19.jp/
- 