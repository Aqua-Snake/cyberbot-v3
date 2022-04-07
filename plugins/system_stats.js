
const CBot = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
const os = require('os');
const request = require('request');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

const Language = require('../language');
const Lang = Language.getString('system_stats');

let whb = Config.WORKTYPE == 'public' ? false : true

    //----------DATE SCANNER---

     var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
     const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     var plk_here = new Date().toLocaleDateString(get_localized_date)
     var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'

CBot.addCommand({pattern: 'alive ?(.*)', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid, fs.readFileSync('./media/cyberbot.mp3'), MessageType.audio, {mimetype: 'audio/mp4', ptt:true});

    let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.prepareMessage(message.jid, pp, MessageType.image, { thumbnail: pp })

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
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n```BOT NAME:``` *'+Config.NBOT+'*\n\n🃏 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🍒 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n'+Config.ALIVEMSG+'\n\n🃏 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛɪᴏɴ',
          buttons: buttons,
         headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))
 let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.ALIVEMSG }); });
    }));



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
