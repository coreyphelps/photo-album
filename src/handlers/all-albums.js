import {fetchAllAlbumInformation} from '../services/fetch-albums.js';
import {formatResponse} from '../helpers/format-response.js';
import {printAlbumResponse} from '../logging/output-logger.js';

export const allAlbums = async () => {
    const albumInformation = await fetchAllAlbumInformation();
    const formattedResponse = formatResponse(albumInformation);

    return printAlbumResponse(formattedResponse);
}
