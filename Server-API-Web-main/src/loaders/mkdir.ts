import fs from "fs";
export default () => {
  var dirs = [
    "./public",
    "./public/cover",
    "public/coverGrade",
    "public/coverUnit",
    "public/audios",
    "public/audios/game",
    "public/images",
    "public/images/game",
    "public/audios/transcription",
  ];

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
  console.log("created directories");
};
