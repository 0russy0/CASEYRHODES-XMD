const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["av", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Get system info
        const platform = "Heroku Platform"; // Fixed deployment platform
        const release = os.release(); // OS version
        const cpuModel = os.cpus()[0].model; // CPU info
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2); // Total RAM in MB
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB

        // Stylish and detailed system status message
        const status = `╭───❰ *𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐗𝐌𝐃* ❱───➤
┃ ✨ 𝗨𝗽𝘁𝗶𝗺𝗲: *${runtime(process.uptime())}*
┃ 💾 𝗥𝗮𝗺 𝗨𝘀𝗮𝗴𝗲: *${usedMem}MB / ${totalMem}MB*
┃ 🧑‍💻 𝗗𝗲𝗽𝗹𝗼𝘆𝗲𝗱 𝗢𝗻: *${platform}*
┃ 🔧 𝗖𝗣𝗨: *${cpuModel}*
┃ 👨‍💻 𝗢𝘄𝗻𝗲𝗿: *mr cαѕєчrhσdєѕ*
┃ 🧬 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: *𝟯.𝟬.𝟬 𝗕𝗘𝗧𝗔*
╰───────────────────────➤
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄᴀsᴇʏʀʜᴏᴅᴇs`;

        // Send image + caption + audio combined
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/wN6Gw0ZF/lordcasey.jpg` },  
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363302677217436@newsletter',
                    newsletterName: '𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐀𝐋𝐈𝐕𝐄🍀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Attach audio within the same "quoted" message for grouping
        await conn.sendMessage(from, { 
            audio: { url: 'https://files.catbox.moe/3au05j.m4a' },
            mimetype: 'audio/mp4',
            ptt: true 
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`🚨 *An error occurred:* ${e.message}`);
    }
});
