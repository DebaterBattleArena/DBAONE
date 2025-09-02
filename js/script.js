document.addEventListener('DOMContentLoaded', () => {
    // --- Bagian Navigasi Mobile (Dipertahankan dan Dioptimalkan) ---
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.getElementById('mobileNavMenu');
    const closeNavButton = document.querySelector('.close-nav');

    if (navToggle && mobileNav && closeNavButton) {
        // Fungsi untuk toggle menu
        const toggleMobileNav = () => {
            mobileNav.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        };

        navToggle.addEventListener('click', toggleMobileNav);
        closeNavButton.addEventListener('click', toggleMobileNav);
    }
    // Menggunakan ID yang benar dari HTML: 'mobileNavMenu'
    // Menggunakan tombol close yang benar
    // Menggabungkan logika untuk toggle agar lebih efisien

    // --- Data Debater (Dipertahankan) ---
    const debatersData = {
        'HIROO': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: HIROO vs RENJI: WIN HIROO (Mid tier)'], image: 'assets/images/hiroo.jpeg' },
        'RANZT': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: RANZT vs RYUU: WIN RANZT (Mid tier)'], image: 'assets/images/ranzt.jpeg' },
        'ZOGRATIS': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: ZOGRATIS vs MUCHIBEI: WIN ZOGRATIS (High tier)'], image: 'assets/images/zogratis.jpeg' },
        'PRATAMA': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: THE MOON FIGHT: AHENG vs PRATAMA: WIN PRATAMA (High tier)'], image: 'assets/images/pratama.jpeg' },
        'AHENG': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-1-0', history: ['DBA 1: THE MOON FIGHT: AHENG vs PRATAMA: WIN PRATAMA (High tier)'], image: 'assets/images/aheng.jpeg' },
        'ARYANWT': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-1-0', history: ['DBA 1: ARYANWT vs RIM: WIN ARYANWT (Low tier)', 'DBA 1: THE MOON FIGHT: ARYANWT vs AARON: WIN AARON (High tier)'], image: 'assets/images/aryanwt.jpeg' },
        'THINZEL': { country: 'INDONESIA', flag: '🇮🇩', status: 'INACTIVE', record: '0-1-0', history: ['DBA 1: THINZEL vs SHADE: WIN THINZEL (Low tier)'], image: 'assets/images/thinzel.jpeg' },
        'LIANX': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: LIANX vs ADYY: WIN LIANX (High tier)'], image: 'assets/images/lianx.jpeg' },
        'VALEN': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/valen.jpeg' },
        'KUREJI': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/kureji.jpeg' },
        'KARIZ': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/kariz.jpeg' },
        'FARRAS': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/farras.jpeg' },
        'YULZ CLOVER': { country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', history: ['DBA SPECIAL MATCH: YULZ CLOVER vs KAZZ: WIN YULZ'], image: 'assets/images/yulz_clover.jpeg' },
        'ADYY': { country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-1-0', history: ['DBA 1: LIANX vs ADYY: WIN LIANX (High tier)', 'DBA 1: THE MOON FIGHT: ADYY vs ZOGRATIS: WIN ADYY (High tier)'], image: 'assets/images/adyy.jpeg' },
        'RYUU': { country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-1-0', history: ['DBA 1: RANZT vs RYUU: WIN RANZT (Mid tier)', 'DBA 1: THE MOON FIGHT: RAJU vs RYUU: WIN RYUU (High tier)'], image: 'assets/images/ryuu.jpeg' },
        'MUCHIBEI': { country: 'MALAYSIA', flag: '🇲🇾', status: 'INACTIVE', record: '0-1-0', history: ['DBA 1: ZOGRATIS vs MUCHIBEI: WIN ZOGRATIS (High tier)'], image: 'assets/images/muchibei.jpeg' },
        'RENJI': { country: 'MALAYSIA', flag: '🇲🇾', status: 'INACTIVE', record: '0-1-0', history: ['DBA 1: HIROO vs RENJI: WIN HIROO (Mid tier)'], image: 'assets/images/renji.jpeg' },
        'RIM': { country: 'MALAYSIA', flag: '🇲🇾', status: 'INACTIVE', record: '0-1-0', history: ['DBA 1: ARYANWT vs RIM: WIN ARYANWT (Low tier)'], image: 'assets/images/rim.jpeg' },
        'SHADE': { country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-1-0', history: ['DBA 1: THINZEL vs SHADE: WIN SHADE (Low tier)', 'DBA 1: THE MOON FIGHT: SHADE vs KYUKI: WIN KYUKI (High tier)'], image: 'assets/images/shade.jpeg' },
        'KYUKI': { country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: THE MOON FIGHT: SHADE vs KYUKI: WIN KYUKI (High tier)'], image: 'assets/images/kyuki.jpeg' },
        'KLEIN': { country: 'VIETNAM', flag: '🇻🇳', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/klein.jpeg' },
        'KAZZ': { country: 'PHILIPPINES', flag: '🇵🇭', status: 'ACTIVE', record: '0-1-0', history: ['DBA SPECIAL MATCH: YULZ CLOVER vs KAZZ: WIN YULZ'], image: 'assets/images/kazz.jpeg' },
        'AARON': { country: 'MEXICO', flag: '🇲🇽', status: 'ACTIVE', record: '1-0-0', history: ['DBA 1: THE MOON FIGHT: ARYANWT vs AARON: WIN AARON (High tier)'], image: 'assets/images/aaron.jpeg' },
        'XAVIER': { country: 'BRAZIL', flag: '🇧🇷', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/xavier.jpeg' },
        'MIKAEL': { country: 'BRAZIL', flag: '🇧🇷', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/mikael.jpeg' },
        'RABBITTO': { country: 'CANADA', flag: '🇨🇦', status: 'INACTIVE', record: '0-0-0', history: [], image: 'assets/images/rabbitto.jpeg' },
        'HYRUKI': { country: 'ITALY', flag: '🇮🇹', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/hyruki.jpeg' },
        'LARNEX': { country: 'FRANCE', flag: '🇫🇷', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/larnex.jpeg' },
        'IULIAN': { country: 'ROMANIA', flag: '🇷🇴', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/iulian.jpeg' },
        'HOMURA KIN': { country: 'RUSSIA', flag: '🇷🇺', status: 'ACTIVE', record: '0-0-0', history: [], image: 'assets/images/homura_kin.jpeg' },
    };

    // --- Bagian Pencarian (Dipertahankan dan Dioptimalkan) ---
    const searchInputs = document.querySelectorAll('#searchInput, #searchInputMobile');
    const performSearch = (query) => {
        const normalizedQuery = query.trim().toUpperCase();
        const foundDebater = Object.keys(debatersData).find(key => key.includes(normalizedQuery));

        if (foundDebater) {
            window.location.href = `debaters.html?debater=${encodeURIComponent(foundDebater)}`;
        } else {
            alert(`Debater "${query}" not found. Please try a different name.`);
        }
    };

    // Tambahkan event listener untuk kedua input dan tombol pencarian
    searchInputs.forEach(input => {
        const button = document.getElementById(input.id.replace('Input', 'Button'));

        if (button) {
            button.addEventListener('click', () => performSearch(input.value));
        }

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch(input.value);
            }
        });
    });

    // --- Logika Halaman Debaters (Dipindahkan ke dalam fungsi terpisah) ---
    const initializeDebatersPage = () => {
        const debaterProfileSection = document.getElementById('debaterProfileSection');
        const debaterListSection = document.getElementById('debaterListSection');

        const updateProfileView = (debaterName) => {
            const debater = debatersData[debaterName.toUpperCase()];
            if (!debater) {
                console.error('Debater not found in data:', debaterName);
                if (debaterListSection) {
                    debaterListSection.style.display = 'block';
                }
                if (debaterProfileSection) {
                    debaterProfileSection.style.display = 'none';
                }
                return;
            }
            const { country, flag, status, record, history, image } = debater;
            document.getElementById('profileName').textContent = debaterName;
            document.getElementById('profileCountry').textContent = country;
            document.getElementById('profileCountryFlag').textContent = flag;
            document.getElementById('profileRecord').textContent = record;

            const profileStatusElement = document.getElementById('profileStatus');
            profileStatusElement.textContent = status;
            profileStatusElement.className = '';
            profileStatusElement.classList.add(status.toLowerCase());

            const profileImage = document.getElementById('profileImage');
            profileImage.src = image || 'assets/images/default.jpeg';
            profileImage.alt = `${debaterName} Profile Image`;

            const historyList = document.getElementById('matchHistory');
            historyList.innerHTML = '';
            if (history.length > 0) {
                history.forEach(match => {
                    const li = document.createElement('li');
                    li.textContent = match;
                    historyList.appendChild(li);
                });
            } else {
                historyList.innerHTML = '<li>No match history available.</li>';
            }

            if (debaterListSection) {
                debaterListSection.style.display = 'none';
            }
            if (debaterProfileSection) {
                debaterProfileSection.style.display = 'block';
            }
        };

        const urlParams = new URLSearchParams(window.location.search);
        const debaterQuery = urlParams.get('debater');
        if (debaterQuery) {
            updateProfileView(decodeURIComponent(debaterQuery));
        }

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.addEventListener('click', (e) => {
                const debaterLink = e.target.closest('.debater-link');
                if (debaterLink) {
                    e.preventDefault();
                    const debaterName = debaterLink.dataset.debater;
                    updateProfileView(debaterName);
                    history.pushState(null, '', `debaters.html?debater=${encodeURIComponent(debaterName)}`);
                }
            });
        }
    };

    // --- Inisialisasi Berdasarkan Halaman ---
    if (window.location.pathname.includes('debaters.html')) {
        initializeDebatersPage();
    }
});
