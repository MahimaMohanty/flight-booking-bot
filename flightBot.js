const { ActivityHandler } = require('botbuilder');

class FlightBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context, next) => {
      const userMessage = context.activity.text;
      await context.sendActivity(`You said: "${userMessage}". Let me help you search for flights.`);
      // Add actual logic later here
      await next();
    });

    this.onMembersAdded(async (context, next) => {
      const welcomeText = 'Welcome to FlightBot! Tell me your destination and date to get started.';
      for (const member of context.activity.membersAdded) {
        if (member.id !== context.activity.recipient.id) {
          await context.sendActivity(welcomeText);
        }
      }
      await next();
    });
  }
}

module.exports.FlightBot = FlightBot;