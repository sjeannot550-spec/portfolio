 // togge icon navbar
let menuIcon = document.querySelector('#menu-icon ')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('Active');
}

 //scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    let sectionTop = section.offsetTop - 100;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        //Active navbar link
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });

      //avtive sections for animation on scroll
      section.classList .add('show-animate'); 
    }
    //if want to use animation that repeats on scroll use this
    else {
      section.classList .remove('show-animate'); 
    }
  });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove tggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
  navbar.classList.remove('Active');

  //animation footer on scroll
  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
 }