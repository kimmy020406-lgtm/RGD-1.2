const missions = [
  {
    name: "Pencari Grafik",
    label: "1.2.1 · SUMBER BAHAN GRAFIK",
    questions: [
      {
        q: "Antara berikut, yang manakah sumber pemerolehan bahan grafik melalui penghasilan imej sendiri?",
        answers: ["Fotografi", "Papan kekunci", "Pembesar suara", "Mikrofon"],
        correct: 0,
        explanation: "Fotografi membolehkan kita menghasilkan bahan grafik dengan mengambil gambar menggunakan kamera."
      },
      {
        q: "Seorang pereka mencari gambar landskap melalui laman web. Apakah sumber bahan grafik tersebut?",
        answers: ["Laman web", "Pencetak", "Tablet grafik", "Monitor"],
        correct: 0,
        explanation: "Laman web boleh menjadi sumber bahan grafik. Semak lesen dan hak penggunaan sebelum menggunakannya."
      },
      {
        q: "Bagaimanakah lukisan di atas kertas boleh ditukarkan kepada fail imej digital?",
        answers: ["Menggunakan pembesar suara", "Menggunakan pengimbas", "Menggunakan tetikus sahaja", "Menggunakan pencetak"],
        correct: 1,
        explanation: "Pengimbas menangkap imej daripada dokumen fizikal dan menukarkannya kepada bentuk digital."
      },
      {
        q: "Yang manakah contoh bahan grafik yang dihasilkan daripada kreativiti pereka sendiri?",
        answers: ["Lukisan digital", "Kabel rangkaian", "Pemacu kuasa", "Papan kekunci"],
        correct: 0,
        explanation: "Lukisan digital dihasilkan menggunakan perisian dan alat digital."
      },
      {
        q: "Apakah perkara penting sebelum menggunakan gambar daripada internet untuk projek?",
        answers: ["Menukar nama fail sahaja", "Memastikan hak cipta dan lesen penggunaan", "Membuang semua warna", "Mencetak gambar dahulu"],
        correct: 1,
        explanation: "Semak hak cipta, lesen dan kebenaran penggunaan bahan grafik."
      }
    ]
  },
  {
    name: "Pakar Perkakasan",
    label: "1.2.2 · FUNGSI DAN SPESIFIKASI",
    questions: [
      {
        q: "Apakah fungsi utama komputer dalam kerja grafik digital?",
        answers: ["Memproses dan menyunting imej menggunakan perisian", "Mengimbas kertas tanpa peranti tambahan", "Mengambil gambar tanpa kamera", "Mencetak tanpa peranti output"],
        correct: 0,
        explanation: "Komputer menjalankan perisian grafik untuk menghasilkan, menyunting dan memproses imej."
      },
      {
        q: "Spesifikasi manakah penting untuk menilai perincian imej yang dihasilkan kamera digital?",
        answers: ["Resolusi imej", "Bilangan kekunci papan kekunci", "Saiz tetikus", "Kelajuan pencetak"],
        correct: 0,
        explanation: "Resolusi imej mempengaruhi jumlah perincian; kualiti juga bergantung pada sensor, lensa dan keadaan pengambilan gambar."
      },
      {
        q: "Apakah maksud DPI dalam konteks resolusi pengimbas?",
        answers: ["Dots Per Inch", "Digital Photo Input", "Data Processing Interface", "Display Pixel Internet"],
        correct: 0,
        explanation: "DPI bermaksud Dots Per Inch dan digunakan untuk menerangkan ketumpatan titik atau resolusi mengikut konteks peranti."
      },
      {
        q: "Apakah fungsi utama pencetak dalam proses grafik digital?",
        answers: ["Menghasilkan output imej pada kertas atau media cetak", "Mengambil gambar", "Menyunting video", "Melukis menggunakan stylus"],
        correct: 0,
        explanation: "Pencetak menghasilkan salinan fizikal bahan digital."
      },
      {
        q: "Spesifikasi manakah berkaitan dengan keupayaan tablet grafik mengesan tekanan stylus?",
        answers: ["Tahap kepekaan tekanan", "Kapasiti dulang kertas", "Saiz sensor kamera", "Kelajuan pengimbasan"],
        correct: 0,
        explanation: "Kepekaan tekanan membolehkan ciri garisan berubah mengikut tekanan stylus, bergantung pada peranti dan perisian."
      }
    ]
  },
  {
    name: "Cabaran Pakar",
    label: "CABARAN APLIKASI",
    questions: [
      {
        q: "Seorang guru mahu mendigitalkan gambar lama dalam album untuk persembahan. Peranti manakah paling sesuai?",
        answers: ["Pengimbas", "Pencetak", "Pembesar suara", "Tablet grafik sahaja"],
        correct: 0,
        explanation: "Pengimbas boleh menghasilkan salinan digital daripada gambar fizikal."
      },
      {
        q: "Seorang pereka mahu melukis ilustrasi terus pada komputer dengan stylus. Apakah peranti yang sesuai?",
        answers: ["Tablet grafik", "Pencetak laser", "Pengimbas dokumen", "Kamera keselamatan"],
        correct: 0,
        explanation: "Tablet grafik membolehkan input lukisan menggunakan stylus."
      },
      {
        q: "Komputer menjadi perlahan ketika menyunting fail grafik besar. Spesifikasi manakah wajar dinilai?",
        answers: ["RAM, pemproses dan keupayaan grafik", "Warna tetikus sahaja", "Panjang kabel pencetak", "Saiz dulang kertas"],
        correct: 0,
        explanation: "RAM, CPU, GPU dan storan boleh mempengaruhi prestasi, bergantung pada perisian dan jenis kerja."
      },
      {
        q: "Pereka perlu mencetak poster berwarna. Perkara manakah patut dipertimbangkan?",
        answers: ["Resolusi cetakan, keupayaan warna dan jenis media", "Jumlah kekunci papan kekunci", "Saiz mikrofon", "Kelajuan pengimbas sahaja"],
        correct: 0,
        explanation: "Kualiti poster dipengaruhi resolusi, penghasilan warna, dakwat atau toner serta kesesuaian media cetak."
      },
      {
        q: "Seorang jurugambar mahu mengawal kedalaman medan ketika mengambil potret. Tetapan kamera manakah sangat berkaitan?",
        answers: ["Aperture", "DPI pencetak", "Tahap tekanan stylus", "Saiz dulang pengimbas"],
        correct: 0,
        explanation: "Aperture mempengaruhi kedalaman medan. Jarak subjek dan ciri lensa juga memainkan peranan."
      }
    ]
  }
];

