# Scroll-Cordination-Effect

![scroll-cord-effect](https://user-images.githubusercontent.com/83178592/189028880-83c1240d-cb94-4f78-88e1-ec5975bdc717.gif)

```script
let bg = document.getElementById('bg');
    let moon = document.getElementById('moon');
    let mountain = document.getElementById('mountain');
    let road = document.getElementById('road');
    let text = document.getElementById('text');

    document.addEventListener('scroll', (e) => {
      let scrollValue = window.scrollY;
      console.log(scrollValue);

      moon.style.left = -scrollValue * 1.5 + 'px';
      text.style.bottom = -scrollValue * 0.5 + 'px';
    });

    document.addEventListener('click', (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;
      let pageX = e.pageX;
      let pageY = e.pageY;
      console.log(`clientX:${clientX}, clientY:${clientY}`);
      console.log(`pageX:${pageX}, pageY:${pageY}`);
    });
```
