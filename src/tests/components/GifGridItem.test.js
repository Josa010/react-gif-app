import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
	let wrapper = shallow(<GifGridItem />);
	const title = 'Un titulo';
	const url = 'http://localhost/algo.jpg';

	beforeEach(() => {
		wrapper = shallow(<GifGridItem title={title} url={url} />);
	});

	test('Debe de mostrar <GifGridItem /> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un parrafo con el title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('Debe de tener una imagene igual al url y alt de los props', () => {
		const img = wrapper.find('img');
		expect(img.props().src).toBe(url);
		expect(img.props().alt).toBe(title);
	});

	// test('Debe de tener animate__fadeIn', () => {
	// 	const div = wrapper.find('div');
	// 	expect(div.hasClass('animate__fadeIn')).toBe(true);
	// });
});
