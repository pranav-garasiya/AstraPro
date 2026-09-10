// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.add('scrolled'); // Always keep slight shadow or adjust as needed
        if(window.scrollY === 0) {
            header.classList.remove('scrolled');
        }
    }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');

mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Change icon
    const icon = mobileBtn.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// How It Works Toggle
function toggleHIW(type) {
    const btns = document.querySelectorAll('.toggle-btn');
    const contents = document.querySelectorAll('.hiw-content');
    
    btns.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });
    
    if (type === 'users') {
        btns[0].classList.add('active');
        document.getElementById('hiw-users').style.display = 'grid';
        setTimeout(() => {
            document.getElementById('hiw-users').classList.add('active');
        }, 50);
    } else {
        btns[1].classList.add('active');
        document.getElementById('hiw-pros').style.display = 'grid';
        setTimeout(() => {
            document.getElementById('hiw-pros').classList.add('active');
        }, 50);
        
        // Handle mobile grid display
        if (window.innerWidth <= 768) {
            document.getElementById('hiw-pros').style.display = 'block';
            document.getElementById('hiw-users').style.display = 'block';
        }
    }
}

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Simple animation observer for elements scrolling into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});
