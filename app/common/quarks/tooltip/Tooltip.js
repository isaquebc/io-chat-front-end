import React from "react";
import PropTypes from "prop-types";

import "./tooltip.styl";

export default class Tooltip extends React.Component {

	render() {
		
		const children = this.props.children;
		const text = this.props.text;
		const position = this.props.position;
		const index = this.props.index;

		return (
			<div className="tooltip-container">
				<div>{children}</div>
				<div className={`tooltip -${position || "right"}`}>
					{text}
				</div>
				<svg viewBox="0 0 10 10" className={`tooltip-arrow -${position || "right"}`}>
					<defs>
						<filter id="shadow" x="0" y="0" width="100%" height="100%">
							<feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
							<feGaussianBlur result="blurOut" in="offOut" stdDeviation="0" />
							<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
						</filter>
					</defs>
					<polygon points="0,0 5,10 10,0" fill="#FFF" filter="url(#shadow)"></polygon>
				</svg>
			</div>
		);
	}
}

Tooltip.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.node.isRequired,
	position: PropTypes.string
};
