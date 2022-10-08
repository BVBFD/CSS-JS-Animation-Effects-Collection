const IntroText = document.querySelector('.intro .textBox h1');
const IntroImg = document.querySelector('.intro .imgBox img');
const IntroName = document.querySelector('.name h1');
const IntroJob = document.querySelector('.job h1');
const Projects = document.querySelector('.projects h1');
const Laptop = document.querySelector('.laptop .imgBox img');
const Mobile = document.querySelector('.mobile .imgBox img');
const Port = document.querySelector('.port');
const PortSpan = document.querySelector('.port span');
const PortBtn = document.querySelector('.port button');

window.addEventListener('scroll', () => {
  let offsetY = window.scrollY;

  IntroText.style.transform = `translateX(-${offsetY * 0.5}px)`;
  IntroImg.style.transform = `translate(${offsetY * 0.5}px, ${
    offsetY * 0.5
  }px)`;
  IntroName.style.transform = `translateX(${offsetY * 0.2}px)`;
  IntroJob.style.transform = `translateX(-${offsetY * 0.3}px)`;

  Projects.style.transform = `translateY(-${offsetY * 0.6}px)`;
  Laptop.style.transform = `translateX(calc(400vh - ${offsetY}px))`;
  Mobile.style.transform = `translateX(calc(-500vh + ${offsetY}px))`;

  PortSpan.style.opacity = 1;
  PortSpan.innerHTML =
    'Please Hover on here, please!<br />마우스를 올려주세요!';
});

window.addEventListener('mousemove', (e) => {
  let portTop = Port.getBoundingClientRect().top;
  let PortBtnTop = PortBtn.getBoundingClientRect().top;
  let PortBtnBottom = PortBtn.getBoundingClientRect().bottom;
  let PortBtnLeft = PortBtn.getBoundingClientRect().left;
  let PortBtnRight = PortBtn.getBoundingClientRect().right;
  let x = e.clientX;
  let y = e.clientY;

  console.log(portTop, x);

  if (
    x <= PortBtnRight &&
    x >= PortBtnLeft &&
    y <= PortBtnBottom &&
    y >= PortBtnTop
  ) {
    PortSpan.style.opacity = 1;
    PortSpan.innerHTML =
      'Click This To Visit Website, Please!<br />마우스를 클릭해주세요!';
    setTimeout(() => {
      PortSpan.style.opacity = 0;
    }, 4000);
  } else {
    PortSpan.style.opacity = 1;
    PortSpan.innerHTML =
      'Please Hover on here, please!<br />마우스를 올려주세요!';
  }
});

const handleBtnClick = () => {
  window.location.href = 'https://bvbfd.github.io/Portfolio-Website-ver2.0/';
};
