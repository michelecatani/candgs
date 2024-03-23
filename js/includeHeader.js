document.addEventListener("DOMContentLoaded", function() {
    const footerPath = 'temps/header.html';
    fetch(footerPath)
        .then(response => response.text())
        .then(text => {
            const footerElement = document.getElementById('header-placeholder');
            if (footerElement) footerElement.innerHTML = text;
        });
});