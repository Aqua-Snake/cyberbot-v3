/* Amalser Bot
Re-edit Amalser
*/

const Amalser = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

Amalser.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Amal
    const buttons = [
        {buttonId: '.update', buttonText: {displayText: '✦COMMAND LIST✦' }, type: 1},
        {buttonId: '.help', buttonText: {displayText: '✦RATE✦' }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.NBOT+'\n\n```'+Config.ALIVEMSG+'\n',
          footerText: 'ᴡʜᴀᴛꜱᴀᴘᴘ ᴀᴋɪɴᴀ ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
