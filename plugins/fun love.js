const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveMessages = [
    "¡Eso es un amor ardiente y apasionado! ¡Ve y díselo ahora mismo!",
    "Parece que hay una chispa entre ustedes dos. ¡Inténtalo!",
    "Podría haber algo especial aquí. ¡Dale una oportunidad!",
    "Hmm, el amor está en el aire. ¡Quizás sea hora de un café juntos!",
    "Las estrellas indican que hay un potencial romántico. ¡Haz un movimiento!",
    "Una historia de amor increíble podría estar esperando para ser escrita por ustedes.",
    "No subestimen el poder del tiempo y la paciencia en el amor. Grandes cosas pueden suceder.",
    "Recuerden que el amor es un viaje, y cada paso es valioso, sin importar la distancia.",
    "Las conexiones fuertes pueden convertirse en relaciones hermosas. ¡Sigan explorando!",
    "El amor verdadero a menudo requiere tiempo y esfuerzo. ¡No renuncien!",
  ];
  const notSoHighLoveMessages = [
    "مع الحياة، الصديق هو كومينزو من شيء جميل، ولكن لا يبقى على حاله أن يتحول إلى حب.",
    "الحب ليس كل شئ،بل الصداقه أيضا شئ خاص ومن الصداقه تبدأ قصة الحب.",
    لقد علمت أن أفضل العلاقات كانت مع صديق جيد،، لا تقلل من شرب القهوه مع صديق!",
    "مع الحياه يمكن خلق الحب مع الوقت!",
    "الحب هو شعور صادق يصدر من القلب بدايته صداقه ونهايته محبه .",
    "لا تقلل أبدا من شأن المحب ف حبه يصدر من قلبه .",
    "قد تكسب في يوم ما شخصا يعادل ما خسرته في حياتك كلها.",
    "جميل أن تكون شيئا ثمينا لدى شخص يخاف فقدانك.",
    "أروع القلوب قلبك وأجمل الكلام همسك وأحلى ما في حياتي حبك",
    "دمت لي شيئا جميلا لا يتنهي!",
  ];
  const loveDescription = isHighLove ? "tienen una conexión profunda y un amor" : "لديهم إتصال خاص, على الرغم من أن نسبة الحب لديهم";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages);
  const response =
    `━━━━━━━⬣ *الحب* ⬣━━━━━━━\n` +
    `*❥ في عالم الحب, ${text} و @${m.sender.split('@')[0]} ${loveDescription} من ${lovePercentage}% هي 100%*\n\n` +
    `*❥ ${loveMessage}*\n` +
    `━━━━━━━⬣ *حب* ⬣━━━━━━━`    
  
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*💞 ¡حساب النسبه المؤيه للحب! 💞*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(حب|الحب)$/i;
export default handler;
