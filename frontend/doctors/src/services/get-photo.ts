import axios from "axios";

/* eslint-disable */
global.Buffer = global.Buffer || require('buffer').Buffer

const getPhoto = async () => {
    try {
        const response = await axios({
            url: 'http://localhost:8080/upload',
            method: 'GET',
            params: {
                filename: 'c5c30cf655e711351ef565e8ae2ec8bc.jpg'
            },
            responseType: 'blob'
        });

        return URL.createObjectURL(response.data);

        // const base64 = Buffer.from(new Uint8Array(response.data).reduce(
        //     (data, byte) => data + String.fromCharCode(byte),
        //     '',
        // )).toString('base64');

        // return `data:;base64,${base64}`;

    } catch (e) {
        console.error(e);
    }
}

export { getPhoto };