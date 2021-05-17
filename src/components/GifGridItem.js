import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';

export const GifGridItem = ({ title, url }) => {
	return (
		<div className='card'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridItem.protoTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
