import { Component, MouseEventHandler, ReactElement } from 'react';
import '../../style/Button.scss';

interface ButtonInterface {
	onClick: MouseEventHandler;
  children?: string;
}

export default class Button extends Component<ButtonInterface> {
  render(): ReactElement {
    return (
      <div className='BetterButton'>
        <button className='BetterButtonButton' onClick={this.props.onClick}>
          <span className='circle' aria-hidden={true}>
            <span className='icon arrow' />
          </span>
          <span className='button-text'>{this.props.children}</span>
        </button>
      </div>
    );
  }
}
