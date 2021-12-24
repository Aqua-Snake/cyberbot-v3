

const CBot = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');

if (Config.WORKTYPE == 'private') {

    CBot.addCommand({pattern: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC}, (async (message, match) => {   

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'CyberBot-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('CyberBot-meme.png'), MessageType.image, {filename: 'CyberBot-meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    CBot.addCommand({pattern: 'meme ?(.*)', fromMe: false, desc: Lang.MEMES_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
	 if (match[1].includes('{1}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{1}','');
            bottomText = split[0].replace('{1}','');
        }
	    else {
            topText = match[1].replace('{1}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot1.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{2}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{2}','');
            bottomText = split[0].replace('{2}','');
        } //CyberBot pligin
	    else {
            topText = match[1].replace('{2}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot2.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{3}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{3}','');
            bottomText = split[0].replace('{3}','');
        } //CyberBot pligin
	    else {
            topText = match[1].replace('{3}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot3.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{4}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{4}','');
            bottomText = split[0].replace('{4}','');
        } //CyberBot pligin
	    else {
            topText = match[1].replace('{4}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot4.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	     //CyberBot pligin
	     if (match[1].includes('{5}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{5}','');
            bottomText = split[0].replace('{5}','');
        }
	    else {
            topText = match[1].replace('{5}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
     
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot5.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{6}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{6}','');
            bottomText = split[0].replace('{6}','');
        }
	    else {
            topText = match[1].replace('{6}','');
            bottomText = '';
        }
     
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot6.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{7}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{7}','');
            bottomText = split[0].replace('{7}','');
        }
	    else {
            topText = match[1].replace('{7}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
     //CyberBot pligin
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot7.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{7}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{7}','');
            bottomText = split[0].replace('{7}','');
        }
	    else {
            topText = match[1].replace('{7}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot7.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       } //CyberBot pligin
	    
	     if (match[1].includes('{8}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{8}','');
            bottomText = split[0].replace('{8}','');
        }
	    else {
            topText = match[1].replace('{8}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    //CyberBot pligin
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot8.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	    
	     if (match[1].includes('{9}')) {    
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1].replace('{9}','');
            bottomText = split[0].replace('{9}','');
        }
	    else {
            topText = match[1].replace('{9}','');
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'plk-cyberbot.png',
            topText: topText,
            bottomText: bottomText,
	    fontSize: 150, 	
            font: './uploads/title/cyberbot9.ttf',
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('plk-cyberbot.png'), MessageType.image, {filename: 'cyberbot_meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
       }
	     //CyberBot pligin
	    else {
		     var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'CyberBot-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('CyberBot-meme.png'), MessageType.image, {filename: 'CyberBot-meme.png', mimetype: Mimetype.png, caption: Config.AFN});
            await info.delete();    
        });
    }		    
    }));
}
