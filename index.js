const locatorBoxSpans = document.querySelectorAll(".locatorBox span");

locatorBoxSpans.forEach((btn) => {
  btn.onclick = () => {
    let src = btn.dataset.src;
    console.log(src);
    let videoTag = document.querySelector(".videoContainer video");
    videoTag.src = src;
  };
});
