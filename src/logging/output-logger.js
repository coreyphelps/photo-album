export const showHelpMenu = () => {
    console.log(`\nNAME
    photo-album - prints photo album information
    
DESCRIPTION
    photo-album allows for printing album information on a specific album, range of albums, or all available albums 
    
    options:
        -h, --help                 Show this help menu
        -a [?]                     Choose a specific album to view information on, where ? is the albumId
        -r start,end               Provide a range of albums to view, ex. photo-album -r 1,4
        -u --available-albums      Show a list of albumIds available to choose from
        -A, --all                  Show all albums
    `);
}

export const printAlbumResponse = (formattedResponse) => {
    formattedResponse.forEach((album) => {
        console.log(`\nAlbum ${album.albumId}:`);
        album.photos.forEach((photo) => {
            console.log(`[${photo.id}] ${photo.title}`);
        })
    })
}

export const printAvailableAlbumsResponse = (availableAlbums) => {
    console.log('\nAvailable Albums: ');

    return availableAlbums.forEach((value) => console.log('Album: ', value));
}
