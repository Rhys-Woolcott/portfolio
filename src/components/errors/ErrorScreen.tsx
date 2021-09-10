import { Component } from "react";

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
        <h1 className="big-error" data-text="ERROR">
          ERROR
        </h1>
        <h1>
          <span className="Error404Text">{this.props.match.params.type}</span>
        </h1>
      </div>
    );
  }
}
