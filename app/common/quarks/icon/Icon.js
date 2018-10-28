import React from "react";
import PropTypes from "prop-types";

import icons from "../../assets/icons/_index";

import "./icon.styl";

export default class Icon extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		const type = this.props.type;
		const color = this.props.color;
		const light = this.props.light;
		const pointer = this.props.pointer;
		const clickAction = this.props.clickAction;
		const id = this.props.id;
		const img = this.props.img;
		const className = this.props.className;

		if (img)
			return <img src={icons[type]} />;

		return (
			<svg
				id={id}
				onClick={clickAction}
				className={`icon ${className} ${color ? `-${color}` : ""} ${!light || "-light"} ${!pointer || "-pointer"}`}>
				{icons[type]}
			</svg>
		);
	}
}

Icon.propTypes = {
	type: PropTypes.string.isRequired
};
