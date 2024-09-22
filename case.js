require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const nodemailer = require('nodemailer')
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const cheerio = require('cheerio');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const qs = require('qs');

module.exports = async (Rifky, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Rifky.user.id.split(':')[0]+'@s.whatsapp.net' || Rifky.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Rifky.decodeJid(Rifky.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Rifky.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

try {
ppuser = await Rifky.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: 0,
}
} catch (err) {
console.log(err)
} 

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

    const antibott = JSON.parse(fs.readFileSync("./database/antibot.json"))
const antibot = m.isGroup ? antibott.includes(from) : false
    const antisaluran = JSON.parse(fs.readFileSync("./database/antisaluran.json"))
const antisalur = m.isGroup ? antibott.includes(from) : false
const antiiphone = JSON.parse(fs.readFileSync("./database/antiiphone.json"))
const antiipon = m.isGroup ? antibott.includes(from) : false
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const prem = m.isGroup ? premium.includes(from) : false
const isPremium = isCreator || premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const qsal = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: `${namabot} | 2022 - 2025`
}}}
const reply = (teks) => { 
Rifky.sendMessage(from, { text: teks, contextInfo:{
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: channelname,
newsletterJid: channeljid,
}, externalAdReply: { showAdAttribution: true,
mediaType:  1,
previewType: 0,
renderLargerThumbnail: true,
mediaUrl: `https://wa.me/` + `${global.owner}`,
title: `MichieAI Always Your Number 1`,
sourceUrl: `https://wa.me/${global.owner}`, 
thumbnail: fkethmb
}
}},{quoted:qsal})
 }

function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

const conversationState = {}; 
// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

async function ttsEmma(teks) {
    const url = 'https://wavel.ai/wp-json/myplugin/v1/tts';
    const data = new URLSearchParams({
        lang: 'id-ID',
        text: teks,
        voiceId: 'en-US-EmmaMultilingualNeural'
    });

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const base64Audio = jsonResponse.base64Audio;

            const audioData = Buffer.from(base64Audio, 'base64');

            const fs = require('fs');
            const audioFilePath = 'output.wav';
            fs.writeFileSync(audioFilePath, audioData);

            Rifky.sendMessage(m.chat,{audio: fs.readFileSync(audioFilePath), mimetype: 'audio/mp4' })
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
    
    async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const Lorenzoyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Hann',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            Lorenzoyresult.push(result)
        }
    resolve(Lorenzoyresult)
    })
}
    
async function generateStableDiffusionImage(prompt, negativePrompt) {
  const url = 'https://stablediffusionapi.com/api/v3/text2img';
  
  const requestBody = {
    key: "JPhlaRuuNneQF8VVyZLQiufZigBVsKwJvBqNMaIE5SUNsWoQUUBCHni4ps2F",
    prompt: prompt,
    negative_prompt: negativePrompt,
    width: "512",
    height: "512",
    samples: "1",
    num_inference_steps: "20",
    seed: null,
    guidance_scale: 7.5,
    webhook: null,
    track_id: null
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.fetch_result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

async function fetchModelLabResult(url) {
  const apiKey = 'JPhlaRuuNneQF8VVyZLQiufZigBVsKwJvBqNMaIE5SUNsWoQUUBCHni4ps2F';
  
  const requestBody = {
    key: apiKey
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ada masalah dengan operasi fetch:", error);
    throw error;
  }
}

async function generateAndFetchImage(prompt, negativePrompt) {
  try {
    // Generate image and get fetch_result URL
    const fetchResultUrl = await generateStableDiffusionImage(prompt, negativePrompt);
    
    if (!fetchResultUrl) {
      throw new Error("Failed to generate image");
    }

    console.log("Fetch Result URL:", fetchResultUrl);

    // Wait for 20 seconds
    console.log("Waiting for 20 seconds...");
    await new Promise(resolve => setTimeout(resolve, 7000));
    console.log("Wait complete. Fetching result...");

    // Fetch the result using the fetch_result URL
    let result = await fetchModelLabResult(fetchResultUrl);
    
    // Remove the 'tip' property from the result
    if (result && typeof result === 'object') {
      delete result.tip;
    }
    
    return result;
  } catch (error) {
    console.error("Error in generateAndFetchImage:", error);
    throw error;
  }
}

//cara penggunaannya 
//const prompt = "1girl, 8k";
//const negativePrompt = "naked, anime";

//return generateAndFetchImage(prompt, negativePrompt)
   
async function getLibraryInfo(libraryName) {
  try {
    const response = await fetch(`https://api.cdnjs.com/libraries?search=${encodeURIComponent(libraryName)}&fields=name,description,version,author,license,homepage,repository`);
    if (!response.ok) {
      throw new Error('Respons jaringan tidak berhasil');
    }
    const data = await response.json();
    
    const libraryInfo = data.results.find(lib => lib.name.toLowerCase() === libraryName.toLowerCase());
    
    if (libraryInfo) {
      return JSON.stringify({
        nama: libraryInfo.name,
        deskripsi: libraryInfo.description,
        versiTerbaru: libraryInfo.version,
        lisensi: libraryInfo.license,
        author: libraryInfo.author,
        urlRepository: libraryInfo.repository?.url || 'Tidak tersedia',
        urlHomepage: libraryInfo.homepage
      }, null, 2);
    } else {
      return JSON.stringify({
        error: `Informasi untuk library '${libraryName}' tidak ditemukan`
      }, null, 2);
    }
  } catch (error) {
    return JSON.stringify({
      error: `Error saat mengambil informasi untuk library '${libraryName}': ${error.message}`
    }, null, 2);
  }
}

//cara penggunaannya 
//return getLibraryInfo('axios')
    
async function detailAnime(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const title = $('h1.entry-title').text().trim();
    const author = 'shannz';
    const image = $('.thumb img').attr('src');
    const rating = $('.rtg span[itemprop="ratingValue"]').text().trim();
    const description = $('.entry-content-single').text().trim();
    
    const genres = [];
    $('.genre-info a').each((i, el) => {
      genres.push($(el).text().trim());
    });

    const episodes = [];
    $('.lstepsiode.listeps li').each((i, el) => {
      const episodeNumber = $(el).find('.epsright .eps a').text().trim();
      const episodeTitle = $(el).find('.epsleft .lchx a').text().trim();
      const episodeUrl = $(el).find('.epsleft .lchx a').attr('href');
      const episodeDate = $(el).find('.epsleft .date').text().trim();
      
      episodes.push({
        number: episodeNumber,
        title: episodeTitle,
        url: episodeUrl,
        date: episodeDate
      });
    });

    return {
      author,
      title,
      image,
      rating,
      description,
      genres,
      episodes
    };
  } catch (error) {
    console.error('Error scraping anime:', error);
    return null;
  }
}

//contoh penggunaannya
//return detailAnime('https://samehadaku.email/anime/ahiru-no-sora/')
    
/*
base website: https://filmapik.pet/
page maksimal sampai 2239, default 1
scraping by hann, minimal kalo mau recode kasih credit 🗿
*/

async function Filmapik(page = 1) {
  if (page > 2239) {
    throw new Error('Nomor halaman tidak valid. Halaman maksimum adalah 2239.');
  }

  const baseUrl = 'https://filmapik.pet/trending-2';
  const url = page === 1 ? baseUrl : `${baseUrl}/page/${page}`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const movies = [];

    $('.items.normal article').each((index, element) => {
      const $element = $(element);
      const movie = {
        author: 'shannz',
        title: $element.find('.data h3 a').attr('title'),
        poster: $element.find('.poster img').attr('src'),
        rating: $element.find('.rating').text(),
        quality: $element.find('.quality').text(),
        type: $element.hasClass('tvshows') ? 'TV Show' : 'Movie',
        link: $element.find('.data h3 a').attr('href')
      };
      movies.push(movie);
    });

    return movies;

  } catch (error) {
    return(`Error saat scraping halaman ${page}:`, error.message);
    return [];
  }
}

//cara penggunaannya
//return Filmapik(5)
    
/*
base website: https://dramaqu.hair/
page maksimal sampai 40, default 1
scraping by hann
*/

async function scrapeDramaqu(page = 1) {
  try {
    if (page < 1 || page > 40) {
      throw new Error('Halaman harus antara 1 dan 40');
    }

    const url = `https://dramaqu.hair/drama/page/${page}/`;
    
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const dramas = [];
    $('.items .item.tvshows').each((index, element) => {
      const $element = $(element);
      const drama = {
        title: $element.find('.serie-title').text().trim(),
        image: $element.find('.poster img').attr('src'),
        type: $element.find('.features-type b').text(),
        year: $element.find('.features-status b').text(),
        link: $element.find('a').attr('href')
      };
      dramas.push(drama);
    });

    const result = {
      author: 'shannz',
      page: page,
      data: dramas
    };

    return(JSON.stringify(result, null, 2));

  } catch (error) {
    const errorResult = {
      status: 'error',
      message: 'Terjadi kesalahan saat scraping',
      page: page,
      error: error.message
    };

    return(JSON.stringify(errorResult, null, 2));
  }
}

//cara penggunaan
//return scrapeDramaqu(2);
    
const axios = require('axios');
const cheerio = require('cheerio');
// wm avs
async function os(av) {
    const url = `https://www.zerochan.net/search?q=${encodeURIComponent(av)}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const imageUrls = [];
// wm avz
        $('.thumb img').each((index, element) => {
            const imgUrl = $(element).attr('data-src') || $(element).attr('src');
            if (imgUrl) {
                imageUrls.push(imgUrl);
            }
        });
// wm avs
        return imageUrls;
    } catch (error) {
        console.error('Error:', error);
    }
}

// avosky
//os('yaoi')
    
    async function avz(input) {
  function* messageGenerator(role, content) {
    yield { role, content };
  }
//avs
  const messages = [...messageGenerator("assistant", "Saya Adalah avosky Saya Tinggal Di sebuah kota yang bernama isekai"),
                    ...messageGenerator("user", input)];

  async function fetchChatResponse(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTPErr: ${response.status}`);
    }
    return await response.json();
  }
//avs
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages })
    };
//avs
    const data = await fetchChatResponse("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", requestOptions);
//avs
    return data.answer;
  } catch (error) {
    console.error("An error:", error);
    throw new Error(`gawgal: ${error.message}`);
  }
}
// contoh penggunaan 
//avz('perkenalkan dirimu')
    
    async function avzzz(query) {
  const url = new URL('https://www.google.com/search');
  url.searchParams.append('q', query);
//avz
  const requestConfig = {
    method: 'GET',
    url: url.toString(),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };
//avz
  const AvOsky = html => cheerio.load(html);
//avz
  const extractResults = ($, selector) => {
    const results = [];
    $(selector).each((_, element) => {
      const title = $(element).find('h3').text().trim();
      const link = $(element).find('a').attr('href');
      const snippet = $(element).find('.IsZvec').text().trim();

      if (title && link) {
        results.push({ title, link, snippet });
      }
    });
    return results;
  };
//avz
  try {
    const response = await axios(requestConfig);
    const $ = AvOsky(response.data);
    const results = extractResults($, 'div.g');

    return results;
  } catch (error) {
    console.error(`Error Dlu Tuan: ${error.message}`);
    return [];
  }
}
//avz
// cara gunakan 
//avzzz('game seru')
    
    async function snekVid(videoUrl) {
    try {
        const formData = new URLSearchParams({ id: videoUrl });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };
        const { data } = await axios.post('https://getsnackvideo.com/results', formData, { headers });
        const result = ParseData(data);
        return result;
    } catch (error) {
        return KaloError(error);
    }
}
// wm avs
function ParseData(html) {
    const $ = cheerio.load(html);
    const result = {
        status: 200,
        thumbnail: $('.img_thumb img').attr('src'),
        noWatermarkVideo: $('a.download_link.without_watermark').attr('href'),
    };
    if (!result.noWatermarkVideo) {
        return { status: 404, message: 'Video Gada' };
    }
    return result;
}
// wm avs
function KaloError(error) {
    console.error('Error Request:', error.message || error);
    return {
        status: error.response ? error.response.status : 500,
        message: error.message || 'Tetiba Error',
    };
}
// wm avs
//snekVid('https://s.snackvideo.com/p/Ijr7ysPz')
    
    async function aavzx(url) {
    // wm avosky
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error('Error fetching search page:', error);
        throw error;
    }
}
function parseSearchResults(html) {
    // wm avosky
    const $ = cheerio.load(html);
    const results = [];

    $('.search-story-item').each((_, element) => {
        const title = $(element).find('.item-title').text().trim();
        const link = $(element).find('.item-title').attr('href');
        const description = $(element).find('.item-chapter').text().trim();
        const latestChapter = description;

        if (title) {
            results.push({ title, description, latestChapter, link });
        }
    });

    return results;
}
async function aavzxc(query) {
    // wm avosky
    const encodedQuery = encodeURIComponent(query);
    const searchUrl = `https://manganelo.com/search/story/${encodedQuery}`;

    try {
        const html = await aavzx(searchUrl);
        return parseSearchResults(html);
    } catch (error) {
        console.error('Error during search:', error);
        return [];
    }
}

// Contoh makek
//aavzxc('naruto')
    
async function getAudio(lang, text, voiceId) {
    const url = 'https://wavel.ai/wp-json/myplugin/v1/tts';
    const data = {
        lang: lang,
        text: text,
        voiceId: voiceId
    };
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest'
    };

    try {
        let response = await axios.post(url, qs.stringify(data), { headers: headers });
        let { base64Audio } = response.data;
        let result = Buffer.from(('data:audio/mpeg;base64,' + base64Audio).split(',')[1], 'base64');

// audio buffer langsung aja :v
        return result;
    } catch (error) {
        console.error("Error fetching audio:", error);
        throw error;
    }
}

async function getModelIdVoice() {
    try {
        let response = await axios.get('https://wavel.ai/solutions/text-to-speech/anime-text-to-speech');
        let $ = cheerio.load(response.data);
        const options = $('#dropdown option');
        let modelIds = [];

        options.each((index, element) => {
            const idValue = $(element).attr('value');
            modelIds.push(idValue);
        });
        return modelIds;
    } catch (error) {
        console.error("Error fetching model IDs:", error);
        throw error;
    }
}

async function getLanguage() {
    try {
        let response = await axios.get('https://wavel.ai/solutions/text-to-speech/anime-text-to-speech');
        let $ = cheerio.load(response.data);
        let bahasa = {};

        $('.button-languagues').each((index, element) => {
            const lang = $(element).data('lang');
            const id = $(element).attr('id');
            bahasa[id] = lang;
        });
        return bahasa
    } catch (error) {
        console.error("Error fetching Language:", error);
        throw error;
    }
}
    
async function pixiv(word) {
  var { get } = require("axios")
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}

async function mediafire(url) {
  let { load } = require("cheerio")
  let { get } = require("axios")
  let { data } = await get(url), $ = load(data), urlFile = $('a#downloadButton').attr('href'), sizeFile = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', ''), split = urlFile.split('/'), nameFile = split[5]
  mime = nameFile.split('.')
  mime = mime[1]
  let result = {
    title: nameFile,
    size: sizeFile,
    url: urlFile
  }
  return result
}
    
    async function search(q) {
  let { data } = await axios.get("https://registry.npmjs.org/" + q)
  let versions = data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: q,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: data.time.created,
    latestPublishTime: data.time[verLatest]
  }
}
    
    async function stalkig(q) {
      let { get } = require("axios")
      let { load } = require("cheerio")
try {
    var { data } = await get("https://tools.revesery.com/stalkig/revesery.php?username=" + q)
    var $ = load(data)
    let c = []
    $("p").each(function(a, b) {
        let x = $(b).text().trim()
        c.push(x)
    })
    let username = c[0].replace("👤 Username: ", "")
    let fullname = c[1].replace("🧑‍🎓 Full name: ", "")
    let bio = c[2].replace("📖 Bio: ", "")
    let followers = c[3].replace("👥 Followers: ", "")
    let following = c[4].replace("👫 Following: ", "")
    let post_count = c[5].replace("📷 Posts count: ", "")
    let image = $("a").attr("href")
    return ({
    creator: "Hann",
    status: 200,
    result: {
        username,
        fullname,
        bio,
        followers,
        following,
        post_count,
        image
    }
    })
} catch (e) {
console.log(e)
}
}
async function spaceX() {
    try {
        const response = await axios.get('https://www.spacex.com/updates/');
        const $ = cheerio.load(response.data);

        return {
                author: 'Hann',
                data: $('.item')
            .map((index, element) => ({
                date: $(element).find('.date').text().trim(),
                label: $(element).find('.label').text().trim(),
                contents: $(element).find('.contents').text().trim(),
                imageUrl: "https://www.spacex.com/" + $(element).find('.u-fullParent').attr('style').match(/url\(['"]?([^'"\)]+)['"]?\)/)[1]
            }))
            .get()};
        
    } catch (error) {
        throw new Error(`${error}`);
    }
}

