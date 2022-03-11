const CBot = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');


let whb = Config.WORKTYPE == 'public' ? false : true

CBot.addCommand({pattern: 'helpkit', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
	// send a list message!
    const rows = [
        {title: 'Setvar', description: "Set var in heroku", rowId:"rowid1"},
        {title: 'Alive Message', description: "Change alive message", rowId:"rowid2"},
        {title: 'Blockchat', description: "How to block chats", rowId:"rowid3"},
        {title: 'Gorup helps', description: "Groups commnds", rowId:"rowid4"},
        {title: 'Media helps', description: "media commnds help", rowId:"rowid5"},
        {title: 'Other', description: "For any other help", rowId:"rowid6"},
        {title: 'Support Group', description: Config.GRPLINK }


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
