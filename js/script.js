/*
 * Script for Debater Battle Arena
 * Handles navigation, search, and dynamic content loading
 * --------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {

    // Debaters Data - Expanded with more details
    const debatersData = {
        'HIROO': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', age: '24', team: 'DBA Official',
            image: 'assets/images/hiroo.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'RENJI', result: 'WIN', tier: 'Mid Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/renji.jpeg' }
            ]
        },
        'RANZT': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', age: '26', team: 'DBA Official',
            image: 'assets/images/ranzt.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'RYUU', result: 'WIN', tier: 'Mid Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/ryuu.jpeg' }
            ]
        },
        'ZOGRATIS': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', age: '25', team: 'DBA Official',
            image: 'assets/images/zogratis.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'MUCHIBEI', result: 'WIN', tier: 'High Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/muchibei.jpeg' }
            ]
        },
        'PRATAMA': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', age: '28', team: 'DBA Official',
            image: 'assets/images/pratama.jpeg',
            history: [
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'AHENG', result: 'WIN', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/aheng.jpeg' }
            ]
        },
        'AHENG': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-1-0', age: '29', team: 'DBA Official',
            image: 'assets/images/aheng.jpeg',
            history: [
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'PRATAMA', result: 'LOSS', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/pratama.jpeg' }
            ]
        },
        'ARYANWT': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-1-0', age: '22', team: 'DBA Official',
            image: 'assets/images/aryanwt.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'RIM', result: 'WIN', tier: 'Low Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/rim.jpeg' },
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'AARON', result: 'LOSS', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/aaron.jpeg' }
            ]
        },
        'THINZEL': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'INACTIVE', record: '0-1-0', age: '27', team: 'Ex-DBA',
            image: 'assets/images/thinzel.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'SHADE', result: 'LOSS', tier: 'Low Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/shade.jpeg' }
            ]
        },
        'LIANX': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', age: '30', team: 'DBA Official',
            image: 'assets/images/lianx.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'ADYY', result: 'WIN', tier: 'High Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/adyy.jpeg' }
            ]
        },
        'VALEN': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', age: '23', team: 'DBA Official',
            image: 'assets/images/valen.jpeg',
            history: []
        },
        'KUREJI': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', age: '24', team: 'DBA Official',
            image: 'assets/images/kureji.jpeg',
            history: []
        },
        'KARIZ': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', age: '26', team: 'DBA Official',
            image: 'assets/images/kariz.jpeg',
            history: []
        },
        'FARRAS': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '0-0-0', age: '21', team: 'DBA Official',
            image: 'assets/images/farras.jpeg',
            history: []
        },
        'YULZ CLOVER': {
            country: 'INDONESIA', flag: '🇮🇩', status: 'ACTIVE', record: '1-0-0', age: '28', team: 'DBA Official',
            image: 'assets/images/yulz_clover.jpeg',
            history: [
                { event: 'DBA SPECIAL MATCH', opponent: 'KAZZ', result: 'WIN', tier: 'Mid Tier', date: 'Mar 10, 2025', opponentImage: 'assets/images/kazz.jpeg' }
            ]
        },
        'ADYY': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-1-0', age: '25', team: 'DBA Official',
            image: 'assets/images/adyy.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'LIANX', result: 'LOSS', tier: 'High Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/lianx.jpeg' },
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'ZOGRATIS', result: 'WIN', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/zogratis.jpeg' }
            ]
        },
        'RYUU': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-1-0', age: '23', team: 'DBA Official',
            image: 'assets/images/ryuu.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'RANZT', result: 'LOSS', tier: 'Mid Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/ranzt.jpeg' },
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'RAJU', result: 'WIN', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/default.jpeg' }
            ]
        },
        'MUCHIBEI': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'INACTIVE', record: '0-1-0', age: '26', team: 'Ex-DBA',
            image: 'assets/images/muchibei.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'ZOGRATIS', result: 'LOSS', tier: 'High Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/zogratis.jpeg' }
            ]
        },
        'RENJI': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'INACTIVE', record: '0-1-0', age: '28', team: 'Ex-DBA',
            image: 'assets/images/renji.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'HIROO', result: 'LOSS', tier: 'Mid Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/hiroo.jpeg' }
            ]
        },
        'RIM': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'INACTIVE', record: '0-1-0', age: '22', team: 'Ex-DBA',
            image: 'assets/images/rim.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'ARYANWT', result: 'LOSS', tier: 'Low Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/aryanwt.jpeg' }
            ]
        },
        'SHADE': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-1-0', age: '24', team: 'DBA Official',
            image: 'assets/images/shade.jpeg',
            history: [
                { event: 'DBA 1', opponent: 'THINZEL', result: 'WIN', tier: 'Low Tier', date: 'Jan 20, 2025', opponentImage: 'assets/images/thinzel.jpeg' },
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'KYUKI', result: 'LOSS', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/kyuki.jpeg' }
            ]
        },
        'KYUKI': {
            country: 'MALAYSIA', flag: '🇲🇾', status: 'ACTIVE', record: '1-0-0', age: '27', team: 'DBA Official',
            image: 'assets/images/kyuki.jpeg',
            history: [
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'SHADE', result: 'WIN', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/shade.jpeg' }
            ]
        },
        'KLEIN': {
            country: 'VIETNAM', flag: '🇻🇳', status: 'ACTIVE', record: '0-0-0', age: '24', team: 'DBA Official',
            image: 'assets/images/klein.jpeg',
            history: []
        },
        'KAZZ': {
            country: 'PHILIPPINES', flag: '🇵🇭', status: 'ACTIVE', record: '0-1-0', age: '25', team: 'DBA Official',
            image: 'assets/images/kazz.jpeg',
            history: [
                { event: 'DBA SPECIAL MATCH', opponent: 'YULZ CLOVER', result: 'LOSS', tier: 'Mid Tier', date: 'Mar 10, 2025', opponentImage: 'assets/images/yulz_clover.jpeg' }
            ]
        },
        'AARON': {
            country: 'MEXICO', flag: '🇲🇽', status: 'ACTIVE', record: '1-0-0', age: '29', team: 'DBA Official',
            image: 'assets/images/aaron.jpeg',
            history: [
                { event: 'DBA 1: THE MOON FIGHT', opponent: 'ARYANWT', result: 'WIN', tier: 'High Tier', date: 'Feb 15, 2025', opponentImage: 'assets/images/aryanwt.jpeg' }
            ]
        },
        'XAVIER': {
            country: 'BRAZIL', flag: '🇧🇷', status: 'ACTIVE', record: '0-0-0', age: '26', team: 'DBA Official',
            image: 'assets/images/xavier.jpeg',
            history: []
        },
        'MIKAEL': {
            country: 'BRAZIL', flag: '🇧🇷', status: 'ACTIVE', record: '0-0-0', age: '25', team: 'DBA Official',
            image: 'assets/images/mikael.jpeg',
            history: []
        },
        'RABBITTO': {
            country: 'CANADA', flag: '🇨🇦', status: 'INACTIVE', record: '0-0-0', age: '30', team: 'Ex-DBA',
            image: 'assets/images/rabbitto.jpeg',
            history: []
        },
        'HYRUKI': {
            country: 'ITALY', flag: '🇮🇹', status: 'ACTIVE', record: '0-0-0', age: '27', team: 'DBA Official',
            image: 'assets/images/hyruki.jpeg',
            history: []
        },
        'LARNEX': {
            country: 'FRANCE', flag: '🇫🇷', status: 'ACTIVE', record: '0-0-0', age: '29', team: 'DBA Official',
            image: 'assets/images/larnex.jpeg',
            history: []
        },
        'IULIAN': {
            country: 'ROMANIA', flag: '🇷🇴', status: 'ACTIVE', record: '0-0-0', age: '26', team: 'DBA Official',
            image: 'assets/images/iulian.jpeg',
            history: []
        },
        'HOMURA KIN': {
            country: 'RUSSIA', flag: '🇷🇺', status: 'ACTIVE', record: '0-0-0', age: '23', team: 'DBA Official',
            image: 'assets/images/homura_kin.jpeg',
            history: []
        }
    };

    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const closeNav = document.querySelector('.close-nav');

    if (navToggle && mobileNavMenu && closeNav) {
        navToggle.addEventListener('click', () => {
            mobileNavMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeNav.addEventListener('click', () => {
            mobileNavMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Search Functionality
    const searchInputs = document.querySelectorAll('#searchInput, #searchInputMobile');
    const searchButtons = document.querySelectorAll('#searchButton, #searchButtonMobile');

    const performSearch = (input) => {
        const query = input.value.trim().toUpperCase();
        if (debatersData[query]) {
            window.location.href = `debaters.html?debater=${encodeURIComponent(query)}`;
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
                e.preventDefault();
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
                document.getElementById('profileCountry').textContent = `${debater.country} ${debater.flag}`;
                document.getElementById('profileRecord').textContent = debater.record;
                document.getElementById('profileAge').textContent = debater.age + ' Y';
                document.getElementById('profileTeam').textContent = debater.team || 'N/A';

                const profileStatusElement = document.getElementById('profileStatus');
                profileStatusElement.textContent = debater.status;
                profileStatusElement.className = 'profile-status';
                profileStatusElement.classList.add(debater.status.toLowerCase());
                
                const profileImage = document.getElementById('profileImage');
                profileImage.src = debater.image || 'assets/images/default.jpeg';
                profileImage.alt = `${debaterName} Profile Image`;

                const historyList = document.getElementById('matchHistory');
                historyList.innerHTML = '';
                if (debater.history.length > 0) {
                    debater.history.forEach(match => {
                        const li = document.createElement('li');
                        li.className = 'history-item';
                        li.innerHTML = `
                            <img src="${match.opponentImage}" alt="${match.opponent}" class="match-debater-image">
                            <div class="history-content">
                                <span class="history-event-name">${match.event}</span>
                                <div class="history-match-details">
                                    <span class="history-result-badge ${match.result.toLowerCase()}">${match.result}</span>
                                    <span class="history-opponent">${match.opponent}</span>
                                </div>
                            </div>
                            <span class="history-date">${match.date}</span>
                        `;
                        historyList.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.className = 'history-item no-history';
                    li.textContent = 'No match history available.';
                    historyList.appendChild(li);
                }

                debaterListSection.style.display = 'none';
                debaterProfileSection.style.display = 'block';
                window.scrollTo(0, 0); // Scroll to top of the page
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
