const handler = async (m, {conn, text, command, usedPrefix, args}) => {
// let pp = 'https://www.bighero6challenge.com/images/thumbs/حجر,-ورقه-o-مقص-0003318_1584.jpeg'
  const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';

  // 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
  const time = global.db.data.users[m.sender].wait + 10000;
  if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓 Tendrás que esperar ${Math.floor((time - new Date()) / 1000)} segundos antes de poder volver a jugar*`;

  if (!args[0]) return conn.reply(m.chat, `*حجر 🗿, ورقه 📄 𝐨 مقص ✂️*\n\n*—◉ استخدم هذه الأوامر للعب مع البوت:*\n*◉ ${usedPrefix + command} حجر*\n*◉ ${usedPrefix + command} ورقه*\n*◉ ${usedPrefix + command} مقص*`, m);
  // conn.sendButton(m.chat, `*حجر 🗿, ورقه 📄 𝐨 مقص ✂️*\n\n*—◉  يمكنك إستخدام هذه الأوامر  :*\n*◉ ${usedPrefix + command} حجر*\n*◉ ${usedPrefix + command} ورقه*\n*◉ ${usedPrefix + command} مقص*`, wm, pp, [['حجر 🗿', `${usedPrefix + command} حجر`], ['ورقه 📄', `${usedPrefix + command} ورقه`], ['مقص ✂️', `${usedPrefix + command} مقص`]], m)
  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'حجر';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'مقص';
  } else {
    astro = 'ورقه';
  }
  const textm = text.toLowerCase();
  if (textm == astro) {
    global.db.data.users[m.sender].exp += 500;
    m.reply(`*🔰 تعادل!*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 الجائزه +500 XP*`);
  } else if (text == 'ورقه') {
    if (astro == 'حجر') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 انت الفائز! 🎉*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 الجائزه +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️انت الخاسر! ❌*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ الجائزه -300 XP*`);
    }
  } else if (text == 'مقص') {
    if (astro == 'ورقه') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 انت الفائز! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 الجائزه +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ انت الخاسر! ❌*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ الجائزه -300 XP*`);
    }
  } else if (textm == 'مقص') {
    if (astro == 'ورقه') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 انت الفائز! 🎉*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 الجائزه +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ انت الخاسر! ❌*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ الجائزه -300 XP*`);
    }
  } else if (textm == 'ورقه') {
    if (astro == 'حجر') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 انت الفائز! 🎉*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 الجائزه +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ انت الخاسر! ❌*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ الجائزه -300 XP*`);
    }
  } else if (textm == 'ورقه') {
    if (astro == 'مقص') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 انت الفائز! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 الجائزه +1000 XP*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ انت الخاسر! ❌*\n\n*👉🏻 انت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ الجائزه -300 XP*`);
    }
  }
  global.db.data.users[m.sender].wait = new Date * 1;
};
handler.help = ['ppt'];
handler.tags = ['games'];
handler.command = /^(ppt)$/i;
export default handler;
