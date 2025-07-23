const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');
const { FlightBot } = require('./bot/flightBot');
require('dotenv').config();

// Create HTTP server
const server = restify.createServer();
server.listen(3978, () => {
  console.log(`\nBot is running on http://localhost:3978`);
});

// Create adapter
const adapter = new BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword
});

// Create bot instance
const bot = new FlightBot();

// Listen for incoming requests
server.post('/api/messages', (req, res, next) => {
  adapter.processActivity(req, res, async (context) => {
    await bot.run(context);
  });
  next();
});