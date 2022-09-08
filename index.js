const videoContainer = document.querySelector('.videoContainer');
const locatorBoxSpans = document.querySelectorAll('.locatorBox span');
const videoTag = document.querySelector('.videoContainer video');

locatorBoxSpans.forEach((btn) => {
  btn.onclick = () => {
    let src = btn.dataset.src;
    videoTag.src = src;
  };
});
