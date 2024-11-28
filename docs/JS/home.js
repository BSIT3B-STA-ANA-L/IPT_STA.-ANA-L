// Select all sections
const sections = document.querySelectorAll('.content-section');

// Function to hide all sections
function hideAllSections() {
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// Function to show specific section
function showSection(sectionId) {
    hideAllSections();
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

// Event listeners for the navigation links
document.getElementById('homeLink').addEventListener('click', () => {
    showSection('home');
});

document.getElementById('aboutLink').addEventListener('click', () => {
    showSection('about');
});

document.getElementById('servicesLink').addEventListener('click', () => {
    showSection('services');
});

document.getElementById('contactLink').addEventListener('click', () => {
    showSection('contact');
});
