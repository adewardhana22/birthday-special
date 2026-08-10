/* ============================================
   CONFIGURATION - EDIT THIS SECTION
   ============================================ */
const CONFIG = {
    // Nama orang spesial
    namaSpesial: "Sayangku ❤️",
    
    // Tanggal ulang tahun (YYYY-MM-DDTHH:mm:ss)
    tanggalUlangTahun: "2026-08-10T00:00:00",
    
    // Usia yang dirayakan
    usia: 22,
    
    // Pesan ucapan utama - LOVE THEME
    pesanUcapan: "Di hari spesial ini, aku ingin kamu tahu betapa berartinya kamu bagiku. Setiap detik bersamamu adalah hadiah terindah. Cintaku padamu tak terbatas, seperti langit di atas kita. Semoga semua impianmu menjadi kenyataan. I love you more than anything! 💕",
    
    // Kumpulan pesan kejutan cinta
    pesanKejutan: [
        "💖 Kamu adalah cinta sejatiku, satu-satunya yang membuat hatiku bergetar setiap hari. Selamat ulang tahun sayang!",
        "💝 Setiap hari bersamamu adalah anugerah. Terima kasih telah menjadi bagian dari hidupku. Aku mencintaimu!",
        "❤️ Kamu adalah alasan aku tersenyum setiap pagi. Selamat ulang tahun untuk cintaku!",
        "💕 Cintaku padamu seperti bintang di langit, tak terhitung dan abadi. Selamat ulang tahun!",
        "💗 Kamu adalah mimpiku yang menjadi nyata. Aku bersyukur memiliki kamu. I love you!",
        "💖 Tanpa kamu, hidupku terasa kosong. Kamu adalah segalanya bagiku. Selamat ulang tahun!",
        "💝 Cinta kita adalah kisah yang tak akan pernah usang. Selamat ulang tahun untuk belahan jiwaku!",
        "❤️ Kamu adalah rumah bagi hatiku. Dimana pun aku berada, aku selalu merindukanmu. I love you!",
        "💕 Di hari spesial ini, aku hanya ingin mengatakan bahwa aku sangat mencintaimu. Kamu adalah segalanya!",
        "💗 Aku jatuh cinta padamu setiap hari, lagi dan lagi. Selamat ulang tahun cintaku!"
    ],
    
    // Kumpulan kutipan cinta untuk popup
    loveQuotes: [
        '"Cinta sejati adalah ketika kebahagiaan orang lain lebih penting dari kebahagiaanmu sendiri"',
        '"Cinta bukan tentang menemukan orang yang sempurna, tapi tentang melihat ketidaksempurnaan dengan sempurna"',
        '"Aku mencintaimu bukan karena siapa dirimu, tapi karena siapa aku saat bersamamu"',
        '"Cinta adalah ketika dua orang saling melengkapi, bukan saling memiliki"',
        '"Jatuh cinta itu mudah, tapi tetap bertahan dalam cinta adalah pilihan"',
        '"Kamu adalah jawaban dari semua doaku. Aku mencintaimu lebih dari apapun"',
        '"Cinta adalah bahasa yang dimengerti oleh hati, bukan oleh kata-kata"',
        '"Dalam setiap detik bersamamu, aku menemukan alasan baru untuk mencintaimu"'
    ]
};

/* ============================================
   DOM ELEMENTS
   ============================================ */
const namaElement = document.getElementById('namaSpesial');
const pesanElement = document.getElementById('pesanUcapan');
const ageElement = document.getElementById('ageDisplay');
const surpriseMessage = document.getElementById('surpriseMessage');
const loveQuoteElement = document.getElementById('loveQuote');

/* ============================================
   SET CONFIG DATA
   ============================================ */
if (namaElement) namaElement.textContent = CONFIG.namaSpesial;
if (pesanElement) pesanElement.textContent = CONFIG.pesanUcapan;
if (ageElement) ageElement.textContent = CONFIG.usia;

/* ============================================
   COUNTDOWN TIMER
   ============================================ */
