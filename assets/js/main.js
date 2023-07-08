let cleanService = document.querySelector('#cleanservice');
let cleanTab = document.querySelector('#clean-tab');
let c1 = document.querySelector('#c-1');
let c2 = document.querySelector('#c-2');
let cs1 = document.querySelector('#cs1');
let cs2 = document.querySelector('#cs2');
let cs3 = document.querySelector('#cs3');
let cs4 = document.querySelector('#cs4');
let cg1 = document.querySelector('#cg1');
let cg2 = document.querySelector('#cg2');
let cg3 = document.querySelector('#cg3');
let cg4 = document.querySelector('#cg4');
let ca1 = document.querySelector('#ca1');
let ca2 = document.querySelector('#ca2');
let ca3 = document.querySelector('#ca3');
let ca4 = document.querySelector('#ca4');
let furchemTab = document.querySelector('#furchem-tab');
let f1 = document.querySelector('#f-1');
let f2 = document.querySelector('#f-2');
let f3 = document.querySelector('#f-3');
let f4 = document.querySelector('#f-4');
let f5 = document.querySelector('#f-5');
let windwTab = document.querySelector('#windw-tab');
let w1 = document.querySelector('#w-1');
let w2 = document.querySelector('#w-2');
let w3 = document.querySelector('#w-3');
let w4 = document.querySelector('#w-4');
let w5 = document.querySelector('#w-5');
let support1 = document.querySelector('#support');
let general1 = document.querySelector('#general');
let afterem1 = document.querySelector('#afterem');
let prefix = "";

