if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const logoImage = document.querySelector('.logo-img');
if (logoImage) {
    logoImage.addEventListener('error', () => {
        logoImage.style.display = 'none';
    });
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