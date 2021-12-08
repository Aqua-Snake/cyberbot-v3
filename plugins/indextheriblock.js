
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System
const INBO1 = "_~~~••• CyberBot_V3 •••~~~_* \n\n\n *i am blocking you.* \n\n *REASON:THERI ITTATH KOND🖐🏻🖐🏻"
 if (Config.INBO1 == 'true') {
Asena.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('huththa')
        let regexb2ichu = new RegExp('pakaya')
        let regexb3ichu = new RegExp('hukanna')
        let regexb4ichu = new RegExp('ponnaya')
        let regexb5ichu = new RegExp('kariya')
        let regexb6ichu = new RegExp('huttige putha')
        let regexb7ichu = new RegExp('paraya')
        let regexb8ichu = new RegExp('kamriya')
// export data 
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb7ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb8ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}
