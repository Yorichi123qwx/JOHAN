let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `ماذا تريد`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/26833081b921684bbc73a.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
