let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});
 /* sei la oq eu fiz aq mas deu certo kkkkkkkkkkkkkkkkk */

 /* typing script */

 let typed = new Typed('.auto-input',{
    strings: ['Front-End developer e Back-end', 'Hacker com Parrot e Kali linux','Ilustrador'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
})