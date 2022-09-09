import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/users/image");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    callback(null, Date.now() + "--" + name);
  },
});

module.exports = multer({ storage }).array("files");
