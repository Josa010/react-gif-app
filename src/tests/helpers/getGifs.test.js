import { getGifs } from '../../helpers/getGIfs';

describe('Pruebas con getGifs fetch', () => {
	test('Debe de traer 10 elementos', async () => {
		const gifs = await getGifs('One puch');

		expect(gifs.length).toBe(10);
	});

	test('Debe de traer 0 elementos', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});
});
