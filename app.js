const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click', ()=>{
        clearsledes()
        slide.classList.add('active')
    })
}

function clearsledes(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}