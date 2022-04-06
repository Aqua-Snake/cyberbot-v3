
const CBot = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

let whb = Config.WORKTYPE == 'public' ? false : true

CBot.addCommand({pattern: 'alive ?(.*)', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {


    var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

// send a buttons message
var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Build.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }

    const buttons = [
        {buttonId: BUTTHANDLE + 'version', buttonText: {displayText: "Version" }, type: 1},
        {buttonId: BUTTHANDLE + 'syssts', buttonText: {displayText: "System Status" }, type: 1}
    ]
      
      const buttonMessage = {
          contentText: '```'+Config.NBOT+'\n\n```'+Config.ALIVEMSG+'\n',
          footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛɪᴏɴ',
          buttons: buttons,
         headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))




    CBot.addCommand({pattern: 'syssts', fromMe: whb, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text, {quoted: message.data});
    }));


    CBot.addCommand({pattern: 'version', fromMe: whb, desc: Lang.SYSD_DESC}, (async (message, match) => {

        await message.client.sendMessage(message.jid, 
        `*🧬 Cyber Bot Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        Config.version + 
        `\n\nCheck official website for more updates`
   , MessageType.text, {quoted: message.data});
    
}));

