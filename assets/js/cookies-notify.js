let cookiesNotify = document.querySelector('#cookiesNotify');
let notifysubmit = document.querySelector('#notifysubmit');
setTimeout(() =>{
    if (localStorage.getItem('cookies') == null) {
        cookiesNotify.classList.add('show');
    }
},2000);
notifysubmit.addEventListener('click', (e) =>{
    cookiesNotify.classList.remove('show');
    localStorage.setItem('cookies', 'true');
    e.preventDefault();
});
window.addEventListener('keypress', (event)=>{
    if (event.key.toLowerCase() == 'c' && event.shiftKey) {
        localStorage.clear();
        event.preventDefault();
    }
});