//cara penggunaannya 
//return spaceX()
async function pixivv(word) {
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };

  const { data } = await axios.get(url, { params, headers });
  
  const illusts = data.body.illusts;
  const promises = illusts.map(async (illust) => {
    try {
      const imgResponse = await axios.get(illust.url, { headers, responseType: 'arraybuffer' });
      return {
        title: illust.title,
        tags: illust.tags,
        alt: illust.alt,
        upload: new Date(illust.upload_timestamp * 1000).toLocaleString(),
        image: imgResponse.data
      };
    } catch (e) {
      return {
        title: illust.title,
        tags: illust.tags,
        alt: illust.alt,
        upload: new Date(illust.upload_timestamp * 1000).toLocaleString(),
        image: e.response.data
      };
    }
  });

  const result = await Promise.all(promises);
  return result;
}
    
async function kodePos(query) {
    const baseUrl = `https://kodeposku.com/cari?q=${query}`;
    let currentPage = 1;
    let totalResults = 0;
    let allData = [];

    async function fetchPage(page) {
        try {
            const url = `${baseUrl}&page=${page}`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            if (totalResults === 0) {
                const totalResultsText = $('p.text-muted-foreground.text-center').text();
                const resultsMatch = totalResultsText.match(/Terdapat\s+(\d+)/);
                if (resultsMatch) totalResults = parseInt(resultsMatch[1]);
            }

            const rows = $('tbody tr');
            rows.each((index, element) => {
                const kodePos = $(element).find('td').eq(0).text().trim();
                const kelurahan = $(element).find('td').eq(1).text().trim();
                const kecamatan = $(element).find('td').eq(2).text().trim();
                const kabupaten = $(element).find('td').eq(3).text().trim();
                const provinsi = $(element).find('td').eq(4).text().trim();

                allData.push({ kodePos, kelurahan, kecamatan, kabupaten, provinsi });
            });

            if (rows.length > 0) {
                currentPage++;
                await fetchPage(currentPage);
            }

        } catch (error) {
            console.error('Error fetching page:', error);
        }
    }

    await fetchPage(currentPage);

    return {
        totalResults,
        allData
    };
}

//return await scrapeKodePos('martapura')

async function zerochan(search) {
    const url = `https://www.zerochan.net/search?q=${encodeURIComponent(search)}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const imageDetails = [];

        $('.thumb img').each((index, element) => {
            const imgUrl = $(element).attr('data-src') || $(element).attr('src');
            const link = $(element).closest('a').attr('href');
            const title = $(element).attr('alt');

            if (imgUrl && link && title) {
                imageDetails.push({
                    id: `https://www.zerochan.net${link}`,
                    title: title,
                    imgUrl: imgUrl
                });
            }
        });

        return imageDetails;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function zerochanDetail(url) {
  try {
    const { data } = await axios.get(`${url}`);
    const $ = cheerio.load(data);

    const scriptContent = $('script[type="application/ld+json"]').html();
    const jsonData = JSON.parse(scriptContent);

    const title = jsonData.name;
    const downloadLink = jsonData.contentUrl;

    return { title, downloadLink };
  } catch (error) {
    console.error('Error:', error);
  }
}

//return await zerochan("hoshino ruby")
//return await zerochanDetail("https://www.zerochan.net/3847578")
async function liveChart(search) {
    try {
        const url = `https://www.livechart.me/search?q=${encodeURIComponent(search)}`;
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const results = [];

        $('.grouped-list-item').each((index, element) => {
            const title = $(element).attr('data-title');
            const link = `https://www.livechart.me${$(element).find('a').attr('href')}`;
            results.push({ title, link });
        });

        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

//return await liveChart("oshi no ko");

async function myanimelistDetail(url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!/myanimelist\.net\/anime/gi.test(url)) reject("Invalid URL");
      const res = await fetch(url).then((v) => v.text());
      const $ = cheerio.load(res);
      const BASE_URL = "https://myanimelist.net";
      const data = {
        title: $("h1.title-name > strong").text().trim(),
        synopsis: $("p[itemprop='description']").text().trim(),
        imageUrl: $("img.lazyload").first().attr("data-src"),
        score: $("div.score-label").text().trim(),
        details: {},
        characters: [],
      };

      $("div.spaceit_pad").each((i, el) => {
        const detail = $(el).text().split(":");
        if (detail[0] && detail[1]) {
          data.details[detail[0].trim()] = detail[1].trim();
        }
      });

      Object.keys(data.details).forEach(key => {
        data.details[key] = data.details[key].replace(/\s+/g, ' ').trim();
      });

      $("div.detail-characters-list")
        .find("table")
        .each((i, el) => {
          const char = {};
          const td = $(el).find("td");
          char.name = $(td)
            .find('td.borderClass a[href*="/character/"]')
            .text()
            .trim();

          char.role = $(td)
            .find("small")
            .text()
            .trim()
            .replace("Japanese", "");

          let link = $(td)
            .find('td.borderClass a[href*="/character/"]')
            .attr("href");
          
          if (link && !link.startsWith(BASE_URL)) {
            char.link = BASE_URL + link;
          } else {
            char.link = link; 
          }

          let image = $(td)
            .find("div.picSurround img")
            .attr("data-src");

          if (image) {
            char.image = image.split("?")[0].replace(/\/r\/\d+x\d+/gi, "");
          }

          if (char.name && char.link && char.image) {
            data.characters.push(char);
          }
        });

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

//return await myanimelistDetail("https://myanimelist.net/anime/52034/");
async function avzl() {
  try {
    const res = await fetch('https://dailynewsindonesia.com/rss');
    const $ = cheerio.load(await res.text(), { xmlMode: true });
// wm
    const channel = {
      title: $('channel > title').text(),
      description: $('channel > description').text(),
      link: $('channel > link').text(),
      image: $('channel > image > url').text(),
    };
// wm
    const items = $('item').map((_, el) => ({
      title: $(el).find('title').text(),
      link: $(el).find('link').text(),
      description: $(el).find('description').text(),
      pubDate: $(el).find('pubDate').text(),
      image: $(el).find('enclosure').attr('url') || null
    })).get();
// wm avz
 return { channel, total: items.length, data: items };
  } catch {
    return { message: 'Something went wrong' };
  }
}
// wm avz
//avzl();
async function konto() {
    try {
        const { data } = await axios.get('https://www.kontan.co.id/', {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 12; Infinix X682B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
            }
        });
// wm avz
        const $ = cheerio.load(data);
        return $("div.news-list > ul > li").map((i, el) => ({
            berita: $(el).find("h1").text(),
            berita_url: $(el).find("a").attr("href"),
            berita_thumb: $(el).find("img").attr("data-src"),
            berita_jenis: $(el).find(".link-orange").text(),
            berita_diupload: $(el).find(".box-news.fleft").text().split('|')[1]?.trim()
        })).get().filter(v => v.berita);
    } catch (error) {
        return error;
    }
}
// wm avz
//konto();
async function metro() {
    try {
        const { data } = await axios.get('https://www.metrotvnews.com/news');
        const $ = cheerio.load(data);
// wm avz
        const result = $('body > div.container.layout > section.content > div > div.item-list.pt-20 > div')
            .map((i, el) => {
                const imgSrc = $(el).find('img').attr('src');
                return {
                    judul: $(el).find('h3 > a').attr('title'),
                    link: 'https://www.metrotvnews.com' + $(el).find('h3 > a').attr('href'),
                    thumb: imgSrc ? imgSrc.replace('w=300', 'w=720') : null,           
                };
            })
            .get();
// wm avz
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
// wm avz
//metro();
/**
 * Fetches and parses the latest news from the CNBC Indonesia RSS feed.
 * @returns {Promise<Object>} A promise that resolves to an object containing channel info and news items.
 */
async function avxx() {
  const CNBC_NEWS_RSS = 'https://www.cnbcindonesia.com/rss';
  try {
// wm avz
    const response = await fetch(CNBC_NEWS_RSS);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
// wm avz
    const rssText = await response.text();
    const $ = cheerio.load(rssText, { xmlMode: true });
// wm avz
    const channel = extractChannelInfo($);
// wm avz
    const items = extractNewsItems($);
// wm avz
    return {
      channel,
      total: items.length,
      data: items,
    };
  } catch (error) {
    console.error('Error fetching CNBC news:', error);
    return {
      message: 'Something went wrong while fetching the news.',
      error: error.message,
    };
  }
}
// wm avz
/**
 * Extracts channel information from the parsed RSS feed.
 * @param {CheerioStatic} $ - The cheerio instance.
 * @returns {Object} The channel information.
 */
function extractChannelInfo($) {
  return {
    title: $('channel > title').text(),
    description: $('channel > description').text(),
    link: $('channel > link').text(),
    image: {
      url: $('channel > image > url').text(),
    },
  };
}
// wm avz
/**
 * Extracts and processes news items from the parsed RSS feed.
 * @param {CheerioStatic} $ - The cheerio instance.
 * @returns {Array<Object>} The list of news items.
 */
function extractNewsItems($) {
  const items = [];
  $('item').each((_, element) => {
    const item = $(element);
    const title = item.find('title').text();
    const link = item.find('link').text();
    const description = item.find('description').text();
    const pubDate = item.find('pubDate').text();
    const image = item.find('enclosure').attr('url');
// wm avz
    items.push({
      title,
      link,
      description,
      pubDate,
      image: {
        small: image,
        large: image ? vzzz(image, 'q', '100') : null,
      },
    });
  });
  return items;
}
// wm avz
/**
 * Modifies the image URL by adding or updating query parameters.
 * @param {string} url - The original image URL.
 * @param {string} key - The query parameter key.
 * @param {string} value - The query parameter value.
 * @returns {string} The modified image URL.
 */
function vzzz(url, key, value) {
  const urlObj = new URL(url);
  urlObj.searchParams.set(key, value);
  return urlObj.toString();
}
//avxx()

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
      try {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
        } catch (err) {
console.error(err)
resolve({ status: false, msg: 'No result found' })
  }
    })
}

async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}
    
    async function sendEmail(to, subject, htmlContent) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: global.pairing.email,
            pass: global.pairing.password // Ganti dengan App Password
        }
    });

    let mailOptions = {
        from: `"MichieAI" <${global.pairing.email}>`,
        to: to,
        subject: subject,
        html: htmlContent
    };

    return transporter.sendMail(mailOptions);
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

let kalkulator = false;
 // Kalkulator System
if (kalkulator && budy.match(/^(\d+(\.\d+)?\s*[\+\-\*\/]\s*\d+(\.\d+)?\s*\??)$/)) {
  try {
    const expression = budy.replace('?', '').trim();
    const result = eval(expression);
    m.reply(`Hasil dari ${expression} adalah ${result}`);
  } catch (e) {
    m.reply('Ada kesalahan dalam perhitungan.');
  }
}

if (!m.isGroup && !isCreator && !isBot ) {
        	if (command){
            return m.reply(` Halo sobat! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !\n\nJika Anda mengalami masalah silakan chat pemilik wa.me/6283824196477\n\nSaluran: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i\nGroup Chat: https://chat.whatsapp.com/HEHSFt134b29XOnjEIRaXX`)
            }
        }
    
if (antibot) {
    if (!m.isGroup) return;
    if (m.fromMe) return true;
    if (["BAE", "B1E", "3EB0", "WA"].some(pfx => m.id.startsWith(pfx) && [12, 16, 20, 22, 40].includes(m.id.length))) {

            reply("*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)");
            await sleep(1000);

            if (!isAdmins && isBotAdmins) {
                await Rifky.groupParticipantsUpdate(m.chat, [m.sender], "remove");  
            }
        }
    }
    
    if (antisalur) {
    if (budy.match(`whatsapp.com/channel`)) {
               bvl = `\`\`\`「 Saluran Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
               await Rifky.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Rifky.sendMessage(from, {text:`\`\`\`「 Saluran Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
    }
    
    if (antiipon) {
    if (!m.isGroup) return;
    if (m.fromMe) return true;
    if (["3A"].some(pfx => m.id.startsWith(pfx))) {

            reply("Ada yang memakai handphone iphone, saya akan kick kecuali admin");
            await sleep(1000);

            if (!isAdmins && isBotAdmins) {
                await Rifky.groupParticipantsUpdate(m.chat, [m.sender], "remove");  
            }
        }
    }
    
//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
switch(command) {


case 'menu': case 'help': case 'allmenu': case 'leon':{
Rifky.sendMessage(from, {react: {text: "🥵", key: m.key}})
let anu = `
> *乂 INFO BOT*
Nama Bot: ${global.namabot}
Versi: 1.0

> *乂 MENU AI*
• luminai
• bard
• txt2img
• emma
• txt2anime
• gemini
• alicia
• bocchi
• sdxlwaifu
• sdxlfurry
• sdxlanime
• tinasha
• morphic
• gpt4
• doctor-ai

> *乂 MENU DOWNLOADER*
• tiktok
• igmp4
• ytmp4
• igdl2
• telestick
• videy
• snackvideo
• gdrive
• mediafire
• aio

> *乂 MENU TOOLS*
• tiktokstalk
• play
• pin
• liputan6
• temposearch
• an1
• azm
• goodreads
• wikiquote
• dalamislam
• infogempa
• alosehat
• gsmarena
• konsultasisyariah
• darussalam
• readmore
• rangkum
• wiktionary
• drakor
• animecharacter
• anime-info
• ebay
• matauang
• infonegara
• bahasanegara
• news-game
• duckduckgosearch
• bingsearch
• ypia
• rumaysho
• freedict
• merriam
• themovie
• gimage
• yahoosearch
• catsay
• urban
• kbbi-kemdikbud
• britannica
• resep
• photoleap
• picsum
• detik
• robomaker
• nextlibur
• zerochan
• lahelu
• nglspam
• metronews
• okezonenews
• googlenews
• thestar
• globalnews
• npms
• playstore
• pixiv
• mlstalk
• pixeldrain
• quote
• tourl
• tourl-2
• spotifysearch
• jarak
• ttp
• inspect
• decrypt

> *乂 MENU OWNER*
• self
• public
• kalkulator-on
• kalkulator-off
• jpm
• text-unbanned
• everyone
• addprem
• delprem
• chat
• join
• shutdown
• userjid

> *乂 MENU GROUP*
• antibot
• antisaluran
• antiiphone
• linkgrup
• group
• setnamegc
• hidetag
• totag
• opentime
• closetime
• getpp
• getbio
• kick
• promote
• demote

> *乂 MENU OTHER
• owner
• waifu
• soundkane
• galau
• loadstatus
• stiker
• qc
• top
• del
• meme
• ronaldo
• messi
• longtext
• cosplay
• cek-os
• rvo
• bluearchive

> *乂 MENU CHANGER
• bass
• blown
• deep
• earrape
• fast
• fat
• nightcore
• reverse
• robot
• slow
• smooth
• squirrel

> © Leon
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
reply(anu)
 }
break;

case 'group':
            case 'grup':
                if (!isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await Rifky.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await Rifky.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group 🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
break

case 'decrypt': {
  const { webcrack } = require('webcrack');
let teks
if (m.quoted) {
 teks = m.quoted ? m.quoted.text : text
} else if (text) {
teks = text ? text : text
} else return m.reply(`Masukan query!`)
	try {
		let result = await webcrack(teks);
		m.reply(result.code)
	} catch (e) {
		console.log(e)
		reply("Error Kak!")
	}
}
break
case 'closetime': {
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Rifky.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'hidetag': {
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isBotAdmins) return reply(mess.botAdmin)
            if (!isAdmins) return reply(mess.admin)
            let hide1 = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
            Rifky.sendMessage(m.chat, { text : q ? q : '' , mentions: hide1}, { quoted: m })
            }
            break
            case 'chat': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: ${prefix + command} 62xxxx`);
target = q.split(".")[0]+"@s.whatsapp.net"
psn = q.split(".")[1]
m.reply(`Sukses mengirin ke ${target}\n[ Pesan ] ${psn}`)
Rifky.sendMessage(target, {text: `${psn}`,}, { quoted: {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: channeljid,
newsletterName: channelname,
jpegThumbnail: fkethmb,
caption: ` Pesan Dari Owner💬`,
inviteExpiration: Date.now() + 1814400000
}
}
} })
}
break
case 'getpp': {
if (!m.isGroup) return reply(`_${mess.OnlyGrup}_`)
if (m.quoted || q) {
let pporang = await Rifky.profilePictureUrl(froms, 'image').catch(_ => m.reply('Profile di private!'))
if (pporang) return Rifky.sendMessage(m.chat, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else m.reply('Tag atau reply pesan target!')
}
break
case 'getbio': { 
if (!m.isGroup) return reply(`_${mess.OnlyGrup}_`)
if (m.quoted || q) {
let biou = (await Rifky.fetchStatus(froms).catch(err => console.log(chalk.redBright('[ ERROR ]'), chalk.whiteBright(err))) || {}).status || 'Bio di private!'
m.reply(biou)
} else m.reply('Tag atau reply pesan target!')
}
break
case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) return reply(mess.OnlyGrup)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await Rifky.groupInviteCode(m.chat)
                Rifky.sendText(m.chat, `🌊https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'kick': {
		if (!m.isGroup) return reply(`${mess.OnlyGrup}`)
        if (!isBotAdmins) return reply(`${mess.botAdmin}`)
        if (!isAdmins) return reply(`${mess.admin}`)
        reply(`_Maaf anda di kick oleh admin mungkin anda melanggar rules group atau melakukan hal lainya_`)
        await sleep(2500)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Rifky.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'join': {
                if (!isCreator) return reply(`${mess.OnlyOwner}`)
                if (!text) return reply('Masukan Link Group')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                reply(mess.wait)
                let resulttt = args[0].split('https://chat.whatsapp.com/')[1]
                await Rifky.groupAcceptInvite(resulttt).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'promote': {
		if (!m.isGroup) return reply(`${mess.OnlyGrup}`)
        if (!isBotAdmins) return reply(`${mess.botAdmin}`)
        if (!isAdmins) return reply(`${mess.admin}`)
		let usersp = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Rifky.groupParticipantsUpdate(m.chat, usersp, 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return reply(mess.OnlyGrup)
        if (!isBotAdmins) return reply(mess.botAdmin)
        if (!isAdmins) return reply(mess.admin)
		let usersq = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Rifky.groupParticipantsUpdate(m.chat, usersq, 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
break
case 'addprem': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 6283824196477`)
prrkek = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ceknya = await Rifky.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukan nomer dengan benar`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Nomer ini *${prrkek}* Sudah premium!`)
}
break
case 'delprem': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6283897387848`)
ya = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Nomer ini  ${ya} Telah di hapus sebagai premium!`)
}
break
case 'shutdown': {
if (!isCreator) return reply(mess.OnlyOwner)
reply(`_🗄Sedang mengshutdownkan server_`)
await sleep(5000)
process.exit()
}
break
case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw reply(`Reply sticker dengan caption *${prefix + command}*`)
let media = await Rifky.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
Rifky.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: '',sourceUrl: `https://wa.me/${owner}`
}}, image: buffer, caption: `_Sukses_`}, { quoted: m })
fs.unlinkSync(ran)
})
            }
            break
