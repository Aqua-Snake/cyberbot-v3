const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'OWNER'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'WEBSITE'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n```BOT NAME:``` *'+Config.NBOT+'*\n\n🃏 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🍒 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n🃏 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛɪᴏɴ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));


Asena.addCommand({pattern: 'id1 ?(.*)', fromMe:  whb, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid, 'Not Updated', MessageType.text);
  }));

Asena.addCommand({pattern: 'id2 ?(.*)', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid, '```Website : https://aqua-snake.github.io/cyberbot```\n\n```Check our offical website for more updations```\n', MessageType.text);
  }));



