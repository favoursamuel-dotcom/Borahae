const members = [
  [
    "RM",
    "Kim Namjoon",
    "김남준",
    "12 September 1994",
    "Leader & rapper",
    "RM brings a reflective voice to Bangtan’s music. His solo work includes mono., Indigo and Right Place, Wrong Person.",
  ],
  [
    "Jin",
    "Kim Seokjin",
    "김석진",
    "4 December 1992",
    "Vocalist",
    "Jin’s warm voice shines in emotional songs and playful moments alike. Explore The Astronaut and his solo album Happy.",
  ],
  [
    "SUGA",
    "Min Yoongi",
    "민윤기",
    "9 March 1993",
    "Rapper & producer",
    "SUGA also releases music as Agust D. His work spans sharp storytelling, introspection and production, including D-DAY.",
  ],
  [
    "j-hope",
    "Jung Hoseok",
    "정호석",
    "18 February 1994",
    "Rapper & dancer",
    "Rhythm, performance and energy are central to j-hope’s artistry. Explore Hope World and Jack In The Box.",
  ],
  [
    "Jimin",
    "Park Jimin",
    "박지민",
    "13 October 1995",
    "Vocalist & dancer",
    "Jimin blends expressive dance with a distinctive vocal color. Discover his solo albums FACE and MUSE.",
  ],
  [
    "V",
    "Kim Taehyung",
    "김태형",
    "30 December 1995",
    "Vocalist",
    "V’s deep tone and interest in soulful sounds shape his solo music. Begin with Layover.",
  ],
  [
    "Jung Kook",
    "Jeon Jungkook",
    "전정국",
    "1 September 1997",
    "Vocalist & youngest member",
    "Jung Kook combines versatile vocals with dynamic performance. His solo album GOLDEN is a pop-focused starting point.",
  ],
];
const mt = document.getElementById("member-tabs");
members.forEach((m, i) => {
  const b = document.createElement("button");
  b.textContent = m[0];
  b.role = "tab";
  b.id = "member-" + i;
  b.onclick = () => showMember(i);
  mt.append(b);
});
function showMember(i) {
  [...mt.children].forEach((b, n) => {
    b.classList.toggle("active", i === n);
    b.setAttribute("aria-selected", i === n);
    b.tabIndex = i === n ? 0 : -1;
  });
  const m = members[i],
    p = profileDetails[i];
  const d = document.getElementById("member-detail");
  d.setAttribute("aria-labelledby", "member-" + i);
  d.innerHTML = `<figure class="portrait"><img src="portraits/${p.photo}.jpg" alt="${m[0]} in a 2026 ARIRANG individual vinyl-cover portrait"><figcaption>ARIRANG · March 2026<br>Album portrait · BIGHIT MUSIC / HYBE<br><a href="https://www.koreaboo.com/news/bts-newly-released-concept-photos-sparks-massive-backlash/" target="_blank" rel="noopener">Photo source</a></figcaption></figure><div class="profile-copy"><div class="eyebrow">${m[4]}</div><h3>${m[0]}</h3><p class="name">${m[1]} · ${m[2]}</p><div class="profile-facts"><span><b>Birthday</b>${m[3]}</span><span><b>${p.placeLabel || "Birthplace"}</b>${p.place}</span></div><p>${p.about}</p><div class="profile-columns"><div><h4>Solo release guide</h4><ul>${p.albums.map((a) => `<li>${a}</li>`).join("")}</ul></div><div><h4>Listen for these</h4><div class="track-chips">${p.tracks.map((t) => `<span>${t}</span>`).join("")}</div></div></div><div class="profile-tip"><b>A way in</b><p>${p.discover}</p></div><a class="textlink" href="${p.source}" target="_blank" rel="noopener">Explore ${m[0]}’s official discography ↗</a></div>`;
}
mt.addEventListener("keydown", (e) => {
  if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
    e.preventDefault();
    const n = [...mt.children].findIndex(
      (b) => b.getAttribute("aria-selected") === "true",
    );
    const i =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? 6
          : (n + (e.key === "ArrowRight" ? 1 : 6)) % 7;
    showMember(i);
    mt.children[i].focus();
  }
});
showMember(0);
const songs = [
  {
    title: "Spring Day",
    album: "YOU NEVER WALK ALONE · 2017",
    id: "xEeFrLSkMm8",
    meaning:
      "A song about missing someone and holding on to the possibility of reunion. Its winter-to-spring imagery makes it a comforting place to start.",
    vocab: ["봄 · bom · spring", "날 · nal · day"],
    korean: "봄날",
    roman: "Bomnal",
  },
  {
    title: "Dynamite",
    album: "DYNAMITE · 2020",
    id: "gdZLi9oWNZg",
    meaning:
      "An upbeat English-language disco-pop song built around joy, movement and a burst of positive energy.",
    vocab: ["춤 · chum · dance", "음악 · eumak · music"],
    korean: "English-language track",
    roman: "Practice rhythm and breathing",
  },
  {
    title: "Life Goes On",
    album: "BE · 2020",
    id: "-5q5mZbe3V8",
    meaning:
      "A gentle reflection on disrupted everyday life and the hope that time keeps moving forward. A good choice for a quieter practice session.",
    vocab: ["삶 · sam · life", "하루 · haru · a day"],
    korean: "Korean & English",
    roman: "Start with one phrase at a time",
  },
  {
    title: "Boy With Luv",
    album: "MAP OF THE SOUL : PERSONA · 2019",
    id: "XsX3ATc3FbA",
    meaning:
      "A bright song about finding joy in small details and paying attention to someone you love. The track features Halsey.",
    vocab: ["작은 · jageun · small", "것 · geot · thing"],
    korean: "작은 것들을 위한 시",
    roman: "Jageun geotdeureul wihan si",
  },
  {
    title: "Black Swan",
    album: "MAP OF THE SOUL : 7 · 2020",
    id: "0lapF4DQPKQ",
    meaning:
      "A reflection on an artist’s fear of losing the connection to their craft. Listen for the contrast between vulnerability and dramatic performance.",
    vocab: ["꿈 · kkum · dream", "마음 · maeum · heart / mind"],
    korean: "Korean & English",
    roman: "Listen first, then practice slowly",
  },
  {
    title: "Butter",
    album: "BUTTER · 2021",
    id: "WMweEpGlu_U",
    meaning:
      "A playful English-language pop track with a confident, smooth groove. Try speaking the words in rhythm before singing.",
    vocab: ["노래 · norae · song", "연습 · yeonseup · practice"],
    korean: "English-language track",
    roman: "Try the rhythm before the melody",
  },
];
songs.forEach((s) => {
  s.artist = "BTS";
  s.year = Number(s.album.split(" · ").pop());
});
songs.push(...extraSongs);
let songIndex = 0,
  mode = "meaning",
  songFilter = "all";
