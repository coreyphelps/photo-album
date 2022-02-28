import {Chance} from 'chance';

import {
    printAlbumResponse,
    printAvailableAlbumsResponse,
    showHelpMenu
} from '../../src/logging/output-logger.js';

const chance = new Chance();

describe('output-logger', () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    describe('showHelpMenu', () => {
        test('should print the help menu via console.log', () => {
            showHelpMenu();

            expect(console.log).toHaveBeenCalledTimes(1);
        });
    })

    describe('printAlbumResponse', () => {
        let expectedFormattedResponse,
            expectedNumberOfPhotos,
            expectedNumberOfAlbums;

        beforeEach(() => {
            expectedNumberOfPhotos = chance.d20();
            expectedNumberOfAlbums = chance.d6();

            const buildExpectedPhotoPayload = () => ({
                id: chance.natural(),
                title: chance.string()
            });

            const buildExpectedAlbumPayload = () => ({
                albumId: chance.natural(),
                photos: chance.n(buildExpectedPhotoPayload, expectedNumberOfPhotos)
            });

            expectedFormattedResponse = chance.n(buildExpectedAlbumPayload, expectedNumberOfAlbums);
        });

        test('should call console.log once for the album and once for every photo in each album', () => {
            printAlbumResponse(expectedFormattedResponse);

            expect(console.log)
                .toHaveBeenCalledTimes(expectedNumberOfAlbums * expectedNumberOfPhotos + expectedNumberOfAlbums);
        });
    });

    describe('printAvailableAlbumsResponse', () => {
        let expectedAvailableAlbums,
            expectedCountOfAvailableAlbums;

        beforeEach(() => {
            expectedCountOfAvailableAlbums = chance.natural({min: 1, max: 10});
            expectedAvailableAlbums = chance.n(chance.string, expectedCountOfAvailableAlbums);
        });

        test('should call console.log once to print "available albums" and once for every album', () => {
            printAvailableAlbumsResponse(expectedAvailableAlbums);

            expect(console.log).toHaveBeenCalledTimes(1 + expectedCountOfAvailableAlbums);
        });
    })
})