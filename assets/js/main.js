let cleanService = document.querySelector('#cleanservice');
let cleanTab = document.querySelector('#clean-tab');
let cleandiv = document.querySelector('#cleandiv');
let furchemTab = document.querySelector('#furchem-tab');
let furchemdiv = document.querySelector('#furchemdiv');
let windwashTab = document.querySelector('#windwash-tab');
let windwashdiv = document.querySelector('#windwashdiv');
let hash = document.location.hash;
let prefix = "!#";

cleanService.addEventListener('click', function(){
    if(cleanService.options.selectedIndex == 0){
        cleanTab.classList.add('active');
        furchemTab.classList.remove('active');
        windwashTab.classList.remove('active');
        cleandiv.classList.add('show', 'active');
        furchemdiv.classList.remove('show', 'active');
        windwashdiv.classList.remove('show', 'active');
        document.location.hash = '#!#clean-service';
        cleanService[0].setAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');
    } else if(cleanService.options.selectedIndex == 1){
        cleanTab.classList.remove('active');
        furchemTab.classList.add('active');
        windwashTab.classList.remove('active');
        cleandiv.classList.remove('show', 'active');
        furchemdiv.classList.add('show', 'active');
        windwashdiv.classList.remove('show', 'active');
        document.location.hash = '#!#furniture-dry-cleaning-service';
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].setAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');
    } else if(cleanService.options.selectedIndex == 2){
        cleanTab.classList.remove('active');
        furchemTab.classList.remove('active');
        windwashTab.classList.add('active');
        cleandiv.classList.remove('show', 'active');
        furchemdiv.classList.remove('show', 'active');
        windwashdiv.classList.add('show', 'active');
        document.location.hash = '#!#windows-wash-service';
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].setAttribute('selected','selected');
    }
});
cleanTab.addEventListener('click', function(){
    cleanService.options.selectedIndex = 0;
    cleanService[0].setAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
});
furchemTab.addEventListener('click', function(){
    cleanService.options.selectedIndex = 1;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].setAttribute('selected','selected');
    cleanService[2].removeAttribute('selected','selected');
});
windwashTab.addEventListener('click', function(){
    cleanService.options.selectedIndex = 2;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].setAttribute('selected','selected');
});

// =========================================================================================
$(document).ready(function() {
    if (hash) {
        $('.nav-item a[href=\"'+hash.replace(prefix,"")+'\"]').tab('show', 'active');
        if(document.location.hash == '#!#clean-service'){
            cleanService.options.selectedIndex = 0;
            cleanService[0].setAttribute('selected','selected');
            cleanService[1].removeAttribute('selected','selected');
            cleanService[2].removeAttribute('selected','selected');
        } else if (document.location.hash == '#!#furniture-dry-cleaning-service') {
            cleanService.options.selectedIndex = 1;
            cleanService[0].removeAttribute('selected','selected');
            cleanService[1].setAttribute('selected','selected');
            cleanService[2].removeAttribute('selected','selected');
        } else if (document.location.hash == '#!#windows-wash-service') {
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

// =========================================================================================
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