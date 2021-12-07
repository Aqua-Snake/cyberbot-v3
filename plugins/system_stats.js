/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const CBot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs');


const Language = require('../language');
const Lang = Language.getString('system_stats');


let whb = Config.WORKTYPE == 'public' ? false : true

CBot.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message
    const buttons = [
        {buttonId: '.menu', buttonText: {displayText: 'COMMAND' }, type: 1},
        {buttonId: '.help', buttonText: {displayText: 'Help' }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.ALIVEMSG+'```\n\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n_Type .menu For Command list_\n_Type .help For get help_\n',
          footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛɪᴏɴ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
    CBot.addCommand({pattern: 'sysd', fromMe: whb, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
