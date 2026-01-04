// ============================================
// CONFIGURATION
// ============================================

// ============================================
// THEME CONFIGURATION
// ============================================
// Choose your theme: 'theme1', 'theme2', 'theme3', 'theme4', or 'theme5'
const ACTIVE_THEME = 'theme1';

const THEMES = {
    theme1: {
        name: 'Winter Wonderland',
        bodyClass: 'theme-winter',
        fontFamily: 'Inter',
        primary: '#74c0fc',
        primaryLight: '#a5d8ff',
        primaryDark: '#4dabf7',
        accent: '#22d3ee',
        gradient: 'from-blue-600 via-cyan-600 to-blue-700',
        buttonGradient: 'from-blue-500 to-cyan-500',
        cardStyle: 'rounded-2xl shadow-xl',
        buttonStyle: 'rounded-full',
        headingStyle: 'font-bold',
        effects: 'snowflakes',
        icon: '❄️'
    },
    theme2: {
        name: 'Princess Palace',
        bodyClass: 'theme-princess',
        fontFamily: 'Playfair Display',
        primary: '#faa2c1',
        primaryLight: '#fcc2d7',
        primaryDark: '#f783ac',
        accent: '#fb6f92',
        gradient: 'from-pink-400 via-rose-400 to-pink-500',
        buttonGradient: 'from-pink-400 to-rose-400',
        cardStyle: 'rounded-3xl shadow-2xl ornate-border',
        buttonStyle: 'rounded-full',
        headingStyle: 'font-bold italic',
        effects: 'crowns',
        icon: '👑'
    },
    theme3: {
        name: 'Minimalist Zen',
        bodyClass: 'theme-zen',
        fontFamily: 'Inter',
        primary: '#74c69d',
        primaryLight: '#95d5b2',
        primaryDark: '#52b788',
        accent: '#40916c',
        gradient: 'from-green-400 via-emerald-400 to-green-500',
        buttonGradient: 'from-green-400 to-emerald-400',
        cardStyle: 'rounded-none shadow-sm border-2',
        buttonStyle: 'rounded-none',
        headingStyle: 'font-semibold tracking-wide zen-line',
        effects: 'zen',
        icon: '🎋'
    },
    theme4: {
        name: 'Playful Carnival',
        bodyClass: 'theme-carnival',
        fontFamily: 'Fredoka',
        primary: '#ffd6a5',
        primaryLight: '#ffedcc',
        primaryDark: '#ffbe7c',
        accent: '#ff9e6d',
        gradient: 'from-orange-300 via-amber-300 to-orange-400',
        buttonGradient: 'from-orange-400 to-amber-400',
        cardStyle: 'rounded-3xl chunky-border',
        buttonStyle: 'rounded-full',
        headingStyle: 'font-bold',
        effects: 'confetti',
        icon: '🎪'
    },
    theme5: {
        name: 'Garden Fairy',
        bodyClass: 'theme-fairy',
        fontFamily: 'Pacifico',
        primary: '#bdb2ff',
        primaryLight: '#c8b6ff',
        primaryDark: '#a89fff',
        accent: '#9d8dff',
        gradient: 'from-purple-400 via-violet-400 to-purple-500',
        buttonGradient: 'from-purple-400 to-violet-400',
        cardStyle: 'organic-shape shadow-lg',
        buttonStyle: 'rounded-full',
        headingStyle: 'font-normal',
        effects: 'petals',
        icon: '🌸'
    }
};

