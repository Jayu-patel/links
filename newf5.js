const boxes = document.querySelectorAll('.title')
const links = [
    "https://my-portfolio-jay-patel.netlify.app/",
    "https://responsive-practice-webpage.netlify.app/",
    "https://js-fetch-site.netlify.app/",
    "https://tic-tac-toe-1a.netlify.app/",
    "https://our-teamm.netlify.app/",
    "https://cars-21.netlify.app/",
    "https://jayupatelhome.netlify.app/",
    "https://jayupatel.netlify.app/"
]

boxes.forEach((e,index)=>{
    e.addEventListener('click',()=>{
        window.open(links[index], '_blank')
    })
})