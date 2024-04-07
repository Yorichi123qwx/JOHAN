import { exec } from 'child_process'
import { join } from 'path'
import { unlinkSync, readFileSync, existsSync, mkdirSync } from 'fs'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
    if (/video/.test(mime)) {
      let filename = join(__dirname, '../tmp/' + getRandom('.mp4'))
      let media = await q.download(filename)
      
      // Get video duration using ffprobe
      let duration = await new Promise((resolve, reject) => {
        exec(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${media}`, (err, stdout, stderr) => {
          if (err) {
            console.log('An error occurred: ' + err.message);
            reject(err);
          } else {
            resolve(parseFloat(stdout));
          }
        });
      });

      // Check if video is shorter than 30 seconds
      if (duration < 30) {
        return m.reply(`*الفيديو الذي ترغب في تقسيمه قصير جدا ولا يحتاج إلى تقسيم.*`)
      }

      // Check if video is longer than 3 minutes
      if (duration > 180) {
        return m.reply(`*الفيديو الذي ترغب في تقسيمه يجب ألا يزيد عن 3 دقائق.*`)
      }

      let outputDir = join(__dirname, '../cuts/')
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir);
      }
      await new Promise((resolve, reject) => {
        exec(`ffmpeg -i ${media} -c:v libx264 -b:v 1000k -map 0 -segment_time 30 -g 30 -sc_threshold 0 -force_key_frames "expr:gte(t,n_forced*30)" -f segment ${outputDir}output%03d.mp4`, (err, stderr, stdout) => {
          if (err) {
            console.log('An error occurred: ' + err.message);
            reject(err);
          } else {
            resolve();
          }
        });
      });
      await unlinkSync(media)
      let files = []
      for (let i = 0; i < 9999; i++) {
        let fileNumber = String(i).padStart(3, '0');
        let file = join(outputDir, `output${fileNumber}.mp4`)
        if (existsSync(file)) {
          files.push(file)
        } else {
          break
        }
      }
      for (let i = 0; i < files.length; i++) {
        let file = files[i]
        await conn.sendFile(m.chat, file, `output${i+1}.mp4`, null, m)
        unlinkSync(file)
      }
    } else return m.reply(`*الرد على الفيديو الذي ترغب في تقسيمه ${usedPrefix + command}*`)
  } catch (e) {
    console.error(e);
  }
}

handler.help = ['splitvideo']
handler.tags = ['video']
handler.command = /^(تقسيم)$/i

export default handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
