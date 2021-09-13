import { Component } from "react";
import Button from "./component/Button";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <article className="card">
          <h1 className="title">
            Title
            <span className="subtitle">Subtitle</span>
          </h1>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            eius explicabo, iusto odio esse excepturi labore eum eaque eveniet!
            Itaque quibusdam rem accusamus aut nemo libero repudiandae qui in
            similique?
          </p>
          <div className="hover-in"></div>
          <Button>LEARN MORE</Button>
        </article>
        <article className="card">
          <h1 className="title">
            Title
            <span className="subtitle">Subtitle</span>
          </h1>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            eius explicabo, iusto odio esse excepturi labore eum eaque eveniet!
            Itaque quibusdam rem accusamus aut nemo libero repudiandae qui in
            similique?
          </p>
          <div className="hover-in"></div>
          <Button>Learn More</Button>
        </article>
        <article className="card">
          <h1 className="title">
            Title
            <span className="subtitle">Subtitle</span>
          </h1>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            eius explicabo, iusto odio esse excepturi labore eum eaque eveniet!
            Itaque quibusdam rem accusamus aut nemo libero repudiandae qui in
            similique?
          </p>
          <div className="hover-in"></div>
          <Button>Learn More</Button>
        </article>
      </div>
    );
  }
}