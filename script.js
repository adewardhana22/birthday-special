/* ============================================
   CONFIGURATION - CHELSI PUTRI RAHMADANI ❤️
   ============================================ */
const CONFIG = {
    namaSpesial: "Chelsi Putri Rahmadani ❤️",
    tanggalUlangTahun: "2026-10-27T00:00:00",
    usia: 17,
    pesanUcapan: "Di hari spesial ini, Chelsi Putri Rahmadani ❤️ Aku ingin kamu tahu betapa berartinya kamu bagiku. Setiap detik bersamamu adalah hadiah terindah. Seperti lagu Monokrom, kamu adalah satu-satunya warna dalam hidupku. Di usiamu yang ke-17 ini, semoga semua impianmu menjadi kenyataan. I love you more than anything! 💕",
    pesanKejutan: [
        "💖 Chelsi Putri Rahmadani! Kamu adalah warna dalam hidupku yang monokrom. Selamat ulang tahun!",
        "💝 Di usiamu yang ke-17 ini, aku berjanji akan selalu ada untukmu, Chelsi!",
        "❤️ Chelsi, kamu adalah satu-satunya yang membuat hatiku berwarna. I love you!",
        "💕 Seperti lagu Monokrom, hanya kamu yang berwarna dalam hidupku. Selamat ulang tahun sayang!",
        "💗 Chelsi, kamu adalah hadiah terindah dalam hidupku. Selamat ulang tahun cintaku!",
        "💖 17 tahun, segudang cinta untukmu Chelsi. Aku selalu mencintaimu!",
        "💝 Chelsi sayangkuu, kamu adalah segalanya bagiku. Selamat ulang tahun!",
        "❤️ Di hari spesialmu ini, aku hanya ingin mengatakan bahwa aku sangat mencintaimu Chelsi!",
        "💕 Chelsi, kamu adalah mimpiku yang menjadi nyata. Selamat ulang tahun!",
        "💗 Aku jatuh cinta padamu setiap hari Chelsi. Selamat ulang tahun sayangkuu!"
    ],
    loveQuotes: [
        '"Dalam monokrom cinta, hanya kamu yang berwarna"',
        '"Chelsi, kamu adalah satu-satunya warna dalam hidupku"',
        '"Cinta untuk Chelsi tak pernah pudar, seperti lagu Monokrom"',
        '"Kamu adalah segalanya bagiku, Chelsi sayangkuu"',
        '"Di usiamu yang ke-17, cintaku padamu semakin dalam"'
    ]
};

