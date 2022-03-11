/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/


const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const CBot = require('../events');
const Config = require('../config');

const END = "clear all messages"

CBot.addCommand({pattern: 'clean ', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('Chat clearing...');   
    await message.client.modifyChat (match[1] == '' ? message.jid : match [1], ChatModification.delete);
    await message.sendMessage('🚮 Chat cleared');
}));


CBot.addCommand({pattern: 'del', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  await message.reply_message.delete();

}));
