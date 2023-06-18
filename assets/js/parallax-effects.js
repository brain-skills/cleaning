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

// Определяем в каком объекте заключена ссылка на SVG и сразу приобразуем этот объект в готовый SVG
// Источник: https://github.com/iconfu/svg-inject
// document.addEventListener('DOMContentLoaded', function() {
//   SVGInject(document.querySelectorAll(".svg-icon img")); // указываем тег img, так как ссылка на SVG там. А значит делаем из img готовый SVG
// });

// Вот она сволочь и нужна!! она напрочь отказывается работать!
// Хотя тут она у меня работает: https://brain-skills.github.io/parallax-effects/
// Источник: https://github.com/maxwellito/vivus

document.addEventListener('DOMContentLoaded', function() {
  SVGInject(document.querySelectorAll(".svg-icon img")).then(_ => {
      const vivadom = document.querySelector('svg.injectable');
      const vivus = new Vivus(vivadom, {
          type: 'delayed',
          duration: 35,
          file: vivadom,
          animTimingFunction: Vivus.EASE_IN
      }, function(obj) {
          vivadom.addEventListener('mouseenter', () => {
              obj.reset().play();
          })
      });
  });
})



// Экспериментальный метод - тут он работает у меня нормально: https://jsfiddle.net/Georka/8mu5jxz7/2/
// А тут отказывается работать! пишет ошибку!!!
// const vivadom = document.querySelector('svg.injectable');
// const vivus = new Vivus(vivadom, {
//     type: 'delayed',
//     duration: 35,
//     file: vivadom,
//     animTimingFunction: Vivus.EASE_IN
// }, function(obj) {
//   	vivadom.addEventListener('mouseenter', ()=> {
//         obj.reset().play();
//     })
// }
// );