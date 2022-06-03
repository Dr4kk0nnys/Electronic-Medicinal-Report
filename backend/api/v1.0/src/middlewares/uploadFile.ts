import multer from "multer";

const uploading = multer({
    dest: 'public/uploads/',
});

export { uploading };