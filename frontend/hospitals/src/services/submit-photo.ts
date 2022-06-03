import axios from "axios";

const submitPhoto = async (photo: string | any) => {
    try {
        const response = await axios({
            url: 'http://localhost:8080/upload',
            method: 'POST',
            data: {
                photo
            }
        });

        console.log(`Response of submitPhoto: ${response.data}`);

    } catch (e) {
        console.error(e);
    }
}

export { submitPhoto };