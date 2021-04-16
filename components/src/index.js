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
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        content={faker.lorem.text()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Today at 2:00AM"
        content={faker.lorem.text()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Yesterday at 5:00PM"
        content={faker.lorem.text()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
