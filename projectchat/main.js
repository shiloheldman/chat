let btn = document.getElementById("burger-btn");
btn.addEventListener("click", () =>{
    document.getElementById("modal-body").classList.toggle("modal-mobile-visible")
})

let header = document.querySelector(".header");

window.addEventListener("scroll", () =>{
    if(scrollY > 100){
        header.style.height = '100px'
        header.style.backgroundColor = '#000'
    }
    else{
        header.style.height = ''
        header.style.backgroundColor = ''
    }
})




