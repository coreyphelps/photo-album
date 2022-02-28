import {fetchAvailableAlbums} from '../services/fetch-available-albums.js';
import {printAvailableAlbumsResponse} from '../logging/output-logger.js';

export const availableAlbums = async () => {
    const distinctAlbumIds = await fetchAvailableAlbums();

    return printAvailableAlbumsResponse(distinctAlbumIds);
}
