const tabs = document.querySelectorAll('.tabs ul li a');
const sections = document.querySelectorAll('main section');

// function to show a specific section
function showSection(sectionId) {
    sections.forEach(section => {
        if (section.getAttribute('id') === sectionId) {
            section.style.opacity = 0;
            section.style.display = 'block';
            setTimeout(() => {
                section.style.opacity = 1;
                section.style.transition = 'opacity 0.5s ease';
                // make subsections visible if this is the bookshelf section
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

    // update active tab
    tabs.forEach(tab => {
        if (tab.getAttribute('href') === `${sectionId}`) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// function to set the hash in the URL
function setHash(hash) {
    history.replaceState(null, null, hash);
}

// event listener for tab clicks
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        showSection(target);
        setHash(`${target}`);
    });
});

// Add a popstate event listener to handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showSection(hash);
});

// Modify the load event listener
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showSection(hash);
    setHash(`${hash}`);
});

// Dark mode toggle functionality
// const darkModeToggle = document.getElementById('darkModeToggle');
// const body = document.body;

// // Check for saved dark mode preference
// const darkMode = localStorage.getItem('darkMode');
// if (darkMode === 'enabled') {
//     body.classList.add('dark-mode');
// }

// // Toggle dark mode
// darkModeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
    
//     // Save preference
//     if (body.classList.contains('dark-mode')) {
//         localStorage.setItem('darkMode', 'enabled');
//     } else {
//         localStorage.setItem('darkMode', null);
//     }
// });
