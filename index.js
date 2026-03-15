function toggleProof() {
    const proofDiv = document.getElementById('proof-reveal');
    if (!proofDiv) {
        return;
    }
    proofDiv.style.display = proofDiv.style.display === 'block' ? 'none' : 'block';
}

const toggleProofBtn = document.getElementById('toggle-proof-btn');
if (toggleProofBtn) {
    toggleProofBtn.addEventListener('click', toggleProof);
}

gsap.from('.gsap-anim', {
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.gsap-fade', {
    scrollTrigger: { trigger: '.gsap-fade', start: 'top 85%' },
    y: 20,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out'
});

gsap.to('.card', {
    scrollTrigger: { trigger: '.grid', start: 'top 80%' },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

gsap.to('.potw', {
    scrollTrigger: { trigger: '.potw', start: 'top 85%' },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});
