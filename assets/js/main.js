let cleanService = document.querySelector('#cleanservice');
let cleanTab = document.querySelector('#clean-tab');
let c1 = document.querySelector('#c-1');
let c2 = document.querySelector('#c-2');
let c3 = document.querySelector('#c-3');
let furchemTab = document.querySelector('#furchem-tab');
let f1 = document.querySelector('#f-1');
let f2 = document.querySelector('#f-2');
let f3 = document.querySelector('#f-3');
let windwTab = document.querySelector('#windw-tab');
let w1 = document.querySelector('#w-1');
let w2 = document.querySelector('#w-2');
let w3 = document.querySelector('#w-3');
let supportTab = document.querySelector('#supportable-tab');
let support1 = document.querySelector('#support');
let generalTab = document.querySelector('#general-tab');
let general1 = document.querySelector('#general');
let afteremTab = document.querySelector('#afterem-tab');
let afterem1 = document.querySelector('#afterem');
let hash = document.location.hash;
let prefix = "";

cleanService.addEventListener('change', function(){
    if(cleanService.options.selectedIndex == 0){
        cleanTab.classList.add('active');
        furchemTab.classList.remove('active');
        windwTab.classList.remove('active');
        supportTab.classList.add('active');
        generalTab.classList.remove('active');
        afteremTab.classList.remove('active');
        c1.classList.add('show', 'active');
        c2.classList.add('show', 'active');
        c3.classList.add('show', 'active');
        f1.classList.remove('show', 'active');
        f2.classList.remove('show', 'active');
        f3.classList.remove('show', 'active');
        w1.classList.remove('show', 'active');
        w2.classList.remove('show', 'active');
        w3.classList.remove('show', 'active');
        support1.classList.add('show', 'active');
        general1.classList.remove('show', 'active');
        afterem1.classList.remove('show', 'active');
        document.location.hash = '#clean-s';
        cleanService[0].setAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');

    } else if(cleanService.options.selectedIndex == 1){
        cleanTab.classList.remove('active');
        furchemTab.classList.add('active');
        windwTab.classList.remove('active');
        c1.classList.remove('show', 'active');
        c2.classList.remove('show', 'active');
        c3.classList.remove('show', 'active');
        f1.classList.add('show', 'active');
        f2.classList.add('show', 'active');
        f3.classList.add('show', 'active');
        w1.classList.remove('show', 'active');
        w2.classList.remove('show', 'active');
        w3.classList.remove('show', 'active');
        document.location.hash = '#dry-s'; // присваиваем ссылку
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].setAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');
    } else if(cleanService.options.selectedIndex == 2){
        cleanTab.classList.remove('active');
        furchemTab.classList.remove('active');
        windwTab.classList.add('active');
        c1.classList.remove('show', 'active');
        c2.classList.remove('show', 'active');
        c3.classList.remove('show', 'active');
        f1.classList.remove('show', 'active');
        f2.classList.remove('show', 'active');
        f3.classList.remove('show', 'active');
        w1.classList.add('show', 'active');
        w2.classList.add('show', 'active');
        w3.classList.add('show', 'active');
        document.location.hash = '#wash-s'; // присваиваем ссылку
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].setAttribute('selected','selected');
    }
});
cleanTab.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 0;
    supportTab.classList.add('active');
    generalTab.classList.remove('active');
    afteremTab.classList.remove('active');
    support1.classList.add('show', 'active');
    general1.classList.remove('show', 'active');
    afterem1.classList.remove('show', 'active');
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
furchemTab.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 1;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].setAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
    event.preventDefault();
});
windwTab.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 2;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].setAttribute('selected','selected');
    event.preventDefault();
});

// сохраняем значения с помощью якорных ссылок у табов
$(document).ready(function() {
    if (hash) {
        $('.nav-item a[href=\"'+hash.replace(prefix,"")+'\"]').tab('show', 'active');
        if(document.location.hash == '#clean-s'){
            cleanService.options.selectedIndex = 0;
            cleanService[0].setAttribute('selected','selected');
            cleanService[1].removeAttribute('selected','selected');
            cleanService[2].removeAttribute('selected','selected');
        } else if (document.location.hash == '#dry-s') {
            cleanService.options.selectedIndex = 1;
            cleanService[0].removeAttribute('selected','selected');
            cleanService[1].setAttribute('selected','selected');
            cleanService[2].removeAttribute('selected','selected');
        } else if (document.location.hash == '#wash-s') {
            cleanService.options.selectedIndex = 2;
            cleanService[0].removeAttribute('selected','selected');
            cleanService[1].removeAttribute('selected','selected');
            cleanService[2].setAttribute('selected','selected');
        }
    }
    $('.nav-item a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });
});

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
});

// передаём тело табов через свойство data-bs-toggle
$('#mainservice a[data-bs-toggle="tab"]').on('show.bs.tab', function(e) {
    let target = $(e.target).data('bs-target')
    $(target)
    .addClass('active show')
    .siblings('.tab-pane.active')
    .removeClass('active show');
});