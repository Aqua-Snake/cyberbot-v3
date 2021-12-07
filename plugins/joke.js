/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const CBot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

CBot.addCommand({pattern: 'joke ?(.*)', fromMe: true, desc: 'Get a random joke.'}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply('*Invalid Request*');
	const url = `https://official-joke-api.appspot.com/random_joke`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🗣️ ' + 'Joke:' +'* ```' + json.setup + '```\n\n' +
		'*😆' + 'Punchline:' +'* ```' + json.punchline+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, '*Invalid Request*', MessageType.text);
	}
});
}
else if (Config.WORKTYPE == 'public') {

CBot.addCommand({pattern: 'joke ?(.*)', fromMe: false, desc: 'Get a random joke.'}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply('*Invalid Request*');
	const url = `https://official-joke-api.appspot.com/random_joke`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🗣️ ' + 'Joke:' +'* ```' + json.setup + '```\n\n' +
		'*😆' + 'Punchline:' +'* ```' + json.punchline+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, '*Invalid Request*', MessageType.text);
	}
});

}