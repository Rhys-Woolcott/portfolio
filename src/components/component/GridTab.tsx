import { Component } from "react";
import Button from "./Button";

interface GridTabInterface {
  title: string;
  subtitle: string;
  children: string;
  onClick: Function;
  tabText?: string;
}

export default class GridTab extends Component<GridTabInterface> {
  render() {
    return (
      <article className="card">
        <h1 className="title">
          {this.props.title}
          <span className="subtitle">{this.props.subtitle}</span>
        </h1>
        <p className="body">{this.props.children}</p>
        <div className="hover-in"></div>
        <Button onClick={this.props.onClick}>
          {this.props.tabText ? this.props.tabText : "LEARN MORE"}
        </Button>
      </article>
    );
  }
}
