const boxes = document.querySelectorAll('.title')
const links = [
    "https://my-portfolio-jay-patel.netlify.app/",
    "https://fakefacebook111.netlify.app/",
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

console.clear()

let monthDays=[31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31]

let d = 21
let m = 8
let y = 2002

let d2 = 27
let m2 = 3
let y2 = 2023

let n1 = y * 365 + d
let n2 = y2 * 365 + d2

for(let i=0; i< m -1; i++){
    n1 += monthDays[i];
}
for(let i=0; i< m2 -1; i++){
    n2 += monthDays[i];
}
console.log(n1)
console.log(n2)
console.log(n2 - n1)