import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import Skeleton from 'react-loading-skeleton';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{loading && (
				<div className='skeleton-container'>
					<Skeleton width={300} height={250} count={10} margin={10} />
				</div>
			)}

			<div className='card-grid'>
				{images.map((img) => {
					return <GifGridItem key={img.id} {...img} />;
				})}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
