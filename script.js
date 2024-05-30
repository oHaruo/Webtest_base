// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('웹페이지가 로드되었습니다.');

    // Smooth scrolling for nav links
    document.querySelectorAll('.scrolling-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
