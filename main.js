const {exec} = require("child_process");

tokenTemplate = {
    name: 'gcloudAcessToken',
    displayName: "Google Cloud Access Token",
    description: "Generate an access token for calling authenticated Google Cloud endpoints",
    args: [
        {
            displayName: "Path to Google Cloud CLI binary",
            type: 'string',
            defaultValue: `${process.env.HOME}/google-cloud-sdk/bin/gcloud`
        }
    ],
    run: async (_, gcloud) => {
        return await new Promise((resolve, reject) => {
            exec(`${gcloud} auth --quiet print-access-token`, (err, stdout, stderr) => {
                if (err) reject(err);
                resolve(stdout.toString().trim());
            });
        });
    }
}

module.exports.templateTags = [tokenTemplate];

