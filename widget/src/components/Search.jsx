import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("プログラミング");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://ja.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (!term) {
      setResults([]);
      return;
    }
    if (term && !results.length) {
      // 初回画面描画時はsetTimeoutを待たず検索
      search();
      // search関数でsetResultsされるまでは即時、検索が実行されてしまう。即時防止のためここで空オブジェクトを設定。
      setResults([{}]);
      return;
    }
    const timeoutId = setTimeout(() => search(), 500);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  const renderedResults = results.map(({ pageid, title, snippet }) => {
    // 即時検索防止のための空オブジェクトは無視
    if (!pageid) return;
    return (
      <div className="item" key={pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://ja.wikipedia.org?curid=${pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
        </div>
        <span
          /*dangerouslySetInnerHTMLはXSSのリスクがあるため要注意 今回はお勉強プロジェクトなので利用する */
          dangerouslySetInnerHTML={{ __html: snippet }}
        ></span>
        {/* 正規表を使うなどしてhtmlタグを削除する方法がQ&Aに記載されてる。dangerouslySetInnerHTML面白いし今回は使う。
        const regex = /(<([^>]+)>)/gi; const cleanSnippet = result.snippet.replace(regex, ""); */}
      </div>
    );
  });

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </>
  );
};

export default Search;
