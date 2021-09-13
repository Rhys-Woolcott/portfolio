import { Component } from "react";

interface ErrorComponent {
  match: {
    params: {
      type: string;
    };
  };
}

export default class Error404 extends Component<ErrorComponent> {
  render() {
    return (
      <>
        <header>
          <title>Error {this.props.match.params.type} | GALACTIX</title>
        </header>
        <div
          id="error"
          style={{
            overflowY: "hidden",
          }}
        >
          <h1
            className="big-error"
            data-text={`ERROR ${this.props.match.params.type}`}
          >
            ERROR
            <br />
            <span className="Error404Text">{this.props.match.params.type}</span>
          </h1>
        </div>
      </>
    );
  }
}
