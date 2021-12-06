const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'chem1', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'c2020i'}, type: 1},
        
      ]
      
      const buttonMessage = {
          contentText: "*TITLE:* *📄2020 A/L Chemistry ප්‍රශ්නපත්‍රයේ I කොටස*\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
          footerText: 'Owner CyberBot  ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

WhatsAlexa.addCommand({pattern: 'chem2', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
    // send a buttons message!
        const buttons = [
            {buttonId: 'id1', buttonText: {displayText: 'c2012ii'}, type: 1},
            
          ]
          
          const buttonMessage = {
              contentText: "*TITLE:* *📄Advanced Level Chemistry II 2012 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
              footerText: 'Owner CyberBot  ©',
              buttons: buttons,
              headerType: 1
          }
          
          await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    
    }));

WhatsAlexa.addCommand({pattern: 'chem3', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
    // send a buttons message!
        const buttons = [
            {buttonId: 'id1', buttonText: {displayText: 'c2013i'}, type: 1},
                
            ]
              
        const buttonMessage = {
                contentText: "*TITLE:* *📄Advanced Level Chemistry I 2013 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                footerText: 'Owner CyberBot  ©',
                buttons: buttons,
                headerType: 1
            }
              
            await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
        
    }));


        WhatsAlexa.addCommand({pattern: 'chem5', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
            // send a buttons message!
                const buttons = [
                    {buttonId: 'id1', buttonText: {displayText: 'c2013ii'}, type: 1},
                        
                    ]
                      
                const buttonMessage = {
                        contentText: "*TITLE:* *📄Advanced Level Chemistry II 2013 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                        footerText: 'Owner CyberBot  ©',
                        buttons: buttons,
                        headerType: 1
                    }
                      
                    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                
            }));

            WhatsAlexa.addCommand({pattern: 'chem6', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                // send a buttons message!
                    const buttons = [
                        {buttonId: 'id1', buttonText: {displayText: 'c2014i'}, type: 1},
                            
                        ]
                          
                    const buttonMessage = {
                            contentText: "*TITLE:* *📄Advanced Level Chemistry I 2014 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                            footerText: 'Owner CyberBot  ©',
                            buttons: buttons,
                            headerType: 1
                        }
                          
                        await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                    
                }));

                WhatsAlexa.addCommand({pattern: 'chem7', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                    // send a buttons message!
                        const buttons = [
                            {buttonId: 'id1', buttonText: {displayText: 'c2014ii'}, type: 1},
                                
                            ]
                              
                        const buttonMessage = {
                                contentText: "*TITLE:* *📄Advanced Level Chemistry II 2014 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                footerText: 'Owner CyberBot  ©',
                                buttons: buttons,
                                headerType: 1
                            }
                              
                            await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                        
                    }));
                    
                    WhatsAlexa.addCommand({pattern: 'chem8', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                        // send a buttons message!
                            const buttons = [
                                {buttonId: 'id1', buttonText: {displayText: 'c2015i'}, type: 1},
                                    
                                ]
                                  
                            const buttonMessage = {
                                    contentText: "*TITLE:* *📄Advanced Level Chemistry I 2015 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                    footerText: 'Owner CyberBot  ©',
                                    buttons: buttons,
                                    headerType: 1
                                }
                                  
                                await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                            
                        }));

                        WhatsAlexa.addCommand({pattern: 'chem9', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                            // send a buttons message!
                                const buttons = [
                                    {buttonId: 'id1', buttonText: {displayText: 'c2015ii'}, type: 1},
                                        
                                    ]
                                      
                                const buttonMessage = {
                                        contentText: "*TITLE:* *📄Advanced Level Chemistry II 2015 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                        footerText: 'Owner CyberBot  ©',
                                        buttons: buttons,
                                        headerType: 1
                                    }
                                      
                                    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                
                            }));


                                    WhatsAlexa.addCommand({pattern: 'chem12', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                        // send a buttons message!
                                            const buttons = [
                                                {buttonId: 'id1', buttonText: {displayText: 'c2017i'}, type: 1},
                                                    
                                                ]
                                                  
                                            const buttonMessage = {
                                                    contentText: "*TITLE:* *📄Advanced Level Chemistry I 2017 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                    footerText: 'Owner CyberBot  ©',
                                                    buttons: buttons,
                                                    headerType: 1
                                                }
                                                  
                                                await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                            
                                        }));

                                        WhatsAlexa.addCommand({pattern: 'chem13', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                            // send a buttons message!
                                                const buttons = [
                                                    {buttonId: 'id1', buttonText: {displayText: 'c2017ii'}, type: 1},
                                                        
                                                    ]
                                                      
                                                const buttonMessage = {
                                                        contentText: "*TITLE:* *📄Advanced Level Chemistry II 2017 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                        footerText: 'Owner CyberBot  ©',
                                                        buttons: buttons,
                                                        headerType: 1
                                                    }
                                                      
                                                    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                                
                                            }));

                                            WhatsAlexa.addCommand({pattern: 'chem14', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                                // send a buttons message!
                                                    const buttons = [
                                                        {buttonId: 'id1', buttonText: {displayText: 'c2018i'}, type: 1},
                                                            
                                                        ]
                                                          
                                                    const buttonMessage = {
                                                            contentText: "*TITLE:* *📄Advanced Level Chemistry I 2018 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                            footerText: 'Owner CyberBot  ©',
                                                            buttons: buttons,
                                                            headerType: 1
                                                        }
                                                          
                                                        await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                                    
                                                }));

                                                WhatsAlexa.addCommand({pattern: 'chem15', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                                    // send a buttons message!
                                                        const buttons = [
                                                            {buttonId: 'id1', buttonText: {displayText: 'c2018ii'}, type: 1},
                                                                
                                                            ]
                                                              
                                                        const buttonMessage = {
                                                                contentText: "*TITLE:* *📄Advanced Level Chemistry II 2018 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                                footerText: 'Owner CyberBot  ©',
                                                                buttons: buttons,
                                                                headerType: 1
                                                            }
                                                              
                                                            await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                                        
                                                    }));

                                                    WhatsAlexa.addCommand({pattern: 'chem16', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                                        // send a buttons message!
                                                            const buttons = [
                                                                {buttonId: 'id1', buttonText: {displayText: 'c2019i'}, type: 1},
                                                                    
                                                                ]
                                                                  
                                                            const buttonMessage = {
                                                                    contentText: "*TITLE:* *📄Advanced Level Chemistry I 2019 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                                    footerText: 'Owner CyberBot  ©',
                                                                    buttons: buttons,
                                                                    headerType: 1
                                                                }
                                                                  
                                                                await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                                            
                                                        }));

                                                        WhatsAlexa.addCommand({pattern: 'chem17', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                                            // send a buttons message!
                                                                const buttons = [
                                                                    {buttonId: 'id1', buttonText: {displayText: 'c2019ii'}, type: 1},
                                                                        
                                                                    ]
                                                                      
                                                                const buttonMessage = {
                                                                        contentText: "*TITLE:* *📄Advanced Level Chemistry II 2019 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                                        footerText: 'Owner CyberBot  ©',
                                                                        buttons: buttons,
                                                                        headerType: 1
                                                                    }
                                                                      
                                                                    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                                                
                                                            }));

                                                            WhatsAlexa.addCommand({pattern: 'chem18', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
                                                                // send a buttons message!
                                                                    const buttons = [
                                                                        {buttonId: 'id1', buttonText: {displayText: 'c2020ii'}, type: 1},
                                                                            
                                                                        ]
                                                                          
                                                                    const buttonMessage = {
                                                                            contentText: "*TITLE:* *📄Advanced Level Chemistry II 2020 *\n\n*📂TYPE:* *Pdf*\n*Click..🔽*",
                                                                            footerText: 'Owner CyberBot  ©',
                                                                            buttons: buttons,
                                                                            headerType: 1
                                                                        }
                                                                          
                                                                        await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
                                                                    
                                                                }));
