import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const category = 'Naruto';

	test('Debe de mostrar <GifGrid /> correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar items cuando se cargan imagenes en useFetchGifs', () => {
		const gifs = [
			{
				id: 'abc',
				url: 'http://asdasdas.jpg',
				title: 'AASA',
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('div').hasClass('skeleton-conatiner')).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
