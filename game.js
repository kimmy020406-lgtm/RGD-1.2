'use strict';

const missions = [
  {
    name: { ms: 'Pencari Grafik', en: 'Graphic Explorer' },
    label: { ms: '1.2.1 · SUMBER PEMEROLEHAN BAHAN GRAFIK', en: '1.2.1 · SOURCES OF GRAPHIC MATERIALS' },
    description: { ms: 'Kenal pasti sumber pemerolehan bahan grafik seperti fotografi, laman web dan lukisan digital.', en: 'Identify sources of graphic materials such as photography, websites, and digital drawings.' },
    questions: [
      { q: { ms: 'Yang manakah sumber pemerolehan bahan grafik melalui penghasilan imej sendiri?', en: 'Which source produces graphic material by creating your own image?' }, a: [
        { ms: 'Fotografi', en: 'Photography' }, { ms: 'Papan kekunci', en: 'Keyboard' }, { ms: 'Pembesar suara', en: 'Speaker' }, { ms: 'Mikrofon', en: 'Microphone' }
      ], correct: 0, explain: { ms: 'Fotografi menghasilkan bahan grafik melalui gambar yang diambil menggunakan kamera.', en: 'Photography creates graphic material through pictures taken with a camera.' } },
      { q: { ms: 'Pereka mencari gambar landskap melalui laman web. Apakah sumber bahan grafik itu?', en: 'A designer finds a landscape image on a website. What is the source of this graphic material?' }, a: [
        { ms: 'Laman web', en: 'Website' }, { ms: 'Pencetak', en: 'Printer' }, { ms: 'Tablet grafik', en: 'Graphics tablet' }, { ms: 'Monitor', en: 'Monitor' }
      ], correct: 0, explain: { ms: 'Laman web boleh menjadi sumber bahan grafik. Semak lesen dan hak penggunaan.', en: 'Websites can be a source of graphic material. Check the licence and usage rights.' } },
      { q: { ms: 'Bagaimanakah lukisan di atas kertas boleh ditukarkan kepada fail imej digital?', en: 'How can a drawing on paper be converted into a digital image file?' }, a: [
        { ms: 'Menggunakan pembesar suara', en: 'Using a speaker' }, { ms: 'Menggunakan pengimbas', en: 'Using a scanner' }, { ms: 'Menggunakan tetikus sahaja', en: 'Using only a mouse' }, { ms: 'Menggunakan pencetak', en: 'Using a printer' }
      ], correct: 1, explain: { ms: 'Pengimbas menukarkan imej daripada dokumen fizikal kepada bentuk digital.', en: 'A scanner converts an image from a physical document into digital form.' } },
      { q: { ms: 'Yang manakah contoh bahan grafik daripada kreativiti pereka sendiri?', en: 'Which is an example of graphic material created from the designer’s own creativity?' }, a: [
        { ms: 'Lukisan digital', en: 'Digital drawing' }, { ms: 'Kabel rangkaian', en: 'Network cable' }, { ms: 'Pemacu kuasa', en: 'Power supply' }, { ms: 'Papan kekunci', en: 'Keyboard' }
      ], correct: 0, explain: { ms: 'Lukisan digital dihasilkan menggunakan perisian dan alat digital.', en: 'Digital drawings are created using software and digital tools.' } },
      { q: { ms: 'Apakah perkara penting sebelum menggunakan gambar daripada internet?', en: 'What should you check before using an image from the internet?' }, a: [
        { ms: 'Menukar nama fail sahaja', en: 'Only change the file name' }, { ms: 'Memastikan hak cipta dan lesen penggunaan', en: 'Check copyright and usage licence' }, { ms: 'Membuang semua warna', en: 'Remove all colours' }, { ms: 'Mencetak gambar dahulu', en: 'Print the image first' }
      ], correct: 1, explain: { ms: 'Semak hak cipta, lesen dan kebenaran penggunaan bahan grafik.', en: 'Check copyright, the licence, and permission to use the graphic material.' } }
    ]
  },
  {
    name: { ms: 'Pakar Perkakasan', en: 'Hardware Specialist' },
    label: { ms: '1.2.2 · FUNGSI DAN SPESIFIKASI PERKAKASAN', en: '1.2.2 · HARDWARE FUNCTIONS AND SPECIFICATIONS' },
    description: { ms: 'Pelajari fungsi dan spesifikasi komputer, kamera, pengimbas, pencetak dan tablet grafik.', en: 'Learn the functions and specifications of computers, cameras, scanners, printers, and graphics tablets.' },
    questions: [
      { q: { ms: 'Apakah fungsi utama komputer dalam kerja grafik digital?', en: 'What is the main function of a computer in digital graphics work?' }, a: [
        { ms: 'Memproses dan menyunting imej menggunakan perisian', en: 'Process and edit images using software' }, { ms: 'Mengimbas kertas tanpa peranti tambahan', en: 'Scan paper without any additional device' }, { ms: 'Mengambil gambar tanpa kamera', en: 'Take photographs without a camera' }, { ms: 'Mencetak tanpa peranti output', en: 'Print without an output device' }
      ], correct: 0, explain: { ms: 'Komputer menjalankan perisian grafik untuk menghasilkan dan menyunting imej.', en: 'A computer runs graphics software to create and edit images.' } },
      { q: { ms: 'Spesifikasi manakah penting untuk menilai perincian imej kamera digital?', en: 'Which specification is important when assessing the detail captured by a digital camera?' }, a: [
        { ms: 'Resolusi imej', en: 'Image resolution' }, { ms: 'Bilangan kekunci papan kekunci', en: 'Number of keyboard keys' }, { ms: 'Saiz tetikus', en: 'Mouse size' }, { ms: 'Kelajuan pencetak', en: 'Printer speed' }
      ], correct: 0, explain: { ms: 'Resolusi mempengaruhi perincian imej; sensor dan lensa turut mempengaruhi kualiti.', en: 'Resolution affects image detail; the sensor and lens also affect image quality.' } },
      { q: { ms: 'Apakah maksud DPI dalam konteks resolusi pengimbas?', en: 'What does DPI mean in the context of scanner resolution?' }, a: [
        { ms: 'Dots Per Inch', en: 'Dots Per Inch' }, { ms: 'Digital Photo Input', en: 'Digital Photo Input' }, { ms: 'Data Processing Interface', en: 'Data Processing Interface' }, { ms: 'Display Pixel Internet', en: 'Display Pixel Internet' }
      ], correct: 0, explain: { ms: 'DPI bermaksud Dots Per Inch, iaitu ukuran ketumpatan titik mengikut konteks peranti.', en: 'DPI means Dots Per Inch, a measure of dot density in the context of the device.' } },
      { q: { ms: 'Apakah fungsi utama pencetak dalam proses grafik digital?', en: 'What is the main function of a printer in digital graphics?' }, a: [
        { ms: 'Menghasilkan output imej pada kertas atau media cetak', en: 'Produce image output on paper or print media' }, { ms: 'Mengambil gambar', en: 'Take photographs' }, { ms: 'Menyunting video', en: 'Edit videos' }, { ms: 'Melukis menggunakan stylus', en: 'Draw using a stylus' }
      ], correct: 0, explain: { ms: 'Pencetak menghasilkan salinan fizikal bahan digital.', en: 'A printer produces a physical copy of digital material.' } },
      { q: { ms: 'Spesifikasi manakah berkaitan dengan tablet grafik mengesan tekanan stylus?', en: 'Which specification relates to a graphics tablet detecting stylus pressure?' }, a: [
        { ms: 'Tahap kepekaan tekanan', en: 'Pressure sensitivity levels' }, { ms: 'Kapasiti dulang kertas', en: 'Paper tray capacity' }, { ms: 'Saiz sensor kamera', en: 'Camera sensor size' }, { ms: 'Kelajuan pengimbasan', en: 'Scanning speed' }
      ], correct: 0, explain: { ms: 'Kepekaan tekanan membolehkan ciri garisan berubah mengikut tekanan stylus.', en: 'Pressure sensitivity allows line characteristics to change according to stylus pressure.' } }
    ]
  },
  {
    name: { ms: 'Cabaran Pakar', en: 'Expert Challenge' },
    label: { ms: '1.2.2 · APLIKASI PERKAKASAN', en: '1.2.2 · HARDWARE IN PRACTICE' },
    description: { ms: 'Aplikasikan pengetahuan dalam situasi sebenar berkaitan penghasilan grafik digital.', en: 'Apply your knowledge to real-life digital graphics situations.' },
    questions: [
      { q: { ms: 'Guru mahu mendigitalkan gambar lama dalam album. Peranti manakah paling sesuai?', en: 'A teacher wants to digitise an old photograph in an album. Which device is most suitable?' }, a: [
        { ms: 'Pengimbas', en: 'Scanner' }, { ms: 'Pencetak', en: 'Printer' }, { ms: 'Pembesar suara', en: 'Speaker' }, { ms: 'Tablet grafik sahaja', en: 'Graphics tablet only' }
      ], correct: 0, explain: { ms: 'Pengimbas menghasilkan salinan digital daripada gambar fizikal.', en: 'A scanner creates a digital copy of a physical photograph.' } },
      { q: { ms: 'Pereka mahu melukis ilustrasi terus pada komputer menggunakan stylus. Apakah peranti sesuai?', en: 'A designer wants to draw an illustration on a computer using a stylus. Which device is suitable?' }, a: [
        { ms: 'Tablet grafik', en: 'Graphics tablet' }, { ms: 'Pencetak laser', en: 'Laser printer' }, { ms: 'Pengimbas dokumen', en: 'Document scanner' }, { ms: 'Kamera keselamatan', en: 'Security camera' }
      ], correct: 0, explain: { ms: 'Tablet grafik membolehkan input lukisan menggunakan stylus.', en: 'A graphics tablet allows drawing input using a stylus.' } },
      { q: { ms: 'Komputer perlahan ketika menyunting fail grafik besar. Spesifikasi manakah wajar dinilai?', en: 'A computer is slow when editing large graphics files. Which specifications should be checked?' }, a: [
        { ms: 'RAM, pemproses dan keupayaan grafik', en: 'RAM, processor, and graphics capability' }, { ms: 'Warna tetikus sahaja', en: 'Mouse colour only' }, { ms: 'Panjang kabel pencetak', en: 'Printer cable length' }, { ms: 'Saiz dulang kertas', en: 'Paper tray size' }
      ], correct: 0, explain: { ms: 'RAM, CPU, GPU dan storan boleh mempengaruhi prestasi.', en: 'RAM, CPU, GPU, and storage can affect performance.' } },
      { q: { ms: 'Pereka perlu mencetak poster berwarna. Apakah yang patut dipertimbangkan?', en: 'A designer needs to print a colour poster. What should be considered?' }, a: [
        { ms: 'Resolusi cetakan, keupayaan warna dan jenis media', en: 'Print resolution, colour capability, and media type' }, { ms: 'Jumlah kekunci papan kekunci', en: 'Number of keyboard keys' }, { ms: 'Saiz mikrofon', en: 'Microphone size' }, { ms: 'Kelajuan pengimbas sahaja', en: 'Scanner speed only' }
      ], correct: 0, explain: { ms: 'Kualiti poster dipengaruhi resolusi, warna dan media cetak.', en: 'Poster quality is affected by resolution, colour capability, and print media.' } },
      { q: { ms: 'Jurugambar mahu mengawal kedalaman medan ketika mengambil potret. Tetapan manakah berkaitan?', en: 'A photographer wants to control depth of field in a portrait. Which setting is relevant?' }, a: [
        { ms: 'Aperture', en: 'Aperture' }, { ms: 'DPI pencetak', en: 'Printer DPI' }, { ms: 'Tekanan stylus', en: 'Stylus pressure' }, { ms: 'Saiz dulang pengimbas', en: 'Scanner tray size' }
      ], correct: 0, explain: { ms: 'Aperture mempengaruhi kedalaman medan bersama jarak subjek dan ciri lensa.', en: 'Aperture affects depth of field, along with subject distance and lens characteristics.' } }
    ]
  }
];