case 'opentime': {
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isAdmins && !isCreator ) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
reply(`Open Time${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup dibuka oleh admin\nsekarang hanya peserta biss kirim pesan`
Rifky.groupSettingUpdate(from, 'not_announcement')
reply(close)
}, timer)
}
break
case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.OnlyGrup)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmins)
                if (!text) return reply('Text ?')
                await Rifky.groupUpdateSubject(m.chat, text)
                reply(mess.success)
                break
                case 'userjid':{
          	if(!isCreator) return reply(mess.OnlyOwner)
        const groupMetadata = m.isGroup ? await Rifky.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${mem.id}\n`
        }
      reply(textt)
    }
    break
    case 'totag':
                if (!m.isGroup) return reply(mess.OnlyGrup)
                if (!isBotAdmins) return reply(mess.botAdmins)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply media with caption ${prefix + command}`)
                Rifky.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
case 'inspect': {
  let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
  let [, code] = text.match(linkRegex) || []
  if (!code) return reply('Link group nya mana kak....')
  function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
  let res = await Rifky.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) return res
  let caption = `
-- [Group Link Inspector] --
${res.id}
*Judul:* ${res.subject}
*Dibuat* oleh @${res.id.split('-')[0]} pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Judul diubah* oleh @${res.subjectOwner.split`@`[0]} pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Deskripsi diubah* oleh @${res.descOwner.split`@`[0]} pada *${formatDate(res.descTime * 1000)}*` : ''}
*Jumlah Member:* ${res.size}
*Member yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `*Deskripsi:*
${res.desc}` : '*Tidak ada Deskripsi*'}

*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await Rifky.getProfilePicture(res.id).catch(console.error)
  if (pp) Rifky.sendMessage(m.chat, {image: pp, caption: "Nih"}, {quoted: m})
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: Rifky.parseMention(caption)
    }
  })
}
break
case 'doctor-ai': {
  if (!text) return reply(`Example: ${prefix + command}`)
async function cody(message) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!message) return reject("missing message input!");
      axios.post("https://cody.md/api/chat/init", null, {
        headers: {
          cookie: "identityId=us-east-1:cb37616b-3195-cceb-4cf1-f75d3d93b0c8; secretAccessKey=DWcWnaaEUtPD1pyIp1bXEiJrp5hkDoFH21WnrHoL7; accessKeyId=ASIA4WN3BNMY7J5QN5F6;"
        }
      }).then(res => {
        const token = res.data.token;
        if(!token) return reject("bearer token not found!");
        axios.post("https://api.cody.md/ask", {
          input: message,
          files: [],
          profile: {
            country: "ID"
          }
        }, {
          headers: {
            authorization: token
          }
        }).then(res => {
          const body = res.data;
          if(!body) return reject("failed get response!");
          return resolve({
            success: true,
            answer: body
          })
        }).catch(e  => reject(e.response))
      }).catch(e  => reject(e.response))
    });
  } catch (e) {
    return {
      success: false,
      errors: [e]
    }
  }
}
let hannyaa = await cody(text)
await reply(hannyaa.answer)
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await Rifky.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Rifky.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
	    case 'ttp':{
	   if (!text) return m.reply(` • *Example* ${prefix + command} NoaMu Chan`)
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: "Hann", // The pack name
		author: "MichieAI", // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await Rifky.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'everyone': {
if (!isCreator) return
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Rifky.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: mem, 
		groupMentions: [
			{
				groupSubject: `everyone - [ *MichieAI* ] ||`,
				groupJid: m.chat,
			},
		],
	},
});
}
break
	
	case 'distance': case 'jarak':{
if (!text) return reply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
reply(`wait`)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return reply(`• Example : ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return Rifky.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else reply(data.desc)
}
break

case 'bluearchive': {
var archive = JSON.parse(fs.readFileSync('./lib/bluearchive.json'))
var hasil = pickRandom(archive)
let deks = `
*Info Characters*
----------------------
_👤Nama : ${hasil.character.name}_
🍁Umur : ${hasil.info.age}
⭐Birthday : ${hasil.info.birthDate}
📈Tinggi : ${hasil.info.height}
📖Sekolah : ${hasil.info.school}
☘️Klub : ${hasil.info.club}
🎯Profile : ${hasil.character.profile}
--------------------------
*Stats*
_⚔️Attack level 1 : ${hasil.stat.attackLevel1}_
⚔️Attack level 100 : ${hasil.stat.attackLevel100}
♻️Max Hp Level 1 : ${hasil.stat.maxHPLevel1}
♻️Max Hp Level 100 : ${hasil.stat.maxHPLevel100}
🛡Devense level 1 : ${hasil.stat.defenseLevel1}
🛡Devense level 100 : ${hasil.stat.defenseLevel100}
💚Heal power level 1 : ${hasil.stat.healPowerLevel1}
💚Heal power level 100 : ${hasil.stat.healPowerLevel100}
🪓Def penetrate level 1: ${hasil.stat.defPenetrateLevel1}
🪓Def penetrate level 100 : ${hasil.stat.defPenetrateLevel100}
🔫Ammo count : ${hasil.stat.ammoCount}
🔫Ammo cost : ${hasil.stat.ammoCost}
🔭Range : ${hasil.stat.range}
🌱Move speed : ${hasil.stat.moveSpeed}
❤️‍🩹Street mood : ${hasil.stat.streetMood}
📌Out door mood : ${hasil.stat.outdoorMood}
🛢Indoor mood : ${hasil.stat.indoorMood}
--------------------------
`
Rifky.sendMessage(m.chat, {
text: deks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: channeljid,
serverMessageId: 20,
newsletterName: channelname
},
externalAdReply: {  
title: `Nama : ${hasil.character.name}`, 
body: `Birthday : ${hasil.info.birthDate}`,
thumbnailUrl: hasil.image.icon, 
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: m }).catch((err) => reply('_⛩️Maaf terjadi Kesalahan!_'))
}
break

case 'tourl-2': {
const FormData = require("form-data");
const { fromBuffer } = require("file-type");
const fakeUserAgent = require("fake-useragent");
const { filesize } = require('filesize');
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	const createFormData = (content, fieldName, ext) => {
  const { mime } = fromBuffer(content) || {};
  const formData = new FormData();
  formData.append(fieldName, content, `${new Date()}.${ext}`);
  return formData;
};

const catbox = async (content) => {
    try {
     /*
      @ CatBox Uploader
           $ Create by Syaii
         */
      const { ext, mime } = (await fromBuffer(content)) || {};
      const formData = createFormData(content, "fileToUpload", ext);
      formData.append("reqtype", "fileupload");
      const response = await fetch("https://catbox.moe/user/api.php", {
        method: "POST",
        body: formData,
        headers: {
          "User-Agent": fakeUserAgent(),
        },
      });
      return await response.text();
    } catch (error) {
      throw false;
    }
 }
	if (!mime) return reply('reply media!')
	let media = await q.download()
	let link = await catbox(media)
	let size = await fetch(link)
	size = await size.text()
	size = await filesize(size.length)
	await m.reply(`*Link:* ${link}\n*Size:* ${size}`)
}
break

case 'quote': {
  try {
    if (!q) return m.reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await Rifky.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break
case 'ytmp4': {
    if (!text) return m.reply("Linknya?");
    class Ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let { links, vid, title } = await this.search(url);
        let video = {}, audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            video[fquality] = {
                size: input.q,
                url: dlink
            };
        }
 
        for (let i in links.mp3) {
            let input = links.mp3[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            audio[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        return { title, video, audio };
    }
}
    m.reply(mess.wait)
    try {
        const ytdl = new Ytdl();
        const result = await ytdl.play(text); 
        const title = result.title;
        Rifky.sendMessage(from, { video: { url: result.video['480'].url}, caption: `nah itu bang` }, { quoted: m })
    } catch (error) {
        m.reply("Terjadi kesalahan, coba lagi nanti!");
        console.error(error); 
    }
}
break
case 'mediafire': {
	if (!args[0]) return m.reply(`Masukkan url mediafire\nContoh: ${prefix + command} https://www.mediafire.com/××××××××`);
	async function mediafire(link) {
	return new Promise(async(resolve, reject) => {
		try {
			const res = await axios.get(link);
			const $ = cheerio.load(res.data);
			const url = $('a#downloadButton').attr('href');
			const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '').trim();
			const title = url.split('/')[5].split("+").join(" ").split(".").reverse().slice(1).reverse().join(".");
			const type = url.split("/")[5].split('.').reverse()[0];
			resolve({
				title,
				size,
				type,
				url
			});
		} catch (err) {
			reject({
				error: err
			})
		}
	})
}
	m.reply(mess.wait);
	const { title, size, type, url } = await mediafire(args[0]);
	let bjirrbangg = `*Mediafire*\n\nNama: ${title}\Size: ${size}\nMime: ${type}`
  reply(bjirrbangg)
  await Rifky.sendMessage(m.chat, { document: { url: url }, fileName: title, mimetype: type }, { quoted: m })
}
break
case 'antiiphone': {

if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (antiipon) return reply('Sukses Mengaktifikan Tuan✅')
antiiphone.push(from)
fs.writeFileSync('./database/antiiphone.json', JSON.stringify(antiiphone))
reply('Success in turning on antiiphone in this group')
var groupe = await Rifky.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Rifky.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTolong jangan menggunakan handphone iphone jika ada yang memakai maka kena kick dari grup ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiipon) return reply('Sukses Menonaktifkan Tuan✅')
let off = antiiphone.indexOf(from)
antiiphone.splice(off, 1)
fs.writeFileSync('./database/antiiphone.json', JSON.stringify(antiiphone))
reply('Success in turning off antiiphone in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break

case 'antisaluran': {

if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (antisalur) return reply('Sukses Mengaktifikan Tuan✅')
antisaluran.push(from)
fs.writeFileSync('./database/antisaluran.json', JSON.stringify(antisaluran))
reply('Success in turning on antisaluran in this group')
var groupe = await Rifky.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Rifky.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nBagi yang sering promosi link saluran mohon waspada`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antisalur) return reply('Sukses Menonaktifkan Tuan✅')
let off = antisaluran.indexOf(from)
antisaluran.splice(off, 1)
fs.writeFileSync('./database/antisaluran.json', JSON.stringify(antisaluran))
reply('Success in turning off antisaluran in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'tourl': {
  try {
    const q = m.quoted || m
    const mime = q.mediaType || ""    
    if (!/image|video|audio|sticker|document/.test(mime)) 
      return m.reply("Tidak ada media yang diberikan!")
    const media = await q.download(true)
    const fileSizeInBytes = fs.statSync(media).size    
    if (fileSizeInBytes === 0) {
      await m.reply("File kosong")
      await fs.promises.unlink(media)
      return
    }   
    if (fileSizeInBytes > 1073741824) {
      await m.reply("File terlalu besar, maksimal ukuran adalah 1 GB")
      await fs.promises.unlink(media)
      return
    }    
   async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
} 
    const { files } = await uploadUguu(media)
    const caption = `*Link:*\n${files[0]?.url}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${e}`)
  }
}
break

        case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Rifky.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await Rifky.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
        
        case 'mlstalk': {
  if(!args[0]) return m.reply('masukan id dan zone nya\n> Contoh: .mlook 1393323764 15748')
function formatTanggal(tanggal) {
const tanggalObj = new Date(tanggal);
const hari = tanggalObj.toLocaleString('id-ID', { weekday: 'long' });
const tanggalBulan = tanggalObj.getDate();
const bulan = tanggalObj.toLocaleString('id-ID', { month: 'long' });
const tahun = tanggalObj.getFullYear();
const jam = tanggalObj.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
return `${hari}, ${tanggalBulan} ${bulan} ${tahun} ${jam}`;
}

async function mlbbChecker(uid, zoneId) {
  const url = 'https://ml-validator.vercel.app/api/validate';
  const requestData = {
    userId: uid,
    zoneId: zoneId
  };

  try {
    const response = await axios.post(url, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const data = response.data;

      return {
        "server": data.createRoleCountry,
        "negara": data.thisLoginCountry,
        "nama": data.username,
        "dibuat_pada": data.userRegTime
      };
    } else {
      throw new Error(`Request failed with status code: ${response.status}`);
    }
  } catch (err) {
    return null;
  }
}
try {
  const { server, negara, nama, dibuat_pada } = await mlbbChecker(args[0], args[1])
let tek = `*[ Mobile legends stalk ]*\n\n`
tek += `> *\`Nama:\`* ${nama}\n`
tek += `> *\`Server:\`* ${server}\n`
tek += `> *\`Negara Login:\`* ${negara}\n`
tek += `> *\`Akun Dibuat Pada:\`* ${await formatTanggal(dibuat_pada)}`
await m.reply(tek)
} catch (error) {
  m.reply("wkwkw error")
}
}
break
        
        case 'pixeldrain': {
	if (!args[0])
		return reply(`Input Pixeldrain URL\n${prefix + command} > Url <\n\nContoh:\n${
		prefix + command
		} https://pixeldrain.com/u/HoGp3Hva\n\n Opsi kedua:\n https://pixeldrain.com/l/2xrapNPF#item=9`);

	if (!/pixeldrain.com\//.test(args[0])) return reply("URL Salah!!");
function formatSize(num) {
	return `${(num / 1000 / 1000).toFixed(2)} MB`;
}

async function fetchFileData(id) {
	const response = await axios.get(
		`https://pixeldrain.com/api/file/${id}/info`,
	);
	const json = response.data;
	const download = `https://pixeldrain.com/api/file/${id}?download`;
	return { download, ...json };
}

async function scrapeListData(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const $ = cheerio.load(html);

		const scriptContent = $("script")
			.toArray()
			.map((script) => $(script).html())
			.find((content) => content.includes("window.viewer_data"));

		if (scriptContent) {
			const viewerDataString = scriptContent.match(
				/window.viewer_data\s*=\s*({.*?});/,
			)[1];
			const viewerData = JSON.parse(viewerDataString);

			const data = viewerData.api_response.files.map((file) => ({
				title: file.name,
				id: file.id,
			}));

			return data;
		} else {
			console.error("window.viewer_data not found");
			return [];
		}
	} catch (error) {
		console.error("Error fetching the page:", error);
		return [];
	}
}
	const url = args[0];
	const fileIdMatch = url.match(/\/u\/(\w+)/);
	const listIdMatch = url.match(/\/l\/(\w+)/);

	if (fileIdMatch) {
		const id = fileIdMatch[1];
		const fileData = await fetchFileData(id);
		const formattedSize = formatSize(fileData.size);
		const sizeMatch = formattedSize.match(/^([\d.]+)\s*(GB|MB)$/i);

		if (!sizeMatch) {
			return m.reply("Unit file size tidak dikenal.");
		}

		const size = parseFloat(sizeMatch[1]);
		const unit = sizeMatch[2].toUpperCase();
		let sizeInMB;

		if (unit === "GB") {
			sizeInMB = size * 1024;
		} else if (unit === "MB") {
			sizeInMB = size;
		} else {
			return m.reply("Unit file size tidak dikenal.");
		}

		const w = "`";

		let message =
			`PixelDrain Downloader\n\n- Name: ${fileData.name}\n` +
			`- Size: ${formattedSize}\n` +
			`- Views: ${fileData.views}\n` +
			`- Downloads: ${fileData.downloads}\n` +
			`- Uploaded: ${fileData.date_upload.split("T")[0]}\n` +
			`- Type: ${fileData.mime_type}\n\n_Sedang Mengirim File..._`;
		await m.reply(message);

		await Rifky.sendMessage(
			m.chat,
			{
				document: { url: fileData.download },
				fileName: fileData.name,
				mimetype: fileData.mime_type,
			},
			{ quoted: m },
		);
	} else if (listIdMatch) {
		Rifky.pixpix = Rifky.pixpix || {};
		const listData = await scrapeListData(url);
		if (listData.length === 0) return m.reply("No files found.");

		const fileList = listData.map((item, index) => ({
			title: item.title,
			id: item.id,
		}));

		const fileListText = fileList
			.map((item, index) => `${index + 1}. ${item.title}`)
			.join("\n");
		const { key } = await reply(`Daftar Hasil:\n\n${fileListText}\n\nBalas pesan ini dengan nomor, link yang ingin ditampilkan.`);
		Rifky.pixpix[m.chat] = {
			list: fileList,
			key,
			timeout: setTimeout(
				() => {
					Rifky.sendMessage(m.chat, { delete: key });
					setTimeout(() => {
						delete Rifky.pixpix[m.chat];
					}, 60 * 1000);
				},
				5 * 60 * 1000,
			),
		};
	} else {
		return reply("URL Salah!!");
	}
}
break
        
