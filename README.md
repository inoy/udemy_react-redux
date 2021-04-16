# [Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/)

## Note: npm install -g create-react-app は非推奨

`npx create-react-app my-app`が推奨

> If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app

> npx always uses the latest version.

[Create React App - Getting Started - Quick Start](https://create-react-app.dev/docs/getting-started#quick-start)より引用

それはそうなんだけど公式で npx 推奨はじめて知った

## プロジェクトについて

### jsx

セクション 1 で作成したプロジェクト  
JSX って何、どんな風に書くのって簡単な紹介のためのプロジェクト

![jsx.jpg](readme_resources/jsx.png)

### components

セクション 3 で作成したプロジェクト  
Components って何、どんな風に書くの・使うのってためのプロジェクト  
Style は [Semantic UI](https://semantic-ui.com/)、アバター画像とかテキストは [faker.js](https://github.com/marak/Faker.js/) を利用  
![components.jpg](readme_resources/components.png)

## document.querySelector("#root") vs document.getElementById("root")

`ReactDOM.render(<App />, document.querySelector("#root"));` が [レクチャ 13](https://www.udemy.com/course/react-redux/learn/lecture/12531070#notes)で使われている。

[Qiita 記事](https://qiita.com/amamamaou/items/25e8b4e1b41c8d3211f4#%E7%89%B9%E5%AE%9A%E3%81%AEid%E3%81%AE%E8%A6%81%E7%B4%A0%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E6%99%82)とか[MeasureThat.net](https://www.measurethat.net/Benchmarks/Show/2488/0/getelementbyid-vs-queryselector)の記載見る限り、getElementById の方が querySelector よりも性能良いらしい。

基本的に`ReactDOM.render(<App />, document.getElementById("root"));`使っておけば良いと思う。大した性能差じゃないっぽいし気にする必要もないとは思うけど。

## create-react-app(CRA)で作成したプロジェクトの ホット/ライブ リロード

React の特定のバージョンでホットリロードが有効にならないバグがあるっぽい。というか実際、CRA でプロジェクト作成 (`"react": "^17.0.2"`) した後、src ディレクトリ 空にして index.js 一から書くと起こる。  
[Hot Reload stopped working with React "^17.0.1" #9904](https://github.com/facebook/create-react-app/issues/9904)

Udemy で紹介された以下で回避はできるっぽい。

index.js に以下を追記。追記後にサーバ再起動。

```js
if (module.hot) {
  module.hot.accept();
}
```

参考: [Webpack - hot-module-replacement](https://webpack.js.org/api/hot-module-replacement/)

## Babel の変換を確認

[Babel - Try it out](https://babeljs.io/repl#)

## JSX の className vs class

> CSS クラスを指定するには、className 属性を使用してください。このことは `<div>`、`<a>` など全ての標準 DOM 要素と SVG 要素に当てはまります。

> React を（一般的ではありませんが）Web Components とともに使用する場合は、代わりに class 属性を使用してください。

[React - DOM 要素 - className](https://ja.reactjs.org/docs/dom-elements.html#classname) より引用

[React Fire: Modernizing React DOM](https://github.com/facebook/react/issues/13525#issuecomment-417818906) 経緯が説明されてる

## クラスコンポーネント/Class Components

本講座では Class Components も取り上げられている。  
その理由は、Redux を理解するには Function Components/Hooks のみを理解した状態では困難（Class Components を理解してからの方が簡単）だからだと [47. Class-Based Components](https://www.udemy.com/course/react-redux/learn/lecture/12531182) で説明されている。

## 進捗

| 日付  | 現在 | 進捗 |
| ----- | ---- | ---- |
| 04/14 | 12   | 12   |
| 04/15 | 29   | 18   |
