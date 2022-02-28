import {Chance} from 'chance';
import fetch from 'node-fetch';

import {
    fetchAlbumInformationById,
    fetchAlbumsByRange,
    fetchAllAlbumInformation
} from '../../src/services/fetch-albums.js';
import {BASE_URL} from '../../src/constants/constants.js';

const chance = new Chance();

jest.mock('node-fetch');

describe('fetch-albums', () => {
    let expectedFetchOptions;

    beforeEach(() => {
        expectedFetchOptions = {
            method: 'GET'
        };
    });

    describe('fetchAlbumInformationById', () => {
        let expectedAlbumId,
            expectedAlbumInformation;

        beforeEach(() => {
            expectedAlbumId = chance.d20();
            expectedAlbumInformation = [chance.string()];

            fetch.mockResolvedValue({
                json: jest.fn().mockResolvedValue(expectedAlbumInformation)
            });
        });

        test('should call fetch for album information by albumId', async () => {
            await fetchAlbumInformationById(expectedAlbumId);

            expect(fetch).toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith(
                    `${BASE_URL}?albumId=${expectedAlbumId}`,
                    expectedFetchOptions
                );
        });

        test('should return the album information', async () => {
            const response = await fetchAlbumInformationById(expectedAlbumId);

            expect(response).toStrictEqual(expectedAlbumInformation);
        });
    });

    describe('fetchAlbumsByRange', () => {
        let expectedAlbumStart,
            expectedAlbumEnd,
            expectedAlbumInformation,
            expectedAlbumFetchResponse,
            expectedFetchAlbumsByRangeResponse;


        beforeEach(() => {
            expectedFetchAlbumsByRangeResponse = [];

            expectedAlbumStart = chance.d4();
            expectedAlbumEnd = chance.d4() + expectedAlbumStart;
            expectedAlbumInformation = chance.string();
            expectedAlbumFetchResponse = [expectedAlbumInformation];

            for (let i = expectedAlbumStart; i <= expectedAlbumEnd; i++) {
                expectedFetchAlbumsByRangeResponse.push(expectedAlbumInformation);
            }

            fetch.mockResolvedValue({
                json: jest.fn().mockResolvedValue(expectedAlbumFetchResponse)
            });
        });

        test('calls fetch for every album between the startAlbumId and endAlbumId', async () => {
            await fetchAlbumsByRange(expectedAlbumStart, expectedAlbumEnd);

            expect(fetch).toHaveBeenCalledTimes(expectedAlbumEnd - expectedAlbumStart + 1);
        });

        test('should return the album information', async () => {
            const response = await fetchAlbumsByRange(expectedAlbumStart, expectedAlbumEnd);

            expect(response).toStrictEqual(expectedFetchAlbumsByRangeResponse);
        });
    });

    describe('fetchAllAlbumInformation', () => {
        let expectedAlbumFetchResponse;

        beforeEach(() => {
            expectedAlbumFetchResponse = chance.string();

            fetch.mockResolvedValue({
                json: jest.fn().mockResolvedValue(expectedAlbumFetchResponse)
            });
        });

        test('should call to fetchAllAlbumInformation', async () => {
            await fetchAllAlbumInformation();

            expect(fetch).toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith(BASE_URL, expectedFetchOptions)
        });

        test('should return the album information', async () => {
            const response = await fetchAllAlbumInformation();

            expect(response).toStrictEqual(expectedAlbumFetchResponse);
        });
    });
});
