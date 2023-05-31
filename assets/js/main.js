let cleanService = document.querySelector('#cleanservice');
let cleanTab = document.querySelector('#clean-tab');
let cleandiv1 = document.querySelector('#cleandiv1');
let furchemTab = document.querySelector('#furchem-tab');
let furchem1 = document.querySelector('#furchem1');
let windwashTab = document.querySelector('#windwash-tab');
let windwash1 = document.querySelector('#windwash1');
let supportTab = document.querySelector('#supportable-tab');
let support1 = document.querySelector('#support');
let generalTab = document.querySelector('#general-tab');
let general1 = document.querySelector('#general');
let afteremTab = document.querySelector('#afterem-tab');
let afterem1 = document.querySelector('#afterem');
let hash = document.location.hash;
let prefix = "!#";

cleanService.addEventListener('change', function(){
    if(cleanService.options.selectedIndex == 0){
        cleanTab.classList.add('active');
        furchemTab.classList.remove('active');
        windwashTab.classList.remove('active');
        supportTab.classList.add('active');
        generalTab.classList.remove('active');
        afteremTab.classList.remove('active');

        cleandiv1.classList.add('show', 'active');
        furchem1.classList.remove('show', 'active');
        windwash1.classList.remove('show', 'active');
        support1.classList.add('show', 'active');
        general1.classList.remove('show', 'active');
        afterem1.classList.remove('show', 'active');

        document.location.hash = '#!#clean-service';
        cleanService[0].setAttribute('selected','selected');
        cleanService[1].removeAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');

    } else if(cleanService.options.selectedIndex == 1){
        cleanTab.classList.remove('active');
        furchemTab.classList.add('active');
        windwashTab.classList.remove('active');
        cleandiv1.classList.remove('show', 'active');
        furchem1.classList.add('show', 'active');
        windwash1.classList.remove('show', 'active');
        document.location.hash = '#!#furniture-dry-cleaning-service';
        cleanService[0].removeAttribute('selected','selected');
        cleanService[1].setAttribute('selected','selected');
        cleanService[2].removeAttribute('selected','selected');
    } else if(cleanService.options.selectedIndex == 2){
        cleanTab.classList.remove('active');
        furchemTab.classList.remove('active');
        windwashTab.classList.add('active');
        cleandiv1.classList.remove('show', 'active');
        furchem1.classList.remove('show', 'active');
        windwash1.classList.add('show', 'active');
        document.location.hash = '#!#windows-wash-service';
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
windwashTab.addEventListener('click', function(event){
    cleanService.options.selectedIndex = 2;
    cleanService[0].removeAttribute('selected','selected');
    cleanService[1].removeAttribute('selected','selected');
    cleanService[2].setAttribute('selected','selected');
    event.preventDefault();
});

// ====== anchor link set
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

// =========================================================================================
$('#mainservice a[data-bs-toggle="tab"]').on('show.bs.tab', function(e) {
    let target = $(e.target).data('bs-target')
    $(target)
      .addClass('active show')
      .siblings('.tab-pane.active')
      .removeClass('active show')
});

// =========================================================================================