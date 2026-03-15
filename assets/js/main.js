if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isPagesDirectory = window.location.pathname.includes('/pages/');
const basePath = isPagesDirectory ? '../' : '';

const sharedNav = document.querySelector('[data-shared-nav]');
if (sharedNav) {
    sharedNav.innerHTML = `
        <nav>
            <a href="${basePath}index.html" class="brand-container">
                <img src="${basePath}polygon-logo.svg" alt="Polygon Logo" class="logo-img">
                <div class="logo-text-group">
                    <span class="logo-title">Polygon</span>
                    <span class="logo-divider"></span>
                    <span class="logo-subtitle">MathSoc IITG</span>
                </div>
            </a>
            <ul>
                <li><a href="${basePath}index.html" class="nav-link ${currentPage === 'index.html' ? 'active-page' : ''}">Home</a></li>
                <li><a href="${basePath}pages/initiatives.html" class="nav-link ${currentPage === 'initiatives.html' ? 'active-page' : ''}">Initiatives</a></li>
                <li><a href="${basePath}pages/archive.html" class="nav-link ${currentPage === 'archive.html' ? 'active-page' : ''}">Archive</a></li>
            </ul>
        </nav>
    `;
}

const logoImage = document.querySelector('.logo-img');
if (logoImage) {
    logoImage.addEventListener('error', () => {
        logoImage.style.display = 'none';
    });
}

const sharedFooter = document.querySelector('footer[data-shared-footer]');
if (sharedFooter) {
    sharedFooter.innerHTML = `
        <div class="footer-content">
            <div class="footer-brand">
                <img src="${basePath}polygon-logo.svg" alt="Polygon Logo" class="footer-logo">
                <p class="footer-brand-name">Polygon</p>
            </div>
            <div class="footer-info">
                <h3>Contact Us</h3>
                <div class="footer-contact-links">
                    <a href="https://www.instagram.com/mathsoc_iitg" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
                        <span class="footer-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false" role="img">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.25-2.2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                            </svg>
                        </span>
                        <span>instagram.com/mathsoc_iitg</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

window.initializeArchiveFilter = function initializeArchiveFilter(config = {}) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const archiveCards = document.querySelectorAll('.archive-card');

    if (!filterBtns.length || !archiveCards.length) {
        return;
    }

    const enterY = config.enterY ?? 15;
    const enterDuration = config.enterDuration ?? 0.4;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeBtn = document.querySelector('.filter-btn.active');
            if (activeBtn) {
                activeBtn.classList.remove('active');
            }

            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');

            archiveCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const shouldShow = filterValue === 'all' || filterValue === cardCategory;

                if (shouldShow) {
                    card.style.display = 'block';
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(
                            card,
                            { opacity: 0, y: enterY },
                            { opacity: 1, y: 0, duration: enterDuration, ease: 'power2.out' }
                        );
                    }
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
};