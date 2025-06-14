
// Simple HTML include functionality for static sites
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(async (element) => {
        const file = element.getAttribute('data-include');
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const html = await response.text();
                    element.innerHTML = html;
                } else {
                    element.innerHTML = `<p>Error loading ${file}</p>`;
                }
            } catch (error) {
                element.innerHTML = `<p>Error loading ${file}</p>`;
                console.error('Error including HTML:', error);
            }
        }
    });
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', includeHTML);
