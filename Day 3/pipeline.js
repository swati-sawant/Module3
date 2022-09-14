const { pipeline } = require("stream");
const fs = require("fs");
const zlib = require("zlib");

pipeline(
  fs.createReadStream("filewrite"),
  zlib.createGzip(),
  fs.createWriteStream("fileWrite"),
  (err) => {
    if (err) {
      console.error("Pipeline failed", err);
    } else {
      console.log("Pipeline succeeded !!");
    }
  }
);
