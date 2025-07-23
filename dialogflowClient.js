const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

// Replace with your Dialogflow project ID
const projectId = 'flighbot-wujx';

// Detects intent from a text query
async function detectIntent(query, sessionId) {
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: './your-key-file.json'  // Replace with your actual key filename
  });

  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: 'en-US',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult.fulfillmentText;
}

module.exports = { detectIntent };