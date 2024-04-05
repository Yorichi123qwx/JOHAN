//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*وعليكم ال هلا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^يوري سان|يوريتشي$/i.test(m.text)) { 
     responses = [ 
'*شنو يا قلب يوريتشي*'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير دامك بخير*'
     ]; 
   }else if (/^ المطور$/i.test(m.text)) { 
     responses = [ 
'*رقم المطور بنفس رقم البوت*'
   ]; 
   }else if (/^تحبني|بوت $/i.test(m.text)) { 
     responses = [ 
'* طبعا يا عمري❤ 🐦*',
'* طبعا احبك 🤭*',
'*اكيييد ❤ 🔚*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم الهاي ورحمة الله وبركاته*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*وانا أكثر يا عمري*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*وانا اكثر🫠❤ *'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '*طبعا يا حبي*',  

     ];
     }else if (/^وينه لبوت$/i.test(m.text)) { 
     responses = [ 
       '*كم مره اقولك اسمي يوريتشي؟*',  

     ];
     }else if (/^بوت|بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي يوريتشي يا عسل*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*🙂*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^Nezuko$/i.test(m.text)) { 
     responses = [ 
       '*تانجيرو☹️*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
