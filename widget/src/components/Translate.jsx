import React, { useState } from "react";
import ISO6391 from "iso-639-1-jp";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = ISO6391.getAllCodes().map((code) => {
  return { label: ISO6391.getName(code), value: code };
});

const Translate = () => {
  const [language, setLanguage] = useState(
    options.find((o) => o.value === "en")
  );
  const [text, setText] = useState("");

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </>
  );
};
export default Translate;