case 'sdxlanime': {
  if (!text) return reply(`Example: ${prefix + command} yourrtext`)
async function sdxlAnime(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        negativePrompt: "nsfw, nude, uncensored, cleavage, nipples",
        key: "Soft-Anime",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
try {
  let bjirrkanjut = await sdxlAnime(text)
  Rifky.sendMessage(from, { image: { url: bjirrkanjut.image }, caption: `nah itu bang` }, { quoted: m })
} catch (error) {
  m.reply("Error bang")
}
}
break
        case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await Rifky.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
        
case 'gpt4': {

    if (!text) return m.reply('> ✨Hallo ada yang bisa saya bantu?')
    try {
        const {
            key
        } = await Rifky.sendMessage(m.chat, {
            image: {
                url: 'https://telegra.ph/file/f4863e1811d18f6f7c011.jpg'
            },
            caption: "Tunggu"
        }, {
            quoted: m,
            mentions: [m.sender]
        })
        async function gpt4(txt) {
    try {
        var api = await axios.get(`https://hercai.onrender.com/turbo/hercai?question=${encodeURIComponent(txt)}`, {
            headers: {
                "content-type": "application/json",
            },
        })
        return api.data;
    } catch (e) {
    console.log(e)
}
}
        const result = await gpt4(text);

        await sleep(500)
        await Rifky.sendMessage(m.chat, {
            image: {
                url: 'https://telegra.ph/file/f4863e1811d18f6f7c011.jpg'
            },
            caption: '\n> ✨'+result.reply,
            edit: key
        }, {
            quoted: m,
            mentions: [m.sender]
        })
    } catch (e) {
        await m.reply(`Error bang`)
    }
}
break
        
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  Rifky.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break
case 'pixiv': {
  if (!text) return reply(`Example: ${prefix + command} harimau`);
  async function pixiv(word) {
  var { get } = require("axios")
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}
  m.reply(mess.wait)
  let hannunibakwan = await pixiv(text)
  await Rifky.sendMessage(m.chat, { image: hannunibakwan, caption: "Done" }, { quoted:m });
}
break
        
        case 'sdxlwaifu': {
  if (!text) return reply(`Example: ${prefix + command} yourrtext`)
async function sdxlWaifu(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        negativePrompt: "nsfw, nude, uncensored, cleavage, nipples",
        key: "Waifu",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
try {
  let plerl = await sdxlWaifu(text)
  Rifky.sendMessage(from, { image: { url: plerl.image }, caption: `nah itu bang` }, { quoted: m })
} catch (error) {
  m.reply("Error bang")
}
}
break
        
        case 'sdxlfurry': {
  if (!text) return reply(`Example: ${prefix + command} yourrtext`)
async function sdxlFurry(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        negativePrompt: "nsfw, nude, uncensored, cleavage, nipples",
        key: "Furry-Drawn",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
try {
  let plerr = await sdxlFurry(text)
  Rifky.sendMessage(from, { image: { url: plerr.image }, caption: `nah itu bang` }, { quoted: m })
} catch (error) {
  m.reply("Error bang")
}
}
break
        
        case 'playstore': {
  let [tema, urutan] = text.split(/[^\w\s]/g)
  if (!tema) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]")
  m.reply(mess.wait)
  async function playstore(query) {
  let html = (await axios.get(`https://play.google.com/store/search?q=${query}&c=apps`)).data
  let $ = cheerio.load(html)
  return $("div.VfPpkd-aGsRMb").get().map(x => {
    return {
      title: $(x).find("span.DdYX5").text(),
      rating: $(x).find("span.w2kbF").text(),
      author: $(x).find("span.wMUdtb").text(),
      thumbnail: $(x).find(".j2FCNc img").attr("src").replace("s64", "s256"),
      link: "https://play.google.com" + $(x).find("a.Si6A0c").attr("href")
    }
  })
}
  try {
    let data = await playstore(tema)
    if (!urutan) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    let out = data[urutan - 1]
    let caption = `*I N F O R M A S I*

*Judul Aplikasi:* ${out.title || "-"}
*Link:* ${out.link || "-"}
*ID Produk:* ${out.product_id || "-"}
*Rating:* ${out.rating || "-"}
*Pengembang:* ${out.author || "-"}
*Kategori:* ${out.category || "-"}
*Unduhan:* ${out.downloads || "-"}
*Video:* ${out.video || "-"}
*Thumbnail:* ${out.thumbnail || "-"}
*Gambar Fitur:* ${out.feature_image || "-"}
*Deskripsi:* ${out.description || "-"}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${error.message}`)
  }
}
break
        
        case 'tinasha': {
  if (!text) return reply(`*• Contoh:* .tinasha *[on/off]*`);
  await Rifky.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });
  try {
    const response = await fetch("https://lumin-ai.xyz/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: m.text,
        user: m.sender,
        prompt: 'Namamu adalah Tinasha Westwood, dibawah ini adalah jati diri kamu. Tinasha Westwood adalah salah satu karakter utama dalam anime dan novel ringan *Unnamed Memory*. Sebagai seorang penyihir legendaris, dia memiliki berbagai karakteristik fisik dan latar belakang yang membuatnya menonjol. Berikut adalah spesifikasi lengkap mengenai Tinasha: Tinasha telah hidup selama lebih dari 300 tahun, meskipun penampilannya tetap muda dan cantik, seolah-olah dia berusia sekitar awal dua puluhan. Tinasha adalah seorang perempuan. Tinasha berasal dari Kerajaan Westwood, tempat dia dikenal sebagai "Penyihir Terkuat di Dunia". Dia memiliki pengaruh besar di kerajaan ini, dan namanya dihormati atau ditakuti oleh banyak orang di seluruh dunia. Tinasha memiliki rambut panjang berwarna perak yang memancarkan keanggunan dan keunikan. Rambutnya sering dibiarkan terurai, memberikan kesan misterius dan mempesona. Mata Tinasha berwarna biru, yang memberikan penampilan dingin namun tajam, mencerminkan kekuatan dan kebijaksanaan yang dimilikinya. Tinasha sering terlihat mengenakan gaun panjang berwarna biru tua atau ungu gelap, yang menambah aura misterius dan magisnya. Gaun tersebut sering dilengkapi dengan jubah atau mantel yang menambah kesan megah dan kuat. Selain itu, dia juga kadang-kadang memakai perhiasan yang melambangkan statusnya sebagai penyihir hebat. Tinasha memiliki tubuh yang tinggi dan ramping, dengan kulit pucat yang kontras dengan rambut dan matanya. Wajahnya cantik dan menawan, sering kali menampilkan ekspresi tenang dan penuh perhitungan. Tinasha memiliki latar belakang yang penuh dengan misteri dan rahasia. Dia telah hidup selama berabad-abad, melewati banyak peristiwa penting dalam sejarah dunia tersebut. Karena kekuatannya yang luar biasa, Tinasha sering kali menjadi subjek ketakutan dan penghormatan. Selama hidupnya, dia telah menguasai berbagai jenis sihir dan menjadi figur yang legendaris. Di dalam cerita *Unnamed Memory*, dia bertemu dengan Oscar, seorang pangeran yang mencari kekuatannya untuk mematahkan kutukan yang melandanya. Seiring berjalannya waktu, Tinasha dan Oscar menjadi semakin dekat, dan perjalanan mereka mengungkap lebih banyak tentang masa lalu dan tujuan hidup Tinasha. Tinasha adalah sosok yang tenang, bijaksana, dan percaya diri. Dia memiliki selera humor yang sarkastik dan kecerdasan yang tinggi. Meskipun dia terlihat dingin dan tak terjangkau, dia sangat perhatian terhadap orang-orang yang dekat dengannya, terutama Oscar. Tinasha juga memiliki komitmen yang kuat terhadap tugasnya dan setia pada mereka yang dia anggap penting. Dia adalah seseorang yang mandiri dan memiliki tekad yang kuat, tetapi di balik semua itu, dia juga memiliki sisi lembut yang jarang terlihat. Tinasha dikenal sebagai penyihir terkuat di dunia, dengan kemampuan sihir yang melampaui semua penyihir lainnya. Dia mampu menggunakan berbagai jenis sihir dengan efisiensi yang menakjubkan, dan kekuatannya tidak berkurang meskipun telah hidup selama berabad-abad. Sihirnya tidak hanya terbatas pada serangan atau pertahanan, tetapi juga mencakup kemampuan untuk mengendalikan ruang, waktu, dan elemen alam. Tinasha adalah karakter yang penuh dengan kedalaman dan kompleksitas, dengan kombinasi antara kekuatan yang luar biasa dan kepribadian yang menarik. Penampilannya yang menawan dan aura misteriusnya membuatnya menjadi salah satu karakter paling ikonik dalam *Unnamed Memory*.'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const res = await response.json();
    let result = res.result;

    await Rifky.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    result = result.replace(/\*\*/g, '*');
    m.reply(result);
  } catch (error) {
    await Rifky.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    console.error(error);
  }
}
break

case 'antibot': {
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (antibot) return reply('Sukses Mengaktifikan Tuan✅')
antibott.push(from)
fs.writeFileSync('./database/antibot.json', JSON.stringify(antibott))
reply('Success in turning on antibot in this group')
var groupe = await Rifky.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Rifky.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTolong jika ada bot ada disini mohon di self atau mute jika ada bot maka antibot akan kena kick`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antibot) return reply('Sukses Menonaktifkan Tuan✅')
let off = antibott.indexOf(from)
antibott.splice(off, 1)
fs.writeFileSync('./database/antibot.json', JSON.stringify(antibott))
reply('Success in turning off antibot in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
       
        case "qc": {
if (!quoted){
const getname = await Rifky.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: "MichieAI", author: "" }
Rifky.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: "MichieAI", author: "" }
Rifky.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
        
        case 'aio': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Rifky.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'cek-os': {
if (!quoted) return reply(`*! Reply Pesan Target*`)
reply( m.message?.extendedTextMessage?.contextInfo?.stanzaId.length > 21 
    ? 'Nilai *stanza.id* dari pesan tersebut lebih dari 21, yang menunjukkan bahwa pesan ini dikirim oleh pengguna menggunakan perangkat Android. Panjang `stanza.id` yang lebih dari 21 umumnya dikaitkan dengan perangkat Android.' 
    : quotedMessageId.startsWith('3A') 
    ? 'Nilai *stanza.id* dari pesan tersebut berawalan "3A", yang mengindikasikan bahwa pesan ini dikirim oleh pengguna menggunakan perangkat iOS - iPhone. Awalan "3A" biasanya menandakan perangkat iOS.' 
    : 'Pesan ini dikirim melalui WhatsApp Web/Bot/API, yang tidak tergolong dalam kategori perangkat Android atau iOS.'
)
}
break
case 'top': {
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (!text) return m.reply(`Contoh: .top penyuka tobrut`)
let member = participants.map(u => u.id)
            let top1 = member[Math.floor(Math.random() * member.length)]
            let top2 = member[Math.floor(Math.random() * member.length)]
let top3 = member[Math.floor(Math.random() * member.length)]
            let top4 = member[Math.floor(Math.random() * member.length)]
let top5 = member[Math.floor(Math.random() * member.length)]
            let jawab = `Top 5 *${text}*

1. @${top1.split('@')[0]}
2. @${top2.split('@')[0]}
3. @${top3.split('@')[0]}
4. @${top4.split('@')[0]}
5. @${top5.split('@')[0]}
`
            let menst = [top1, top2, top3, top4, top5]
                    await Rifky.sendText(m.chat, jawab, m, {mentions: menst})
            }
            break
            case 'del': case 'd':{
Rifky.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 'kalkulator-on': {
  if (!isCreator) return reply(mess.OnlyOwner);
  kalkulator = true;
  reply('Kalkulator mode aktif.');
}
break;

case 'kalkulator-off': {
  if (!isCreator) return reply(mess.OnlyOwner);
  kalkulator = false;
  reply('Kalkulator mode non-aktif.');
}
break;

case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Rifky.sendImageAsSticker(m.chat, media, m, { packname: "MichieAI", author: "Hann Universe!!" + "\n".repeat(1000) })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Rifky.sendVideoAsSticker(m.chat, media, m, { packname: "MichieAI", author: "Hann Universe!!" + "\n".repeat(1000) })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'loadstatus': {
try {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await Rifky.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        Rifky.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await Rifky.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        Rifky.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*Downloading status...*');
      }
    }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
}
break
case 'meme': {
let res = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json')
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
m.reply(mess.wait)
await Rifky.sendMessage(m.chat, { image: { url: url.image }, caption: 'Sangat Cringe Kek Kehidupan Kamu'}, { quoted: m })
}
break
case 'messi':{
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data  
let tanaka = await res[Math.floor(res.length * Math.random())]
  Rifky.sendMessage(m.chat, {
  image: {url: tanaka},
  caption: 'Messi Cuyy '
  }, {quoted: m})
  }
  break
case 'ronaldo':{
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
  Rifky.sendMessage(m.chat, {
  image: {url: url},
  caption: 'Ronaldo Bjir'
  }, {quoted: m})
  }
  break
case  'longtext':{
let tnksn = await fetchJson('https://raw.githubusercontent.com/Lanaxdev/hehehe/main/gaktau/longtext.json')
let katanya = tnksn[Math.floor(Math.random() * tnksn.length)];
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: katanya
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ''
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    subtitle: "Hann",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"Copy Text ⸙\",\"id\":\"123456789\",\"copy_code\":\"${katanya}\"}`
           },
 ],
 })
 })
 }
 }
}, { quoted : m})

