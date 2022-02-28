import {availableAlbums} from './src/handlers/available-albums.js';
import {allAlbums} from './src/handlers/all-albums.js';
import {specificAlbum} from './src/handlers/specific-album.js';
import {albumRange} from './src/handlers/album-range.js';
import {showHelpMenu} from './src/logging/output-logger.js';

export const start = async () => {
    // eslint-disable-next-line no-undef
    const arg = process.argv.slice(2);
    const operation = arg[0];
    const operationArgument = arg[1];

    switch (operation) {
        case '-h' || '--help':
            showHelpMenu();
            break;
        case '-u' || '--available-albums':
            await availableAlbums();
            break;
        case '-A' || '--all':
            await allAlbums();
            break;
        case '-a':
            await specificAlbum(operationArgument);
            break;
        case '-r':
            await albumRange(operationArgument);
            break;
        default:
            console.log(`\nphoto-album: unrecognized option '${operation}'`);
            return showHelpMenu();
    }
};