// Apply selected theme
function applyTheme() {
    const theme = THEMES[ACTIVE_THEME];
    const root = document.documentElement;
    const colorName = getThemeColorName();
    const body = document.body;
    
    // Remove all theme classes
    body.classList.remove('theme-winter', 'theme-princess', 'theme-zen', 'theme-carnival', 'theme-fairy');
    
    // Add current theme class
    body.classList.add(theme.bodyClass);
    
    // Set font family
    body.style.fontFamily = `'${theme.fontFamily}', sans-serif`;
    
    // Set CSS custom properties
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-primary-light', theme.primaryLight);
    root.style.setProperty('--theme-primary-dark', theme.primaryDark);
    root.style.setProperty('--theme-accent', theme.accent);
    
    // Update all color classes
    updateColorClasses(colorName, theme);
    
    // Update card styles
    updateCardStyles(theme);
    
    // Update button styles
    updateButtonStyles(theme, colorName);
    
    // Update heading styles
    updateHeadingStyles(theme);
    
    // Apply theme-specific effects
    applyThemeEffects(theme);
    
    // Update gradients
    updateGradients(theme);
    
    console.log(`✨ Theme applied: ${theme.name} ${theme.icon}`);
}

function updateColorClasses(colorName, theme) {
    // Update text colors
    document.querySelectorAll('[class*="text-blue-"], [class*="text-pink-"], [class*="text-green-"], [class*="text-orange-"], [class*="text-purple-"]').forEach(el => {
        el.className = el.className.replace(/text-(blue|pink|green|orange|purple)-(\d+)/g, `text-${colorName}-$2`);
    });
    
    // Update background colors
    document.querySelectorAll('[class*="bg-blue-"], [class*="bg-pink-"], [class*="bg-green-"], [class*="bg-orange-"], [class*="bg-purple-"]').forEach(el => {
        el.className = el.className.replace(/bg-(blue|pink|green|orange|purple)-(\d+)/g, `bg-${colorName}-$2`);
    });
    
    // Update border colors
    document.querySelectorAll('[class*="border-blue-"], [class*="border-pink-"], [class*="border-green-"], [class*="border-orange-"], [class*="border-purple-"]').forEach(el => {
        el.className = el.className.replace(/border-(blue|pink|green|orange|purple)-(\d+)/g, `border-${colorName}-$2`);
    });
    
    // Update ring colors
    document.querySelectorAll('[class*="ring-blue-"], [class*="ring-pink-"], [class*="ring-green-"], [class*="ring-orange-"], [class*="ring-purple-"]').forEach(el => {
        el.className = el.className.replace(/ring-(blue|pink|green|orange|purple)-(\d+)/g, `ring-${colorName}-$2`);
    });
    
    // Update focus colors
    document.querySelectorAll('[class*="focus:border-"], [class*="focus:ring-"]').forEach(el => {
        el.className = el.className.replace(/focus:border-(blue|pink|green|orange|purple)-(\d+)/g, `focus:border-${colorName}-$2`);
        el.className = el.className.replace(/focus:ring-(blue|pink|green|orange|purple)-(\d+)/g, `focus:ring-${colorName}-$2`);
    });
    
    // Update hover colors
    document.querySelectorAll('[class*="hover:text-"], [class*="hover:bg-"]').forEach(el => {
        el.className = el.className.replace(/hover:text-(blue|pink|green|orange|purple)-(\d+)/g, `hover:text-${colorName}-$2`);
        el.className = el.className.replace(/hover:bg-(blue|pink|green|orange|purple)-(\d+)/g, `hover:bg-${colorName}-$2`);
    });
}

function updateCardStyles(theme) {
    // Update all card elements
    const cards = document.querySelectorAll('.bg-white\\/80, .bg-white, section > div > div');
    cards.forEach(card => {
        if (card.classList.contains('bg-white') || card.classList.contains('bg-white/80')) {
            // Remove old styles
            card.className = card.className.replace(/rounded-\w+/g, '');
            card.className = card.className.replace(/shadow-\w+/g, '');
            card.className = card.className.replace(/border-\d+/g, '');
            card.className = card.className.replace(/ornate-border|chunky-border|organic-shape/g, '');
            
            // Add theme card style
            card.className += ' ' + theme.cardStyle;
        }
    });
}

