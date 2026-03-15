gsap.from('.gsap-fade', {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 0.1
});

gsap.to('.card', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.3
});

if (typeof window.initializeArchiveFilter === 'function') {
    window.initializeArchiveFilter({ enterY: 15, enterDuration: 0.4 });
}