const ui = {
  ms: {
    headerMode: 'MOD PEMBELAJARAN', heroEyebrow: 'TOPIK 1.2 · ASAS GRAFIK DIGITAL', heroTitle: 'Teroka dunia<br><span>Grafik Digital.</span>', heroDescription: 'Selesaikan misi, kenal pasti sumber bahan grafik dan kuasai perkakasan yang digunakan dalam penghasilan grafik digital.', start: 'Mula Bermain <span aria-hidden="true">↗</span>', metaMissions: '✦ 3 Misi', metaQuestions: '✦ 15 Soalan', metaFree: '✦ Main Percuma', chooseEyebrow: 'PILIH PENGEMBARAAN', chooseTitle: 'Pilih misi anda', chooseDescription: 'Kumpul mata dan uji pengetahuan anda.', missionButton: 'Mula Misi <span>→</span>', learningEyebrow: 'HASIL PEMBELAJARAN', learningTitle: 'Apa yang akan dipelajari?', outcome1: '<strong>1.2.1</strong> Menyenaraikan sumber pemerolehan bahan grafik.', outcome2: '<strong>1.2.2</strong> Menjelaskan fungsi dan spesifikasi perkakasan grafik digital.', outcome3: 'Mengenal pasti komputer, kamera digital, pengimbas, pencetak dan tablet grafik.', nameBack: '← Kembali ke menu utama', nameEyebrow: 'SEDIA UNTUK BERMAIN?', nameTitle: 'Masukkan nama<br><span>pemain.</span>', nameDescription: 'Nama anda akan dipaparkan pada skrin permainan dan keputusan.', nameLabel: 'NAMA PEMAIN', namePlaceholder: 'Contoh: Aina', nameError: 'Sila masukkan nama sebelum bermain.', beginGame: 'Teruskan ke permainan →', backHome: '← Kembali ke menu utama', statusMission: 'MISI', statusScore: 'SKOR', statusLives: 'NYAWA', questionHint: 'Pilih satu jawapan yang paling tepat.', next: 'Seterusnya →', seeResults: 'Lihat Keputusan →', resultEyebrow: 'MISI SELESAI', resultTitle: 'Tahniah!', resultMessage: 'Anda telah menamatkan cabaran.', resultScoreLabel: 'JUMLAH MATA', resultCorrectLabel: 'Jawapan betul', replay: 'Main Semula ↻', resultHome: 'Menu Utama', footer: 'Permainan pembelajaran · Topik 1.2', leaderboardEyebrow: 'PAPAN KEDUDUKAN', leaderboardTitle: 'Top 10 pemain', leaderboardDescription: 'Skor terbaik daripada permainan yang telah selesai.', leaderboardRefresh: '↻ Muat semula', leaderboardLoading: 'Memuatkan leaderboard…', leaderboardEmpty: 'Belum ada skor.', leaderboardLoadFailed: 'Tidak dapat memuatkan leaderboard. Cuba lagi.', leaderboardSaving: 'Menyimpan skor ke leaderboard…', leaderboardSaved: 'Skor berjaya disimpan!', leaderboardSaveFailed: 'Skor tidak dapat disimpan. Sila semak tetapan sambungan.', leaderboardRank: '#', leaderboardPlayer: 'Pemain', leaderboardScore: 'Skor', leaderboardCorrect: 'Betul', leaderboardMission: 'Misi', questionCounter: (n,total)=>`SOALAN ${n} / ${total}`, player: n=>`Pemain: <strong>${n}</strong>`, resultPlayer:n=>`Keputusan untuk <strong>${n}</strong>`, correctFeedback: explanation=>`✓ Betul! ${explanation}`, wrongFeedback: explanation=>`✗ Belum tepat. ${explanation}`, correctHint: '+10 mata', wrongHint: 'Semak penerangan dan teruskan!', perfectTitle: 'Hebat sekali!', perfectMessage: 'Sempurna! Semua jawapan betul.', goodTitle: 'Misi berjaya!', goodMessage: 'Bagus! Teruskan latihan untuk kuasai semua konsep.', retryTitle: 'Terus mencuba!', retryMessage: 'Ulang kaji penerangan jawapan dan cuba sekali lagi.', missionNumber: n=>`MISI 0${n+1}`, questionLabel: 'Soalan akan dipaparkan di sini.'
  },
  en: {
    headerMode: 'LEARNING MODE', heroEyebrow: 'TOPIC 1.2 · DIGITAL GRAPHICS BASICS', heroTitle: 'Explore the world of<br><span>Digital Graphics.</span>', heroDescription: 'Complete missions, identify sources of graphic materials, and learn about the hardware used to create digital graphics.', start: 'Start Playing <span aria-hidden="true">↗</span>', metaMissions: '✦ 3 Missions', metaQuestions: '✦ 15 Questions', metaFree: '✦ Free to Play', chooseEyebrow: 'CHOOSE YOUR ADVENTURE', chooseTitle: 'Choose a mission', chooseDescription: 'Earn points and test your knowledge.', missionButton: 'Start Mission <span>→</span>', learningEyebrow: 'LEARNING OUTCOMES', learningTitle: 'What will you learn?', outcome1: '<strong>1.2.1</strong> List sources for obtaining graphic materials.', outcome2: '<strong>1.2.2</strong> Explain the functions and specifications of digital graphics hardware.', outcome3: 'Identify computers, digital cameras, scanners, printers, and graphics tablets.', nameBack: '← Back to main menu', nameEyebrow: 'READY TO PLAY?', nameTitle: 'Enter your<br><span>player name.</span>', nameDescription: 'Your name will appear on the game and results screens.', nameLabel: 'PLAYER NAME', namePlaceholder: 'e.g. Alex', nameError: 'Please enter your name before playing.', beginGame: 'Continue to game →', backHome: '← Back to main menu', statusMission: 'MISSION', statusScore: 'SCORE', statusLives: 'LIVES', questionHint: 'Choose the most accurate answer.', next: 'Next →', seeResults: 'View Results →', resultEyebrow: 'MISSION COMPLETE', resultTitle: 'Congratulations!', resultMessage: 'You have completed the challenge.', resultScoreLabel: 'TOTAL SCORE', resultCorrectLabel: 'Correct answers', replay: 'Play Again ↻', resultHome: 'Main Menu', footer: 'Learning game · Topic 1.2', leaderboardEyebrow: 'LEADERBOARD', leaderboardTitle: 'Top 10 players', leaderboardDescription: 'Highest scores from completed games.', leaderboardRefresh: '↻ Refresh', leaderboardLoading: 'Loading leaderboard…', leaderboardEmpty: 'No scores yet.', leaderboardLoadFailed: 'Could not load leaderboard. Please try again.', leaderboardSaving: 'Saving score to leaderboard…', leaderboardSaved: 'Score saved successfully!', leaderboardSaveFailed: 'Could not save score. Please check the connection settings.', leaderboardRank: '#', leaderboardPlayer: 'Player', leaderboardScore: 'Score', leaderboardCorrect: 'Correct', leaderboardMission: 'Mission', questionCounter: (n,total)=>`QUESTION ${n} / ${total}`, player: n=>`Player: <strong>${n}</strong>`, resultPlayer:n=>`Results for <strong>${n}</strong>`, correctFeedback: explanation=>`✓ Correct! ${explanation}`, wrongFeedback: explanation=>`✗ Not quite. ${explanation}`, correctHint: '+10 points', wrongHint: 'Review the explanation and continue!', perfectTitle: 'Outstanding!', perfectMessage: 'Perfect! Every answer is correct.', goodTitle: 'Mission complete!', goodMessage: 'Well done! Keep practising to master every concept.', retryTitle: 'Keep trying!', retryMessage: 'Review the explanations and give it another try.', missionNumber: n=>`MISSION 0${n+1}`, questionLabel: 'Your question will appear here.'
  }
};


