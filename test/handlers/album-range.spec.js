import {Chance} from 'chance';

import {albumRange} from '../../src/handlers/album-range.js';
import {fetchAlbumsByRange} from '../../src/services/fetch-albums.js';
import {formatResponse} from '../../src/helpers/format-response.js';
import {printAlbumResponse} from '../../src/logging/output-logger.js';

jest.mock('../../src/logging/output-logger.js');
jest.mock('../../src/services/fetch-albums.js');
jest.mock('../../src/helpers/format-response.js');

const chance = new Chance();

describe('albumRange', () => {
    let expectedRange,
        expectedAlbums,
        expectedFormattedResponse;

    beforeEach(() => {
        expectedRange = '1,5';
        expectedAlbums = chance.string();
        expectedFormattedResponse = chance.string();

        fetchAlbumsByRange.mockResolvedValue(expectedAlbums);
        formatResponse.mockReturnValue(expectedFormattedResponse);
    });

    test('should call to fetchAlbumsInRange', async () => {
        const [expectedStart, expectedEnd] = expectedRange.split(',');

        await albumRange(expectedRange);

        expect(fetchAlbumsByRange).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedStart, expectedEnd);
    })

    test('should call to formatResponse', async () => {
        await albumRange(expectedRange);

        expect(formatResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedAlbums);
    })

    test('should call to printAlbumResponse', async () => {
        await albumRange(expectedRange);

        expect(printAlbumResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedFormattedResponse);
    })
})