/* ============================================
   WAIT FOR DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✅ Website untuk Chelsi Putri Rahmadani loaded!');
    console.log('💖 Happy Birthday Chelsi!');
    console.log('🎂 Usia: 17 tahun');
    console.log('📅 Tanggal: 27 Oktober 2026');
    
    /* ============================================
       SET CONFIG DATA
       ============================================ */
    const namaElement = document.getElementById('namaSpesial');
    const pesanElement = document.getElementById('pesanUcapan');
    const ageElement = document.getElementById('ageDisplay');
    
    if (namaElement) namaElement.textContent = CONFIG.namaSpesial;
    if (pesanElement) pesanElement.textContent = CONFIG.pesanUcapan;
    if (ageElement) ageElement.textContent = CONFIG.usia;

    /* ============================================
       COUNTDOWN TIMER - DETIK BERJALAN
       ============================================ */
    function updateCountdown() {
        const targetDate = new Date(CONFIG.tanggalUlangTahun).getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
            return;
        }

        if (distance < 0) {
            daysEl.textContent = '🎉';
            hoursEl.textContent = '🎉';
            minutesEl.textContent = '🎉';
            secondsEl.textContent = '🎉';
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
    console.log('✅ Countdown running untuk Chelsi');

    /* ============================================
       MUSIC PLAYER - MONOKROM TULUS
       ============================================ */
    let isMusicPlaying = false;
    const audio = document.getElementById('birthdaySong');
    const musicBtnText = document.getElementById('musicBtnText');

    window.playMusic = function() {
        if (!audio) {
            showNotification('⚠️ Audio tidak ditemukan!');
            return;
        }
        
        if (audio.paused) {
            audio.play()
                .then(() => {
                    isMusicPlaying = true;
                    if (musicBtnText) musicBtnText.textContent = '⏸ Jeda Monokrom';
                    showNotification('🎵 "Monokrom" - TULUS diputar! Nikmati setiap nadanya Chelsi! 💕');
                    fireLoveConfetti();
                })
                .catch(function(error) {
                    console.log('Audio play error:', error);
                    showNotification('💖 Klik lagi untuk memutar Monokrom!');
                    document.addEventListener('click', function playOnClick() {
                        audio.play().catch(function() {});
                        document.removeEventListener('click', playOnClick);
                    }, { once: true });
                });
        } else {
            audio.pause();
            isMusicPlaying = false;
            if (musicBtnText) musicBtnText.textContent = '▶ Putar Monokrom';
            showNotification('⏸️ Musik dijeda, tapi cintaku untuk Chelsi tetap menyala! ❤️');
        }
    };

    /* ============================================
       SURPRISE LOVE FUNCTION - UNTUK CHELSI
       ============================================ */
    window.showSurprise = function() {
        console.log('💖 Surprise untuk Chelsi Putri Rahmadani!');
        
        const popup = document.getElementById('surprisePopup');
        const surpriseMessage = document.getElementById('surpriseMessage');
        const loveQuoteElement = document.getElementById('loveQuote');
        
        if (!popup) {
            console.error('❌ Popup not found!');
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * CONFIG.pesanKejutan.length);
        const randomMessage = CONFIG.pesanKejutan[randomIndex];
        
        const quoteIndex = Math.floor(Math.random() * CONFIG.loveQuotes.length);
        const randomQuote = CONFIG.loveQuotes[quoteIndex];
        
        console.log('📝 Pesan untuk Chelsi:', randomMessage);
        
        if (surpriseMessage) surpriseMessage.textContent = randomMessage;
        if (loveQuoteElement) loveQuoteElement.textContent = randomQuote;
        
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('✅ Popup untuk Chelsi ditampilkan!');
        
        fireLoveConfetti();
        setTimeout(function() { fireLoveConfetti(); }, 300);
        setTimeout(function() { fireLoveConfetti(); }, 600);
        setTimeout(function() { fireLoveConfetti(); }, 900);
        setTimeout(function() { fireLoveConfetti(); }, 1200);
        
        showNotification('💖 Kejutan cinta untuk Chelsi! Semoga kamu suka sayang! 💕');
    };

    /* ============================================
       CLOSE SURPRISE
       ============================================ */
    window.closeSurprise = function() {
        const popup = document.getElementById('surprisePopup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
            console.log('✅ Popup ditutup');
        }
        showNotification('💝 Aku selalu mencintaimu Chelsi! 💝');
    };

    /* ============================================
       LOVE CONFETTI
       ============================================ */
    function fireLoveConfetti() {
        if (typeof confetti !== 'function') {
            return;
        }
        
        const colors = ['#FF1493', '#FF69B4', '#FFD700', '#FF0040', '#FF6B6B', '#FFB6C1', '#FFE4E1'];
        
        try {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                colors: colors,
                startVelocity: 30,
                gravity: 0.8,
                scalar: 1.2
            });
            
            setTimeout(function() {
                confetti({
                    particleCount: 40,
                    spread: 50,
                    origin: { y: 0.5 },
                    colors: ['#FF1493', '#FF69B4', '#FFD700'],
                    startVelocity: 20,
                    gravity: 0.5
                });
            }, 150);
        } catch(e) {
            console.log('Confetti error:', e);
        }
    }

    /* ============================================
       NOTIFICATION
       ============================================ */
    function showNotification(message) {
        const oldNotification = document.querySelector('.notification');
        if (oldNotification) oldNotification.remove();
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 500);
        }, 3500);
    }

    /* ============================================
       AUTO CONFETTI
       ============================================ */
    setTimeout(function() {
        fireLoveConfetti();
        setTimeout(function() { fireLoveConfetti(); }, 500);
        setTimeout(function() { fireLoveConfetti(); }, 1000);
    }, 500);
    
    // Auto play music with user interaction
    document.addEventListener('click', function initAudio() {
        if (audio) {
            audio.play().catch(function() {});
        }
        document.removeEventListener('click', initAudio);
    }, { once: true });
    
    /* ============================================
       CHECK BIRTHDAY TODAY
       ============================================ */
    function checkBirthdayToday() {
        const today = new Date();
        const birthday = new Date(CONFIG.tanggalUlangTahun);
        
        if (today.getMonth() === birthday.getMonth() && 
            today.getDate() === birthday.getDate()) {
            showNotification('🎂 Selamat ulang tahun Chelsi Putri Rahmadani! Hari ini adalah harimu! 💕');
            setTimeout(function() { fireLoveConfetti(); }, 1000);
            setTimeout(function() { fireLoveConfetti(); }, 2000);
            setTimeout(function() { fireLoveConfetti(); }, 3000);
            setTimeout(function() { fireLoveConfetti(); }, 4000);
        }
    }
    checkBirthdayToday();

    /* ============================================
       KEYBOARD SHORTCUTS
       ============================================ */
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ' || e.key === 'Space') {
            e.preventDefault();
            if (typeof window.playMusic === 'function') {
                window.playMusic();
            }
        }
        if (e.key === 'Enter') {
            if (typeof window.showSurprise === 'function') {
                window.showSurprise();
            }
        }
        if (e.key === 'Escape') {
            if (typeof window.closeSurprise === 'function') {
                window.closeSurprise();
            }
        }
    });

    console.log('🎵 Music: Monokrom - TULUS untuk Chelsi');
    console.log('💖 Surprise: Untuk Chelsi Putri Rahmadani!');
    console.log('⏰ Countdown: Menuju 27 Oktober 2026');

});
