/* Codded by Phaticusthiccy
Unlimited API for Photooxy, Textpro and Instagram scraper.
Material: https://www.npmjs.com/package/textmaker-thiccy
Github: https://github.com/phaticusthiccy/TextMaker-Unlimited
This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const CBot = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

CBot.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şeytan Temalı Logo Yapar.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Ayı İkonu İçeren Logo Yapar.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = '2. Bir Neon Efekti İçeren Logo Yapar.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Yıldırım Temalı Logo Yapar.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Temalı Logo Yapar.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Temalı Logo Yapar.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Parıltı Temalı Logo Yapar.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Bokeh Efekti İçeren Logo Yapar.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Kurt İkonu İçeren Logo Yapar.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Siyah Beyaz Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Renkli Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Avengers Logosu Yapar.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Temalı Logo Yapar.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = '2. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Aslan Temalı Logo Yapar.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = '3. Bir Neon Temalı Logo Yapar.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Buz Temalı Logo Yapar.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Uzay Temalı Logo Yapar.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Duman Efekti İçeren Logo Yapar.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Temalı Logo Yapar.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html
        t25 = 'Alev Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = '4. Bir Neon Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Mezarlık Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Kupa Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '💻 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    }
    const msg = command_cmd + '```.textdevil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil Cyber Bot_\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear Cyber Bot_\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf Developer;Cyber Bot_\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon Cyber Bot_\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon Cyber Bot_\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon Cyber Bot_\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon Cyber Bot_\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight Cyber Bot_\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker Cyber Bot_\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja Developer;Cyber Bot_\n\n' +
        command_cmd + '```.textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textglitter Cyber Bot_\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh Cyber Bot_\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel Developer;Cyber Bot_\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel Developer;Cyber Bot_\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers Developer;Cyber Bot_\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf Developer;Cyber Bot_\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf Developer;Cyber Bot_\n\n' +       
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion Developer;Cyber Bot_\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice Cyber Bot_\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace Developer;Cyber Bot_\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke Cyber Bot_\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textglow Cyber Bot_\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire Cyber Bot_\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry Cyber Bot_\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup Cyber Bot_\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery Cyber Bot_\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch Developer;Cyber Bot_'
    await message.client.sendMessage(message.jid,msg+'\n💻Usage: *.glitch*\nℹ️Desc: It Sends a glitch style image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.pornhub*\nℹ️Desc: It Sends a blackish orange coloured image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.sandwriting*\nℹ️Desc: It Sends a sand image of the text provided.\n\n💻Usage: *.blackpink*\nℹ️Desc: It Sends a blackish pink image of the text provided.\n\n💻Usage: *.lovemsg*\nℹ️Desc: It Sends love message style image of the text provided.\n\n💻Usage: *.grass*\nℹ️Desc: It Sends a grass image of the text provided.\n\n💻Usage: *.blood*\nℹ️Desc: It Sends a blood image of the text provided.\n\n💻Usage: *.romance*\nℹ️Desc: It Sends a green image with love shapes of the text provided.\n\n💻Usage: *.candlemug*\nℹ️Desc: It Sends a mug image of the text provided.\n\n💻Usage: *.snow*\nℹ️Desc: It Sends a snow image of the text provided.\n\n💻Usage: *.cloud*\nℹ️Desc: It Sends a sky image of the text provided\n\n💻Usage: *.underwater*\nℹ️Desc: It Sends a ocean image of the text provided\n\n💻Usage: *.flower*\nℹ️Desc: It Sends a flower image of the text provided\n\n💻Usage: *.burn*\nℹ️Desc: It Sends a half burned paper image of the text provided\n\n💻Usage: *.candy*\nℹ️Desc: It Sends a candy image of the text provided\n\n💻Usage: *.wood*\nℹ️Desc: It Sends a wood carved image of the text provided.\n\n💻Usage: *.latte*\nℹ️Desc: It put the text as latte art within a coffee cup.\n\n💻Usage: *.8bit*\nℹ️Desc: Converts the text into an 8bit style image.\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *.shadow*\nℹ️Desc: Converts the text into shadow themed image.\n\n💻Usage: *.harrypotter*\nℹ️Desc: Converts the text into a harrypotter themed image.\n\n💻Usage: *.sparkling*\nℹ️Desc: Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *.watercolour*\nℹ️Desc: Converts the text into a watercolour themed image.\n\n💻Usage: *.ninjalogo*\nℹ️Desc: Enters the text as the caption for a ninja themed logo.\n\n💻Usage: *.neonlight*\nℹ️Desc: Converts the text into a neonlight themed image.\n\n💻Usage: *.3dtext*\nℹ️Desc: Converts the provided text into a 3D style image.', MessageType.text,{contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "CYBERBOT TEXT MAKER", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/CyberBot.jpg')}}}});

}));
CBot.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
    })
}));
CBot.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
CBot.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: 'Made by Cyber Bot' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
