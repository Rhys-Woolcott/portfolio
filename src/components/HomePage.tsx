import { Component, ReactElement } from 'react';
import '../style/Home.scss';
import Button from './component/Button';

export default class HomePage extends Component {
  render(): ReactElement {
    return (
      <>
        <header>
          <title>Home | GALACTIX</title>
        </header>
        <div className="homeContainer">
          <h1 className="headerTitle">
              Rhys Woolcott<br />
            <span className="headerSubTitle">Full Stack Developer</span>
          </h1>
          <Button onClick={() => alert('Hello World')}>
              ABOUT ME
          </Button>
        </div>
      </>
    );
  }
}