const sl = document.getElementById("song-list");
function renderSongList() {
  const query = document
    .getElementById("song-search")
    .value.trim()
    .toLowerCase();
  const visible = songs
    .map((s, i) => ({ s, i }))
    .filter(
      ({ s }) =>
        (songFilter === "all" ||
          (songFilter === "group" ? s.artist === "BTS" : s.artist !== "BTS")) &&
        `${s.title} ${s.artist} ${s.album}`.toLowerCase().includes(query),
    );
  sl.innerHTML = "";
  visible.forEach(({ s, i }) => {
    const b = document.createElement("button");
    b.className = "song";
    b.classList.toggle("active", i === songIndex);
    b.setAttribute("aria-pressed", i === songIndex);
    b.innerHTML = `<span class="song-index">${String(i + 1).padStart(2, "0")}</span><span><strong>${s.title}</strong><small>${s.artist} · ${s.year}</small></span><span class="note">♫</span>`;
    b.onclick = () => chooseSong(i);
    sl.append(b);
  });
  if (!visible.length)
    sl.innerHTML =
      '<p class="empty-songs">No matches. Try a different song, member or album.</p>';
  document.getElementById("song-count").textContent =
    `${visible.length} of ${songs.length} songs`;
}
function chooseSong(i) {
  songIndex = i;
  renderSongList();
  const s = songs[i];
  document.getElementById("song-title").textContent = s.title;
  document.getElementById("song-album").textContent =
    `${s.artist} · ${s.album}`;
  document.getElementById("video").innerHTML =
    `<iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${s.id}" title="${s.artist} ${s.title} official music video" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe><a class="video-fallback" href="https://www.youtube.com/watch?v=${s.id}" target="_blank" rel="noopener">Video unavailable here? Watch on YouTube ↗</a>`;
  renderMusic();
}
function renderMusic() {
  const s = songs[songIndex];
  document.querySelectorAll("[data-mode]").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === mode);
    b.setAttribute("aria-selected", b.dataset.mode === mode);
  });
  const yt = `https://www.youtube.com/watch?v=${s.id}`;
  let content;
  if (mode === "meaning")
    content = `<p>${s.meaning}</p><div class="vocab">${s.vocab.map((v) => `<span>${v}</span>`).join("")}</div><p class="small">Vocabulary for your practice; these are not lyric excerpts. Song meanings are our own summaries.</p>`;
  else if (mode === "sing")
    content = `<p><strong>${s.korean}</strong><br>${s.roman}</p><p>Play the official video and enable captions when available. Listen once, pause to practice, then sing with the next replay. Use the lyrics desk below for a translation reference.</p><a href="${yt}" target="_blank" rel="noopener">Open official video on YouTube ↗</a>`;
  else
    content = `<p>Ready for your own stage? Find an instrumental or karaoke version on YouTube. Availability and lyrics depend on the uploader.</p><a class="button" href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.artist + " " + s.title + " karaoke instrumental")}" target="_blank" rel="noopener">Find karaoke for this song ↗</a><p class="small">External karaoke search · choose a version that credits the music.</p>`;
  document.getElementById("music-content").innerHTML = content;
}
document.querySelectorAll("[data-mode]").forEach(
  (b) =>
    (b.onclick = () => {
      mode = b.dataset.mode;
      renderMusic();
    }),
);
document.getElementById("song-search").oninput = renderSongList;
document.querySelectorAll("[data-filter]").forEach(
  (b) =>
    (b.onclick = () => {
      songFilter = b.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((x) => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-pressed", x === b);
      });
      renderSongList();
    }),
);
chooseSong(0);
document.getElementById("clear-notes").onclick = () => {
  document.getElementById("notes").value = "";
};
let qi = 0,
  score = 0,
  answered = false,
  round = [],
  level = "easy",
  currentOptions = [],
  review = [];
