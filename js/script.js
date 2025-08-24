/*
 * Script for Debater Battle Arena
 * Handles navigation, search, and dynamic content loading
 * --------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {

    // Debaters Data
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

    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const closeNav = document.querySelector('.close-nav');

    navToggle.addEventListener('click', () => {
        mobileNavMenu.classList.add('active');
    });

    closeNav.addEventListener('click', () => {
        mobileNavMenu.classList.remove('active');
    });

    // Search Functionality
    const searchInputs = document.querySelectorAll('#searchInput, #searchInputMobile');
    const searchButtons = document.querySelectorAll('#searchButton, #searchButtonMobile');

    const performSearch = (input) => {
        const query = input.value.trim().toUpperCase();
        if (debatersData[query]) {
            window.location.href = `debaters.html?debater=${query}`;
        } else {
            alert(`Debater "${query}" not found.`);
        }
    };

    searchButtons.forEach((button, index) => {
        button.addEventListener('click', () => performSearch(searchInputs[index]));
    });

    searchInputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch(input);
            }
        });
    });

    // Debater Profile View (on debaters.html)
    if (window.location.pathname.includes('debaters.html')) {
        const debaterLinks = document.querySelectorAll('.debater-link');
        const debaterListSection = document.getElementById('debaterListSection');
        const debaterProfileSection = document.getElementById('debaterProfileSection');

        const updateProfileView = (debaterName) => {
            const debater = debatersData[debaterName.toUpperCase()];
            if (debater) {
                document.getElementById('profileName').textContent = debaterName;
                document.getElementById('profileCountry').textContent = debater.country;
                document.getElementById('profileCountryFlag').textContent = debater.flag;
                document.getElementById('profileRecord').textContent = debater.record;

                const profileStatusElement = document.getElementById('profileStatus');
                profileStatusElement.textContent = debater.status;
                profileStatusElement.classList.remove('active', 'inactive');
                profileStatusElement.classList.add(debater.status.toLowerCase());
                
                const profileImage = document.getElementById('profileImage');
                profileImage.src = debater.image || 'assets/images/default.jpeg';
                profileImage.alt = `${debaterName} Profile Image`;

                const historyList = document.getElementById('matchHistory');
                historyList.innerHTML = '';
                if (debater.history.length > 0) {
                    debater.history.forEach(match => {
                        const li = document.createElement('li');
                        li.textContent = match;
                        historyList.appendChild(li);
                    });
                } else {
                    historyList.innerHTML = '<li>No match history available.</li>';
                }

                debaterListSection.style.display = 'none';
                debaterProfileSection.style.display = 'block';
            }
        };

        const urlParams = new URLSearchParams(window.location.search);
        const debaterQuery = urlParams.get('debater');

        if (debaterQuery) {
            updateProfileView(debaterQuery);
        }

        debaterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const debaterName = e.target.getAttribute('data-debater');
                updateProfileView(debaterName);
                history.pushState(null, '', `debaters.html?debater=${encodeURIComponent(debaterName)}`);
            });
        });
    }
});
