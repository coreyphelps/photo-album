import {Chance} from 'chance';

import {fetchAvailableAlbums} from '../../src/services/fetch-available-albums.js';
import {availableAlbums} from '../../src/handlers/available-albums.js';
import {printAvailableAlbumsResponse} from '../../src/logging/output-logger.js';

jest.mock('../../src/services/fetch-albums.js');
jest.mock('../../src/services/fetch-available-albums.js');
jest.mock('../../src/logging/output-logger.js');

const chance = new Chance();

describe('availableAlbums', () => {
    let expectedDistinctAlbumIds;

    beforeEach(() => {
        expectedDistinctAlbumIds = chance.string();

        fetchAvailableAlbums.mockResolvedValue(expectedDistinctAlbumIds);
    })

    test('should call to fetchAvailableAlbums', async () => {
        await availableAlbums();

        expect(fetchAvailableAlbums).toHaveBeenCalledTimes(1);
    });

    test('should call to printAvailableAlbumsResponse', async () => {
        await availableAlbums();

        expect(printAvailableAlbumsResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedDistinctAlbumIds);
    })
})