const FileUpload = ({ setPhoto }: { setPhoto: (value: string | any) => any }) => {
    return (
        <div>
            <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => {
                    if (!e.target.files) throw new Error('Invalid file.');
                    setPhoto(e.target.files[0]);
                }}
            />
        </div>
    )
}

export { FileUpload };