function cleanOff (){
    c1.classList.remove('show', 'active');
    c2.classList.remove('show', 'active');
    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cs4.classList.remove('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    cg4.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    ca4.classList.remove('show', 'active');
}

cleanService.addEventListener('change', function(e){
    if(cleanService.options.selectedIndex == 0){
        cleanTab.classList.add('active');
        furchemTab.classList.remove('active');
        windwTab.classList.remove('active');
        c1.classList.add('show', 'active');
        c2.classList.add('show', 'active');
        
        cs1.classList.add('show', 'active');
        cs2.classList.add('show', 'active');
        cs3.classList.add('show', 'active');
        cs4.classList.add('show', 'active');
        cg1.classList.remove('show', 'active');
        cg2.classList.remove('show', 'active');
        cg3.classList.remove('show', 'active');
        cg4.classList.remove('show', 'active');
        ca1.classList.remove('show', 'active');
        ca2.classList.remove('show', 'active');
        ca3.classList.remove('show', 'active');
        ca4.classList.remove('show', 'active');
        f1.classList.remove('show', 'active');
        f2.classList.remove('show', 'active');
        f3.classList.remove('show', 'active');
        f4.classList.remove('show', 'active');
        f5.classList.remove('show', 'active');
        w1.classList.remove('show', 'active');
        w2.classList.remove('show', 'active');
        w3.classList.remove('show', 'active');
        w4.classList.remove('show', 'active');
        w5.classList.remove('show', 'active');
        support1.classList.add('show', 'active');
        general1.classList.remove('show', 'active');
        afterem1.classList.remove('show', 'active');
        history.pushState(null, null, `#clean-s`);
        cleanService[0].setAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');

    } else if(cleanService.options.selectedIndex == 1){
        cleanTab.classList.remove('active');
        furchemTab.classList.add('active');
        windwTab.classList.remove('active');
        cleanOff();
        f1.classList.add('show', 'active');
        f2.classList.add('show', 'active');
        f3.classList.add('show', 'active');
        f4.classList.add('show', 'active');
        f5.classList.add('show', 'active');
        w1.classList.remove('show', 'active');
        w2.classList.remove('show', 'active');
        w3.classList.remove('show', 'active');
        w4.classList.remove('show', 'active');
        w5.classList.remove('show', 'active');
        history.pushState(null, null, `#dry-s`);
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].setAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');
    } else if(cleanService.options.selectedIndex == 2){
        cleanTab.classList.remove('active');
        furchemTab.classList.remove('active');
        windwTab.classList.add('active');
        cleanOff();
        f1.classList.remove('show', 'active');
        f2.classList.remove('show', 'active');
        f3.classList.remove('show', 'active');
        f4.classList.remove('show', 'active');
        f5.classList.remove('show', 'active');
        w1.classList.add('show', 'active');
        w2.classList.add('show', 'active');
        w3.classList.add('show', 'active');
        w4.classList.add('show', 'active');
        w5.classList.add('show', 'active');
        history.pushState(null, null, `#wash-s`);
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].setAttribute('selected','selected');
    }
    e.preventDefault();
});
cleanTab.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 0;
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');
    cs1.classList.add('show', 'active');
    cg1.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    support1.classList.add('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.remove('show', 'active');
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
cs1.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 0;
    cs1.classList.add('show', 'active');
    cg1.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    support1.classList.add('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.remove('show', 'active');
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
cg1.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 0;
    cs1.classList.remove('show', 'active');
    cg1.classList.add('show', 'active');
    ca1.classList.remove('show', 'active');
    support1.classList.remove('show', 'active');
    general1.classList.add('show', 'active');
    afterem1.classList.remove('show', 'active');
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
ca1.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 0;
    cs1.classList.remove('show', 'active');
    cg1.classList.remove('show', 'active');
    ca1.classList.add('show', 'active');
    support1.classList.remove('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.add('show', 'active');
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
furchemTab.addEventListener('click', function(event){
    support1.classList.remove('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.remove('show', 'active');
    cleanOff();
    cleanService.options.selectedIndex = 1;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].setAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
windwTab.addEventListener('click', function(event){
    support1.classList.remove('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.remove('show', 'active');
    cleanOff();
    cleanService.options.selectedIndex = 2;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].setAttribute('selected','selected');
    event.preventDefault();
});

// сохраняем значения с помощью якорных ссылок у табов
if(document.location.hash == ''){
    cleanTab.classList.add('active');
    cs1.classList.add('show', 'active');
    cs2.classList.add('show', 'active');
    cs3.classList.add('show', 'active');
    cs4.classList.add('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    cg4.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    ca4.classList.remove('show', 'active');
    history.pushState(null, null, ``);
} else if(document.location.hash == '#clean-s'){
    cleanTab.classList.add('active');
    furchemTab.classList.remove('active');
    windwTab.classList.remove('active');
    history.pushState(null, null, `#clean-s`);

    cleanService.options.selectedIndex = 0;
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');

    cs1.classList.add('show', 'active');
    cs2.classList.add('show', 'active');
    cs3.classList.add('show', 'active');
    cs4.classList.add('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    cg4.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    ca4.classList.remove('show', 'active');

    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
} else if (document.location.hash == '#clean-g') {
    cleanTab.classList.add('active');
    furchemTab.classList.remove('active');
    windwTab.classList.remove('active');
    history.pushState(null, null, `#clean-g`);
    
    cleanService.options.selectedIndex = 0;
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');

    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cs4.classList.remove('show', 'active');
    cg1.classList.add('show', 'active');
    cg2.classList.add('show', 'active');
    cg3.classList.add('show', 'active');
    cg4.classList.add('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    ca4.classList.remove('show', 'active');

    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    support1.classList.remove('show', 'active');
    general1.classList.add('show', 'active');
    afterem1.classList.remove('show', 'active');
} else if (document.location.hash == '#clean-r') {
    cleanTab.classList.add('active');
    furchemTab.classList.remove('active');
    windwTab.classList.remove('active');
    history.pushState(null, null, `#clean-r`);

    cleanService.options.selectedIndex = 0;
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');

    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cs4.classList.remove('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    cg4.classList.remove('show', 'active');
    ca1.classList.add('show', 'active');
    ca2.classList.add('show', 'active');
    ca3.classList.add('show', 'active');
    ca4.classList.add('show', 'active');

    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    support1.classList.remove('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.add('show', 'active');
} else if (document.location.hash == '#dry-s') {
    cleanTab.classList.remove('active');
    furchemTab.classList.add('active');
    windwTab.classList.remove('active');
    history.pushState(null, null, `#dry-s`);
    cleanService.options.selectedIndex = 1;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].setAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    cleanOff();
    f1.classList.add('show', 'active');
    f2.classList.add('show', 'active');
    f3.classList.add('show', 'active');
    f4.classList.add('show', 'active');
    f5.classList.add('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
} else if (document.location.hash == '#wash-s') {
    cleanTab.classList.remove('active');
    furchemTab.classList.remove('active');
    windwTab.classList.add('active');
    history.pushState(null, null, `#wash-s`);
    cleanService.options.selectedIndex = 2;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].setAttribute('selected','selected');
    cleanOff();
    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.add('show', 'active');
    w2.classList.add('show', 'active');
    w3.classList.add('show', 'active');
    w4.classList.add('show', 'active');
    w5.classList.add('show', 'active');
}

// задаём аргумент selected
if(cleanService.options.selectedIndex == 0){
    cleanService[0].setAttribute('selected','selected');
}
cleanService.addEventListener('change', function(e){
    for(i = 0; i < cleanService.length; i++){
        if(cleanService.options.selectedIndex == i){
            cleanService[i].setAttribute('selected','selected');
        } else {
            cleanService[i].removeAttribute('selected','selected');
        }
    }
    e.preventDefault();
});

// несколько тел для табов
cleanTab.addEventListener('click', (e)=>{
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');
    cs1.classList.add('show', 'active');
    cs2.classList.add('show', 'active');
    cs3.classList.add('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    history.pushState(null, null, `#clean-s`);
    e.preventDefault();
});
cs1.addEventListener('click', (e)=>{
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');
    cs1.classList.add('show', 'active');
    cs2.classList.add('show', 'active');
    cs3.classList.add('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');

    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    history.pushState(null, null, `#clean-s`);
    e.preventDefault();
});
cg1.addEventListener('click', (e)=>{
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');
    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cg1.classList.add('show', 'active');
    cg2.classList.add('show', 'active');
    cg3.classList.add('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');

    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    history.pushState(null, null, `#clean-g`);
    e.preventDefault();
});
ca1.addEventListener('click', (e)=>{
    c1.classList.add('show', 'active');
    c2.classList.add('show', 'active');
    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    ca1.classList.add('show', 'active');
    ca2.classList.add('show', 'active');
    ca3.classList.add('show', 'active');

    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    history.pushState(null, null, `#clean-r`);
    e.preventDefault();
});
furchemTab.addEventListener('click', (e)=>{
    c1.classList.remove('show', 'active');
    c2.classList.remove('show', 'active');
    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cs4.classList.remove('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    cg4.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    ca4.classList.remove('show', 'active');
    f1.classList.add('show', 'active');
    f2.classList.add('show', 'active');
    f3.classList.add('show', 'active');
    f4.classList.add('show', 'active');
    f5.classList.add('show', 'active');
    w1.classList.remove('show', 'active');
    w2.classList.remove('show', 'active');
    w3.classList.remove('show', 'active');
    w4.classList.remove('show', 'active');
    w5.classList.remove('show', 'active');
    history.pushState(null, null, `#dry-s`);
    e.preventDefault();
});
windwTab.addEventListener('click', (e)=>{
    c1.classList.remove('show', 'active');
    c2.classList.remove('show', 'active');
    cs1.classList.remove('show', 'active');
    cs2.classList.remove('show', 'active');
    cs3.classList.remove('show', 'active');
    cs4.classList.remove('show', 'active');
    cg1.classList.remove('show', 'active');
    cg2.classList.remove('show', 'active');
    cg3.classList.remove('show', 'active');
    cg4.classList.remove('show', 'active');
    ca1.classList.remove('show', 'active');
    ca2.classList.remove('show', 'active');
    ca3.classList.remove('show', 'active');
    ca4.classList.remove('show', 'active');
    f1.classList.remove('show', 'active');
    f2.classList.remove('show', 'active');
    f3.classList.remove('show', 'active');
    f4.classList.remove('show', 'active');
    f5.classList.remove('show', 'active');
    w1.classList.add('show', 'active');
    w2.classList.add('show', 'active');
    w3.classList.add('show', 'active');
    w4.classList.add('show', 'active');
    w5.classList.add('show', 'active');
    history.pushState(null, null, `#wash-s`);
    e.preventDefault();
});

// Сохранять позицию после refresh
window.addEventListener('load', () => {
    let scroll = localStorage.getItem("state_scroll");
    scroll && window.scrollTo(0, scroll);
    window.addEventListener('scroll', () => {
        localStorage.setItem("state_scroll", window.pageYOffset)
    })
})

// Промокод
let promoCode = document.querySelector('#promoCode');
let promoCode2 = document.querySelector('#promoCode2');
let salePercent = document.querySelector('#salePercent');
let salePercent2 = document.querySelector('#salePercent2');
promoCode.onclick = function(){
    let promo = prompt('Введите Промокод');
    let promoVal = document.querySelector('#promoVal');
    if(parseInt(promo, 36) == '47523533'){
        salePercent.innerText = ' | Ваша скидка: 5%';
        promoVal.value = '5%';
    } else if (parseInt(promo, 36) == '1710847044'){
        salePercent.innerText = ' | Ваша скидка: 10%';
        promoVal.value = '10%';
    } else if (parseInt(promo, 36) == '1710847049'){
        salePercent.innerText = ' | Ваша скидка: 15%';
        promoVal.value = '15%';
    } else {
        salePercent.innerText = ' | Не верно указан промокод';
    }
}
promoCode2.onclick = function(){
    let promo2 = prompt('Введите Промокод');
    let promoVal2 = document.querySelector('#promoVal2');
    if(parseInt(promo2, 36) == '47523533'){
        salePercent2.innerText = ' | Ваша скидка: 5%';
        promoVal2.value = '5%';
    } else if (parseInt(promo2, 36) == '1710847044'){
        salePercent2.innerText = ' | Ваша скидка: 10%';
        promoVal2.value = '10%';
    } else if (parseInt(promo2, 36) == '1710847049'){
        salePercent2.innerText = ' | Ваша скидка: 15%';
        promoVal2.value = '15%';
    } else {
        salePercent2.innerText = ' | Не верно указан промокод';
    }
}

let includeList = document.querySelector('#includeList');
let priceList = document.querySelector('#priceList');

document.querySelector('#сsIncluded').onclick = ()=>{
    includeList.innerHTML = '<img src="assets/img/price/1-1.png" class="img-fit" loading="lazy" alt="">'; // Что включено в Поддерживающую уборку?
}
document.querySelector('#сsPrice').onclick = ()=>{
    priceList.innerHTML = '<img src="assets/img/price/1.png" class="img-fit" loading="lazy" alt="">';
}
document.querySelector('#cgIncluded').onclick = ()=>{
    includeList.innerHTML = '<img src="assets/img/price/1-2.png" class="img-fit" loading="lazy" alt="">'; // Что включено в Генеральную уборку?
}
document.querySelector('#cgPrice').onclick = ()=>{
    priceList.innerHTML = '<img src="assets/img/price/1.png" class="img-fit" loading="lazy" alt="">';
}
document.querySelector('#caIncluded').onclick = ()=>{
    includeList.innerHTML = '<img src="assets/img/price/1-3.png" class="img-fit" loading="lazy" alt="">'; // Что включено в уборку после ремонта?
}
document.querySelector('#caPrice').onclick = ()=>{
    priceList.innerHTML = '<img src="assets/img/price/1.png" class="img-fit" loading="lazy" alt="">';
}
document.querySelector('#fIncluded').onclick = ()=>{
    includeList.innerHTML = '<img src="assets/img/price/0.png" class="img-fit" loading="lazy" alt="">'; // Что включено в Химчистку?
}
document.querySelector('#fPrice').onclick = ()=>{
    priceList.innerHTML = '<img src="assets/img/price/2.png" class="img-fit" loading="lazy" alt="">';
}
document.querySelector('#wIncluded').onclick = ()=>{
    includeList.innerHTML = '<img src="assets/img/price/0.png" class="img-fit" loading="lazy" alt="">'; // Что включено в Мытье окон?
}
document.querySelector('#wPrice').onclick = ()=>{
    priceList.innerHTML = '<img src="assets/img/price/3.png" class="img-fit" loading="lazy" alt="">';
}