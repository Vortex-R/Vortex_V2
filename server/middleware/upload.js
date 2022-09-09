import multer from "multer";
export const upload = (fileName, destination) => {
  try {
    const storage = multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, `server/public/${destination}`);
      },

      filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_");
        callback(null, Date.now() + "--" + name);
      },
    });
    return multer({ storage }).single("picture");
  } catch (err) {
    console.log(err.message);
  }
};
