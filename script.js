/* ============================================
   CONFIGURATION - CHELSI PUTRI RAHMADANI ❤️
   ============================================ */
const CONFIG = {
    namaSpesial: "Chelsi Putri Rahmadani ❤️",
    tanggalUlangTahun: "2026-10-27T00:00:00",
    usia: 17,
    pesanUcapan: "Untuk Chelsi Putri Rahmadani ❤️ Di hari yang istimewa ini, aku ingin kamu tahu bahwa kamu adalah hadiah terindah dalam hidupku. Setiap detik bersamamu adalah kenangan yang tak ternilai. Seperti kata-kata 'I Love You 3000', cintaku padamu jauh lebih dari itu. Di usiamu yang ke-17 ini, semoga semua impian dan harapanmu menjadi kenyataan. I love you more than 3000! 💕",
    pesanKejutan: [
        "💖 Chelsi Putri Rahmadani! Kamu adalah bintang yang menerangi hidupku. Selamat ulang tahun sayang!",
        "💝 Di usiamu yang ke-17, aku berjanji akan selalu ada untukmu, menjaga dan mencintaimu!",
        "❤️ Chelsi, kamu adalah satu-satunya yang membuat hatiku bergetar. I love you 3000!",
        "💕 Seperti bintang di langit, cintaku padamu tak terbatas. Selamat ulang tahun!",
        "💗 Chelsi, kamu adalah hadiah terindah yang pernah aku dapatkan. Selamat ulang tahun cintaku!",
        "💖 17 tahun, 17 alasan mengapa aku mencintaimu. Selamat ulang tahun sayang!",
        "💝 Chelsi sayangkuu, kamu adalah segalanya bagiku. I love you more than 3000!",
        "❤️ Di hari spesialmu ini, aku hanya ingin mengatakan bahwa aku sangat mencintaimu Chelsi!",
        "💕 Chelsi, kamu adalah mimpiku yang menjadi nyata. Selamat ulang tahun!",
        "💗 Aku jatuh cinta padamu setiap hari Chelsi. Selamat ulang tahun sayangkuu!"
    ],
    loveQuotes: [
        '"I love you 3000, Chelsi. You\'re my everything"',
        '"Chelsi, you are the light of my life"',
        '"My love for you grows stronger every day"',
        '"You are my one and only, Chelsi"',
        '"With you, my world is complete"',
        '"I love you more than words can say"'
    ]
};