const apiDiagnostics = {
  ms: {
    API_NOT_FOUND: 'API tidak ditemui (404). Pastikan folder api berada di root projek Vercel dan redeploy projek yang betul.',
    API_BAD_RESPONSE: 'API tidak memulangkan JSON yang sah. Semak Vercel → Deployments → Function Logs.',
    API_NETWORK_ERROR: 'Tidak dapat menghubungi API. Periksa sambungan internet dan deployment Vercel.',
    API_TIMEOUT: 'API mengambil masa terlalu lama untuk menjawab. Cuba lagi dan semak Vercel Function Logs.',
    MONGODB_URI_MISSING: 'Vercel tidak menemui MONGODB_URI untuk deployment ini. Semak Environment Variables dan redeploy.',
    MONGODB_URI_PLACEHOLDER: 'MONGODB_URI masih mengandungi placeholder. Gunakan connection string Atlas yang lengkap.',
    MONGODB_URI_INVALID: 'MONGODB_URI tidak sah. Salin semula URI daripada MongoDB Atlas dan semak aksara khas dalam password.',
    MONGODB_AUTH_FAILED: 'MongoDB menolak username/password. Semak MONGODB_URI menggunakan password terkini.',
    MONGODB_PERMISSION_DENIED: 'Pengguna database tiada kebenaran yang diperlukan pada grafik_digital_quest.',
    MONGODB_DNS_ERROR: 'Nama host MongoDB Atlas tidak dapat ditemui. Semak connection string dan status cluster.',
    ATLAS_IP_NOT_ALLOWED: 'MongoDB Atlas menyekat rangkaian Vercel. Semak Atlas → Network Access.',
    ATLAS_NETWORK_OR_TIMEOUT: 'Vercel tidak dapat mencapai cluster MongoDB. Semak Atlas → Network Access dan status cluster.',
    MONGODB_DB_MISSING: 'Nama database kosong. Tetapkan MONGODB_DB kepada grafik_digital_quest.',
    MONGODB_CONNECTION_FAILED: 'Sambungan MongoDB gagal. Semak URI, Network Access, status cluster dan Function Logs.',
    INVALID_JSON: 'Data skor tidak sah. Cuba tamatkan misi semula.',
    INVALID_BODY: 'Format data skor tidak sah.',
    PLAYER_NAME_REQUIRED: 'Nama pemain diperlukan. Kembali ke menu dan masukkan nama.',
    INVALID_SCORE: 'Skor yang dihantar tidak sah.',
    INVALID_CORRECT_COUNT: 'Bilangan jawapan betul tidak sah.',
    INCONSISTENT_SCORE: 'Jumlah skor tidak sepadan dengan bilangan jawapan betul.',
    INVALID_MISSION: 'Nombor misi tidak sah.',
    UNKNOWN: 'Ralat tidak diketahui. Buka Vercel → Logs untuk maklumat lanjut.'
  },
  en: {
    API_NOT_FOUND: 'API route not found (404). Ensure the api folder is at the Vercel project root and redeploy the correct project.',
    API_BAD_RESPONSE: 'The API did not return valid JSON. Check Vercel → Deployments → Function Logs.',
    API_NETWORK_ERROR: 'Could not reach the API. Check your internet connection and Vercel deployment.',
    API_TIMEOUT: 'The API timed out. Try again and check Vercel Function Logs.',
    MONGODB_URI_MISSING: 'Vercel cannot find MONGODB_URI for this deployment. Check Environment Variables and redeploy.',
    MONGODB_URI_PLACEHOLDER: 'MONGODB_URI still contains a placeholder. Use the full Atlas connection string.',
    MONGODB_URI_INVALID: 'MONGODB_URI is invalid. Copy it again from Atlas and check special characters in the password.',
    MONGODB_AUTH_FAILED: 'MongoDB rejected the username or password. Check MONGODB_URI uses the latest password.',
    MONGODB_PERMISSION_DENIED: 'The database user lacks the required permissions on grafik_digital_quest.',
    MONGODB_DNS_ERROR: 'The MongoDB Atlas hostname could not be resolved. Check the connection string and cluster status.',
    ATLAS_IP_NOT_ALLOWED: 'MongoDB Atlas is blocking the Vercel network. Check Atlas → Network Access.',
    ATLAS_NETWORK_OR_TIMEOUT: 'Vercel could not reach the MongoDB cluster. Check Atlas → Network Access and cluster status.',
    MONGODB_DB_MISSING: 'The database name is empty. Set MONGODB_DB to grafik_digital_quest.',
    MONGODB_CONNECTION_FAILED: 'MongoDB connection failed. Check the URI, Network Access, cluster status, and Function Logs.',
    INVALID_JSON: 'The score payload is invalid. Try finishing the mission again.',
    INVALID_BODY: 'The score payload has an invalid format.',
    PLAYER_NAME_REQUIRED: 'A player name is required. Return to the menu and enter a name.',
    INVALID_SCORE: 'The submitted score is invalid.',
    INVALID_CORRECT_COUNT: 'The number of correct answers is invalid.',
    INCONSISTENT_SCORE: 'The score does not match the number of correct answers.',
    INVALID_MISSION: 'The mission number is invalid.',
    UNKNOWN: 'Unknown error. Open Vercel → Logs for more information.'
  }
};

