import {fetchAllAlbumInformation} from './fetch-albums.js';

export const fetchAvailableAlbums = async () => {
    const distinctAlbumIds = new Set();
    const response = await fetchAllAlbumInformation();

    response.forEach((r) => distinctAlbumIds.add(r.albumId))

    return distinctAlbumIds;
}
