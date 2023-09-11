const body = document.querySelector('body');




window.addEventListener("load",()=>{
body.classList.add("visible");
})

const sign_in_sign_up = document.querySelector('.sign-in-sign-up');

sign_in_sign_up.addEventListener("click",()=>{
    window.open('./index2.html');
})
