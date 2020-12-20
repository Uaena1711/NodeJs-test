const speech = require("@google-cloud/speech").v1p1beta1;

const pathKey = process.env.NODE_ENV? "src/" : ''
const client = new speech.SpeechClient({
  keyFilename: pathKey+ "services/google-api/credentials/speechToText.googleapis.json",
});
const fs = require("fs");
export const trans = async (filename : any, options : any) => {
  var fileName = filename;
  var type = filename.split(".").pop();
  if (!["mp3"].includes(type)) {
    return {
      status: "false",
    };
  }
  const file = fs.readFileSync(fileName);
  const audioBytes = file.toString("base64");
  const audio = {
    content: audioBytes,
  };
  const config = {
    enableWordTimeOffsets: true,
    enableAutomaticPunctuation: true,
    encoding: "MP3",
    sampleRateHertz: 16000,
    languageCode: "en-US",
    model: options,
  };
  const request = {
    audio: audio,
    config: config,
  };
  const [response] = await client.recognize(request);
  let transcriptionArray: { word: any; startTime: string; endTime: string; }[] = [];
  let transcription = "";
  let confidence = "";
  response.results.forEach((result: { alternatives: any[]; }) => {
    result.alternatives.forEach((alternative) => {
      alternative.words.forEach((wordInfo: { startTime: { seconds: any; nanos: number; }; endTime: { seconds: any; nanos: number; }; word: any; }) => {
        const startSecs =
          `${wordInfo.startTime.seconds}` +
          "." +
          wordInfo.startTime.nanos / 100000000;
        const endSecs =
          `${wordInfo.endTime.seconds}` +
          "." +
          wordInfo.endTime.nanos / 100000000;
        let word = {
          word: wordInfo.word,
          startTime: startSecs,
          endTime: endSecs,
        };
        transcriptionArray.push(word);
      });
      transcription += alternative.transcript;
    });
  });

  return {
    transcript: transcription,
    transcriptionArray: transcriptionArray,
  };
};
