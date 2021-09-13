import { Component } from "react";
import Button from "../component/Button";

interface ErrorComponent {
  match: {
    params: {
      type: string;
    };
  };
}

export default class Error404 extends Component<ErrorComponent> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