function apiDiagnosticText(code, fallbackKey) {
  return apiDiagnostics[language][code] || apiDiagnostics[language].UNKNOWN || ui[language][fallbackKey];
}

async function requestJSON(url, options = {}) {
  let response;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 15000);
  try {
    response = await fetch(url, { ...options, cache: 'no-store', signal: controller.signal });
  } catch (error) {
    const wrapped = new Error('API request failed');
    wrapped.apiCode = error?.name === 'AbortError' ? 'API_TIMEOUT' : 'API_NETWORK_ERROR';
    throw wrapped;
  } finally {
    window.clearTimeout(timer);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    const wrapped = new Error('API response was not JSON');
    wrapped.apiCode = response.status === 404 ? 'API_NOT_FOUND' : 'API_BAD_RESPONSE';
    throw wrapped;
  }

  if (response.status === 404) {
    const wrapped = new Error('API route not found');
    wrapped.apiCode = 'API_NOT_FOUND';
    throw wrapped;
  }
  if (!response.ok || !data || data.ok !== true) {
    const wrapped = new Error(data?.error || 'API returned an error');
    wrapped.apiCode = data?.code || (response.status >= 500 ? 'MONGODB_CONNECTION_FAILED' : 'UNKNOWN');
    wrapped.status = response.status;
    throw wrapped;
  }
  return data;
}