function updateCountdown() {
    const targetDate = new Date(CONFIG.tanggalUlangTahun).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (distance < 0) {
        daysEl.textContent = '🎉';
        hoursEl.textContent = '🎉';
        minutesEl.textContent = '🎉';
        secondsEl.textContent = '🎉';
        showNotification('🎉 Selamat ulang tahun cintaku! Semoga harimu penuh kebahagiaan! 💕');
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ============================================
   MUSIC PLAYER - LOVE THEME
   ============================================ */
let isMusicPlaying = false;
const audio = document.getElementById('birthdaySong');
const musicBtnText = document.getElementById('musicBtnText');

function playMusic() {
    if (audio.paused) {
        audio.play()
            .then(() => {
                isMusicPlaying = true;
                musicBtnText.textContent = '❤️ Jeda Musik';
                showNotification('🎵 Musik cinta diputar! Nikmati setiap nadanya! 💕');
                // Trigger love confetti saat musik diputar
                fireLoveConfetti();
            })
            .catch(() => {
                showNotification('💖 Klik lagi untuk memutar musik cinta!');
            });
    } else {
        audio.pause();
        isMusicPlaying = false;
        musicBtnText.textContent = '💕 Putar Musik';
        showNotification('⏸️ Musik dijeda, tapi cintaku tetap menyala! ❤️');
    }
}

/* ============================================
   SURPRISE LOVE FUNCTION
   ============================================ */
function surprise() {
    const popup = document.getElementById('surprisePopup');
    
    // Random pesan cinta
    const randomMessage = CONFIG.pesanKejutan[
        Math.floor(Math.random() * CONFIG.pesanKejutan.length)
    ];
    
    // Random love quote
    const randomQuote = CONFIG.loveQuotes[
        Math.floor(Math.random() * CONFIG.loveQuotes.length)
    ];
    
    if (surpriseMessage) surpriseMessage.textContent = randomMessage;
    if (loveQuoteElement) loveQuoteElement.textContent = randomQuote;
    
    popup.style.display = 'flex';
    
    // Fire multiple love confetti
    fireLoveConfetti();
    setTimeout(() => fireLoveConfetti(), 300);
    setTimeout(() => fireLoveConfetti(), 600);
    setTimeout(() => fireLoveConfetti(), 900);
    setTimeout(() => fireLoveConfetti(), 1200);
    
    showNotification('💖 Kejutan cinta untuk kamu! Semoga kamu suka! 💕');
}

/* ============================================
   CLOSE SURPRISE
   ============================================ */
function closeSurprise() {
    document.getElementById('surprisePopup').style.display = 'none';
    showNotification('💝 Aku selalu mencintaimu! 💝');
}

/* ============================================
   LOVE CONFETTI EFFECT
   ============================================ */
function fireLoveConfetti() {
    const colors = ['#FF1493', '#FF69B4', '#FFD700', '#FF0040', '#FF6B6B', '#FFB6C1', '#FFE4E1'];
    const shapes = ['circle', 'square'];
    
    confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: colors,
        shapes: shapes,
        startVelocity: 30,
        gravity: 0.8,
        scalar: 1.2
    });
    
    // Additional heart-shaped confetti (simulated with emoji)
    setTimeout(() => {
        confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.5 },
            colors: ['#FF1493', '#FF69B4'],
            startVelocity: 20,
            gravity: 0.5
        });
    }, 100);
}

/* ============================================
   SHOW NOTIFICATION
   ============================================ */
function showNotification(message) {
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) oldNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3500);
}

/* ============================================
   AUTO LOVE CONFETTI ON LOAD
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Welcome love confetti
    setTimeout(() => {
        fireLoveConfetti();
        setTimeout(() => fireLoveConfetti(), 500);
        setTimeout(() => fireLoveConfetti(), 1000);
    }, 500);
    
    // Auto play music with user interaction
    document.addEventListener('click', function initAudio() {
        audio.play().catch(() => {});
        document.removeEventListener('click', initAudio);
    }, { once: true });
    
    // Check if birthday is today
    checkBirthdayToday();
});

/* ============================================
   CHECK BIRTHDAY TODAY
   ============================================ */
function checkBirthdayToday() {
    const today = new Date();
    const birthday = new Date(CONFIG.tanggalUlangTahun);
    
    if (today.getMonth() === birthday.getMonth() && 
        today.getDate() === birthday.getDate()) {
        showNotification('🎂 Selamat ulang tahun cintaku! Hari ini adalah harimu yang istimewa! 💕');
        // Extra love confetti for birthday
        setTimeout(() => fireLoveConfetti(), 1000);
        setTimeout(() => fireLoveConfetti(), 2000);
        setTimeout(() => fireLoveConfetti(), 3000);
        setTimeout(() => fireLoveConfetti(), 4000);
    }
}

/* ============================================
   KEYBOARD SHORTCUTS
   ============================================ */
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Space') {
        e.preventDefault();
        playMusic();
    }
    if (e.key === 'Enter') {
        surprise();
    }
    if (e.key === 'Escape') {
        closeSurprise();
    }
});

/* ============================================
   CONSOLE WELCOME - LOVE MESSAGE
   ============================================ */
console.log('%c💖 Happy Birthday My Love! 💖', 'font-size: 30px; font-weight: bold; color: #FF1493;');
console.log('%c❤️ Made with love for someone special ❤️', 'font-size: 16px; color: #FF69B4;');
console.log('%c💕 You are my everything! 💕', 'font-size: 20px; color: #FFD700;');
