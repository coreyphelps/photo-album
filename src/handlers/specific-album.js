import {fetchAlbumInformationById} from '../services/fetch-albums.js';
import {formatResponse} from '../helpers/format-response.js';
import {printAlbumResponse} from '../logging/output-logger.js';

export const specificAlbum = async (albumId) => {
    const albumInformation = await fetchAlbumInformationById(albumId);
    const formattedResponse = formatResponse(albumInformation);

    return printAlbumResponse(formattedResponse);
}
