import { useEffect, useState } from "react";

import { FileUpload } from "./components/file-upload";
import { SubmitButton } from "./components/submit-button";

function App() {

    const [photo, setPhoto] = useState();

    return (
        <div>
            <h1>Hospitals Frontend</h1>

            {/* TODO: Do we need a <form> ? Or can it just be an axios request ? */}
            <form action="http://localhost:8080/upload" method="post" encType="multipart/form-data">
                <FileUpload setPhoto={setPhoto} />
                <SubmitButton photo={photo} />
            </form>

        </div>
    );
}

export default App;