const qa = document.getElementById("quiz-area");
const deck = new QuizDeck(bank);
function quizLobby() {
  document.getElementById("quiz-count").textContent =
    `${bank.length} QUESTIONS`;
  qa.innerHTML = `<h3>Choose your challenge.</h3><p>Ten questions per round. A fresh mix of members, albums, solo music and Bangtan history, with shuffled answers.</p><div class="level-options" aria-label="Quiz difficulty">${["easy", "medium", "hard"].map((x) => `<button data-level="${x}" class="${x === level ? "selected" : ""}" aria-pressed="${x === level}"><strong>${x[0].toUpperCase() + x.slice(1)}</strong><small>${x === "easy" ? "Find your feet" : x === "medium" ? "Go a little deeper" : "Deep cuts & details"}</small></button>`).join("")}</div><p class="small" id="level-bank">${bank.filter((q) => q.level === level).length} questions in this level · no repeats until the bank is exhausted.</p><button class="primary" id="quiz-start">Start ${level} round</button>`;
  qa.querySelectorAll("[data-level]").forEach(
    (b) =>
      (b.onclick = () => {
        level = b.dataset.level;
        quizLobby();
      }),
  );
  document.getElementById("quiz-start").onclick = startQuiz;
}
function startQuiz() {
  qi = 0;
  score = 0;
  review = [];
  round = deck.take(level, 10);
  drawQuiz();
}
function drawQuiz() {
  answered = false;
  const q = round[qi];
  currentOptions = shuffle(q.options);
  document.getElementById("quiz-count").textContent =
    `${level.toUpperCase()} · ${qi + 1} / ${round.length}`;
  qa.innerHTML = `<div class="progress"><span style="width:${(qi / round.length) * 100}%"></span></div><span class="question-topic">${q.topic}</span><h3 tabindex="-1" id="question-heading">${q.prompt}</h3><div class="answers">${currentOptions.map((x, i) => `<button data-answer="${i}">${x}</button>`).join("")}</div><div class="feedback" aria-live="polite">Choose one answer.</div><button class="primary" id="quiz-next" hidden>Next question</button>`;
  qa.querySelectorAll("[data-answer]").forEach(
    (b) => (b.onclick = () => answerQuiz(+b.dataset.answer)),
  );
  document.getElementById("quiz-next").onclick = () => {
    qi++;
    if (qi < round.length) {
      drawQuiz();
      document.getElementById("question-heading").focus();
    } else finishQuiz();
  };
}
function answerQuiz(a) {
  if (answered) return;
  answered = true;
  const q = round[qi],
    correct = currentOptions[a] === q.answer;
  if (correct) score++;
  review.push({ q, chosen: currentOptions[a], correct });
  qa.querySelectorAll("[data-answer]").forEach((b) => {
    b.disabled = true;
    const n = +b.dataset.answer;
    if (currentOptions[n] === q.answer) b.classList.add("correct");
    else if (n === a) b.classList.add("wrong");
  });
  qa.querySelector(".feedback").innerHTML =
    `${correct ? "Correct!" : "Nice try!"} ${q.explanation} <a href="${q.source}" target="_blank" rel="noopener">Explore the source ↗</a>`;
  const n = document.getElementById("quiz-next");
  n.hidden = false;
  n.textContent = qi === round.length - 1 ? "See my score" : "Next question";
}
function finishQuiz() {
  document.getElementById("quiz-count").textContent =
    `${level.toUpperCase()} · COMPLETE`;
  qa.innerHTML = `<div class="score">${score} / ${round.length}</div><h3>${score >= 8 ? "Bangtan brain activated." : score >= 5 ? "Your purple universe is growing." : "A lovely place to begin."}</h3><p>There’s always another corner of Bangtan to discover.</p><div class="result-actions"><button class="primary" id="quiz-restart">Another ${level} round</button><button id="quiz-levels">Change level</button></div><details class="round-review"><summary>Review this round</summary>${review.map(({ q, chosen, correct }) => `<div><b>${correct ? "✓" : "○"} ${q.prompt}</b><p>${correct ? "You got it:" : "Your answer: " + chosen + ". Correct answer:"} ${q.answer}<br>${q.explanation}</p></div>`).join("")}</details>`;
  document.getElementById("quiz-restart").onclick = startQuiz;
  document.getElementById("quiz-levels").onclick = quizLobby;
}
quizLobby();
let mi = 0,
  ms = 0,
  order = [];
