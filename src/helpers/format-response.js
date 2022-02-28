export const formatResponse = (response) => {
    let photos = [];

    return response.reduce((acc, {albumId, id, title}) => {
        if (acc.length === 0) {
            photos.push({id, title});

            acc.push({albumId, photos});

            return acc;
        }

        if (albumId !== acc[acc.length - 1].albumId) {
            photos = [];
            photos.push({id, title});

            acc.push({albumId, photos});
        } else {
            photos.push({id, title});
        }

        return acc;
    }, []);
}