function updateButtonStyles(theme, colorName) {
    // Update all buttons
    const buttons = document.querySelectorAll('button, a[class*="bg-gradient"]');
    buttons.forEach(btn => {
        // Remove old rounded styles
        btn.className = btn.className.replace(/rounded-\w+/g, '');
        // Add theme button style
        if (!btn.className.includes('rounded-')) {
            btn.className += ' ' + theme.buttonStyle;
        }
        
        // Update gradient buttons
        if (btn.className.includes('from-')) {
            btn.className = btn.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, theme.buttonGradient);
            btn.className = btn.className.replace(/focus:ring-\w+-\d+/g, `focus:ring-${colorName}-400`);
        }
    });
}

function updateHeadingStyles(theme) {
    // Update all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        // Remove old styles
        heading.className = heading.className.replace(/font-\w+|tracking-\w+|italic|zen-line/g, '');
        // Add theme heading style
        heading.className += ' ' + theme.headingStyle;
    });
}

function updateGradients(theme) {
    // Update hero overlay gradient
    const heroOverlay = document.querySelector('#home .absolute.inset-0');
    if (heroOverlay) {
        const gradientParts = theme.gradient.split(' ');
        const colorBase = gradientParts[0].split('-')[1]; // e.g., 'blue' from 'from-blue-600'
        heroOverlay.className = heroOverlay.className.replace(
            /from-\w+-\d+\/\d+\s+via-\w+-\d+\/\d+\s+to-\w+-\d+\/\d+/,
            `from-${colorBase}-600/60 via-${colorBase}-600/55 to-${colorBase}-700/65`
        );
    }
    
    // Update countdown boxes
    const countdownBoxes = document.querySelectorAll('#countdown > div > div');
    countdownBoxes.forEach((box, index) => {
        box.className = box.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, theme.buttonGradient);
    });
}

function applyThemeEffects(theme) {
    // Clear existing effects
    document.querySelectorAll('.snowflake, .confetti, .petal').forEach(el => el.remove());
    
    // Apply theme-specific effects
    switch(theme.effects) {
        case 'snowflakes':
            initWinterEffects();
            break;
        case 'confetti':
            initConfettiEffect();
            break;
        case 'petals':
            initPetalEffect();
            break;
        case 'crowns':
            // Princess crowns handled by CSS
            break;
        case 'zen':
            // Minimalist - no effects
            break;
    }
}

function initConfettiEffect() {
    const colors = ['#ffd6a5', '#ffbe7c', '#ff9e6d', '#ffedcc'];
    setInterval(() => {
        if (document.querySelectorAll('.confetti').length < 15) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    }, 300);
}

function initPetalEffect() {
    const petals = ['🌸', '🌺', '🌼', '🌷'];
    setInterval(() => {
        if (document.querySelectorAll('.petal').length < 12) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDuration = (Math.random() * 5 + 6) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(petal);
            setTimeout(() => petal.remove(), 15000);
        }
    }, 800);
}

function getThemeColorName() {
    const colorMap = {
        theme1: 'blue',
        theme2: 'pink',
        theme3: 'green',
        theme4: 'orange',
        theme5: 'purple'
    };
    return colorMap[ACTIVE_THEME];
}

// SheetDB API Configuration
// Replace this URL with your actual SheetDB API endpoint
const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/pxk8lt6zsyzlv';

// Event Date Configuration
const EVENT_DATE = new Date('2026-01-31T00:00:00').getTime();

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Update ARIA label for accessibility
    const isExpanded = !mobileMenu.classList.contains('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// ============================================
// SMOOTH SCROLLING
// ============================================

// Already handled by scroll-smooth class in HTML
// But we can add offset for fixed navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// COUNTDOWN TIMER
// ============================================

function updateCountdown() {
    const now = new Date().getTime();
    const distance = EVENT_DATE - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM elements
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // Handle countdown completion
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = `
            <p class="text-2xl md:text-3xl font-bold text-blue-600">
                ❄️ The celebration is here! ❄️
            </p>
        `;
    }
}

// Initialize countdown and update every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// ============================================
// RSVP FORM HANDLING
// ============================================

