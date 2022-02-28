import {fetchAlbumsByRange} from '../services/fetch-albums.js';
import {formatResponse} from '../helpers/format-response.js';
import {printAlbumResponse} from '../logging/output-logger.js';

export const albumRange = async (range) => {
    const [startAlbumId, endAlbumId] = range.split(',');
    const albumInformation = await fetchAlbumsByRange(startAlbumId, endAlbumId);
    const formattedResponse = formatResponse(albumInformation);

    return printAlbumResponse(formattedResponse);
}
