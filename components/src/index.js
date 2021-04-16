import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

faker.locale = "ja";

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Nice blog post!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Today at 2:00AM"
        comment="Hello"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        comment="Goodbye"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
