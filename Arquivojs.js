const btnMobile = window.document.getElementById('btn-mobile');

function clicar (event){
if (event.type === 'touchstart') event.prevenDefault();
const botaoNav = window.document.getElementById('nav');  
nav.classList.toggle('active');
const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', active);
if(active) {
    event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
}

else {

    event.currentTarget.setAttribute('arial-label', 'Abrir Menu');

}


}

btnMobile.addEventListener('click', clicar);
btnMobile.addEventListener('touchstart', clicar);


const btnigreja = window.document.getElementById('btn-igreja');

function pressionar(){
    const botaoigreja = window.document.getElementById('btigreja');
    btigreja.classList.toggle('active');
}

btnigreja.addEventListener('click', pressionar);





