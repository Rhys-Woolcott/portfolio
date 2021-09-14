import React, { Component } from "react";
import "../../style/Button.scss";

interface ButtonInterface {
	onClick: any;
}

export default class Button extends Component<ButtonInterface> {
	render() {
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