const screens = {
  home: document.getElementById('home-screen'),
  name: document.getElementById('name-screen'),
  game: document.getElementById('game-screen'),
  result: document.getElementById('result-screen')
};
let language = 'ms';
let pendingMission = 0;
let currentMission = 0;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let correctAnswers = 0;
let hasAnswered = false;
let playerName = '';
let currentOptions = [];
let selectedOptionIndex = -1;
let leaderboardCache = [];
let leaderboardLoadError = false;
let leaderboardErrorCode = '';
let scoreSaveState = '';
let scoreSaveErrorCode = '';
let currentRunId = 0;
let lastSubmittedRunId = -1;
let gameCompleted = false;

function textFor(value) {
  return typeof value === 'string' ? value : value[language];
}
function showScreen(name) {
  if (!screens[name]) return;
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}
function setHTML(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
}
function applyLanguage() {
  const words = ui[language];
  document.documentElement.lang = language === 'ms' ? 'ms' : 'en';
  document.getElementById('language-toggle').textContent = language === 'ms' ? 'EN' : 'BM';
  document.getElementById('language-toggle').setAttribute('aria-label', language === 'ms' ? 'Switch to English' : 'Tukar ke Bahasa Melayu');
  const mappings = {
    'header-mode': 'headerMode', 'hero-eyebrow': 'heroEyebrow', 'hero-description': 'heroDescription',
    'meta-missions': 'metaMissions', 'meta-questions': 'metaQuestions', 'meta-free': 'metaFree',
    'choose-eyebrow': 'chooseEyebrow', 'choose-title': 'chooseTitle', 'choose-description': 'chooseDescription',
    'learning-eyebrow': 'learningEyebrow', 'learning-title': 'learningTitle', 'learning-outcome-1': 'outcome1',
    'learning-outcome-2': 'outcome2', 'learning-outcome-3': 'outcome3', 'name-eyebrow': 'nameEyebrow',
    'name-description': 'nameDescription', 'name-label': 'nameLabel', 'name-back': 'nameBack',
    'back-home': 'backHome', 'status-mission-label': 'statusMission', 'status-score-label': 'statusScore',
    'status-lives-label': 'statusLives', 'result-eyebrow': 'resultEyebrow', 'result-score-label': 'resultScoreLabel',
    'result-correct-label': 'resultCorrectLabel', 'replay': 'replay', 'result-home': 'resultHome',
    'footer-description': 'footer', 'leaderboard-eyebrow': 'leaderboardEyebrow', 'leaderboard-title': 'leaderboardTitle',
    'leaderboard-description': 'leaderboardDescription', 'refresh-leaderboard': 'leaderboardRefresh',
    'lb-head-rank': 'leaderboardRank', 'lb-head-player': 'leaderboardPlayer', 'lb-head-score': 'leaderboardScore',
    'lb-head-correct': 'leaderboardCorrect', 'lb-head-mission': 'leaderboardMission'
  };
  Object.entries(mappings).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (['learning-outcome-1','learning-outcome-2','learning-outcome-3'].includes(id)) el.innerHTML = words[key];
    else el.textContent = words[key];
  });
  setHTML('hero-title', words.heroTitle);
  setHTML('start-first', words.start);
  setHTML('name-title', words.nameTitle);
  setText('choose-title', words.chooseTitle);
  document.getElementById('player-name').placeholder = words.namePlaceholder;
  setText('begin-game', words.beginGame);
  setText('next-question', hasAnswered && currentQuestion === missions[currentMission].questions.length - 1 ? words.seeResults : words.next);
  setText('question-hint', words.questionHint);
  setText('result-title', words.resultTitle);
  setText('result-message', words.resultMessage);
  setText('mission-name-0', textFor(missions[0].name));
  setText('mission-name-1', textFor(missions[1].name));
  setText('mission-name-2', textFor(missions[2].name));
  setText('mission-desc-0', textFor(missions[0].description));
  setText('mission-desc-1', textFor(missions[1].description));
  setText('mission-desc-2', textFor(missions[2].description));
  for (let i = 0; i < 3; i++) {
    setText(`mission-label-${i}`, words.missionNumber(i));
    setHTML(`mission-button-${i}`, words.missionButton);
  }
  setText('name-error', '');
  if (screens.game.classList.contains('active')) renderQuestion(true);
  if (screens.result.classList.contains('active')) updateResultText();
  if (Array.isArray(leaderboardCache)) {
    renderLeaderboard();
    if (leaderboardLoadError) setText('leaderboard-status', ui[language].leaderboardLoadFailed);
    else if (!leaderboardCache.length) setText('leaderboard-status', ui[language].leaderboardEmpty);
    else setText('leaderboard-status', '');
  }
  if (scoreSaveState === 'leaderboardSaveFailed' && scoreSaveErrorCode) setText('score-save-status', apiDiagnosticText(scoreSaveErrorCode, 'leaderboardSaveFailed'));
  else if (scoreSaveState) setText('score-save-status', ui[language][scoreSaveState]);
  const retryButton = document.getElementById('retry-score');
  if (retryButton) retryButton.textContent = language === 'ms' ? 'Cuba Simpan Skor Lagi' : 'Retry Saving Score';
}
function startGame(index) {
  if (!Number.isInteger(index) || index < 0 || index >= missions.length) index = 0;
  pendingMission = index;
  document.getElementById('player-name').value = playerName;
  setText('name-error', '');
  showScreen('name');
  window.setTimeout(() => document.getElementById('player-name').focus(), 100);
}
function beginMission() {
  currentRunId++;
  gameCompleted = false;
  scoreSaveState = '';
  scoreSaveErrorCode = '';
  const retryButton = document.getElementById('retry-score');
  if (retryButton) retryButton.hidden = true;
  currentMission = pendingMission;
  currentQuestion = 0;
  score = 0;
  lives = 3;
  correctAnswers = 0;
  hasAnswered = false;
  selectedOptionIndex = -1;
  currentOptions = [];
  showScreen('game');
  renderQuestion();
}
function renderQuestion(keepState = false) {
  const mission = missions[currentMission];
  const question = mission.questions[currentQuestion];
  const total = mission.questions.length;
  if (!keepState || !currentOptions.length) {
    hasAnswered = false;
    selectedOptionIndex = -1;
    currentOptions = shuffle(question.a.map((answer, index) => ({ sourceIndex: index, correct: index === question.correct })));
  }
  setText('mission-title', textFor(mission.name));
  setText('score', String(score));
  setText('lives', lives ? '♥ '.repeat(lives).trim() : '0');
  setText('question-counter', ui[language].questionCounter(currentQuestion + 1, total));
  setText('progress-percent', `${Math.round(currentQuestion / total * 100)}%`);
  document.getElementById('progress-bar').style.width = `${Math.round(currentQuestion / total * 100)}%`;
  setText('question-label', textFor(mission.label));
  setText('question-text', textFor(question.q));
  setHTML('player-greeting', ui[language].player(escapeHTML(playerName)));
  const feedback = document.getElementById('feedback');
  const next = document.getElementById('next-question');
  const list = document.getElementById('answer-list');
  feedback.className = 'feedback';
  feedback.textContent = '';
  list.replaceChildren();
  currentOptions.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.type = 'button';
    const letter = document.createElement('span');
    letter.className = 'answer-letter';
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement('span');
    label.textContent = textFor(question.a[option.sourceIndex]);
    button.append(letter, label);
    if (hasAnswered) {
      button.disabled = true;
      if (option.correct) button.classList.add('correct');
      if (index === selectedOptionIndex && !option.correct) button.classList.add('wrong');
    } else {
      button.addEventListener('click', () => checkAnswer(index, button));
    }
    list.appendChild(button);
  });
  next.disabled = !hasAnswered;
  next.textContent = currentQuestion === total - 1 ? ui[language].seeResults : ui[language].next;
  setText('question-hint', ui[language].questionHint);
  if (hasAnswered) {
    const chosen = currentOptions[selectedOptionIndex];
    const explanation = textFor(question.explain);
    if (chosen && chosen.correct) {
      feedback.className = 'feedback show good';
      feedback.textContent = ui[language].correctFeedback(explanation);
      setText('question-hint', ui[language].correctHint);
    } else {
      feedback.className = 'feedback show bad';
      feedback.textContent = ui[language].wrongFeedback(explanation);
      setText('question-hint', ui[language].wrongHint);
    }
  }
}
function checkAnswer(index, button) {
  if (hasAnswered) return;
  hasAnswered = true;
  selectedOptionIndex = index;
  const question = missions[currentMission].questions[currentQuestion];
  const selected = currentOptions[index];
  const buttons = [...document.querySelectorAll('.answer-option')];
  buttons.forEach(item => { item.disabled = true; });
  const feedback = document.getElementById('feedback');
  const explanation = textFor(question.explain);
  if (selected.correct) {
    score += 10;
    correctAnswers++;
    button.classList.add('correct');
    feedback.className = 'feedback show good';
    feedback.textContent = ui[language].correctFeedback(explanation);
    setText('question-hint', ui[language].correctHint);
  } else {
    lives = Math.max(0, lives - 1);
    button.classList.add('wrong');
    const correctIndex = currentOptions.findIndex(option => option.correct);
    if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');
    feedback.className = 'feedback show bad';
    feedback.textContent = ui[language].wrongFeedback(explanation);
    setText('question-hint', ui[language].wrongHint);
  }
  setText('score', String(score));
  setText('lives', lives ? '♥ '.repeat(lives).trim() : '0');
  document.getElementById('next-question').disabled = false;
  document.getElementById('next-question').textContent = currentQuestion === missions[currentMission].questions.length - 1 ? ui[language].seeResults : ui[language].next;
}
function nextQuestion() {
  if (!hasAnswered) return;
  if (currentQuestion < missions[currentMission].questions.length - 1) {
    currentQuestion++;
    currentOptions = [];
    hasAnswered = false;
    selectedOptionIndex = -1;
    renderQuestion();
  } else {
    finishGame();
  }
}
function updateResultText() {
  const total = missions[currentMission].questions.length;
  const percentage = Math.round(correctAnswers / total * 100);
  let title = ui[language].retryTitle;
  let message = ui[language].retryMessage;
  let icon = '🎯';
  if (percentage === 100) {
    title = ui[language].perfectTitle;
    message = ui[language].perfectMessage;
    icon = '🏆';
  } else if (percentage >= 60) {
    title = ui[language].goodTitle;
    message = ui[language].goodMessage;
    icon = '🌟';
  }
  setText('result-title', title);
  setText('result-message', message);
  setText('result-icon', icon);
  setHTML('result-player', ui[language].resultPlayer(escapeHTML(playerName)));
}
function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;
  tbody.replaceChildren();

  if (leaderboardLoadError) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 5;
    cell.className = 'leaderboard-empty';
    // The error explanation is shown once in the status line above the table.
    cell.textContent = '—';
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }

  if (!leaderboardCache.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 5;
    cell.className = 'leaderboard-empty';
    cell.textContent = ui[language].leaderboardEmpty;
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }

  leaderboardCache.forEach((entry, index) => {
    const row = document.createElement('tr');
    const values = [
      String(index + 1),
      String(entry.playerName || '—'),
      String(Number(entry.score) || 0),
      `${Number(entry.correctAnswers) || 0}/${Number(entry.totalQuestions) || 5}`,
      textFor(missions[Number(entry.mission)]?.name || { ms: 'Misi', en: 'Mission' })
    ];
    values.forEach((value, cellIndex) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      if (cellIndex === 0) cell.className = 'leaderboard-rank';
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
}

async function loadLeaderboard() {
  const status = document.getElementById('leaderboard-status');
  if (status) setText('leaderboard-status', ui[language].leaderboardLoading);

  try {
    const data = await requestJSON('/api/leaderboard', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
    leaderboardCache = Array.isArray(data.leaderboard) ? data.leaderboard : [];
    leaderboardLoadError = false;
    leaderboardErrorCode = '';
    renderLeaderboard();
    if (status) setText('leaderboard-status', '');
    return true;
  } catch (error) {
    console.error('Unable to load leaderboard:', error?.apiCode || 'UNKNOWN', error?.message || error);
    leaderboardCache = [];
    leaderboardLoadError = true;
    leaderboardErrorCode = error?.apiCode || 'UNKNOWN';
    renderLeaderboard();
    if (status) setText('leaderboard-status', apiDiagnosticText(leaderboardErrorCode, 'leaderboardLoadFailed'));
    return false;
  }
}

async function saveCompletedScore(isRetry = false) {
  if (lastSubmittedRunId === currentRunId && !isRetry) return;
  lastSubmittedRunId = currentRunId;

  scoreSaveState = 'leaderboardSaving';
  scoreSaveErrorCode = '';
  setText('score-save-status', ui[language].leaderboardSaving);
  const retryButton = document.getElementById('retry-score');
  if (retryButton) {
    retryButton.hidden = true;
    retryButton.disabled = true;
  }

  try {
    const data = await requestJSON('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        playerName,
        score,
        correctAnswers,
        totalQuestions: missions[currentMission].questions.length,
        mission: currentMission
      })
    });

    if (!data.id) console.warn('Score endpoint succeeded without returning an id.');
    scoreSaveState = 'leaderboardSaved';
    scoreSaveErrorCode = '';
    setText('score-save-status', ui[language].leaderboardSaved);
    if (retryButton) retryButton.hidden = true;
    await loadLeaderboard();
  } catch (error) {
    scoreSaveState = 'leaderboardSaveFailed';
    scoreSaveErrorCode = error?.apiCode || 'UNKNOWN';
    console.error('Unable to save score:', scoreSaveErrorCode, error?.message || error);
    setText('score-save-status', apiDiagnosticText(scoreSaveErrorCode, 'leaderboardSaveFailed'));
    if (retryButton) {
      retryButton.hidden = false;
      retryButton.disabled = false;
    }
  }
}

