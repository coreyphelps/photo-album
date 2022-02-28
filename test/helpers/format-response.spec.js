import {Chance} from 'chance';

import {formatResponse} from '../../src/helpers/format-response.js';

const chance = new Chance();

describe('formatResponse', () => {
    let responseToFormat,
        expectedAlbumId,
        expectedId,
        expectedTitle,
        expectedNumberOfPhotos,
        expectedFormattedResponse;

    beforeEach(() => {
        expectedAlbumId = chance.d20();
        expectedId = chance.d20();
        expectedTitle = chance.string();
        expectedNumberOfPhotos = chance.d6();

        const buildResponseToFormat = () => ({
            albumId: expectedAlbumId,
            id: expectedId,
            title: expectedTitle
        });

        const buildPhotoObject = () => ({
            id: expectedId,
            title: expectedTitle
        });

        const buildExpectedFormattedResponse = () => ({
            albumId: expectedAlbumId,
            photos: chance.n(buildPhotoObject, expectedNumberOfPhotos)
        })

        responseToFormat = chance.n(buildResponseToFormat, expectedNumberOfPhotos);

        expectedFormattedResponse = [buildExpectedFormattedResponse()];
    });

    test('should return a formattedResponse', () => {
        const formattedResponse = formatResponse(responseToFormat);

        expect(formattedResponse).toStrictEqual(expectedFormattedResponse);
    });
});