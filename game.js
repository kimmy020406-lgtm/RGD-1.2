const missions = [
{name:"Pencari Grafik",label:"1.2.1 · SUMBER PEMEROLEHAN BAHAN GRAFIK",questions:[
{q:"Yang manakah sumber pemerolehan bahan grafik melalui penghasilan imej sendiri?",a:["Fotografi","Papan kekunci","Pembesar suara","Mikrofon"],correct:0,explain:"Fotografi menghasilkan bahan grafik melalui gambar yang diambil menggunakan kamera."},
{q:"Pereka mencari gambar landskap melalui laman web. Apakah sumber bahan grafik itu?",a:["Laman web","Pencetak","Tablet grafik","Monitor"],correct:0,explain:"Laman web boleh menjadi sumber bahan grafik. Semak lesen dan hak penggunaan."},
{q:"Bagaimanakah lukisan di atas kertas boleh ditukarkan kepada fail imej digital?",a:["Menggunakan pembesar suara","Menggunakan pengimbas","Menggunakan tetikus sahaja","Menggunakan pencetak"],correct:1,explain:"Pengimbas menukarkan imej daripada dokumen fizikal kepada bentuk digital."},
{q:"Yang manakah contoh bahan grafik daripada kreativiti pereka sendiri?",a:["Lukisan digital","Kabel rangkaian","Pemacu kuasa","Papan kekunci"],correct:0,explain:"Lukisan digital dihasilkan menggunakan perisian dan alat digital."},
{q:"Apakah perkara penting sebelum menggunakan gambar daripada internet?",a:["Menukar nama fail sahaja","Memastikan hak cipta dan lesen penggunaan","Membuang semua warna","Mencetak gambar dahulu"],correct:1,explain:"Semak hak cipta, lesen dan kebenaran penggunaan bahan grafik."}]},
{name:"Pakar Perkakasan",label:"1.2.2 · FUNGSI DAN SPESIFIKASI PERKAKASAN",questions:[
{q:"Apakah fungsi utama komputer dalam kerja grafik digital?",a:["Memproses dan menyunting imej menggunakan perisian","Mengimbas kertas tanpa peranti tambahan","Mengambil gambar tanpa kamera","Mencetak tanpa peranti output"],correct:0,explain:"Komputer menjalankan perisian grafik untuk menghasilkan dan menyunting imej."},
{q:"Spesifikasi manakah penting untuk menilai perincian imej kamera digital?",a:["Resolusi imej","Bilangan kekunci papan kekunci","Saiz tetikus","Kelajuan pencetak"],correct:0,explain:"Resolusi mempengaruhi perincian imej; sensor dan lensa turut mempengaruhi kualiti."},
{q:"Apakah maksud DPI dalam konteks resolusi pengimbas?",a:["Dots Per Inch","Digital Photo Input","Data Processing Interface","Display Pixel Internet"],correct:0,explain:"DPI bermaksud Dots Per Inch, ukuran ketumpatan titik mengikut konteks peranti."},
{q:"Apakah fungsi utama pencetak dalam proses grafik digital?",a:["Menghasilkan output imej pada kertas atau media cetak","Mengambil gambar","Menyunting video","Melukis menggunakan stylus"],correct:0,explain:"Pencetak menghasilkan salinan fizikal bahan digital."},
{q:"Spesifikasi manakah berkaitan dengan tablet grafik mengesan tekanan stylus?",a:["Tahap kepekaan tekanan","Kapasiti dulang kertas","Saiz sensor kamera","Kelajuan pengimbasan"],correct:0,explain:"Kepekaan tekanan membolehkan ciri garisan berubah mengikut tekanan stylus."}]},
{name:"Cabaran Pakar",label:"1.2.2 · APLIKASI PERKAKASAN",questions:[
{q:"Guru mahu mendigitalkan gambar lama dalam album. Peranti manakah paling sesuai?",a:["Pengimbas","Pencetak","Pembesar suara","Tablet grafik sahaja"],correct:0,explain:"Pengimbas menghasilkan salinan digital daripada gambar fizikal."},
{q:"Pereka mahu melukis ilustrasi terus pada komputer menggunakan stylus. Apakah peranti sesuai?",a:["Tablet grafik","Pencetak laser","Pengimbas dokumen","Kamera keselamatan"],correct:0,explain:"Tablet grafik membolehkan input lukisan menggunakan stylus."},
{q:"Komputer perlahan ketika menyunting fail grafik besar. Spesifikasi manakah wajar dinilai?",a:["RAM, pemproses dan keupayaan grafik","Warna tetikus sahaja","Panjang kabel pencetak","Saiz dulang kertas"],correct:0,explain:"RAM, CPU, GPU dan storan boleh mempengaruhi prestasi."},
{q:"Pereka perlu mencetak poster berwarna. Apakah yang patut dipertimbangkan?",a:["Resolusi cetakan, keupayaan warna dan jenis media","Jumlah kekunci papan kekunci","Saiz mikrofon","Kelajuan pengimbas sahaja"],correct:0,explain:"Kualiti poster dipengaruhi resolusi, warna dan media cetak."},
{q:"Jurugambar mahu mengawal kedalaman medan ketika mengambil potret. Tetapan manakah berkaitan?",a:["Aperture","DPI pencetak","Tekanan stylus","Saiz dulang pengimbas"],correct:0,explain:"Aperture mempengaruhi kedalaman medan bersama jarak subjek dan ciri lensa."}]}
];