function finishGame() {
  if (gameCompleted) return;
  gameCompleted = true;
  const total = missions[currentMission].questions.length;
  document.getElementById('progress-bar').style.width = '100%';
  setText('progress-percent', '100%');
  setText('final-score', String(score));
  setText('correct-count', `${correctAnswers}/${total}`);
  scoreSaveState = 'leaderboardSaving';
  scoreSaveErrorCode = '';
  setText('score-save-status', ui[language].leaderboardSaving);
  const retryButton = document.getElementById('retry-score');
  if (retryButton) retryButton.hidden = true;
  updateResultText();
  showScreen('result');
  void saveCompletedScore();
}

document.getElementById('language-toggle').addEventListener('click', () => {
  language = language === 'ms' ? 'en' : 'ms';
  applyLanguage();
});
document.getElementById('brand-home').addEventListener('click', event => {
  event.preventDefault();
  showScreen('home');
});
document.getElementById('name-form').addEventListener('submit', event => {
  event.preventDefault();
  const value = document.getElementById('player-name').value.trim();
  if (!value) {
    setText('name-error', ui[language].nameError);
    return;
  }
  playerName = value.slice(0, 30);
  beginMission();
});
document.getElementById('name-back').addEventListener('click', () => showScreen('home'));
document.getElementById('start-first').addEventListener('click', () => startGame(0));
document.querySelectorAll('.mission-button').forEach(button => {
  button.addEventListener('click', () => startGame(Number(button.dataset.mission)));
});
document.getElementById('back-home').addEventListener('click', () => showScreen('home'));
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('replay').addEventListener('click', () => startGame(currentMission));
document.getElementById('result-home').addEventListener('click', () => { showScreen('home'); loadLeaderboard(); });
document.getElementById('refresh-leaderboard').addEventListener('click', loadLeaderboard);
document.getElementById('retry-score').addEventListener('click', () => { void saveCompletedScore(true); });

applyLanguage();
loadLeaderboard();
