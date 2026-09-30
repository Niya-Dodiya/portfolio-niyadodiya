// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Listen for GSAP ticker and run lenis raf
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0, 0);

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, .project-item, .contact-btn');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('active'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Preloader Animation
window.addEventListener('load', () => {
    let count = 0;
    const counterElement = document.querySelector('.counter');
    const preloader = document.querySelector('.preloader');
    
    // Simulate loading progress
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 20) + 1;
        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            
            // GSAP Sequence for revealing page
            const tl = gsap.timeline();
            tl.to(counterElement, {
                opacity: 0,
                y: -50,
                duration: 0.5,
                ease: "power4.inOut"
            })
            .to(preloader, {
                height: 0,
                duration: 1.2,
                ease: "power4.inOut"
            })
            // Reveal Navbar
            .from('nav', {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
            // Reveal Hero Text
            .from('.reveal-text', {
                y: 150,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            }, "-=0.8")
            // Fade in Hero Paragraph
            .from('.fade-up', {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6");
        }
        counterElement.innerText = count + '%';
    }, 100);
});

// SplitType & ScrollTrigger for About Text Reveal
const splitText = new SplitType('.split-text', { types: 'lines, words, chars' });

gsap.fromTo(splitText.chars, 
    { 
        opacity: 0.1
    },
    {
        opacity: 1,
        stagger: 0.05,
        duration: 0.1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 50%',
            end: 'bottom 80%',
            scrub: true,
        }
    }
);

// Parallax for Hero Background
gsap.to('.hero-bg', {
    y: '30%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Image Reveal & Hover logic for Projects
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach((item) => {
    const img = item.querySelector('.project-img');
    
    item.addEventListener('mousemove', (e) => {
        // Move image slightly based on cursor
        const rect = item.getBoundingClientRect();
        // Calculate position relative to viewport
        const xPos = e.clientX;
        const yPos = e.clientY;
        
        gsap.to(img, {
            x: xPos - (window.innerWidth / 2), // centering offset
            y: yPos - (window.innerHeight / 2),
            duration: 0.4,
            ease: "power3.out"
        });
    });
    
    // Reset on mouse leave handled by CSS transitions primarily,
    // but we can ensure GSAP resets any translations 
    item.addEventListener('mouseleave', () => {
        gsap.to(img, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        });
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            lenis.scrollTo(targetElement, {
                offset: -50 // offset for fixed navbar
            });
        }
    });
});
