import  multer from "multer";


var storageCoverGrade = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/coverGrade");
  },
  filename: function (req, file, cb) {
    cb(null, "cover-" + Date.now() + "-" + file.originalname);
  },
});
var storageCoverUnit = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/coverUnit");
  },
  filename: function (req, file, cb) {
    cb(null, "cover-" + Date.now() + "-" + file.originalname);
  },
});
export const uploadCoverGrade = multer({
  storage: storageCoverGrade,
});

export const uploadCoverUnit = multer({
  storage: storageCoverUnit,
});