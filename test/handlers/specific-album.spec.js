import {Chance} from 'chance';

import {fetchAlbumInformationById} from '../../src/services/fetch-albums.js';
import {formatResponse} from '../../src/helpers/format-response.js';
import {specificAlbum} from '../../src/handlers/specific-album';
import {printAlbumResponse} from '../../src/logging/output-logger';

jest.mock('../../src/services/fetch-albums.js');
jest.mock('../../src/helpers/format-response.js');
jest.mock('../../src/logging/output-logger.js');

const chance = new Chance();

describe('specificAlbum', () => {
    let expectedAlbumId,
        expectedAlbumInformation,
        expectedFormattedResponse;

    beforeEach(() => {
        expectedAlbumId = chance.natural();
        expectedAlbumInformation = chance.string();
        expectedFormattedResponse = chance.string();

        fetchAlbumInformationById.mockResolvedValue(expectedAlbumInformation);
        formatResponse.mockReturnValue(expectedFormattedResponse);
    });

    test('should call to fetchAlbumInformationById', async () => {
        await specificAlbum(expectedAlbumId);

        expect(fetchAlbumInformationById).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedAlbumId);
    });

    test('should call to formatResponse', async () => {
        await specificAlbum(expectedAlbumId);

        expect(formatResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedAlbumInformation);
    });

    test('should call to printAlbumResponse', async () => {
        await specificAlbum(expectedAlbumId);

        expect(printAlbumResponse).toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith(expectedFormattedResponse);
    })
})