const ma = document.getElementById("match-area");
function startMatch() {
  mi = 0;
  ms = 0;
  order = shuffle(members.map((_, i) => i));
  drawMatch();
}
function drawMatch() {
  const m = members[order[mi]];
  ma.innerHTML = `<p class="small">${mi + 1} OF 7</p><p class="real-name">${m[2]}</p><p>${m[1]}</p><div class="answers">${members.map((m, i) => `<button data-member="${i}">${m[0]}</button>`).join("")}</div><div class="feedback" aria-live="polite">Who is this?</div><button class="primary" id="match-next" hidden>Next member</button>`;
  ma.querySelectorAll("[data-member]").forEach(
    (b) =>
      (b.onclick = () => {
        if (b.disabled) return;
        const a = +b.dataset.member,
          correct = order[mi];
        if (a === correct) ms++;
        ma.querySelectorAll("[data-member]").forEach((x) => {
          x.disabled = true;
          if (+x.dataset.member === correct) x.classList.add("correct");
          else if (x === b) x.classList.add("wrong");
        });
        ma.querySelector(".feedback").textContent =
          `${a === correct ? "Correct!" : "Now you know:"} ${m[1]} is ${m[0]}.`;
        document.getElementById("match-next").hidden = false;
      }),
  );
  document.getElementById("match-next").onclick = () => {
    mi++;
    if (mi < 7) drawMatch();
    else {
      ma.innerHTML = `<div class="score">${ms} / 7</div><p>Seven names, seven people to discover.</p><button class="primary" id="match-restart">Play again</button>`;
      document.getElementById("match-restart").onclick = startMatch;
    }
  };
}
ma.innerHTML =
  '<p>Match all seven members, one at a time.</p><button class="primary" id="match-start">Start matching</button>';
document.getElementById("match-start").onclick = startMatch;
