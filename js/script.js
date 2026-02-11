// toggle icon
let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');
menuIcon.onclick = () => {
 menuIcon.classList.toggle('bx-x');
    menu.classList.toggle('active');
};
// scroll section 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header menu a');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header menu a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and menu when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    menu.classList.remove('active');
};
// scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    // Mets ton code ScrollReveal ici
    ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200

 });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.about-content, .home-content p', { origin: 'right' });


    var typed = new Typed('.multi', {
  strings: [
    'Développeur Web', 
    'Designer Graphique', 
    'Digital marketer'
  ],
  typeSpeed: 100,       // Vitesse de frappe en ms
  backSpeed: 50,       // Vitesse d'effacement en ms
  backDelay: 1000,     // Temps d'attente avant d'effacer
  loop: true           // Recommencer à l'infini
});

}); 

