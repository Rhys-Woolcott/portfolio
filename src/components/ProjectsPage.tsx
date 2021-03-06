import { Component, ReactElement } from 'react';
import GridTab from './component/GridTab';

export default class ProjectsPage extends Component {
  render(): ReactElement {
    return (
      <>
        <header>
          <title>Projects | GALACTIX</title>
        </header>
        <div className='container'>
          <GridTab
            title='Project 1'
            subtitle='Subtitle 1'
            tabText='READ MORE'
            onClick={() => {
              alert('Hello World');
            }}
          >
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
			pariatur possimus minima dolores id. Quasi quibusdam reiciendis
			accusantium in, itaque nihil sit sunt nulla magnam minima!
			Necessitatibus magnam voluptate ea.
          </GridTab>
          <GridTab
            title='Project 2'
            subtitle='Subtitle 2'
            tabText='READ MORE'
            onClick={() => null}
          >
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
			pariatur possimus minima dolores id. Quasi quibusdam reiciendis
			accusantium in, itaque nihil sit sunt nulla magnam minima!
			Necessitatibus magnam voluptate ea.
          </GridTab>
          <GridTab
            title='Project 3'
            subtitle='Subtitle 3'
            tabText='READ MORE'
            onClick={() => null}
          >
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
			pariatur possimus minima dolores id. Quasi quibusdam reiciendis
			accusantium in, itaque nihil sit sunt nulla magnam minima!
			Necessitatibus magnam voluptate ea.
          </GridTab>
        </div>
      </>
    );
  }
}