const screens={home:document.getElementById("home-screen"),name:document.getElementById("name-screen"),game:document.getElementById("game-screen"),result:document.getElementById("result-screen")};
let pendingMission=0,currentMission=0,currentQuestion=0,score=0,lives=3,correctAnswers=0,hasAnswered=false,playerName="",currentOptions=[];
function showScreen(name){Object.values(screens).forEach(s=>s.classList.remove("active"));screens[name].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function shuffle(arr){const out=[...arr];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function startGame(index){pendingMission=index;document.getElementById("player-name").value=playerName;document.getElementById("name-error").textContent="";showScreen("name");setTimeout(()=>document.getElementById("player-name").focus(),100);}
function beginMission(){currentMission=pendingMission;currentQuestion=0;score=0;lives=3;correctAnswers=0;showScreen("game");renderQuestion();}
function renderQuestion(){
 hasAnswered=false;const mission=missions[currentMission],q=mission.questions[currentQuestion],total=mission.questions.length;
 currentOptions=shuffle(q.a.map((text,index)=>({text,correct:index===q.correct})));
 document.getElementById("mission-title").textContent=mission.name;document.getElementById("score").textContent=score;document.getElementById("lives").textContent=lives?"♥ ".repeat(lives).trim():"0";
 document.getElementById("question-counter").textContent=`SOALAN ${currentQuestion+1} / ${total}`;document.getElementById("progress-percent").textContent=`${Math.round(currentQuestion/total*100)}%`;document.getElementById("progress-bar").style.width=`${Math.round(currentQuestion/total*100)}%`;
 document.getElementById("question-label").textContent=mission.label;document.getElementById("question-text").textContent=q.q;document.getElementById("player-greeting").innerHTML=`Pemain: <strong>${escapeHTML(playerName)}</strong>`;
 const feedback=document.getElementById("feedback");feedback.className="feedback";feedback.textContent="";
 const next=document.getElementById("next-question");next.disabled=true;next.textContent=currentQuestion===total-1?"Lihat Keputusan →":"Seterusnya →";
 const list=document.getElementById("answer-list");list.replaceChildren();
 currentOptions.forEach((option,i)=>{const b=document.createElement("button");b.className="answer-option";b.type="button";const letter=document.createElement("span");letter.className="answer-letter";letter.textContent=String.fromCharCode(65+i);const label=document.createElement("span");label.textContent=option.text;b.append(letter,label);b.addEventListener("click",()=>checkAnswer(i,b));list.appendChild(b);});
}
function checkAnswer(index,button){
 if(hasAnswered)return;hasAnswered=true;const q=missions[currentMission].questions[currentQuestion],buttons=[...document.querySelectorAll(".answer-option")];buttons.forEach(b=>b.disabled=true);const feedback=document.getElementById("feedback");
 if(currentOptions[index].correct){score+=10;correctAnswers++;button.classList.add("correct");feedback.className="feedback show good";feedback.textContent="✓ Betul! "+q.explain;document.getElementById("question-hint").textContent="+10 mata";}
 else{lives=Math.max(0,lives-1);button.classList.add("wrong");buttons[currentOptions.findIndex(o=>o.correct)].classList.add("correct");feedback.className="feedback show bad";feedback.textContent="✗ Belum tepat. "+q.explain;document.getElementById("question-hint").textContent="Semak penerangan dan teruskan!";}
 document.getElementById("score").textContent=score;document.getElementById("lives").textContent=lives?"♥ ".repeat(lives).trim():"0";document.getElementById("next-question").disabled=false;
}
function nextQuestion(){if(!hasAnswered)return;if(currentQuestion<missions[currentMission].questions.length-1){currentQuestion++;renderQuestion();}else finishGame();}
function finishGame(){
 const total=missions[currentMission].questions.length,pct=Math.round(correctAnswers/total*100);document.getElementById("progress-bar").style.width="100%";document.getElementById("progress-percent").textContent="100%";
 document.getElementById("final-score").textContent=score;document.getElementById("correct-count").textContent=`${correctAnswers}/${total}`;document.getElementById("result-player").innerHTML=`Keputusan untuk <strong>${escapeHTML(playerName)}</strong>`;
 let title="Terus mencuba!",message="Ulang kaji penerangan jawapan dan cuba sekali lagi.",icon="🎯";if(pct===100){title="Hebat sekali!";message="Sempurna! Semua jawapan betul.";icon="🏆";}else if(pct>=60){title="Misi berjaya!";message="Bagus! Teruskan latihan untuk kuasai semua konsep.";icon="🌟";}
 document.getElementById("result-title").textContent=title;document.getElementById("result-message").textContent=message;document.getElementById("result-icon").textContent=icon;showScreen("result");
}
document.getElementById("name-form").addEventListener("submit",e=>{e.preventDefault();const value=document.getElementById("player-name").value.trim();if(!value){document.getElementById("name-error").textContent="Sila masukkan nama sebelum bermain.";return;}playerName=value.slice(0,30);beginMission();});
document.getElementById("name-back").addEventListener("click",()=>showScreen("home"));
document.getElementById("start-first").addEventListener("click",()=>startGame(0));
document.querySelectorAll(".mission-button").forEach(b=>b.addEventListener("click",()=>startGame(Number(b.dataset.mission))));
document.getElementById("back-home").addEventListener("click",()=>showScreen("home"));
document.getElementById("next-question").addEventListener("click",nextQuestion);
document.getElementById("replay").addEventListener("click",()=>startGame(currentMission));
document.getElementById("result-home").addEventListener("click",()=>showScreen("home"));
