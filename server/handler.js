const fs = require("fs");
const Buffer = require("buffer").Buffer;
const generate = require("openapi-forge");

module.exports.generate = async (event) => {
  const outputFolder = "/tmp/output";

  const payload = JSON.parse(event.body);

  await generate(
    JSON.parse(payload.schema),
    `./node_modules/openapi-forge-${payload.language}`,
    {
      logLevel: 4,
      skipValidation: true,
      output: outputFolder,
    }
  );

  // iterate over all files in output folder
  const files = fs.readdirSync(outputFolder);
  const response = {};
  files.forEach((file) => {
    const source = fs.readFileSync(`${outputFolder}/${file}`, "utf-8");
    response[file] = Buffer.from(source).toString("base64");
  });

  fs.rmdirSync(outputFolder, { recursive: true });

  console.log(response);

  return {
    statusCode: 200,
    body: JSON.stringify(response, null, 2),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  };
};
