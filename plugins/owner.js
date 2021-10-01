const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*Z BOT Owner Is Imash Nidusha Fernando🥰\n\nපොඩි එකා තමයි කොහොමද දැන ගත්තෙ🙂\n\nමොකක් හරි ප්‍රශ්නයක් නම් wa.me/+94771323424 මේකට මැසේජ් එකක් දාන්න🙂*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*Z BOT Owner is Imash Nidusha Fernando🥰🥰\n\nපොඩි එකා තමයි කොහොමද දැන ගත්තෙ🙂\n\nමොකක් හරි ප්‍රශ්නයක් නම් wa.me/+94771323424 මේකට මැසේජ් එකක් දාන්න🙂*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n--------------------', MessageType.text);
        }
    }));
}
