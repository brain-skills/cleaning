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
    } else if(cleanService.options.selectedIndex == 1){
        cleanTab.classList.remove('active');
        furchemTab.classList.add('active');
        windwashTab.classList.remove('active');
        cleandiv.classList.remove('show', 'active');
        furchemdiv.classList.add('show', 'active');
        windwashdiv.classList.remove('show', 'active');
        document.location.hash = '#!#furniture-dry-cleaning-service';
    } else if(cleanService.options.selectedIndex == 2){
        cleanTab.classList.remove('active');
        furchemTab.classList.remove('active');
        windwashTab.classList.add('active');
        cleandiv.classList.remove('show', 'active');
        furchemdiv.classList.remove('show', 'active');
        windwashdiv.classList.add('show', 'active');
        document.location.hash = '#!#windows-wash-service';
    }
});
cleanTab.addEventListener('click', function(){
    cleanService.value = cleanTab.textContent;
});
furchemTab.addEventListener('click', function(){
    cleanService.value = furchemTab.textContent;
});
windwashTab.addEventListener('click', function(){
    cleanService.value = windwashTab.textContent;
});

// =========================================================================================
$(document).ready(function() {
    if (hash) {
        $('.nav-item a[href=\"'+hash.replace(prefix,"")+'\"]').tab('show', 'active');
        if(document.location.hash == '#!#clean-service'){
            cleanService.value = cleanTab.textContent;
        } else if (document.location.hash == '#!#furniture-dry-cleaning-service') {
            cleanService.value = furchemTab.textContent;
        } else if (document.location.hash == '#!#windows-wash-service') {
            cleanService.value = windwashTab.textContent;
        }
    }
    $('.nav-item a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });
});