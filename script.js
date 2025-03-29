// Initialize features
const features = [
    { icon: 'fa-magic', title: "Smart Recording", content: "Intuitive recording with customizable hotkeys" },
    { icon: 'fa-tachometer-alt', title: "Speed Control", content: "Precise playback speed from 0.1x to 1000x" },
    { icon: 'fa-shield-alt', title: "Secure", content: "Enterprise-grade security & privacy" }
];

const featuresContainer = document.getElementById('features');
features.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
        <i class="fas ${feature.icon}"></i>
        <h3>${feature.title}</h3>
        <p>${feature.content}</p>
    `;
    featuresContainer.appendChild(card);
});

// Download counter
let downloadCount = localStorage.getItem('downloadCount') || 0;
document.getElementById('downloadCount').textContent = downloadCount;

document.getElementById('downloadLink').addEventListener('click', function(e) {
    e.preventDefault();
    
    if(downloadLink) {
        downloadCount++;
        localStorage.setItem('downloadCount', downloadCount);
        document.getElementById('downloadCount').textContent = downloadCount;
        window.location.href = this.href;
    }
});

// Year update
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Checksum copy
document.getElementById('checksumContainer').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('checksum').textContent)
        .then(() => alert('Checksum copied to clipboard!'))
        .catch(() => alert('Failed to copy checksum'));
});

// Add sticky header behavior
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});