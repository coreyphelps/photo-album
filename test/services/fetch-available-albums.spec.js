import {Chance} from 'chance';

import {fetchAllAlbumInformation} from '../../src/services/fetch-albums.js';
import {fetchAvailableAlbums} from '../../src/services/fetch-available-albums.js';

jest.mock('../../src/services/fetch-albums.js');

const chance = new Chance();

describe('fetchAvailableAlbums', () => {
    let expectedAlbums,
        expectedDistinctAlbumIds;

    beforeEach(() => {
        const buildExpectedAlbums = () => ({
            albumId: chance.natural()
        });

        expectedDistinctAlbumIds = new Set();
        expectedAlbums = chance.n(buildExpectedAlbums, chance.d6());

        expectedAlbums.forEach((x) => expectedDistinctAlbumIds.add(x.albumId));

        fetchAllAlbumInformation.mockResolvedValue(expectedAlbums);
    });

    test('should fetchAllAlbumInformation', async () => {
        await fetchAvailableAlbums();

        expect(fetchAllAlbumInformation).toHaveBeenCalledTimes(1);
    });

    test('should return a distinct set of available albumIds', async () => {
        const response = await fetchAvailableAlbums();

        expect(response).toEqual(expectedDistinctAlbumIds);
    })
})
