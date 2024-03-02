const { Client, Intents } = require('discord.js');
const axios = require('axios');

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    // ... ajoutez d'autres intents selon vos besoins
  ],
});
const PREFIX = ';';
const adminIDs = ['1018206885704372274', '1175520604946968636'];

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  if (message.content.startsWith(PREFIX + 'login')) {
    const args = message.content.slice(PREFIX.length).trim().split(' ');
    const authCode = args[1]; // Assuming the auth code is passed as an argument

    // Call Fortnite API for login (similar to the previous examples)
    // ...

    message.channel.send(`Successfully logged in as ${accountData.displayName}`);
  }

  if (message.content.startsWith(PREFIX + 'duplie')) {
    // Check if the author of the message is an admin
    if (!adminIDs.includes(message.author.id)) {
      message.channel.send('You do not have permission to use this command.');
      return;
    }

    // Call Fortnite API to modify hero loadout
    try {
      const response = await axios.post('https://fortnite-api.com/v2/loadout/change', {
        // Include necessary parameters for modifying hero loadout
        // ...
      });

      if (message.content.startsWith(PREFIX + 'auth')) {
    // Call Fortnite API to get the authentication URL
    try {
      const response = await axios.get('https://fortnite-api.com/v2/auth/url');

      // Handle the response from Fortnite API
      const authURL = response.data.data.url; // Adjust based on the API response structure
      message.author.send(`Voici votre lien d'authentification Fortnite : ${authURL}`);
      message.channel.send('Je vous ai envoyé un message privé avec le lien d\'authentification.');
    } catch (error) {
      console.error('Erreur lors de la récupération du lien d\'authentification:', error.response.data.error);
      message.channel.send('Échec de la récupération du lien d\'authentification. Veuillez réessayer plus tard.');
    }
  }


      // Handle the response from Fortnite API
      const changeResult = response.data; // Adjust based on the API response structure
      if (changeResult.success) {
        message.channel.send('Le loadout de héros a été modifié avec succès.');
      } else {
        message.channel.send('Échec de la modification du loadout de héros. Veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error('Erreur lors de la modification du loadout de héros:', error.response.data.error);
      message.channel.send('Échec de la modification du loadout de héros. Veuillez vérifier les paramètres et réessayer.');
    }
  }
});

client.login('process.env.TOKEN');
