const tabs = document.querySelectorAll('.tabs ul li a');
const sections = document.querySelectorAll('main section');

//loader
sections.forEach(section => {
    if (section.getAttribute('id') === 'about') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
});
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        tabs.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        sections.forEach(section => {
            if (section.getAttribute('id') === target.substring(1)) {
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
    });
});

//fades
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const tabs = document.querySelector('.tabs');
    const main = document.querySelector('main');

    header.classList.add('fade-in');
    setTimeout(() => {
        tabs.classList.add('fade-in', 'delay');
        main.classList.add('fade-in', 'delay');
    }, 0);
});