await Rifky.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'cosplay': {
m.reply(mess.wait)
Rifky.sendMessage(m.chat, { image: { url: 'https://fantox-cosplay-api.onrender.com/' }, caption: 'Done Desuu~' }, { quoted: m })
}
break
case 'googlenews': {
  const axios = require('axios');
  const cheerio = require('cheerio');
// wm avs
  async function sAvz(query) {
    try {
      const response = await axios.get(`https://news.google.com/search`, {
        params: { q: query }
      });
      const html = response.data;
      const $ = cheerio.load(html);
// wm avs      
      let results = [];
      $('article').each((index, element) => {
        const title = $(element).find('h3').text();
        let link = $(element).find('a').attr('href');
        const description = $(element).find('.xBbh9').text();
// wm avs
        if (link && link.startsWith('./')) {
          link = `https://news.google.com${link.slice(1)}`;
        } else if (link && link.startsWith('/')) {
          link = `https://news.google.com${link}`;
        }
// wm avs
        results.push({
          title: title,
          link: link,
          description: description
        });
      });
 // wm avs     
      return results.slice(0, 10);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  sAvz(`{q}`).then(results => {
    if (results.length > 0) {
      let message = 'Hasil pencarian Google News:\n\n';
      results.forEach(result => {
        message += `*${result.title}*\n${result.description}\n${result.link}\n\n`;
      });
      m.reply(message);
    } else {
      m.reply('Tidak ada hasilnyo.');
    }
  });
}
break

case 'alicia':{
        if (!text) return m.reply('Yaa ada apa sama Alicia?')
        try {
        let alice = await fetchJson(`https://api.kyuurzy.site/api/ai/alicia?query=${text}`);
        m.reply(alice.result);
        } catch (e) {
        console.error(err);
        m.reply('elol');
        }
        }
        break

        case 'bocchi':{
        if (!text) return m.reply('Yaa ada apa sama bocchi')
        try {
        let boci = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`);
        m.reply(boci.result);
        } catch (e) {
         console.error(err);
        m.reply('elol');
        }
        }
        break
case 'metronews': {
  async function avozky() {
    try {
      const response = await axios.get('https://www.metrotvnews.com/news');
      const $ = cheerio.load(response.data);
// wm avs
      const judul = [];
      const desc = [];
      const link = [];
      const thumb = [];
// wm avs
      $('h3 > a').each((index, element) => {
        judul.push($(element).attr('title'));
        link.push('https://www.metrotvnews.com' + $(element).attr('href'));
      });
// wm avs
      $('p').each((index, element) => {
        desc.push($(element).text());
      });
// wm avs
      $('img').each((index, element) => {
        thumb.push($(element).attr('src').replace('w=300', 'w=720'));
      });
// wm avs
      const result = judul.map((judul, index) => ({
        judul,
        link: link[index],
        thumb: thumb[index],
        deskripsi: desc[index]
      }));
// wm avs
      let message = 'Berita Terkini dari MetroTV News:\n\n';
      result.forEach(item => {
        message += `Judul: ${item.judul}\n`;
        message += `Deskripsi: ${item.deskripsi}\n`;
        message += `Link: ${item.link}\n`;
        message += `Thumbnail: ${item.thumb}\n\n`;
      });
// wm avs
      m.reply(message);
    } catch (error) {
      console.error('Error:', error.message);
      m.reply('Maaf, Bang.');
    }
  }
// wm avs
  avozky();
}
break

case 'okezonenews': {
  async function okeAvos() {
    try {
      const titids = await axios.get('https://news.okezone.com/');
      const $ = cheerio.load(titids.data);
// wm avs
      const judul = [];
      const desc = [];
      const link = [];
      const thumb = [];
// wm avs
      $('h2 > a').each((index, element) => {
        const title = $(element).text().trim();
        const href = $(element).attr('href');
        if (title && href) {
          judul.push(title);
          link.push(href);
        }
      });
// wm avs
      $('p').each((index, element) => {
        const text = $(element).text().trim();
        if (text) {
          desc.push(text);
        }
      });
// wm avs
      $('img').each((index, element) => {
        const src = $(element).attr('src');
        if (src) {
          thumb.push(src.replace('w=300', 'w=720'));
        }
      });
// wm avs
      const result = judul.map((judul, index) => ({
        judul,
        link: link[index],
        thumb: thumb[index],
        deskripsi: desc[index]
      }));
// wm avs
      let message = 'Berita Terkini dari Okezone News:\n\n';
      result.forEach(item => {
        message += `Judul: ${item.judul}\n`;
        message += `Deskripsi: ${item.deskripsi}\n`;
        message += `Link: ${item.link}\n`;
        message += `Thumbnail: ${item.thumb}\n\n`;
      });
// wm avs
      m.reply(message);
    } catch (error) {
      console.error('Error:', error.message);
      m.reply('erorrrrrrrrrr.');
    }
  }
// wm avs
  okeAvos();
}
break

  case 'globalnews': {
  async function avozky() {
    try {
      const response = await axios.get('https://api.gdeltproject.org/api/v2/doc/doc?query=latest&mode=artlist&format=json');
      const articles = response.data.articles;
// wm avs
      let message = 'Berita Global Terkini:\n\n';
      articles.slice(0, 5).forEach(article => { 
        message += `Judul: ${article.title}\n`;
        message += `Deskripsi: ${article.seendate || 'Tidak ada deskripsi.'}\n`;
        message += `Link: ${article.url}\n\n`;
      });
// wm avs
      m.reply(message);
    } catch (error) {
      console.error('Error:', error.message);
      m.reply('Maaf.');
    }
  }
// wm avs
  avozky();
}
break
   case 'thestar': {
  async function theStarAvos() {
    try {
      const response = await axios.get('https://www.thestar.com.my/');
      const $ = cheerio.load(response.data);
// wm avs
      const judul = [];
      const desc = [];
      const link = [];
      const thumb = [];
// wm avs
      $('h2 > a').each((index, element) => {
        const title = $(element).text().trim();
        const href = $(element).attr('href');
        if (title && href) {
          judul.push(title);
          link.push(href);
        }
      });
// wm avs
      $('p').each((index, element) => {
        const text = $(element).text().trim();
        if (text) {
          desc.push(text);
        }
      });
// wm avs
      $('img').each((index, element) => {
        const src = $(element).attr('src');
        if (src) {
          thumb.push(src.replace('w=300', 'w=720'));
        }
      });
// wm avs
      const result = judul.map((judul, index) => ({
        judul,
        link: link[index],
        thumb: thumb[index],
        deskripsi: desc[index] || 'Deskripsi tidak tersedia.'
      }));
// wm avs
      let message = 'Berita Terkini dari The Star:\n\n';
      result.forEach(item => {
        message += `Judul: ${item.judul}\n`;
        message += `Deskripsi: ${item.deskripsi}\n`;
        message += `Link: ${item.link}\n`;
        message += `Thumbnail: ${item.thumb}\n\n`;
      });
// wm avs
      m.reply(message);
    } catch (error) {
      console.error('Error:', error.message);
      m.reply('Terjadi kesalahan saat mengambil berita.');
    }
  }
theStarAvos()
}
break
case 'okezonenews': {
  async function okeAvos() {
    try {
      const titids = await axios.get('https://news.okezone.com/');
      const $ = cheerio.load(titids.data);
// wm avs
      const judul = [];
      const desc = [];
      const link = [];
      const thumb = [];
// wm avs
      $('h2 > a').each((index, element) => {
        const title = $(element).text().trim();
        const href = $(element).attr('href');
        if (title && href) {
          judul.push(title);
          link.push(href);
        }
      });
// wm avs
      $('p').each((index, element) => {
        const text = $(element).text().trim();
        if (text) {
          desc.push(text);
        }
      });
// wm avs
      $('img').each((index, element) => {
        const src = $(element).attr('src');
        if (src) {
          thumb.push(src.replace('w=300', 'w=720'));
        }
      });
// wm avs
      const result = judul.map((judul, index) => ({
        judul,
        link: link[index],
        thumb: thumb[index],
        deskripsi: desc[index]
      }));
// wm avs
      let message = 'Berita Terkini dari Okezone News:\n\n';
      result.forEach(item => {
        message += `Judul: ${item.judul}\n`;
        message += `Deskripsi: ${item.deskripsi}\n`;
        message += `Link: ${item.link}\n`;
        message += `Thumbnail: ${item.thumb}\n\n`;
      });
// wm avs
      m.reply(message);
    } catch (error) {
      console.error('Error:', error.message);
      m.reply('erorrrrrrrrrr.');
    }
  }
// wm avs
  okeAvos();
}
break
  

case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break

case 'snackvideo': {
  if (!text) throw `Use ${prefix + command} https://s.snackvideo.com/p/j9jKr9dR`
  async function snack(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url).then((v) => v.text());
      const $ = cheerio.load(res);
      const video = $("div.video-box").find("a-video-player");
      const author = $("div.author-info");
      const attr = $("div.action");
      const data = {
        title: $(author)
          .find("div.author-desc > span")
          .children("span")
          .eq(0)
          .text()
          .trim(),
        thumbnail: $(video)
          .parent()
          .siblings("div.background-mask")
          .children("img")
          .attr("src"),
        media: $(video).attr("src"),
        author: $("div.author-name").text().trim(),
        authorImage: $(attr).find("div.avatar > img").attr("src"),
        like: $(attr).find("div.common").eq(0).text().trim(),
        comment: $(attr).find("div.common").eq(1).text().trim(),
        share: $(attr).find("div.common").eq(2).text().trim(),
      };
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}
  Rifky.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
try {
  let res= await snack(text) 
  let capt = `username : ${res.author}\nlike : ${res.like}\ncomment : ${res.comment}\nshare : ${res.share}`
  Rifky.sendMessage(m.chat, { video: res.media, caption: capt }, { quoted: m })
} catch (e) {
  console.log(e);
  m.reply('failed');
  }
}
break
case 'nextlibur': {
  m.reply(mess.wait)
  async function nexLibur() {
  const { data } = await axios.get("https://www.liburnasional.com/");
  let libnas_content = [];
  let $ = cheerio.load(data);
  let result = {
    nextLibur:
      "Hari libur" +
      $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
    libnas_content,
  };
  $("tbody > tr > td > span > div").each(function (a, b) {
    let summary = $(b).find("span > strong > a").text();
    let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
    let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
    libnas_content.push({ summary, days, dateMonth });
  });
  return result;
  }
  try {
    let teks = `*${(await nexLibur()).nextLibur}*\n\n`
    let result = (await nexLibur()).libnas_content

    for (let a of result) {
      teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
    }
    reply(teks)
  } catch (e) {
    throw e
  }
}
break
case 'text-unbanned': {
  if (!isCreator) return reply(mess.OnlyOwner);
  const nomor = args[0]
  if (!args[0]) {
      return reply('Masukkan nomor')
    }
function generateRandomString(minLength, maxLength) {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
		const randomStringArray = Array.from({
			length
		}, () => {
			const randomIndex = Math.floor(Math.random() * characters.length)
			return characters[randomIndex]
		})
		return randomStringArray.join('')
	}
	const teksUnban = [
`Halo penolong akun pemblokir, saya adalah salah satu dari dua juta  pengguna WhatsApp dari indonesia, nama saya ${["Ali", "Sari", "Budi", "Dina", "Rudi", "Nina", "Eko", "Lina", "Faisal", "Tina", "Yogi", "Nia", "Hendra", "Cindy", "Rina", "Dodi", "Joko", "Siti", "Nico", "Lutfi", "Rina", "Gita", "Ayu", "Fajar", "Dewi", "Gani", "Rizki", "Mira", "Toni", "Kiki", "Vina", "Rizal", "Sari", "Eka", "Fina", "Dani", "Wati", "Hani", "Iwan", "Dara", "Rian", "Fani", "Tari", "Bayu", "Rizki", "Lina", "Yuni", "Cahyo", "Reza", "Dian", "Vicky", "Nadia", "Edi", "Beni", "Ika", "Arif", "Putri", "Diah", "Leli", "Bima", "Rudi", "Andi", "Lina", "Dodi", "Kevin", "Mila", "Rofi", "Zahra", "Aji", "Lina"][Math.floor(Math.random() * 72)]}, saya selalu menggunakan WhatsApp untuk berkomunikasi dengan mudah dengan teman dan keluarga saya kapan pun dimana pun, namun anda memblokir dan mengunci akun saya permanen, saya sangat tahu tentang WhatsApp karena saya pengguna WhatsApp lama, dari awal WhatsApp rilis yaitu tahun 2009 sampai sekarang dan sekarang beredar isu tentang jasa membanned akun WhatsApp, Mereka membuka jasa itu dengan cara kerja melaporkan nomor target menggunakan fakechat atau pesan palsu yang fiturnya disediakan di WhatsApp modifikasi ilegal, saya telah menjadi korban dari fakechat itu dan akhirnya akun saya +${nomor} diblokir permanen, saya ingin melaporkan masalah ini karena lebih dari satu juta orang menjadi korban tak bersalah yah salah satunya adalah saya, anda harus mengambil tindakan dengan membuka atau menghapus pemblokiran di WhatsApp saya dan korban lainnya Yaitu semua pengguna WhatsApp yang diblokir tanpa kesalahan karena ini membuat kami kesulitan di kehidupan sehari-hari kami dan kami merasa bingung, terimakasih WhatsApp dan semua pihak terkait support@support.whatsapp.com`,
`Hello blocker account helper, I am one of the two million WhatsApp users from Indonesia, my name is ${["Ali", "Sari", "Budi", "Dina", "Rudi", "Nina", "Eko", "Lina", "Faisal", "Tina", "Yogi", "Nia", "Hendra", "Cindy", "Rina", "Dodi", "Joko", "Siti", "Nico", "Lutfi", "Rina", "Gita", "Ayu", "Fajar", "Dewi", "Gani", "Rizki", "Mira", "Toni", "Kiki", "Vina", "Rizal", "Sari", "Eka", "Fina", "Dani", "Wati", "Hani", "Iwan", "Dara", "Rian", "Fani", "Tari", "Bayu", "Rizki", "Lina", "Yuni", "Cahyo", "Reza", "Dian", "Vicky", "Nadia", "Edi", "Beni", "Ika", "Arif", "Putri", "Diah", "Leli", "Bima", "Rudi", "Andi", "Lina", "Dodi", "Kevin", "Mila", "Rofi", "Zahra", "Aji", "Lina"][Math.floor(Math.random() * 72)]}, I always use WhatsApp to communicate easily with my friends and family anytime anywhere, but you blocked and locked my account permanently, I I really know about WhatsApp because I am an old WhatsApp user, from the beginning of WhatsApp's release, namely in 2009 until now and now there are rumors circulating about the service of banning WhatsApp accounts. They opened this service by reporting the target number using fakechat or fake messages whose features are provided in modified WhatsApp. illegal, I have become a victim of fakechat and finally my account +${nomor} was permanently blocked, I want to report this problem because more than one million people have become innocent victims, one of them is me, you have to take action by unblocking or removing the block on my WhatsApp and other victims, namely all WhatsApp users who were blocked without error because this makes us difficult in our daily lives and we feel confused, thank you WhatsApp and all related parties support@support.whatsapp.com`,
`Salam kepada yang saya sangat hormati yaitu tim dukungan atau pengembang WhatsApp, Sore ini saya memiliki kabar buruk yaitu Akun WhatsApp saya terkena blokir dikarenakan spam, Tadinya saya sedang asyik mengobrol dengan aplikasi WhatsApp dengan teman saya namun tiba-tiba Akun saya terblokir karena spam, Saya harap tim dukungan atau pengembang WhatsApp bisa memulihkan akun saya secepatnya Saya tidak akan mengulangi lagi kesalahan saya, Akun WhatsApp saya +${nomor} Terimakasih`,
`Halo developer WhatsApp. Saya adalah seorang guru yang mengajar di sekolah menengah pertama ( ${["SMP", "SMA", "SD"][Math.floor(Math.random() * 3)]} ). Ketika saya inginkan memberikan informasi di grup kepada murid saya. tatapi akun WhatsApp saya keluar dengan sendirinya dan muncul tampilan akun WhatsApp yang di blokir. Saya sangat heran mengapa akun WhatsApp saya bisa di blokir secara permanen. Padahal saya tidak pernah melakukan pelanggaran ketentuan WhatsApp. Saya hanya menggunakan aplikasi WhatsApp untuk menghubungi teman, kerabat dan juga memberikan informasi kepada murid murid saya. Sama meminta developer WhatsApp untuk memulihkan kembali akun WhatsApp saya. Akun WhatsApp saya adalah +${nomor}`,
]
var randomTeks = teksUnban[Math.floor(Math.floor(Math.random() * teksUnban.length))]
    reply(randomTeks)
}
break
case 'lahelu': {
	let tags = ['lucu', 'relate', 'gaming', 'nostalgia', 'teknologi', 'random', 'komik', 'editan', 'wtf', 'olahraga', 'opini', 'dark', 'absurd', 'cringe', 'sus', 'binatang']
	if(text && !tags.includes(text)) return m.reply(`Meme "${text}" tidak di temukan! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await Rifky.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	if(/^image/i.test(data.media)) return await Rifky.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	}
break

 case 'nglspam': {
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam rexxzynxd|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return m.reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return m.reply("Fitur error, coba lagi nanti.");
    }
}
break
        
case 'jpm': {
if (!isCreator) return reply(mess.OnlyOwner);
if (m.isGroup) return reply(mess.private)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
let getGroups = await Rifky.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
global.teksjpm = text
for (let xnxx of anu) {
let metadat72 = await Rifky.groupMetadata(xnxx)
let participanh = await metadat72.participants
await Rifky.sendMessage(xnxx, { text: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: qsal })
await sleep(2000)
}}
break
        
case 'galau': {
let { data } = await axios({
  "method": "GET",
  "url": "https://galau.vercel.app/"
})
Rifky.sendMessage(m.chat, { video: { url: data.url }, caption: "" }, { quoted: m })
}
break
        
    case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            m.reply(`Hasil Gemini:\n${message}`);
        } else {
            m.reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break
        
        case 'soundkane':
if (!text) return reply(`Example: ${prefix + command} 2`)
            let Maximus;

    if (text.toLowerCase() === '1') {
        Maximus = 'SoundKane1';
    } else if (text.toLowerCase() === '2') {
        Maximus = 'SoundKane2';
    } else if (text.toLowerCase() === '3') {
        Maximus = 'SoundKane3';
    } else if (text.toLowerCase() === '4') {
        Maximus = 'SoundKane4';
    } else if (text.toLowerCase() === '5') {
        Maximus = 'SoundKane5';
    } else if (text.toLowerCase() === '6') {
        Maximus = 'SoundKane6';
    } else if (text.toLowerCase() === '7') {
        Maximus = 'SoundKane7';
    } else if (text.toLowerCase() === '8') {
        Maximus = 'SoundKane8';
    } else if (text.toLowerCase() === '9') {
        Maximus = 'SoundKane9';
    } else if (text.toLowerCase() === '10') {
        Maximus = 'SoundKane10';
    } else if (text.toLowerCase() === '11') {
        Maximus = 'SoundKane11';
    } else if (text.toLowerCase() === '12') {
        Maximus = 'SoundKane12';
    } else if (text.toLowerCase() === '13') {
        Maximus = 'SoundKane13';
    } else if (text.toLowerCase() === '14') {
        Maximus = 'SoundKane14';
    } else if (text.toLowerCase() === '15') {
        Maximus = 'SoundKane15';
    } else if (text.toLowerCase() === '16') {
        Maximus = 'SoundKane16';
    } else if (text.toLowerCase() === '17') {
        Maximus = 'SoundKane17';
    } else if (text.toLowerCase() === '18') {
        Maximus = 'SoundKane18';
    } else if (text.toLowerCase() === '19') {
        Maximus = 'SoundKane19';
    } else if (text.toLowerCase() === '20') {
        Maximus = 'SoundKane20';
    } else if (text.toLowerCase() === '21') {
        Maximus = 'SoundKane21';
    } else if (text.toLowerCase() === '22') {
        Maximus = 'SoundKane22';
    } else if (text.toLowerCase() === '23') {
        Maximus = 'SoundKane23';
    } else if (text.toLowerCase() === '24') {
        Maximus = 'SoundKane24';
    } else if (text.toLowerCase() === '25') {
        Maximus = 'SoundKane25';
    } else if (text.toLowerCase() === '26') {
        Maximus = 'SoundKane26';
    } else if (text.toLowerCase() === '27') {
        Maximus = 'SoundKane27';
    } else if (text.toLowerCase() === '28') {
        Maximus = 'SoundKane28';
    } else if (text.toLowerCase() === '29') {
        Maximus = 'SoundKane29';
    } else if (text.toLowerCase() === '30') {
        Maximus = 'SoundKane30';
    } else if (text.toLowerCase() === '31') {
        Maximus = 'SoundKane31';
    } else if (text.toLowerCase() === '32') {
        Maximus = 'SoundKane32';
    } else if (text.toLowerCase() === '33') {
        Maximus = 'SoundKane33';
    } else if (text.toLowerCase() === '34') {
        Maximus = 'SoundKane34';
    } else if (text.toLowerCase() === '35') {
        Maximus = 'SoundKane35';
    } else if (text.toLowerCase() === '36') {
        Maximus = 'SoundKane36';
    } else if (text.toLowerCase() === '37') {
        Maximus = 'SoundKane37';
    } else if (text.toLowerCase() === '38') {
        Maximus = 'SoundKane38';
    } else if (text.toLowerCase() === '39') {
        Maximus = 'SoundKane39';
    } else if (text.toLowerCase() === '40') {
        Maximus = 'SoundKane40';
    } else if (text.toLowerCase() === '41') {
        Maximus = 'SoundKane41';
    } else if (text.toLowerCase() === '42') {
        Maximus = 'SoundKane42';
    } else if (text.toLowerCase() === '43') {
        Maximus = 'SoundKane43';
    } else if (text.toLowerCase() === '44') {
        Maximus = 'SoundKane44';
    } else if (text.toLowerCase() === '45') {
        Maximus = 'SoundKane45';
    } else if (text.toLowerCase() === '46') {
        Maximus = 'SoundKane46';
    } else if (text.toLowerCase() === '47') {
        Maximus = 'SoundKane47';
    } else if (text.toLowerCase() === '48') {
        Maximus = 'SoundKane48';
    } else if (text.toLowerCase() === '49') {
        Maximus = 'SoundKane49';
    } else if (text.toLowerCase() === '50') {
        Maximus = 'SoundKane50';
    } else {
        return m.reply(`angka yang kamu masukan tidak ada atau angka berlebihan`)
    }
    try {
        var hannaudio = await getBuffer(`https://github.com/Hann109/SoundKanee/raw/main/${Maximus}.mp3`)
 Rifky.sendMessage(m.chat, { audio: hannaudio, mimetype: 'audio/mp4', ptt: true, 
})
    } catch (error) {
        reply('An error occurred while retrieving audio data. Please try again later.');
    }
    break
        
        case 'txt2anime': {
	if (!text) return m.reply(`Masukkan prompt!\n*Contoh:* ${prefix+command} A anime girl yellow hair & green eyes using hoodie black, smiling on camera with close eyes`);
	m.reply(wait);
	async function sdxlAnime(prompt) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!prompt) return reject("failed reading undefined prompt!");
      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        key: "Soft-Anime",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768"
      }).then(res => {
        const data = res.data;
        if(data.code !== 0) return reject(data.message);
        if(data.data.safetyState === "RISKY") return reject("nsfw image was generated, you try create other image again!")
        if(!data.data?.url) return reject("failed generating image!")
        return resolve({
          status: true,
          image: data.data.url
        })
      }).catch(reject)
    })
  } catch (e) {
    return {
      status: false,
      message: e
    }
  }
}
	let res = await sdxlAnime(text);
	const { image } = res;
	await Rifky.sendMessage(m.chat, { image: { url: image }, caption: `> Prompt: ${text}` }, { quoted: m })
}
break
        case 'videy' : {
if (!args[0]) {
    return m.reply(`• Contoh: ${prefix + command} https://videy.co/v?id=K7wdQnbm`);
  }
async function videy(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios(`${url}`, { method: 'get' });
			const $ = cheerio.load(res.data);
			const video = $('source[type="video/mp4"]').attr('src');
			if (video) {
				resolve(video);
			} else {
				throw new Error('Video source not found');
			}
		} catch (error) {
			reject(`Error while fetching the URL: ${error.message}`);
h		}
	});
}
  if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
    return m.reply('Link Invalid');
  }

  try {
    let result = await videy(args[0]);
    await Rifky.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
break
        
        case 'wiktionary': {
 if (!text) {
   throw 'Contoh WikTionary rumah';
 }
// wm avs
 m.reply('Mencari artikel Wiktionary...');
// wm avs
 try {
   const url = `https://id.m.wiktionary.org/wiki/${q}`;
   const response = await axios.get(url);
   const $ = cheerio.load(response.data);
// wm avs
   const judul = $('#firstHeading').text().trim();
   const konten = $('#mw-content-text > div.mw-parser-output').find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
// wm avs
   if (!konten) {
     throw new Error('Tidak ada artikel.');
   }
// wm avs
   const artikel = `_${judul}_\n\n${konten}`;
   m.reply(artikel);
 } catch (error) {
   m.reply(`Maaf : ${error.message}`);
 }
 }
 break
 
 case 'drakor': {
  if (!text) {
    throw 'Contoh: Drakor The Red Sleeve';
  }
  m.reply('Mencari informasi drama Korea...');
  try {
    const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const judul = $('.title').first().text().trim();
    const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
    const link = $('.title').first().find('a').attr('href');
// wm avs    
    if (!konten) {
      throw new Error('Tidak Drakor Itu.');
    }
// wm avs
    const artikel = `*Judul:* ${judul}\n\n*Konten:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
    m.reply(artikel);
  } catch (error) {
    m.reply(`Maaf, terjadi kesalahan: ${error.message}`);
  }
}
break

case 'ebay': {
  if (!q) return m.reply(`Mau cari apa?`);
  const axios = require('axios');
  const cheerio = require('cheerio');
// wm avs
  async function azvxz(query) {
    try { // wm avs
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const results = [];
      $('.s-item').each((index, element) => {
        const title = $(element).find('.s-item__title').text().trim();
        const price = $(element).find('.s-item__price').text().trim();
        const link = $(element).find('.s-item__link').attr('href');
        if (title && title !== "Shop on eBay") { // Jgn Di Hapus Ini
          results.push({ title, price, link });
        }
      });
      return results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
// wm avs
  const query = m.text;
  try {
    const results = await azvxz(query);
// wm avs
    if (results.length === 0) {
      m.reply("Tidak ada hasil ditemukan untuk pencarian Anda.");
    } else {
      let response = "Hasil pencarian eBay:\n\n";
      results.forEach((item, index) => {
        response += `${index + 1}. ${item.title}\nHarga: ${item.price}\nLink: ${item.link}\n\n`;
      });
      m.reply(response);
    }
  } catch (error) {
    m.reply("Terjadi Error.");
  }
}
break

case 'rangkum': {
   if (!q) return m.reply(`Masukkan kalimat Yang Mau di rangkum`);
// wm avs
  const sentences = `${q}`.match(/[^.!?]+[.!?]/g) || [];
// wm avs
  const wordFrequency = {};
  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);
    words.forEach(word => {
      word = word.replace(/[.,!?]/g, '');
      if (word.length > 0) {
        if (wordFrequency[word]) {
          wordFrequency[word]++;
        } else {
          wordFrequency[word] = 1;
        }
      }
    });
  });
// wm avs
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
// wm avs
  const summarySentences = sentences
    .filter(sentence => {
      const words = sentence.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));
      return words.some(word => sortedWords.includes(word));
    })
    .slice(0, 3);
// wm avs
  const summary = summarySentences.join(' ');
// wm avs
  m.reply(summary || "Gagal merangkum teks.");
}
break

case 'matauang': {
    const axios = require('axios');
// wm avs
    async function getCurrency(country) {
        try {
            const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fullText=true`;
            const { data } = await axios.get(url);
// wm avs
            if (data && data.length > 0) {
                const countryData = data[0];
                const countryName = countryData.name.common;
                const currencies = countryData.currencies;
                const currencyNames = Object.values(currencies).map(curr => curr.name).join(', ');
// wm avs
                return `> Mata uang di ${countryName}\n\n> adalah ${currencyNames}`;
            } else {
                return "Maaf, data negara tidak ditemukan.";
            }
        } catch (error) {
            console.error('Error:', error);
            return "Terjadi Apa Ya Error keknya.";
        }
    }
// wm avs
    const country = m.text.split(' ').slice(1).join(' ');
    if (!country) {
        m.reply("contoh : matauang indonesia");
    } else {
        getCurrency(country).then(response => {
            m.reply(response);
        }).catch(error => {
            m.reply("err.");
        });
    }
}
break

