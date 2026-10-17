// Подсветка активного пункта меню
function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Функция копирования телефона
function setupPhoneCopy() {
    const phoneNumbers = document.querySelectorAll('.phone-number');
    phoneNumbers.forEach(phone => {
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', (e) => {
            const phoneText = phone.textContent.trim();
            navigator.clipboard.writeText(phoneText).then(() => {
                const originalText = phone.innerHTML;
                phone.innerHTML = '✓ Скопировано!';
                setTimeout(() => {
                    phone.innerHTML = originalText;
                }, 1500);
            }).catch(() => {
                alert('Не удалось скопировать');
            });
        });
    });
}

// Случайный факт (для страницы facts.html)
function initRandomFact() {
    const randomFactBtn = document.getElementById('randomFactBtn');
    const randomFactBlock = document.getElementById('randomFactDisplay');
    
    if (randomFactBtn && randomFactBlock) {
        const extraFacts = [
            "Уфа — один из самых зелёных городов-миллионников России, на каждого жителя приходится около 200 м² зелёных насаждений.",
            "В Уфе находится самый длинный мост через реку Белую — \"Мост \"Затонский\", длина которого более 2,5 км.",
            "Уфимский нефтяной университет входит в топ-10 лучших технических вузов страны.",
            "В Уфе родились и выросли такие знаменитости, как Земфира, Юрий Шевчук и Владимир Спиваков.",
            "Башкирский мёд, произведённый в окрестностях Уфы, считается одним из лучших в мире.",
            "Уфа занимает 5-е место в России по площади территории среди городов-миллионников.",
            "В 2024 году Уфа вошла в число лидеров по качеству городской среды среди крупных городов России."
        ];
        
        randomFactBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * extraFacts.length);
            const fact = extraFacts[randomIndex];
            randomFactBlock.innerHTML = `
                <div class="card" style="background: #e8f0fe; border-left: 5px solid var(--secondary-color);">
                    <p>✨ <strong>Знаете ли вы?</strong> ${fact}</p>
                </div>
            `;
        });
    }
}

// Загрузка приветствия и дополнительной информации на главную
function initHomePage() {
    const welcomeMsg = document.getElementById('welcomeMessage');
    if (welcomeMsg) {
        const hours = new Date().getHours();
        let greeting = '';
        if (hours < 12) greeting = 'Доброе утро';
        else if (hours < 18) greeting = 'Добрый день';
        else greeting = 'Добрый вечер';
        welcomeMsg.innerHTML = `${greeting}, дорогой гость! Добро пожаловать в столицу Башкортостана.`;
    }
}

// Запуск всех скриптов после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    setupPhoneCopy();
    initRandomFact();
    initHomePage();
});