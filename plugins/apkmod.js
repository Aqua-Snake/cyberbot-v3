const CBot = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('weather');

let whb = Config.WORKTYPE == 'public' ? false : true

CBot.addCommand({pattern: 'apkmod', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
	// send a list message!
	const rows = [
        {title: 'NOVA LAUNCHER', description: "Set var in heroku", rowId:"rowid1"},
        {title: 'CM LAUNCHER', description: "Change alive message", rowId:"rowid2"},
        {title: 'APEX LAUNCHER', description: "How to block chats", rowId:"rowid3"},
        {title: 'KINEMASTER MOD', description: "Groups commnds", rowId:"rowid4"},
        {title: 'INSHOT MOD', description: "media commnds help", rowId:"rowid5"},
        {title: 'Other', description: "For any other help", rowId:"rowid6"},
        {title: '', description: "", rowId:"rowid7"},
        {title: '', description: "", rowId:"rowid8"},
        {title: '', description: "", rowId:"rowid9"},
        {title: '', description: "", rowId:"rowid10"},
        {title: '', description: "", rowId:"rowid11"},


      ]
       
       const sections = [{title: "*Help Kit For CyberBot*", rows: rows}]
       
       const button = {
        buttonText: 'Get Help',
        description: 'The help for CyberBot Users \n\n   Select what you want....',
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));