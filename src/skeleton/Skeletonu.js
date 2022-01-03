import React from 'react';

const Skeletonu = () => {
	const mystyle = {
		backgroundColor: 'DodgerBlue',
		padding: '10px',
		fontFamily: 'Arial',
		lines: '5'
	};
	return (
		<div>
			<div class="skeleton skeleton-line" style={mystyle} />
			<div class="skeleton skeleton-line" style={mystyle} />
			<div class="skeleton skeleton-list" style={mystyle} />
			<div class="skeleton skeleton-youtube" />
		</div>
	);
};

export default Skeletonu;
