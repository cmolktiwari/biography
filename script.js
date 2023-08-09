let section = document.querySelectorAll('div');
let menu = document.querySelectorAll('nav a');
window.onscroll = () => {
  section.forEach(i => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute('id');
    if (top >= offset && top < offset + height) {
      menu.forEach(link => {
        link.classList.remove('active');
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};
if (document.getElementById("about-nav").classList("Active")){
  alert("This works");
}