const rsvpForm = document.getElementById('rsvp-form');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const loadingText = document.getElementById('loading-text');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const guestsField = document.getElementById('guests-field');
const kidsField = document.getElementById('kids-field');
const kidsAgesField = document.getElementById('kids-ages-field');
const guestsSelect = document.getElementById('guests');
const kidsSelect = document.getElementById('kids');
const kidsAgesContainer = document.getElementById('kids-ages-container');

// Update kids dropdown based on number of guests
function updateKidsOptions(numGuests) {
    const currentKidsValue = parseInt(kidsSelect.value) || 0;
    kidsSelect.innerHTML = '';
    
    // Add options from 0 to numGuests
    for (let i = 0; i <= numGuests; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i === 0 ? 'No Kids' : (i === 1 ? '1 Kid' : `${i} Kids`);
        kidsSelect.appendChild(option);
    }
    
    // Reset kids value if it exceeds new guest count
    if (currentKidsValue > numGuests) {
        kidsSelect.value = 0;
        kidsAgesField.classList.add('hidden');
        kidsAgesContainer.innerHTML = '';
    } else {
        kidsSelect.value = currentKidsValue;
    }
}

// Listen to guests selection change
guestsSelect.addEventListener('change', (e) => {
    const numGuests = parseInt(e.target.value);
    updateKidsOptions(numGuests);
});

// Show/hide guest-related fields based on attendance selection
const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
attendanceRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'Yes') {
            guestsField.classList.remove('hidden');
            kidsField.classList.remove('hidden');
            // Initialize kids options based on default guests value
            updateKidsOptions(parseInt(guestsSelect.value));
        } else {
            guestsField.classList.add('hidden');
            kidsField.classList.add('hidden');
            kidsAgesField.classList.add('hidden');
        }
    });
});

// Show/hide kids ages field based on number of kids
kidsSelect.addEventListener('change', (e) => {
    const numKids = parseInt(e.target.value);
    
    // Clear existing inputs
    kidsAgesContainer.innerHTML = '';
    
    if (numKids > 0) {
        kidsAgesField.classList.remove('hidden');
        
        // Create individual input fields for each kid
        for (let i = 1; i <= numKids; i++) {
            const kidDiv = document.createElement('div');
            kidDiv.innerHTML = `
                <label for="kid${i}-age" class="block text-gray-700 font-medium mb-1 text-sm">
                    Kid ${i}:
                </label>
                <input 
                    type="number" 
                    id="kid${i}-age" 
                    name="kid${i}-age" 
                    min="0"
                    max="18"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 text-base"
                    placeholder="Age">
            `;
            kidsAgesContainer.appendChild(kidDiv);
            
            // Add event listener to limit age to 18
            const ageInput = kidDiv.querySelector('input');
            ageInput.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                if (value > 18) {
                    e.target.value = 18;
                } else if (value < 0 || isNaN(value)) {
                    e.target.value = 0;
                }
            });
        }
    } else {
        kidsAgesField.classList.add('hidden');
    }
});

// Form submission handler
rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Hide previous messages
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');
    
    // Get form data
    const formData = new FormData(rsvpForm);
    const attendance = formData.get('attendance');
    
    // Collect kids ages data
    let kidsAgesData = {};
    if (attendance === 'Yes') {
        const numKids = parseInt(formData.get('kids') || 0);
        for (let i = 1; i <= numKids; i++) {
            const age = formData.get(`kid${i}-age`);
            kidsAgesData[`Kid${i}-Age`] = age || '0';
        }
    }
    
    // Prepare data object for SheetDB
    const data = {
        Name: formData.get('name').trim(),
        Email: formData.get('email').trim(),
        Phone: formData.get('phone') ? formData.get('phone').trim() : 'N/A',
        Attendance: attendance,
        Guests: attendance === 'Yes' ? formData.get('guests') : 'N/A',
        Kids: attendance === 'Yes' ? formData.get('kids') : 'N/A',
        ...kidsAgesData,
        Message: formData.get('message') ? formData.get('message').trim() : 'No message',
        Timestamp: new Date().toLocaleString('en-US', { 
            timeZone: 'America/Toronto',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    // Validate required fields
    if (!data.Name || !data.Email || !data.Attendance) {
        showError();
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    loadingText.classList.remove('hidden');
    
    try {
        // Submit to SheetDB
        const response = await fetch(SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: [data] })
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        
        // Show success message
        showSuccess();
        
        // Reset form after short delay
        setTimeout(() => {
            rsvpForm.reset();
            guestsField.classList.add('hidden');
            kidsField.classList.add('hidden');
            kidsAgesField.classList.add('hidden');
            kidsAgesContainer.innerHTML = '';
        }, 1000);
        
    } catch (error) {
        console.error('Error submitting RSVP:', error);
        showError();
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        loadingText.classList.add('hidden');
    }
});

// Helper function to show success message
function showSuccess() {
    successMessage.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 5000);
}

