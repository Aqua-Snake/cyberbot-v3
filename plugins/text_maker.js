const CBot = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');


const TEXT_MAKER = "Set of commands to convert text into images."
const NEED_WORD =  "*You must enter words!*"

let td = Config.WORKTYPE == 'public' ? false : true

    CBot.addCommand({pattern: 'text_maker', fromMe: td, desc:TEXT_MAKER}, (async (message, match) => {    

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/helloweenfire?text=CyberBot%20%20%20%20%20%20%20%20%20Made%20By%20Toxic%20Devil&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '💻Usage: *.glitch*\nℹ️Desc: It Sends a glitch style image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.pornhub*\nℹ️Desc: It Sends a blackish orange coloured image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.sandwriting*\nℹ️Desc: It Sends a sand image of the text provided.\n\n💻Usage: *.blackpink*\nℹ️Desc: It Sends a blackish pink image of the text provided.\n\n💻Usage: *.lovemsg*\nℹ️Desc: It Sends love message style image of the text provided.\n\n💻Usage: *.grass*\nℹ️Desc: It Sends a grass image of the text provided.\n\n💻Usage: *.blood*\nℹ️Desc: It Sends a blood image of the text provided.\n\n💻Usage: *.romance*\nℹ️Desc: It Sends a green image with love shapes of the text provided.\n\n💻Usage: *.candlemug*\nℹ️Desc: It Sends a mug image of the text provided.\n\n💻Usage: *.snow*\nℹ️Desc: It Sends a snow image of the text provided.\n\n💻Usage: *.cloud*\nℹ️Desc: It Sends a sky image of the text provided\n\n💻Usage: *.underwater*\nℹ️Desc: It Sends a ocean image of the text provided\n\n💻Usage: *.flower*\nℹ️Desc: It Sends a flower image of the text provided\n\n💻Usage: *.burn*\nℹ️Desc: It Sends a half burned paper image of the text provided\n\n💻Usage: *.candy*\nℹ️Desc: It Sends a candy image of the text provided\n\n💻Usage: *.wood*\nℹ️Desc: It Sends a wood carved image of the text provided.\n\n💻Usage: *.latte*\nℹ️Desc: It put the text as latte art within a coffee cup.\n\n💻Usage: *.8bit*\nℹ️Desc: Converts the text into an 8bit style image.\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *.shadow*\nℹ️Desc: Converts the text into shadow themed image.\n\n💻Usage: *.harrypotter*\nℹ️Desc: Converts the text into a harrypotter themed image.\n\n💻Usage: *.sparkling*\nℹ️Desc: Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *.watercolour*\nℹ️Desc: Converts the text into a watercolour themed image.\n\n💻Usage: *.ninjalogo*\nℹ️Desc: Enters the text as the caption for a ninja themed logo.\n\n💻Usage: *.neonlight*\nℹ️Desc: Converts the text into a neonlight themed image.\n\n💻Usage: *.3dtext*\nℹ️Desc: Converts the provided text into a 3D style image.'})

    }));

    CBot.addCommand({pattern: 'glitch ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'blackpink ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/blackpink?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));


    CBot.addCommand({pattern: 'wood ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/woodblock/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: '8bit ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'shadow ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'underwater ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'flower ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'burn ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'candy ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'halloween ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'sparkling ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'watercolour ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'ninjalogo ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'neonlight ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'sandwriting ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=d90a9e986e18778b`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'cloud ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=d90a9e986e18778b`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'pornhub ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/phblogo?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'snow ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'grass ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'candlemug ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'romance ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'lovemsg ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'blood ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: 'blackpink ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/blackpink?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));

    CBot.addCommand({pattern: '3dtext ', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALLCAP})

    }));
