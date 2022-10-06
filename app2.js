const IntroText = document.querySelector('.intro .textBox h1');
const IntroImg = document.querySelector('.intro .imgBox img');
const IntroName = document.querySelector('.name h1');
const IntroJob = document.querySelector('.job h1');
const Projects = document.querySelector('.projects h1');
const Laptop = document.querySelector('.laptop .imgBox img');
const Mobile = document.querySelector('.mobile .imgBox img');

window.addEventListener('scroll', () => {
  let offsetY = window.scrollY;
  console.log(window.scrollY);
  IntroText.style.transform = `translateX(-${offsetY * 0.5}px)`;
  IntroImg.style.transform = `translate(${offsetY * 0.5}px, ${
    offsetY * 0.5
  }px)`;
  IntroName.style.transform = `translateX(${offsetY * 0.2}px)`;
  IntroJob.style.transform = `translateX(-${offsetY * 0.3}px)`;

  Projects.style.transform = `translateY(-${offsetY * 0.6}px)`;
  Laptop.style.transform = `translateX(calc(400vh - ${offsetY}px))`;
  Mobile.style.transform = `translateX(calc(-500vh + ${offsetY}px))`;
});