// Helper function to show error message
function showError() {
    errorMessage.classList.remove('hidden');
    successMessage.classList.add('hidden');
    
    // Scroll to error message
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide error message after 5 seconds
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 5000);
}

// ============================================
// FORM VALIDATION ENHANCEMENT
// ============================================

// Email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('border-red-500');
        emailInput.classList.remove('border-gray-300');
    } else {
        emailInput.classList.remove('border-red-500');
        emailInput.classList.add('border-gray-300');
    }
});

// Phone number formatting (optional)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            e.target.value = value;
        } else if (value.length <= 6) {
            e.target.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            e.target.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
});

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-blue-600', 'font-bold');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-blue-600', 'font-bold');
                }
            });
        }
    });
}

// Throttle scroll events for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        highlightNavigation();
    });
});

// ============================================
// IMAGE LAZY LOADING ERROR HANDLING
// ============================================

// Add fallback for images that fail to load
const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(img => {
    img.addEventListener('error', function() {
        // Keep the gradient background if image fails to load
        this.style.display = 'none';
    });
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add keyboard navigation for radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            radio.checked = true;
            radio.dispatchEvent(new Event('change'));
        }
    });
});

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Use announcement when form is submitted
const originalShowSuccess = showSuccess;
showSuccess = function() {
    originalShowSuccess();
    announceToScreenReader('Your RSVP has been successfully submitted. Thank you!');
};

const originalShowError = showError;
showError = function() {
    originalShowError();
    announceToScreenReader('There was an error submitting your RSVP. Please try again.');
};

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Apply selected theme
    applyTheme();
    
    // Initialize guest fields as hidden
    guestsField.classList.add('hidden');
    kidsField.classList.add('hidden');
    kidsAgesField.classList.add('hidden');
    
    // Set initial navigation highlight
    highlightNavigation();
});

// ============================================
// GALLERY LIGHTBOX
// ============================================

let currentImageIndex = 0;
const totalImages = 12;

// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const galleryItems = document.querySelectorAll('#gallery [data-index]');

// Open lightbox when clicking on gallery images
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'));
        openLightbox(index);
    });
});

// Function to open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = ''; // Restore scrolling
}

// Function to update lightbox image
function updateLightboxImage() {
    const imgNumber = currentImageIndex + 1;
    lightboxImg.src = `images/ara${imgNumber}.jpg`;
    lightboxImg.alt = `Aradhya's photo ${imgNumber}`;
    lightboxCounter.textContent = `${imgNumber} / ${totalImages}`;
}

// Navigate to previous image
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateLightboxImage();
}

// Navigate to next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateLightboxImage();
}

// Event listeners for lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPreviousImage);
lightboxNext.addEventListener('click', showNextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - show next image
            showNextImage();
        } else {
            // Swipe right - show previous image
            showPreviousImage();
        }
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add subtle scroll animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ============================================
// WINTER WONDERLAND EFFECTS
// ============================================

