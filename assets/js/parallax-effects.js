document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

SVGInject(document.querySelectorAll(".svg-icon img"));
const vivadom = document.querySelector('svg.injectable');
const vivus = new Vivus(vivadom, {
    type: 'delayed',
    duration: 35,
    file: vivadom,
    animTimingFunction: Vivus.EASE_IN
}, function(obj) {
  	vivadom.addEventListener('mouseenter', ()=> {
        obj.reset().play();
    })
}
);

// document.addEventListener('DOMContentLoaded', function() {
//   SVGInject(document.querySelectorAll(".svg-icon img"));
// });

// var $svgIconBox = $('.icon');
// $svgIconBox.each(function() {
//     var $this = $(this),
//         $svgIcon = $this.find('.svg-icon'),
//         $id = $svgIcon.attr('id'),
//         $icon = $svgIcon.data('svg-icon');
//     var $vivus = new Vivus($id, { duration: 60, file: $icon });
//     $this.on('mouseenter', function () {
//         $vivus.reset().play();
//     });
// });

// SVGInject(document.querySelectorAll("img.injectable"));

// var myCallback = function () {};
// var mySVGs = document.querySelector(".injectable");
// for (var i = mySVGs.length - 1; i >= 0; i--) {
//   new Vivus(mySVGs[i], {duration: 100, }, myCallback);
// }

// var $svgIconBox = $('.icon');
// $svgIconBox.each(function() {
//     var $this = $(this),
//         $svgIcon = $this.find('.svg-icon'),
//         $id = $svgIcon.attr('id'),
//         $icon = $svgIcon.data('svg-icon');
//     var $vivus = new Vivus($id, { duration: 100, file: $icon });
//     $this.on('mouseenter', function () {
//         $vivus.reset().play();
//     });
// });