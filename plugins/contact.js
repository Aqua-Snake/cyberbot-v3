const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Asena.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Aqua Snake [OWNER]\n' // full name
            + 'ORG:Aqua Squad;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94764746599:+94 764746599\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "CyberBot [OWNER]", vcard: vcard}, MessageType.contact)
}))