// Create falling snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    
    // Random horizontal position
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration (8-15 seconds for slower, more visible fall)
    const duration = Math.random() * 7 + 8;
    snowflake.style.animationDuration = `${duration}s, ${duration / 2}s`;
    
    // Random delay
    snowflake.style.animationDelay = Math.random() * 3 + 's';
    
    // Random size (bigger range)
    const size = Math.random() * 0.8 + 1;
    snowflake.style.fontSize = size + 'em';
    
    // Higher opacity for visibility
    snowflake.style.opacity = Math.random() * 0.3 + 0.7;
    
    document.body.appendChild(snowflake);
    
    // Remove snowflake after animation completes
    setTimeout(() => {
        snowflake.remove();
    }, (duration + 3) * 1000);
}

// Create sparkles on hero section
function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position within container
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    container.style.position = 'relative';
    container.appendChild(sparkle);
    
    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}

// Initialize winter effects
function initWinterEffects() {
    // Create initial snowflakes (reduced for performance)
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createSnowflake(), i * 300);
    }
    
    // Continuously create snowflakes (less frequent)
    setInterval(() => {
        if (document.querySelectorAll('.snowflake').length < 15) {
            createSnowflake();
        }
    }, 1500);
    
    // Add sparkles to hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
        setInterval(() => {
            createSparkle(heroSection);
        }, 300);
    }
}

// Start theme effects after page load - removed duplicate initialization
// Effects are now handled by applyTheme() function

// ============================================
// CURSOR SPARKLE TRAIL EFFECT
// ============================================

let lastSparkleTime = 0;
const sparkleDelay = 50; // milliseconds between sparkles
const sparkleTypes = ['', 'star', 'snow', 'heart'];

function createCursorSparkle(x, y) {
    const now = Date.now();
    if (now - lastSparkleTime < sparkleDelay) return;
    lastSparkleTime = now;
    
    const sparkle = document.createElement('div');
    sparkle.classList.add('cursor-sparkle');
    
    // Randomly choose sparkle type
    const randomType = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
    if (randomType) {
        sparkle.classList.add(randomType);
    }
    
    // Position at cursor
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    // Random offset for spread
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    sparkle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    
    document.body.appendChild(sparkle);
    
    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Track mouse movement
let isMouseMoving = false;
document.addEventListener('mousemove', (e) => {
    createCursorSparkle(e.clientX, e.clientY);
    isMouseMoving = true;
});

// Also create sparkles on click
document.addEventListener('click', (e) => {
    // Create multiple sparkles on click
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createCursorSparkle(e.clientX, e.clientY);
        }, i * 50);
    }
});

// ============================================
// BACKGROUND MUSIC CONTROLS
// ============================================

const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
let isMusicPlaying = false;
let hasTriedAutoplay = false;

// Function to start music
function startMusic() {
    if (!hasTriedAutoplay) {
        hasTriedAutoplay = true;
        bgMusic.volume = 0.5;
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicIcon.textContent = '🔊';
            musicToggle.classList.remove('animate-pulse', 'hidden');
            musicToggle.classList.add('flex');
        }).catch(error => {
            // Autoplay failed, keep button hidden
        });
    }
}

// Try to start music on any user interaction
const startOnInteraction = () => {
    if (!isMusicPlaying) {
        startMusic();
    }
};

// Listen for various user interactions
document.addEventListener('click', startOnInteraction, { once: true });
document.addEventListener('touchstart', startOnInteraction, { once: true });
document.addEventListener('keydown', startOnInteraction, { once: true });

// Also try on page load
window.addEventListener('load', () => {
    bgMusic.volume = 0.5;
    
    // Try to autoplay
    bgMusic.play().then(() => {
        isMusicPlaying = true;
        musicIcon.textContent = '🔊';
        musicToggle.classList.remove('hidden');
        musicToggle.classList.add('flex');
        hasTriedAutoplay = true;
    }).catch(() => {
        // Autoplay blocked - will start on first interaction
    });
});

// Toggle music on/off
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (isMusicPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.volume = 0.5;
        bgMusic.play().then(() => {
            musicIcon.textContent = '🔊';
            isMusicPlaying = true;
            hasTriedAutoplay = true;
        }).catch(error => {
            musicIcon.textContent = '🔇';
        });
    }
});

