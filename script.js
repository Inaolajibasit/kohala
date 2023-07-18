const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const scrollBtn = document.querySelector('.scroll-top')
const navLinks = document.querySelectorAll('#navbar li a');
const li = document.querySelectorAll('.links a')
const sec = document.querySelectorAll('section')
const loader = document.getElementById('preloader')


window.addEventListener('load', ()=>{
    loader.style.display = 'none'
})

// active menu 
const activeMenu = () =>{
    let len = sec.length
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {
        
    }
    li.forEach(itx => itx.classList.remove('active'))
    li[len].classList.add('active')
}
activeMenu();
window.addEventListener('scroll', activeMenu);      



if (scrollBtn){
    window.addEventListener('scroll', ()=>{
        if(pageYOffset > (window.innerHeight * 1.4)){
            scrollBtn.style.display = 'flex'
            console.log(pageYOffset)
        }else{
            scrollBtn.style.display = 'none'
        }
    })
    scrollBtn.onclick = () =>{
        window.scrollTo(0, 0)
    }
}


if( bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
        document.body.style.overflow='hidden';
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow='initial';
    })
}

navLinks.forEach(link =>{
    link.onclick = () =>{
        nav.classList.remove('active');
        document.body.style.overflow='initial';
    }
    link.addEventListener('scroll', ()=>{
        c
    })
})
















{/* <button class="faq-btn click">Frequently Asked Questions 1 <span><i class="uil uil-angle-down"></i></span></button>
          
          <button class="faq-btn click">Frequently Asked Questions 2 <span><i class="uil uil-angle-down"></i></span></button>
          
          <button class="faq-btn click">Frequently Asked Questions 3 <span><i class="uil uil-angle-down"></i></span></button> */}