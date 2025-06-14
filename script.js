
// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.phone || !data.service) {
                showAlert('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showAlert('Por favor, ingresa un email válido.', 'error');
                return;
            }
            
            // Phone validation (Paraguay format)
            const phoneRegex = /^(\+595|0)?[0-9]{8,9}$/;
            if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
                showAlert('Por favor, ingresa un número de teléfono válido.', 'error');
                return;
            }
            
            // Simulate form submission
            showAlert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', 'success');
            contactForm.reset();
            
            // Track form submission
            trackEvent('form_submission', {
                service: data.service,
                name: data.name
            });
            
            // In a real application, you would send the data to your server here
            console.log('Form data:', data);
        });
    }
    
    // Add loading animation on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add click handlers for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('.service-title').textContent;
            
            // Pre-fill the contact form
            const serviceSelect = document.getElementById('service');
            if (serviceSelect) {
                const options = serviceSelect.options;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].text.includes(serviceName.split(' ')[0])) {
                        serviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }
            
            // Track service card click
            trackEvent('service_card_click', {
                service: serviceName
            });
            
            // Scroll to contact form
            scrollToSection('contacto');
        });
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .service-card, .social-link, .feature-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (!this.style.transform.includes('scale')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (!this.style.transform.includes('scale')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Phone number formatting for Paraguay
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.startsWith('595')) {
                value = '+' + value;
            } else if (value.length > 0 && !value.startsWith('0')) {
                value = '0' + value;
            }
            
            // Format as: +595 XXX XXXXX or 0XXX XXXXX
            if (value.startsWith('+595')) {
                value = value.replace(/(\+595)(\d{3})(\d{0,6})/, '$1 $2 $3').trim();
            } else if (value.startsWith('0')) {
                value = value.replace(/(\d{4})(\d{0,6})/, '$1 $2').trim();
            }
            
            e.target.value = value;
        });
    }
    
    // Add click tracking for all buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn') || e.target.closest('.btn')) {
            const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
            trackEvent('button_click', {
                button_text: button.textContent.trim(),
                button_location: button.closest('section')?.id || 'unknown'
            });
        }
        
        if (e.target.matches('.nav-link')) {
            trackEvent('navigation_click', {
                section: e.target.textContent.trim()
            });
        }
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(31, 41, 55, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Alert system
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease-out;
    `;
    
    if (type === 'success') {
        alert.style.background = '#10b981';
    } else if (type === 'error') {
        alert.style.background = '#ef4444';
    } else {
        alert.style.background = '#3b82f6';
    }
    
    alert.textContent = message;
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        margin-left: 12px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    closeBtn.onclick = () => alert.remove();
    alert.appendChild(closeBtn);
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);
}

// Add CSS for alert animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Analytics tracking
function trackEvent(eventName, eventData) {
    const timestamp = new Date().toISOString();
    const event = {
        event: eventName,
        data: eventData,
        timestamp: timestamp,
        page: window.location.pathname
    };
    
    console.log('Event tracked:', event);
    
    // Store in localStorage for demo purposes
    const events = JSON.parse(localStorage.getItem('puntocom_events') || '[]');
    events.push(event);
    localStorage.setItem('puntocom_events', JSON.stringify(events.slice(-50))); // Keep last 50 events
    
    // In a real application, you would send this data to your analytics service
    // Example: sendToAnalytics(event);
}

// Utility function for phone number formatting
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('595')) {
        return '+' + cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
    }
    return cleaned.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
}

// Mobile menu functionality (for future enhancement)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('nav-open');
    }
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Service worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker would be implemented here for offline functionality
        console.log('Service Worker support detected');
    });
}