/* ============================================
   DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('💖 Happy Birthday Chelsi Putri Rahmadani!');
    console.log('🎂 Usia: 17 tahun');
    console.log('📅 27 Oktober 2026');
    
    /* ===== SET DATA ===== */
    const namaElement = document.getElementById('namaSpesial');
    const pesanElement = document.getElementById('pesanUcapan');
    const ageElement = document.getElementById('ageDisplay');
    
    if (namaElement) namaElement.textContent = CONFIG.namaSpesial;
    if (pesanElement) pesanElement.textContent = CONFIG.pesanUcapan;
    if (ageElement) ageElement.textContent = CONFIG.usia;

    /* ===== COUNTDOWN ===== */
    function updateCountdown() {
        const targetDate = new Date(CONFIG.tanggalUlangTahun).getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

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

    /* ===== MUSIC ===== */
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
                    if (musicBtnText) musicBtnText.textContent = '⏸ Jeda Lagu';
                    showNotification('🎵 "I Love You 3000" diputar untuk Chelsi! 💕');
                    fireLoveConfetti();
                })
                .catch(function(error) {
                    showNotification('💖 Klik lagi untuk memutar lagu!');
                    document.addEventListener('click', function playOnClick() {
                        audio.play().catch(function() {});
                        document.removeEventListener('click', playOnClick);
                    }, { once: true });
                });
        } else {
            audio.pause();
            isMusicPlaying = false;
            if (musicBtnText) musicBtnText.textContent = '🎵 Putar Lagu';
            showNotification('⏸️ Musik dijeda, tapi cintaku tetap menyala! ❤️');
        }
    };

    /* ===== SURPRISE ===== */
    window.showSurprise = function() {
        const popup = document.getElementById('surprisePopup');
        const surpriseMessage = document.getElementById('surpriseMessage');
        const loveQuoteElement = document.getElementById('loveQuote');
        
        if (!popup) return;
        
        const randomIndex = Math.floor(Math.random() * CONFIG.pesanKejutan.length);
        const randomMessage = CONFIG.pesanKejutan[randomIndex];
        
        const quoteIndex = Math.floor(Math.random() * CONFIG.loveQuotes.length);
        const randomQuote = CONFIG.loveQuotes[quoteIndex];
        
        if (surpriseMessage) surpriseMessage.textContent = randomMessage;
        if (loveQuoteElement) loveQuoteElement.textContent = randomQuote;
        
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Massive confetti
        for (let i = 0; i < 15; i++) {
            setTimeout(function() { 
                fireLoveConfetti(); 
            }, i * 200);
        }
        
        showNotification('💖 Kejutan cinta untuk Chelsi! Semoga kamu suka sayang! 💕');
    };

    /* ===== CLOSE SURPRISE ===== */
    window.closeSurprise = function() {
        const popup = document.getElementById('surprisePopup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
        showNotification('💝 Aku selalu mencintaimu Chelsi! 💝');
    };

    /* ===== CONFETTI ===== */
    function fireLoveConfetti() {
        if (typeof confetti !== 'function') return;
        
        const colors = ['#FF1493', '#FF69B4', '#FFD700', '#FF0040', '#FF6B6B', '#FFB6C1', '#FFE4E1', '#FF4500'];
        
        try {
            confetti({
                particleCount: 120,
                spread: 100,
                origin: { y: 0.6 },
                colors: colors,
                startVelocity: 40,
                gravity: 0.6,
                scalar: 1.4
            });
            
            setTimeout(function() {
                confetti({
                    particleCount: 60,
                    spread: 70,
                    origin: { y: 0.4 },
                    colors: ['#FF1493', '#FFD700', '#FF69B4'],
                    startVelocity: 30,
                    gravity: 0.4
                });
            }, 150);
            
            setTimeout(function() {
                confetti({
                    particleCount: 40,
                    spread: 60,
                    origin: { y: 0.7 },
                    colors: ['#FF0040', '#FFD700', '#FF1493'],
                    startVelocity: 25,
                    gravity: 0.5
                });
            }, 300);
        } catch(e) {}
    }

    /* ===== NOTIFICATION ===== */
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
                if (notification.parentNode) notification.remove();
            }, 500);
        }, 4000);
    }

    /* ===== AUTO CONFETTI ===== */
    setTimeout(function() {
        fireLoveConfetti();
        setTimeout(function() { fireLoveConfetti(); }, 500);
        setTimeout(function() { fireLoveConfetti(); }, 1000);
        setTimeout(function() { fireLoveConfetti(); }, 1500);
        setTimeout(function() { fireLoveConfetti(); }, 2000);
    }, 500);
    
    /* ===== AUTO MUSIC ===== */
    document.addEventListener('click', function initAudio() {
        if (audio) audio.play().catch(function() {});
        document.removeEventListener('click', initAudio);
    }, { once: true });
    
    /* ===== CHECK BIRTHDAY ===== */
    function checkBirthdayToday() {
        const today = new Date();
        const birthday = new Date(CONFIG.tanggalUlangTahun);
        
        if (today.getMonth() === birthday.getMonth() && 
            today.getDate() === birthday.getDate()) {
            showNotification('🎂 Selamat ulang tahun Chelsi Putri Rahmadani! Hari ini adalah harimu! 💕');
            for (let i = 0; i < 15; i++) {
                setTimeout(function() { fireLoveConfetti(); }, i * 400);
            }
        }
    }
    checkBirthdayToday();

    /* ===== KEYBOARD ===== */
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ' || e.key === 'Space') {
            e.preventDefault();
            window.playMusic();
        }
        if (e.key === 'Enter') {
            window.showSurprise();
        }
        if (e.key === 'Escape') {
            window.closeSurprise();
        }
    });

    console.log('💖 Website untuk Chelsi Putri Rahmadani siap!');
    console.log('🎵 Lagu: I Love You 3000');
    console.log('🎂 Usia: 17 tahun');
    console.log('📅 27 Oktober 2026');
});
