const handLayer = document.querySelector(".hand-layer");
const layer1 = document.querySelector(".layer-1");
const layer2 = document.querySelector(".layer-2");
const layer3 = document.querySelector(".layer-3");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  handLayer.style.top = value * 0.4 + "px";
  layer1.style.top = value * 0.2 + "px";
  layer2.style.down = value * 0.5 + "px";
  layer3.style.top = value * 0.4 + "px";
});
