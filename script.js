/* ============================================
   CONFIGURATION - EDIT THIS SECTION
   ============================================ */
const CONFIG = {
    namaSpesial: "Sayangku ❤️",
    tanggalUlangTahun: "2026-08-10T00:00:00",
    usia: 22,
    pesanUcapan: "Di hari spesial ini, aku ingin kamu tahu betapa berartinya kamu bagiku. Setiap detik bersamamu adalah hadiah terindah. Aku akan selalu memperlakukanmu lebih baik dari siapapun. Semoga semua impianmu menjadi kenyataan. I love you more than anything! 💕",
    pesanKejutan: [
        "💖 Kamu adalah cinta sejatiku, satu-satunya yang membuat hatiku bergetar setiap hari. Aku janji akan selalu memperlakukanmu lebih baik!",
        "💝 Setiap hari bersamamu adalah anugerah. Aku akan selalu menjagamu dan mencintaimu dengan sepenuh hati!",
        "❤️ Kamu adalah alasan aku tersenyum setiap pagi. Aku berjanji akan selalu membuatmu bahagia!",
        "💕 Cintaku padamu seperti bintang di langit, tak terhitung dan abadi. Aku akan selalu ada untukmu!",
        "💗 Kamu adalah mimpiku yang menjadi nyata. Aku akan selalu memperlakukanmu seperti ratu!",
        "💖 Tanpa kamu, hidupku terasa kosong. Aku berjanji akan selalu mencintaimu lebih dari siapapun!",
        "💝 Cinta kita adalah kisah yang tak akan pernah usang. Aku akan selalu setia padamu!",
        "❤️ Kamu adalah rumah bagi hatiku. Aku akan selalu melindungi dan mencintaimu!",
        "💕 Aku janji akan selalu ada untukmu, dalam suka maupun duka. Selamat ulang tahun cintaku!",
        "💗 Aku jatuh cinta padamu setiap hari, lagi dan lagi. Aku akan selalu memperlakukanmu lebih baik!"
    ],
    loveQuotes: [
        '"I promise I\'ll treat you better than anyone ever has"',
        '"You deserve someone who loves you the way I do"',
        '"I\'ll be the one who treats you right"',
        '"You\'re the only one I see, the only one I need"',
        '"I\'ll give you the love you deserve"',
        '"You are my everything, my one and only"'
    ]
};

/* ============================================
   WAIT FOR DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✅ Website loaded!');
    
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
            console.log('Countdown elements not found');
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

    // Jalankan countdown setiap 1 detik (1000ms)
    updateCountdown();
    setInterval(updateCountdown, 1000);
    console.log('✅ Countdown running every 1 second');

    /* ============================================
       MUSIC PLAYER - TREAT YOU BETTER
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
                    if (musicBtnText) musicBtnText.textContent = '⏸ Jeda Musik';
                    showNotification('🎵 "Treat You Better" diputar! Nikmati setiap nadanya! 💕');
                    fireLoveConfetti();
                })
                .catch(function(error) {
                    console.log('Audio play error:', error);
                    showNotification('💖 Klik lagi untuk memutar musik!');
                    // Try one more time with user interaction
                    document.addEventListener('click', function playOnClick() {
                        audio.play().catch(function() {});
                        document.removeEventListener('click', playOnClick);
                    }, { once: true });
                });
        } else {
            audio.pause();
            isMusicPlaying = false;
            if (musicBtnText) musicBtnText.textContent = '▶ Putar Musik';
            showNotification('⏸️ Musik dijeda, tapi cintaku tetap menyala! ❤️');
        }
    };

    /* ============================================
       SURPRISE LOVE FUNCTION - FIXED
       ============================================ */
    window.showSurprise = function() {
        console.log('💖 Surprise button clicked!');
        
        const popup = document.getElementById('surprisePopup');
        const surpriseMessage = document.getElementById('surpriseMessage');
        const loveQuoteElement = document.getElementById('loveQuote');
        
        if (!popup) {
            console.error('❌ Popup not found!');
            return;
        }
        
        // Random pesan cinta
        const randomIndex = Math.floor(Math.random() * CONFIG.pesanKejutan.length);
        const randomMessage = CONFIG.pesanKejutan[randomIndex];
        
        // Random love quote
        const quoteIndex = Math.floor(Math.random() * CONFIG.loveQuotes.length);
        const randomQuote = CONFIG.loveQuotes[quoteIndex];
        
        console.log('📝 Random message:', randomMessage);
        console.log('📝 Random quote:', randomQuote);
        
        if (surpriseMessage) surpriseMessage.textContent = randomMessage;
        if (loveQuoteElement) loveQuoteElement.textContent = randomQuote;
        
        // TAMPILKAN POPUP
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('✅ Popup displayed');
        
        // Fire love confetti
        fireLoveConfetti();
        setTimeout(function() { fireLoveConfetti(); }, 300);
        setTimeout(function() { fireLoveConfetti(); }, 600);
        setTimeout(function() { fireLoveConfetti(); }, 900);
        setTimeout(function() { fireLoveConfetti(); }, 1200);
        
        showNotification('💖 Kejutan cinta untuk kamu! Semoga kamu suka! 💕');
    };

    /* ============================================
       CLOSE SURPRISE - FIXED
       ============================================ */
    window.closeSurprise = function() {
        const popup = document.getElementById('surprisePopup');
        if (popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
            console.log('✅ Popup closed');
        }
        showNotification('💝 Aku selalu mencintaimu! 💝');
    };

    /* ============================================
       LOVE CONFETTI EFFECT
       ============================================ */
    function fireLoveConfetti() {
        if (typeof confetti !== 'function') {
            console.log('⚠️ Confetti library not loaded yet');
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
       AUTO CONFETTI & MUSIC
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
            showNotification('🎂 Selamat ulang tahun cintaku! Hari ini adalah harimu! 💕');
            setTimeout(function() { fireLoveConfetti(); }, 1000);
            setTimeout(function() { fireLoveConfetti(); }, 2000);
            setTimeout(function() { fireLoveConfetti(); }, 3000);
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

    console.log('🎵 Music: Treat You Better');
    console.log('💖 Surprise: Ready!');
    console.log('⏰ Countdown: Running every second');

});
