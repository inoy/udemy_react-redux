import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <>Loading...</>;
    }
    const { title, description } = this.props.stream;
    return (
      <>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </>
    );
  }
}

const mapStateToProps = (state, onwProps) => ({
  stream: state.streams[onwProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
