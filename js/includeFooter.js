document.addEventListener("DOMContentLoaded", function() {
    const footerPath = 'temps/footer.html';
    fetch(footerPath)
        .then(response => response.text())
        .then(text => {
            const footerElement = document.getElementById('footer-placeholder');
            if (footerElement) footerElement.innerHTML = text;

            // Update the copyright year dynamically
            const currentYear = new Date().getFullYear();
            const copyrightElement = document.querySelector('#footer-placeholder #copyright-year');
            if (copyrightElement) copyrightElement.textContent = currentYear;
        });
});