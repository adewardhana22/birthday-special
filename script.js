/* ============================================
   CONFIGURATION - EDIT THIS SECTION
   ============================================ */
const CONFIG = {
    // Nama orang spesial
    namaSpesial: "Sayangku ❤️",
    
    // Tanggal ulang tahun (YYYY-MM-DDTHH:mm:ss)
    tanggalUlangTahun: "2026-10-27T00:00:60",
    
    // Usia yang dirayakan
    usia: 17,
    
    // Pesan ucapan utama
    pesanUcapan: "Di hari spesial ini, aku ingin kamu tahu betapa berartinya kamu bagiku. Setiap detik bersamamu adalah hadiah terindah. Semoga semua impianmu menjadi kenyataan. I love you! 💕",
    
    // Kumpulan pesan kejutan (random setiap klik)
    pesanKejutan: [
        "🎉 Selamat ulang tahun! Kamu adalah orang terbaik yang pernah aku kenal! Semoga hari-harimu selalu bahagia!",
        "💝 Semua kebahagiaan menyertaimu hari ini dan selamanya! Kamu layak mendapatkan yang terbaik!",
        "🌟 Kamu adalah bintang dalam hidupku, terima kasih telah menjadi dirimu yang luar biasa!",
        "🎂 Hari ini adalah hari istimewa karena kamu lahir ke dunia ini. Terima kasih telah ada!",
        "❤️ Aku mencintaimu lebih dari apapun di dunia ini! Selamat ulang tahun sayang!",
        "💫 Setiap tahun bersamamu adalah anugerah. Semoga tahun ini membawa seribu kebahagiaan!",
        "🌹 Kamu lebih berharga dari semua bunga di dunia. Selamat ulang tahun untuk ratu hatiku!"
    ]
};

/* ============================================
   DOM ELEMENTS
   ============================================ */
const namaElement = document.getElementById('namaSpesial');
const pesanElement = document.getElementById('pesanUcapan');
const ageElement = document.getElementById('ageDisplay');
const surpriseMessage = document.getElementById('surpriseMessage');

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
        showNotification('🎉 Selamat ulang tahun! Semoga harimu menyenangkan!');
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2
