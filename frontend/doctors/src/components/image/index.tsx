import { useEffect, useState } from "react";
import { getPhoto } from "../../services/get-photo";

const Image = () => {

    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const _photo = await getPhoto();
            if (!_photo) throw new Error('Invalid photo');

            /* @ts-ignore */
            setPhoto(_photo);
        })();
    }, []);

    return <div>
        <img src={photo} width={300} height={300} />
    </div>
}

export { Image };