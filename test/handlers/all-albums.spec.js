import {Chance} from 'chance';

import {allAlbums} from '../../src/handlers/all-albums.js';
import {fetchAllAlbumInformation} from '../../src/services/fetch-albums.js';
import {formatResponse} from '../../src/helpers/format-response.js';
import {printAlbumResponse} from '../../src/logging/output-logger.js';

jest.mock('../../src/services/fetch-albums.js');
jest.mock('../../src/helpers/format-response.js');
jest.mock('../../src/logging/output-logger.js');

const chance = new Chance();

describe('allAlbums', () => {
    let expectedAlbumInformation,
        expectedFormattedResponse;

    beforeEach(() => {
        expectedAlbumInformation = chance.string();
        expectedFormattedResponse = chance.string();

        fetchAllAlbumInformation.mockResolvedValue(expectedAlbumInformation);
        formatResponse.mockReturnValue(expectedFormattedResponse);
    })

    test('should call to fetchAllAlbumInformation', async () => {
        await allAlbums();

        expect(fetchAllAlbumInformation).toHaveBeenCalledTimes(1);
    })

    test('should call to formatResponse', async () => {
        await allAlbums();

        expect(formatResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedAlbumInformation);
    })

    test('should call to printAlbumResponse', async () => {
        await allAlbums();

        expect(printAlbumResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedFormattedResponse);
    })
})