function toggleProof() {
    const proofDiv = document.getElementById('proof-reveal');
    if (!proofDiv) {
        return;
    }
    proofDiv.style.display = proofDiv.style.display === 'block' ? 'none' : 'block';
}

function toggleTheoremProof() {
    const theoremProofDiv = document.getElementById('theorem-proof-reveal');
    if (!theoremProofDiv) {
        return;
    }
    theoremProofDiv.style.display = theoremProofDiv.style.display === 'block' ? 'none' : 'block';
}

const toggleProofBtn = document.getElementById('toggle-proof-btn');
if (toggleProofBtn) {
    toggleProofBtn.addEventListener('click', toggleProof);
}

const toggleTheoremProofBtn = document.getElementById('toggle-theorem-proof-btn');
if (toggleTheoremProofBtn) {
    toggleTheoremProofBtn.addEventListener('click', toggleTheoremProof);
}

if (typeof gsap !== 'undefined') {
    if (document.querySelector('.gsap-anim')) {
        gsap.from('.gsap-anim', {
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.2
        });
    }

    if (document.querySelector('.gsap-fade')) {
        gsap.from('.gsap-fade', {
            scrollTrigger: { trigger: '.gsap-fade', start: 'top 85%' },
            y: 20,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out'
        });
    }

    if (document.querySelector('.card') && document.querySelector('.grid')) {
        gsap.to('.card', {
            scrollTrigger: { trigger: '.grid', start: 'top 80%' },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }

    if (document.querySelector('.potw')) {
        gsap.to('.potw', {
            scrollTrigger: { trigger: '.potw', start: 'top 85%' },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });
    }

    if (document.querySelector('.tow')) {
        gsap.to('.tow', {
            scrollTrigger: { trigger: '.tow', start: 'top 85%' },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });
    }
}
