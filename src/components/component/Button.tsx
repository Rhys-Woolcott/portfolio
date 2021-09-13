import { Component } from "react";
import "../../style/Button.scss";

export default class Button extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="BetterButton">
        <button className="BetterButtonButton">
          <span className="circle" aria-hidden={true}>
            <span className="icon arrow" />
          </span>
          <span className="button-text">{this.props.children}</span>
        </button>
      </div>
    );
  }
}