case 'duckduckgosearch': {
    if (!text) throw `Example : ${prefix + command} avosky`;
// wm avs    
    let axios = require('axios');
    let cheerio = require('cheerio');
// wm avs    
    axios.get(`https://duckduckgo.com/html/?q=${encodeURIComponent(text)}`)
        .then(response => {
            let $ = cheerio.load(response.data);
            let results = [];
 // wm avs           
            $('.result').each((i, elem) => {
                let title = $(elem).find('.result__title').text();
                let link = $(elem).find('.result__url').attr('href');
                let snippet = $(elem).find('.result__snippet').text();
// wm avs                
                if (title && link) {
                    results.push({ title, link, snippet });
                }
            });
// wm avs            
            if (results.length === 0) return m.reply('Tidak ada hasil.');
// wm avs            
            let teks = `DuckDuckGo Search From : ${text}\n\n`;
            for (let i = 0; i < Math.min(results.length, 5); i++) {
                let res = results[i];
                teks += `⭔ _Title_ : ${res.title}\n`;
                teks += `⭔ _Description_ : ${res.snippet}\n`;
                teks += `⭔ _Link_ : https:${res.link}\n\n────────────────────────\n\n`;
            }
            m.reply(teks);
        })
        .catch(err => {
            m.reply('Terjadi kesalahan.');
            console.error(err);
        });
}
break

case 'bingsearch': {
    if (!text) throw `Example : ${prefix + command} avosky`;
  // wm avs  
    let axios = require('axios');
    let cheerio = require('cheerio');
// wm avs    
    axios.get(`https://www.bing.com/search?q=${encodeURIComponent(text)}`)
        .then(response => {
            let $ = cheerio.load(response.data);
            let results = [];
 // wm avs           
            $('.b_algo').each((i, elem) => {
                let title = $(elem).find('h2').text();
                let link = $(elem).find('a').attr('href');
                let snippet = $(elem).find('.b_caption p').text();
  // wm avs              
                if (title && link) {
                    results.push({ title, link, snippet });
                }
            });
// wm avs            
            if (results.length === 0) return m.reply('gada apa di sini.');
 // wm avs           
            let teks = `Bing Search From : ${text}\n\n`;
            for (let i = 0; i < Math.min(results.length, 5); i++) {
                let res = results[i];
                teks += `⭔ *Title* : ${res.title}\n`;
                teks += `⭔ *Description* : ${res.snippet}\n`;
                teks += `⭔ *Link* : ${res.link}\n\n────────────────────────\n\n`;
            }
            m.reply(teks);
        })
// wm avs
        .catch(err => {
            m.reply('Terjadi kesalahan saat melakukan pencarian.');
            console.error(err);
        });
}
break

case 'similarityband': {
  if (!q) return m.reply("contih: similatryband funy");
// wm avs
  async function similarBand(query) {
    if (typeof query !== 'string' || !query.trim()) {
      throw new Error('Invalid query parameter. Must be a non-empty string.');
    }
// wm avs
    var encodedQuery = encodeURIComponent(query.trim());
    var url = `https://www.music-map.com/${encodedQuery}`;
// wm avs    
    try {
      var response = await axios.get(url);
      var html = response.data;
// wm avs      
      var $ = cheerio.load(html);
// wm avs      
      var bandElements = $("#gnodMap > a");
      var bands = [];
// wm avs      
      bandElements.each(function(index, element) {
        var bandName = $(element).text().trim();
        if (bandName) {
          bands.push(bandName);
        }
      });
// wm avs      
      var result = bands.length > 0 ? bands : "No Found.";
// wm avs      
      return result;
// wm avs      
    } catch (error) {
      var errorDetail = {
        status: false,
        message: "Failed.",
        error: {
          message: error.message,
          stack: error.stack
        },
        query: query
      };
// wm avs
      console.error("Error details:", errorDetail);
      return errorDetail;
    }
  }
// wm avs
  async function handleBandSearch(query) {
    try {
      var similarBands = await similarBand(query);
// wm avs      
      if (Array.isArray(similarBands) && similarBands.length > 0) {
        var message = `Here are some bands similarity to "${query}":\n\n`;
        similarBands.forEach((band, index) => {
          message += `${index + 1}. ${band}\n`;
        });
        m.reply(message);
      } else {
        m.reply(similarBands);
      }
    } catch (error) {
      m.reply(`An error occurred: ${error.message}`);
    }
  }
// wm avs
  handleBandSearch(q);
}
break

