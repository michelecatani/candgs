document.addEventListener("DOMContentLoaded", function() {
    const navPath = 'temps/nav.html';
    fetch(navPath)
        .then(response => response.text())
        .then(text => {
            const navElement = document.getElementById('nav-placeholder');
            if (navElement) navElement.innerHTML = text;
        })
})