const screens = {
  home: document.getElementById("home-screen"),
  game: document.getElementById("game-screen"),
  result: document.getElementById("result-screen")
};

let currentMission = 0;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let correctAnswers = 0;
let hasAnswered = false;

function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame(missionIndex) {
  currentMission = missionIndex;
  currentQuestion = 0;
  score = 0;
  lives = 3;
  correctAnswers = 0;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  hasAnswered = false;
  const mission = missions[currentMission];
  const question = mission.questions[currentQuestion];
  const total = mission.questions.length;
  const progress = Math.round((currentQuestion / total) * 100);

  document.getElementById("mission-title").textContent = mission.name;
  document.getElementById("score").textContent = score;
  document.getElementById("lives").textContent = lives > 0 ? "♥ ".repeat(lives).trim() : "0";
  document.getElementById("question-counter").textContent = `SOALAN ${currentQuestion + 1} / ${total}`;
  document.getElementById("progress-percent").textContent = `${progress}%`;
  document.getElementById("progress-bar").style.width = `${progress}%`;
  document.getElementById("question-label").textContent = mission.label;
  document.getElementById("question-text").textContent = question.q;
  document.getElementById("question-hint").textContent = "Pilih satu jawapan yang paling tepat.";

  const feedback = document.getElementById("feedback");
  feedback.className = "feedback";
  feedback.textContent = "";

  const nextButton = document.getElementById("next-question");
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === total - 1 ? "Lihat Keputusan →" : "Seterusnya →";

  const answerList = document.getElementById("answer-list");
  answerList.replaceChildren();

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const label = document.createElement("span");
    label.textContent = answer;

    button.append(letter, label);
    button.addEventListener("click", () => checkAnswer(index, button));
    answerList.appendChild(button);
  });
}

function checkAnswer(selectedIndex, selectedButton) {
  if (hasAnswered) return;
  hasAnswered = true;

  const question = missions[currentMission].questions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-option")];
  buttons.forEach(button => { button.disabled = true; });

  const feedback = document.getElementById("feedback");

  if (selectedIndex === question.correct) {
    score += 10;
    correctAnswers += 1;
    selectedButton.classList.add("correct");
    feedback.className = "feedback show good";
    feedback.textContent = `✓ Betul! ${question.explanation}`;
    document.getElementById("question-hint").textContent = "+10 mata";
  } else {
    lives = Math.max(0, lives - 1);
    selectedButton.classList.add("wrong");
    buttons[question.correct].classList.add("correct");
    feedback.className = "feedback show bad";
    feedback.textContent = `✗ Belum tepat. ${question.explanation}`;
    document.getElementById("question-hint").textContent = "Semak penerangan dan teruskan!";
  }

  document.getElementById("score").textContent = score;
  document.getElementById("lives").textContent = lives > 0 ? "♥ ".repeat(lives).trim() : "0";
  document.getElementById("next-question").disabled = false;
}

function nextQuestion() {
  if (!hasAnswered) return;

  const total = missions[currentMission].questions.length;
  if (currentQuestion < total - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  const total = missions[currentMission].questions.length;
  const percentage = Math.round((correctAnswers / total) * 100);

  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("progress-percent").textContent = "100%";
  document.getElementById("final-score").textContent = score;
  document.getElementById("correct-count").textContent = `${correctAnswers}/${total}`;

  let title = "Terus mencuba!";
  let message = "Ulang kaji penerangan jawapan dan cuba sekali lagi.";
  let icon = "🎯";

  if (percentage === 100) {
    title = "Hebat sekali!";
    message = "Sempurna! Anda berjaya menjawab semua soalan dengan betul.";
    icon = "🏆";
  } else if (percentage >= 60) {
    title = "Misi berjaya!";
    message = "Bagus! Teruskan latihan untuk menguasai semua konsep.";
    icon = "🌟";
  }

  document.getElementById("result-title").textContent = title;
  document.getElementById("result-message").textContent = message;
  document.getElementById("result-icon").textContent = icon;
  showScreen("result");
}

document.getElementById("start-first").addEventListener("click", () => startGame(0));
document.querySelectorAll(".mission-button").forEach(button => {
  button.addEventListener("click", () => startGame(Number(button.dataset.mission)));
});
document.getElementById("back-home").addEventListener("click", () => showScreen("home"));
document.getElementById("next-question").addEventListener("click", nextQuestion);
document.getElementById("replay").addEventListener("click", () => startGame(currentMission));
document.getElementById("result-home").addEventListener("click", () => showScreen("home"));
