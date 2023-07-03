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
  duration: 42,
  animTimingFunction: Vivus.EASE_IN
}, function(obj) {
  arg.addEventListener('mouseenter', ()=> {
      obj.reset().play();
  })
})};
// Конец SVG анимации //

// SVG анимация при наведении на текст логотипа в шапке //
const logoIcon = document.querySelector('#logoIcon');
const logoText = document.querySelector('#logoText');
logoText.addEventListener('mouseenter', ()=>{
  svgAnim(logoIcon);
})
// Конец SVG анимации при наведении на текст логотипа в шапке //

// SVG анимация при наведении на Телефон в шапке //
const phoneSvg = document.querySelector('#phoneSvg');
const phoneEvents = document.querySelector('#phoneEvents');
phoneEvents.addEventListener('mouseenter', ()=>{
  svgAnim(phoneSvg);
})
// Конец SVG анимации при наведении на Телефон в шапке //