const tabs = document.querySelectorAll('.tabs ul li a');
const sections = document.querySelectorAll('main section');

// Function to show a specific section
function showSection(sectionId) {
    sections.forEach(section => {
        if (section.getAttribute('id') === sectionId) {
            section.style.opacity = 0;
            section.style.display = 'block';
            setTimeout(() => {
                section.style.opacity = 1;
                section.style.transition = 'opacity 0.5s ease';
                // Make subsections visible if this is the bookshelf section
                if (section.id === 'bookshelf') {
                    document.querySelectorAll('#currently-reading, #read-books').forEach(subsection => {
                        subsection.style.opacity = 1;
                        subsection.style.display = 'block';
                    });
                }
            }, 50);
        } else {
            section.style.display = 'none';
            section.style.opacity = 0;
            section.style.transition = 'opacity 0.3s ease';
        }
    });

    // Update active tab
    tabs.forEach(tab => {
        if (tab.getAttribute('href') === `#${sectionId}`) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// Function to set the hash in the URL
function setHash(hash) {
    history.pushState(null, null, hash);
}

// Event listener for tab clicks
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        showSection(target);
        setHash(`#${target}`);
    });
});

// Check for hash in URL on page load
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('about');
        setHash('#about');
    }

    // ... existing fade-in code ...
});

// ... rest of your existing code ...
