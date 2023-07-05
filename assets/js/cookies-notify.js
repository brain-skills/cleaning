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
// let clearLs = document.querySelector('#clearLs');
// clearLs.addEventListener('click', (e)=>{
//     localStorage.clear();
//     e.preventDefault();
// });