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
  duration: 80,
  animTimingFunction: Vivus.EASE_OUT_BOUNCE
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

// SVG анимация иконки для 1 пункта при наведении на текст //
const svgPerm1 = document.querySelector('#svgPerm1');
const perm1 = document.querySelector('#perm1');
perm1.addEventListener('mouseenter', ()=>{
  svgAnim(svgPerm1);
})
// Конец SVG анимации иконки для 1 пункта при наведении на текст //

// SVG анимация иконки для 1 пункта при наведении на текст //
const svgPerm2 = document.querySelector('#svgPerm2');
const perm2 = document.querySelector('#perm2');
perm2.addEventListener('mouseenter', ()=>{
  svgAnim(svgPerm2);
})
// Конец SVG анимации иконки для 1 пункта при наведении на текст //

// SVG анимация иконки для 1 пункта при наведении на текст //
const svgPerm3 = document.querySelector('#svgPerm3');
const perm3 = document.querySelector('#perm3');
perm3.addEventListener('mouseenter', ()=>{
  svgAnim(svgPerm3);
})
// Конец SVG анимации иконки для 1 пункта при наведении на текст //