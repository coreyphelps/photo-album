import fetch from 'node-fetch';

import {BASE_URL} from '../constants/constants.js';

export const fetchAlbumInformationById = async (albumId) => {
    return await (await fetch(`${BASE_URL}?albumId=${albumId}`, {
        method: 'GET'
    })).json();
}

export const fetchAlbumsByRange = async (startAlbumId, endAlbumId) => {
    let index = startAlbumId;
    let albums = [];

    while (index <= endAlbumId) {
        const response = await (await fetch(`${BASE_URL}?albumId=${index}`, {
            method: 'GET'
        })).json();

        response.forEach((photo) => albums.push(photo))

        index++;
    }

    return albums;
}

export const fetchAllAlbumInformation = async () => {
    return await (await fetch(`${BASE_URL}`, {
        method: 'GET'
    })).json();
}