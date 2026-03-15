if (typeof gsap !== 'undefined') {
    if (document.querySelector('.gsap-fade')) {
        gsap.from('.gsap-fade', {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.1
        });
    }

    if (document.querySelector('.card')) {
        gsap.to('.card', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            delay: 0.2
        });
    }
}
