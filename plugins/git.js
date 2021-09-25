const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'imash', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/FB_IMG_1628974202354_1.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*IMASH NIDUSHA FERNANDO*
owner number wa.me/94771323434

FB-https://www.facebook.com/nidusha.fernando

*IMASH BOT කියන්නෙ අවුරුදු 15වේ සූටි කොල්ලෙක්ගෙ නිර්මාණයක්🥶*

*iMASH BOT IS THE NEW SRI LANKAN BOT*
`}) 

}));
