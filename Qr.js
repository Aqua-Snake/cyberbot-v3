/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./cyberbot/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [3, 3234, 9]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Cyber')}${chalk.blue.bold('Bot')}
${chalk.white.italic('CyberBot String Code Recipient')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('CyberBot String Code: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `CBOT_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('94')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*⚠️  කරුණාකර මෙම කේතය කිසිවෙකු සමඟ බෙදා නොගන්න ' + conn.user.name + '* ⚠️', MessageType.text)
            console.log(
                chalk.blue.bold('ඔබ ස්ථානීය ස්ථාපනය කරන්නේ නම්, ඔබට bot.js node සමඟින් bot ආරම්භ කළ හැක.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Do Not Share This Code With Anyone!*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()
