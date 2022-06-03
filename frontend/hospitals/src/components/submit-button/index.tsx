import { submitPhoto } from "../../services/submit-photo";

const SubmitButton = ({ photo }: { photo: string | any }) => {
    return (
        <div>
            <button
                type="submit"
            // onClick={async () => await submitPhoto(photo)}
            >
                Submit
            </button>
        </div>
    )
}

export { SubmitButton };