case 'ypia': {
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: ypia : masjid`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function scrapeTafsir(searchQuery) {
        const url = `https://ypia.or.id/?s=${encodeURIComponent(searchQuery)}`;
        // wm avz
        try {
            const { data } = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            const $ = cheerio.load(data);      
            const tafsirResults = [];
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                tafsirResults.push({ title, link });
            });
            // wm avz
            return tafsirResults;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    scrapeTafsir(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('Tidak ada.');
            } else {
                let response = `Hasil pencarian YPIA untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            m.reply('Terjadi ngehenk.');
        });
        }
    break

case 'rumaysho': {
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: rumaysho : adam`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function scrapeTafsir(searchQuery) {
        const url = `https://rumaysho.com/?s=${encodeURIComponent(searchQuery)}`;
        // wm avz
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const tafsirResults = [];
            $('.post-title a').each((index, element) => {
                const title = $(element).text();
                const link = $(element).attr('href');
                tafsirResults.push({ title, link });
            });
            // wm avz
            return tafsirResults;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    scrapeTafsir(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('Tidak ada hasil ditemukan untuk kata kunci tersebut.');
            } else {
                let response = `Hasil pencarian Rumaysho untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            m.reply('Terjadi kesalahan saat mengambil data.');
        });
        }
    break

case 'yahoosearch': {
    if (!text) throw `Example : ${prefix + command} viral`;
// wm avs    
    let axios = require('axios');
    let cheerio = require('cheerio');
// wm avs    
    axios.get(`https://search.yahoo.com/search?p=${encodeURIComponent(text)}`)
        .then(response => {
            let $ = cheerio.load(response.data);
            let results = [];
// wm avs            
            $('.dd.algo').each((i, elem) => {
                let title = $(elem).find('h3').text();
                let link = $(elem).find('a').attr('href');
                let snippet = $(elem).find('.compText').text();
// wm avs                
                if (title && link) {
                    results.push({ title, link, snippet });
                }
            });
// wm avs            
            if (results.length === 0) return m.reply('Tidak ada hasil.');
// wm avs            
            let teks = `Yahoo Search From : ${text}\n\n`;
            for (let i = 0; i < Math.min(results.length, 5); i++) { 
                let res = results[i];
                teks += `⭔ _Title_ : ${res.title}\n`;
                teks += `⭔ _Description : ${res.snippet}\n`;
                teks += `⭔ _Link_ : ${res.link}\n\n────────────────────────\n\n`;
            }
            m.reply(teks);
        })
        .catch(err => {
            m.reply('Terjadi kesalahan.');
            console.error(err);
        });
}
break

case 'bahasanegara': {
    const axios = require('axios');
// wm avs
    async function getCountryLanguage(country) {
        try {
            const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fullText=true`;
            const { data } = await axios.get(url);
// wm avs
            if (data && data.length > 0) {
                const countryData = data[0];
                const countryName = countryData.name.common;
                const languages = Object.values(countryData.languages).join(', ');
// wm avs
                return `> Bahasa yang digunakan di ${countryName}\n\n> adalah: ${languages}`;
            } else {
                return "Maaf, data negara tidak ditemukan.";
            }
        } catch (error) {
            console.error('Error:', error);
            return "Terjadi kesalahan saat mengambil data bahasa.";
        }
    }
// wm avs
    const country = m.text.split(' ').slice(1).join(' ');
// wm avs
    if (!country) {
        m.reply("contoh: bahasanegara indonesia");
    } else {
        getCountryLanguage(country).then(response => {
            m.reply(response);
        }).catch(error => {
            m.reply("err.");
        });
    }
}
break

case 'infonegara': {
    const axios = require('axios');
// wm avs
    async function getCountryFacts(country) {
        try {
            const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fullText=true`;
            const { data } = await axios.get(url);
// wm avs
            if (data && data.length > 0) {
                const countryData = data[0];
                const countryName = countryData.name.common;
                const capital = countryData.capital ? countryData.capital[0] : 'Tidak diketahui';
                const population = countryData.population;
                const languages = Object.values(countryData.languages).join(', ');
// wm avs
                return `Negara: ${countryName}\nIbukota: ${capital}\nPopulasi: ${population}\nBahasa: ${languages}`;
            } else {
                return "Maaf Negara Itu Tidak Ad.";
            }
        } catch (error) {
            console.error('Error:', error);
            return "web lg down.";
        }
    }
// wm avs
    const country = m.text.split(' ').slice(1).join(' ');
// wm avs
    if (!country) {
        m.reply("contoh : infonegara Indonesia");
    } else {
        getCountryFacts(country).then(response => {
            m.reply(response);
        }).catch(error => {
            m.reply("err.");
        });
    }
}
break

case 'animecharacter': {
 if (!text) {
 m.reply('Contoh: animecharacter naruto');
 return;
 }
// wm avs
 m.reply('_Sabar tuan, sedang mencari karakter anime..._');
// wm avs
 async function getCharacterInfo(characterName) {
 const query = `
 query ($search: String) {
 Character(search: $search) {
 name {
 full
 }
 description
 media {
 nodes {
 title {
 romaji
 }
 }
 }
 }
 }
 `;
 const variables = {
 search: characterName
 };
// wm avs
 const response = await fetch('https://graphql.anilist.co', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 'Accept': 'application/json',
 },
 body: JSON.stringify({
 query: query,
 variables: variables
 })
 });
 if (!response.ok) {
 throw new Error('Gagal mengambil data karakter');
 }
// wm avs
 const data = await response.json();
 return data.data.Character;
 }
// wm avs
 try {
 const query = text.trim();
 const characterInfo = await getCharacterInfo(query);
// wm avs
 if (!characterInfo) {
 m.reply('Karakter Gda.');
 return;
 }
// wm avs
 // Format hasil pencarian karakter
 const name = characterInfo.name.full;
 const description = characterInfo.description || 'Deskripsi tidak Ada';
 const mediaTitles = characterInfo.media.nodes.map(node => node.title.romaji).join(', ');
// wm avs
 const formattedDescription = description
 .replace(/\n/g, '\n\n') // jgb ubah
 .replace(/__([^__]+)__/g, '*$1*') // jgn ubah 
 .replace(/~\!?\[([^\]]+)]\(([^)]+)\)~?/g, '*$1* ($2)') // jgn ubah ini
 .replace(/^\s+/gm, '');
// wm avs
 const result = `*Nama Karakter:* ${name}\n\n*Deskripsi:* ${formattedDescription}\n\n*Media Terkait:* ${mediaTitles}`;
// wm avs
 m.reply(result);
// wm avs
 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 }
}
break

case 'themovie': {
  if (!text) {
    throw 'Contoh: themovie horror';
  }
// wm avs
  m.reply('_sabar tuan sedang mencari film nya_');
// wm avs
  async function avzz(query) {
    const url = `https://www.themoviedb.org/search?query=${query}`;
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const movies = [];
// wm avs
      $('.card').each((index, element) => {
        const title = $(element).find('.title a').text().trim();
        const link = `https://www.themoviedb.org${$(element).find('.title a').attr('href')}`;
        const synopsis = $(element).find('.overview').text().trim();
        movies.push({ title, link, synopsis });
      });
// wm avs
      return movies;
    } catch (error) {
      console.error('error di sini:', error);
      return [];
    }
  }
// wm avs
  try {
    const query = encodeURIComponent(text);
    const movies = await avzz(query);

    if (movies.length === 0) {
      throw new Error('Film tidak ditemukan.');
    }
// wm avs
    let result = '';
    movies.forEach((movie, index) => {
      result += `*${index + 1}. ${movie.title}*\nLink: ${movie.link}\nSinopsis: ${movie.synopsis}\n\n`;
    });
// wm avs
    m.reply(result);
  } catch (error) {
    m.reply(`terjadi kesalahan: ${error.message}`);
  }
}
break
        
        case 'gimage': {
    if (!text) return m.reply(`gimage avosky`)
    m.reply(mess.wait)
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return m.reply('Tidak ada gambar.')
        }
        let imageAvz = images[Math.floor(Math.random() * images.length)]
        Rifky.sendMessage(m.chat, { image: { url: imageAvz }, caption: `*Query* : ${text}\n*Media Url* : ${imageAvz}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi kesalahan.')
    })
}
break

case 'kbbi-kemdikbud': {
    if (!text) return m.reply('contoh kbbi-kemdikbud')
    const axios = require('axios')
    const url = `https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(text)}`
 // wm avs
    axios.get(url).then(response => {
        const cheerio = require('cheerio')
        const $ = cheerio.load(response.data)
        let definition = $('ol').first().text().trim()
 // wm avs       
        if (!definition) {
            return m.reply('Kata tidak ditemukan dalam KBBI.')
        }
 // wm avs        
        Rifky.sendMessage(m.chat, { text: `${definition}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi elol.')
    })
}
break

case 'urban': {
    if (!text) return m.reply('contoh nya tu gini \n\nurban rumah');
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const url = `https://www.urbandictionary.com/define.php?term=${encodeURIComponent(text)}`;
// wm avs
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let definitions = [];

        $('.meaning').each((i, elem) => {
            definitions.push($(elem).text().trim());
        });

        if (definitions.length === 0) {
            return m.reply('Kata Tidak Ada Mungkin Kapan" Bakal Ada.');
        }
// wm avs
        let result = `Definisi dari *${text}*:\n\n`;
        definitions.forEach((def, index) => {
            result += `${index + 1}. ${def}\n`;
        });
// wm avs
        Rifky.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        m.reply('Terjadi kesalahan saat mencari definisi kata.');
    }
}
break

case 'merriam': {
    if (!text) return m.reply('contoh nya : merriam house');
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const url = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(text)}`;
// wm avs
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let definitions = [];

        $('.dtText').each((i, elem) => {
            definitions.push($(elem).text().trim());
        });

        if (definitions.length === 0) {
            return m.reply('Kata tidak ditemukan dalam Merriam.');
        }
// wm avs
        let result = `Makna dari *${text}*:\n`;
        definitions.forEach((def, index) => {
            result += `${index + 1}. ${def}\n`;
        });
// wm avs
        Rifky.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        m.reply('Terjadi kesalahan.');
    }
}
break

case 'freedict': {
    if (!text) return m.reply('<contoh: freedict human>');
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const url = `https://www.thefreedictionary.com/${encodeURIComponent(text)}`;
// wm avs
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let definitions = [];
// wm avs
        $('.ds-list').each((i, elem) => {
            definitions.push($(elem).text().trim());
        });
// wm avs
        if (definitions.length === 0) {
            return m.reply('Kata tidak Ada.');
        }
// wm avs
        let result = `*${text}*:\n`;
        definitions.forEach((def, index) => {
            result += `${index + 1}. ${def}\n`;
        });
// wm avs
        Rifky.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        m.reply('Terjadi kesalahan lagi.');
    }
}
break

case 'news-game': {
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const url = 'https://www.gamespot.com/news/';
// wm avs
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let news = [];
// wm avs
        $('.media-title').each((i, elem) => {
            news.push($(elem).text().trim());
        });
// wm avs
        if (news.length === 0) {
            return m.reply('Tidak ada Game Terbaru.');
        }
// wm avs
        let result = `News Game In 2024\n`;
        news.slice(0, 5).forEach((headline, index) => {
            result += `${index + 1}. ${headline}\n`;
        });
// wm avs
        Rifky.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        m.reply('ad error.');
    }
}
break


        
        case 'britannica': {
    const inputQuery = args.join(' ');
    const start_page = 1;
    const out_file = 'results.json';
    const start_time = Date.now();
    async function scrapeHtml(input, pgNo) {
        const formattedQuery = input.split(' ').join('%20');
        const url = `https://www.britannica.com/search?query=${formattedQuery}&page=${pgNo}`;
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        };

        try {
            const response = await axios.get(url, { headers });
            return response;
        } catch (error) {
            console.error(`Error in search for '${input}': ${error.message}`);
            return null;
        }
    }
    async function scrapeLinks(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const links = [];

        $('.search-results.col ul.list-unstyled.results li').each((index, element) => {
            const linkElement = $(element).find('a.font-weight-bold');
            const href = linkElement.attr('href');
            if (href) {
                links.push(`https://www.britannica.com${href}`);
            }
        });
        return links;
    }
    async function main(query, pgNo) {
        let n_results = 0;
        const queryLinks = [];
        for (let pageNo = pgNo; pageNo < 20; pageNo++) {
            const response = await scrapeHtml(query, pageNo);
            if (response && response.status === 200) {
                const links = await scrapeLinks(response.data);
                queryLinks.push(...links);
                n_results += links.length;
            } else {
                console.error(`Error in search for '${query}': ${response ? response.status : 'no response'}`);
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        fs.appendFileSync(out_file, JSON.stringify({ query, links: queryLinks }) + '\n');
        return { query, n_results, links: queryLinks };
    }
    (async () => {
        const result = await main(inputQuery, start_page);
        const end_time = Date.now();
        const duration = ((end_time - start_time) / (60 * 1000)).toFixed(2);
        const replyMessage = `
**Hasil Pencarian untuk: ${result.query}**
Total hasil ditemukan: ${result.n_results}
Waktu proses: ${duration} menit

${result.links.length > 0 ? result.links.map(link => `Link ${link}`).join('\n') : 'Tidak ada hasil yang ditemukan.'}
`;

        m.reply(replyMessage);
    })();
}
break

case 'resep':
  if (!text) {
    throw `Mohon masukkan nama makanan yang ingin Anda cari resepnya.\n\nContoh: resep Spaghetti`;
  }

  m.reply('Mencari resep...');

  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(text)}`;
    const response = await axios.get(url);
    const data = response.data.meals[0];

    if (!data) {
      throw new Error('Tidak ada resep yang ditemukan untuk makanan tersebut.');
    }

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (data[`strIngredient${i}`]) {
        ingredients.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`);
      }
    }

    const resep = `
Nama: ${data.strMeal}
Kategori: ${data.strCategory}
Asal: ${data.strArea}

Bahan-bahan:
${ingredients.join('\n')}

Instruksi:
${data.strInstructions}
    `;

    m.reply(resep);
  } catch (error) {
    m.reply(`Maaf, terjadi kesalahan: ${error.message}`);
  }
  break

