// Анимация фигур //
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};
// Конец анимации фигур //

// SVG анимация //
function svgAnim(arg){new Vivus(arg, {
  type: 'sync',
  duration: 30,
  animTimingFunction: Vivus.EASE_IN
}, function(obj) {
  arg.addEventListener('mouseenter', ()=> {
      obj.reset().play();
  })
})};
// Конец SVG анимации //