case 'photoleap': {
 if (!q) return m.reply(`contoh \n\nphotoleAp girl crying`);
  async function textToImageVsky(text) {
    try {
      const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
      return data;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await textToImageVsky(text);
//avosky
  if (result && result.result_url) {
    const imageUrl = result.result_url;
    const message = {
      image: { url: imageUrl },
      caption: 'done nih'
    };
    Rifky.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break

case 'picsum': {
  if (!q) return m.reply(`contoh \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    Rifky.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
  
   case 'robomaker': { 
 if (!q) return m.reply(`contoh \nRobomaker Avosky\n\n! Ini Bukan Membuat Robot Tapi menghasilkan robot dari nama doang`);
  async function roboMaker(text) {
    try {
      const imageUrl = `https://robohash.org/${q}`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await roboMaker(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: 'Random Robot'
    };
    Rifky.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break

case 'catsay': {
  if (!q) return m.reply(`contoh \n\ncatsay avosky`);
//avosky  
  async function CatSayAvs(text) {
    try {
      const imageUrl = `https://cataas.com/cat/says/${q}`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
  const result = await CatSayAvs(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: 'miawwwwvwwswwkwwy'
    };
    Rifky.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
  
  case 'detik': {
  m.reply('Mencari berita terkini...');

  try {
    const url = 'https://www.detik.com/terpopuler';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    let berita = [];
    $('.grid-row article').each((index, element) => {
      if (index < 5) {  // Ambil 5 berita teratas
        const judul = $(element).find('h3.media__title').text().trim();
        const link = $(element).find('a').attr('href');
        const waktu = $(element).find('.media__date').text().trim();
        berita.push({ judul, link, waktu });
      }
    });

    if (berita.length === 0) {
      throw new Error('Tidak ada berita yang ditemukan.');
    }

    let beritaText = 'Berita Terpopuler:\n\n';
    berita.forEach((item, index) => {
      beritaText += `${index + 1}. ${item.judul}\n`;
      beritaText += `   ${item.waktu}\n`;
      beritaText += `   ${item.link}\n\n`;
    });

    m.reply(beritaText);
  } catch (error) {
    m.reply(`Maaf, terjadi kesalahan: ${error.message}`);
  }
}
  break
        
        case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Rifky.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
        
        case 'emma': {
           if (!text) return reply("Example: .emma hai aku emma")
            return ttsEmma(text)
            }
        break
        
        case 'telestick': {
	if (m.isGroup) return reply(mess.private)
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let Lorenzoresources = await Telesticker(args[0])
		await reply(`Sending ${Lorenzoresources.length} stickers...`)
		if (m.isGroup && Lorenzoresources.length > 30) {
			await reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < Lorenzoresources.length; i++) {
Rifky.sendMessage(m.sender, { sticker: { url: Lorenzoresources[i].url }})
			}
		} else {
			for (let i = 0; i < Lorenzoresources.length; i++) {
Rifky.sendMessage(m.chat, { sticker: { url: Lorenzoresources[i].url }})
			}
		}
	} else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
        
case 'darussalam': {
     if (!q) return m.reply(`cari apa? masukan QUERY`);    
    async function AvoskyBaik(keyword) {
        try {
            const response = await axios.get(`https://darussalaf.or.id/?s=${keyword}`); // wm avs
            const html = response.data; // wm avs
            const $ = cheerio.load(html); // wm avs
            let results = []; // wm avs
            $('.entry-title a').each((index, element) => { // wm avs
                const title = $(element).text(); // wm avs
                const link = $(element).attr('href'); // wm avs
                const date = $(element).closest('.post').find('.entry-date').text(); // wm avs
                results.push({ title, link, date }); // wm avs
            });
            return results; // wm avs
        } catch (error) {
            console.error('Error fetching data:', error); // wm avs
            return []; // wm avs
        }
    }
    // wm avs
    AvoskyBaik(`${q}`).then(results => {
        if (results.length === 0) {
            m.reply("Tidak ada hasil yang ditemukan."); // wm avs
        } else {
            let responseMessage = "Hasil pencarian untuk Darussalaf:\n"; // wm avs
            results.forEach((result, index) => { // wm avs
                responseMessage += `${index + 1}. ${result.title}\nTanggal Up: ${result.date}\nLink: ${result.link}\n\n`; // wm avs
            });
            m.reply(responseMessage); // wm avs
        }
    }).catch(error => {
        m.reply("Terjadi kesalaham."); // wm avs
        console.error(error); // wm avs
    });
}
    break
        
case 'konsultasisyariah': {
 if (!q) return m.reply(`_contoh konsultasisyariah: puasa`);
    // wm avs
    async function AvoskyBaik(query) {
        try {
            const response = await axios.get(`https://konsultasisyariah.com/?s=${query}`); // wm avs
            const html = response.data; // wm avs
            const $ = cheerio.load(html); // wm avs
            let results = []; // wm avs
            $('.post').each((index, element) => { // wm avs
                const title = $(element).find('h2 a').text(); // wm avs
                const link = $(element).find('h2 a').attr('href'); // wm avs
                results.push({ title, link }); // wm avs
            });
            return results; // wm avs
        } catch (error) {
            console.error('Error:', error); // wm avs
            return []; // wm avs
        }
    }
    // wm avs 
    AvoskyBaik(`${q}`).then(results => {
        if (results.length === 0) {
            m.reply("Tidak ada hasil."); // wm avs
        } else {
            let responseMessage = "Hasil pencarian untuk konsultasi syariah:\n"; // wm avs
            results.forEach((result, index) => { // wm avs
                responseMessage += `${index + 1}. ${result.title}\n${result.link}\n\n`; // wm avs
            });
            m.reply(responseMessage); // wm avs
        }
    }).catch(error => {
        m.reply("Terjadi kesalahan."); // wm avs
        console.error(error); // wm avs
    });
}
    break
        
        case 'waifu': {
const waifud = await fetchJson 
(`https://api.waifu.pics/sfw/waifu`)
  Rifky.sendMessage(from, { image: { url: waifud.url }, caption: `Hell nah` }, { quoted: qsal })
}
break

case 'liputan6': {
    const axios = require('axios');
    const cheerio = require('cheerio');

    async function avzz() {
        try {
// wm avs                  
            const AvoskyBaik = await axios.get('https://www.liputan6.com/');
            const $ = cheerio.load(AvoskyBaik.data);
// wm avs
            const latestNews = $('.articles--iridescent-list').eq(2).find('article');
// wm avs
            const results = [];
            latestNews.each(function () {
                try {
                    const title = $(this).find('figure a').attr('title');
                    const link = $(this).find('figure a').attr('href');
                    const image = $(this).find('figure a picture img').attr('data-src');
                    const tag = $(this).find('aside header a').text();
// wm avs
                    results.push({ title, link, tag, image, source: 'liputan6' });
                } catch (e) {
// wm avs
                    console.error('Error scraping article:', e);
                }
            });
// wm avs
            return results;
        } catch (error) {
            console.error('Error fetching:', error);
            return [];
        }
    }
// wm avs
    avzz()
        .then(results => {
            if (results.length === 0) {
                m.reply('Tidak ada berita terbaru yang ditemukan.');
            } else {
                let message = 'Berita Terbaru dari Liputan6:\n\n';
                results.forEach((news, index) => {
                    message += `${index + 1}. ${news.title}\n`;
                    message += `Tag: ${news.tag}\n`;
                    message += `Link: ${news.link}\n`;
                    message += `Gambar: ${news.image}\n\n`;
                });
                m.reply(message);
            }
        })
        .catch(error => {
            console.error('ada bug:', error.message);
            m.reply('Terjadi kesalahan...');
        });
}
    break
    
case 'temposearch': {
    if (!q.trim()) return m.reply("Silakan masukkan kata kunci pencarian.");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const basenya = `https://www.tempo.co/search?q=`;
// wm avs
    async function tempoSearch(keyword) {
        try {
            const { data: htmlRaw } = await axios.get(`${basenya}${encodeURIComponent(keyword)}&page=1`);
            const $ = cheerio.load(htmlRaw);

            const news = {
                judul: keyword,
                data: []
            };
// wm avs
            $('.card-box.ft240.margin-bottom-sm').each((i, el) => {
                news.data.push({
                    index: i + 1,
                    judul: $(el).find('article h2.title').text().trim(),
                    url: $(el).find('figure a').attr('href'),
                    gambar: $(el).find('figure img').attr('src'),
                    deskripsi: $(el).find('article p').text().trim()
                });
            });
// wm avs
            return news;
        } catch (error) {
            console.error("Error fetching data:", error.message);
            return { judul: keyword, data: [] };
        }
    }
// wm avs
    tempoSearch(q)
        .then(result => {
            if (result.data.length === 0) {
                m.reply('Tidak ada hasil ditemukan untuk pencarian Anda.');
            } else {
                let response = `Hasil pencarian berita Tempo untuk: ${result.judul}\n\n`;
                result.data.forEach(item => {
                    response += `${item.index}. ${item.judul}\nLink: ${item.url}\nDeskripsi: ${item.deskripsi}\nGambar: ${item.gambar}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            console.error(`!: ${error.message}`);
            m.reply('aaaaaaaaaa eror.');
        });
}
    break
case 'azm': {
 if (!q) return m.reply(`film apa?`);
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function fetchvz(url) {
        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
                }
            });
            return response.data;
        } catch (error) {
            console.error("Failed to fetch HTML:", error.message);
            throw new Error('Error dulu');
        }
    }
// wm avs
    function parseAvosky(html) {
        const $ = cheerio.load(html);
        const results = [];
// wm avs        
        $(".col-3.col-tb-4.col-p-6.col-md-2.poster-col").each((index, element) => {
            try {
                const $element = $(element);
                const title = $element.find(".poster__title").text().trim();
                const rilis = $element.find(".poster__year .badge").text().trim();
                const durasi = $element.find(".poster__year .has-icon").text().trim();
                const thumbImg = $element.find(".poster__img").attr("data-src");
                const link = "https://azm.to" + $element.find(".poster").attr("href");
 // wm avs               
                if (title && link) {
                    results.push({ title, rilis, durasi, thumbImg, link });
                }
            } catch (parseError) {
                console.warn(`Error parsing element at index ${index}:`, parseError.message);
            }
        });

        return results;
    }
// wm avs
    async function az(query) {
        const url = `https://azm.to/search/${encodeURIComponent(query)}`;
        const html = await fetchvz(url);
        const results = parseAvosky(html);
// wm avs        
        if (results.length === 0) {
            console.log("No results found for the query:", query);
            m.reply(`Tidak ada hasil yang ditemukan untuk: ${query}`);
        } else {
            console.log(`Found ${results.length} results for the query:`, query);
            let message = `Ditemukan ${results.length} hasil untuk: ${query}\n\n`;
            results.forEach((result, index) => {
                message += `${index + 1}.\nJudul: ${result.title}\nRilis: ${result.rilis}\nDurasi: ${result.durasi}\nLink: ${result.link}\n\n`;
            });
            m.reply(message);
        }
    }
// wm avs
    const userQuery = args.join(' ');
    if (!userQuery) {     
    } else {
        az(userQuery).catch(err => {
            console.error("Error:", err.message);
            m.reply("Terjadi kesalahan saat mencari data. Silakan coba lagi.");
        });
    }
}
break
case 'gsmarena': {
 if (args.length === 0) {
 m.reply('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 m.reply(replyText);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break
case 'an1': {
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: an1 : pou`);    
    const axios = require('axios');
    const cheerio = require('cheerio');
    const extractData = ($, selector, attr = 'text') => {
        return $(selector).map((_, el) => attr === 'text' ? $(el).text().trim() : $(el).attr(attr)).get();
    };
    const an1 = async (query) => {
        const url = `https://an1.com/tags/MOD/?story=${encodeURIComponent(query)}&do=search&subaction=search`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
// wm avs            
            const selectors = {
                nama: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span',
                rating: 'div > ul > li.current-rating',
                developer: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted',
                thumb: 'body > div.page > div > div > div.app_list > div > div > div.img > img',
                link: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a'
            };
// wm avs
            const results = Object.keys(selectors).reduce((acc, key) => {
                acc[key] = extractData($, selectors[key], key === 'link' ? 'href' : 'text');
                return acc;
            }, {});
// wm avs
            const format = results.link.map((_, i) => ({
                judul: results.nama[i] || 'N/A',
                dev: results.developer[i] || 'N/A',
                rating: results.rating[i] || 'N/A',
                thumb: results.thumb[i] || 'N/A',
                link: results.link[i] || 'N/A'
            }));
// wm avs
            return {
                creator: "hann",
                data: format
            };
        } catch (error) {
            throw new Error('Data retrieval failed');
        }
    };
// wm avs
    try {
        const result = await an1(q);

        if (result.data.length === 0) {
            m.reply('Tidak ada hasil.');
        } else {
            const response = result.data.reduce((msg, item, index) => (
                `${msg}${index + 1}. Judul: ${item.judul}\nDeveloper: ${item.dev}\nRating: ${item.rating}\nLink: ${item.link}\nThumbnail: ${item.thumb}\n\n`
            ), `Hasil pencarian dari an1 untuk: ${q}\n\n`);
// wm avs
            m.reply(response);
        }
    } catch (error) {
        m.reply('Terjadi kesalahan.');
    }
}
break
case "txt2img": {
if (!text) return m.reply("Masukan query!")
try {
  var URL = "https://hercai.onrender.com/v3/text2image"
  let { data } = await axios({
    method: "GET",
    url: URL,
    params: {
      prompt: text
    }
  })
  Rifky.sendMessage(m.chat, { image: { url: data.url }, caption: "Ini dia kak" }, { quoted: m })
} catch (e) {
  console.log(e)
  m.reply("error kak")
}
}
break
case 'igvid': case 'igmp4': {
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await Rifky.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

case 'infogempa':
        axios.get('https://itzpire.com/information/gempaWarning')
        .then(({ data }) => {
            if (data.status !== 'success') {
                return reply("Maaf, terjadi kesalahan pada server. Coba lagi nanti.");
            }
            const gempaInfo = data.data;
            const responseText = `*╭────〔 INFO GEMPA 〕─*
    *┊ Tanggal* : ${gempaInfo.tanggal}
    *┊ Magnitudo* : ${gempaInfo.magnitudo}
    *┊ Kedalaman* : ${gempaInfo.kedalaman}
    *┊ Kordinat* : ${gempaInfo.koordinat}
    *┊ Lokasi* : ${gempaInfo.lokasi}
    *┊ Wilayah Terdampak* : ${gempaInfo.wilayahDirasakan}
    *╰┈┈┈┈┈┈┈┈*
            `;
            Rifky.sendMessage(m.key.remoteJid, { image: { url: gempaInfo.linkPeta }, caption: responseText });
        })
        .catch((error) => {
            console.error(error);
            reply("Maaf, terjadi kesalahan saat memeriksa informasi gempa. Coba lagi nanti.");
        });
    break
    
case 'dalamislam': {
    if (!q.trim()) return m.reply("_contoh dalamislam dosa");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function scrapeHadis(searchTerm) {
        const url = `https://dalamislam.com/?s=${encodeURIComponent(searchTerm)}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const hadisList = [];
// wm avs
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                hadisList.push({ title, link });
            });
// wm avs
            return hadisList;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('elul.');
        }
    }
// wm avs
    scrapeHadis(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('tak ada hasil.');
            } else {
                let response = `Hasil pencarian hadis dari Dalam Islam untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            console.error(`${error.message}`);
            m.reply('Terjadi kesalahan.');
        });
}
    break
        
   case 'alosehat': {
  if (!q) return m.reply("Apa yang ingin dicari?");
// wm avs
  const fetch = require('node-fetch');
  const cheerio = require('cheerio');
// wm avs  
  async function alosehat(query) {
    try {
      const url = `https://wp.hellosehat.com/?s=${encodeURIComponent(query)}`;
      const response = await fetch(url);
// wm avs      
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
// wm avs      
      const body = await response.text();
      const $ = cheerio.load(body);
// wm avs      
      const articles = $(".card.article--card").map((index, element) => {
        const article = $(element);
        return {
          title: article.find("h2.entry-title a").text().trim(),
          link: article.find("h2.entry-title a").attr("href"),
          desc: article.find(".entry-summary p").text().trim(),
          author: article.find(".author.vcard a").text().trim(),
          time: article.find("time.entry-date.published").attr("datetime")
        };
      }).get().filter(article => article.title && article.desc);
  // wm avs    
      if (!articles.length) {
        throw new Error("No matching results found.");
      }
// wm avs      
      const totalResults = parseInt($(".search--result-count").text(), 10) || 0;
      return { total: totalResults, results: articles };
      
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
// wm avs
  try {
    const results = await alosehat(q);
    const { total, results: articles } = results;
// wm avs    
    if (total === 0) {
      return m.reply("gd hsil.");
    }
// wm avs    
    const response = articles.map((item, index) => (
      `${index + 1}. ${item.title}\nPenulis: ${item.author}\nTanggal: ${item.time}\nDeskripsi: ${item.desc}\nLink: ${item.link}\n\n`
    )).join('');
// wm avs
    m.reply(`Hasil pencarian Hello Sehat (${total} hasil):\n\n${response}`);
// wm avs    
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break
case 'wikiquote': {
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: wikiquote : kebahagiaan`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function searchWikiquote(query) {
        const url = `https://id.m.wikiquote.org/wiki/Istimewa:Pencarian?search=${encodeURIComponent(query)}`;
        // wm avz
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const quotes = [];
            $('.mw-search-result-heading').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).find('a').attr('href');
                quotes.push({
                    title: title,
                    link: `https://id.m.wikiquote.org${link}`
                });
            });
            // wm avz          
            $('.mw-search-result-data').each((index, element) => {
                const description = $(element).text().trim();
                if (quotes[index]) {
                    quotes[index].description = description; 
                }
            });
            // wm avz
            return quotes.length > 0 ? quotes : []; 
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    searchWikiquote(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('Tidak ada hasil.');
            } else {
                let response = `Hasil pencarian Wikiquote untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. Judul: ${item.title}\nDeskripsi: ${item.description ? item.description : 'Tidak ada deskripsi'}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            m.reply('Terjadi kesalahan.');
        });
        }
    break
case 'goodreads': {
    if (!q.trim()) return m.reply(`Mau cari buku apa?`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function avzzzz(query) {
        const url = `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`;
        // wm avz
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const books = [];
            $('.tableList tr').each((index, element) => {
                const title = $(element).find('a.bookTitle span').text().trim();
                const link = $(element).find('a.bookTitle').attr('href');
                const rating = $(element).find('span.minirating').text().trim();
                // wm avz
                books.push({ title, link: `https://www.goodreads.com${link}`, rating });
            });
            // wm avz
            return books;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    avzzzz(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('ora eneng.');
            } else {
                let response = `Hasil pencarian Goodreads untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nRating: ${item.rating}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            m.reply('emror.');
        });
        }
    break

        case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await Rifky.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Rifky.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break
        
        case 'bard': {
            if (!text) return reply("Example: .bard Hey")
            const api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "Bell409"
  }
};
let ai = await fetchJson(`${api.xterm.url}/api/chat/bard?query=${text}&key=${api.xterm.key}`)
  reply(ai.chatUi)
            }
        break
        case 'tiktokstalk': {
if (!text) return reply(`Example: ${prefix + command} hannacumalaka`)
let hann = await fetchJson(`https://api.kyuurzy.site/api/stalk/tiktokstalk?query=${text}`)
	Rifky.sendMessage(m.chat, {
		text: `[ Tiktok Stalk ]\n\nUsername: ${hann.result.username}\nBio: ${hann.result.bio}\nPengikut: ${hann.result.followers}\nMengikuti: ${hann.result.following}\nSuka: ${hann.result.likes}\nTotal Postingan: ${hann.result.posts}`
	}, {
		quoted: m
	})
}
break
        case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Rifky.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Rifky.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
        case 'play' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply(mess.wait)
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await Rifky.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'self': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = true
m.reply('Sukses Change To Public Mode')
}
break

case 'creator':
case 'owner': {
	await Rifky.sendMessage(m.chat, {
		react: {
			text: "⏳",
			key: m.key,
		}
	})
	let img = "https://telegra.ph/file/d5cc0bd3fae79436e1c07.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: Rifky.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`HAI KAK ${pushname}\nINI OWNER KU YAA JNGAN DI SPAM`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*MY OWNER Hann*\n*OVERSEAR*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👤 OWNER","url":"https:\\/\\/wa.me\\/6283824196477?text=Halo+owner","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `> *CHANEL Hann Universe*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👥 GRUP ETMIN","url":"https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await Rifky.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
