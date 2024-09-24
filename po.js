// for multiple writting
var typed = new Typed('#element',{
    strings : ["Web Developer" , "Web Designer" , "Frontend Developer" , "Backend Developer"],
    typeSpeed: 30
});

const btn4 = document.querySelector('.btn4');
// console.log(btn4);
const nav = document.querySelector('.dis');
// console.log(nav);

btn4.addEventListener('click',()=>{
nav.classList.toggle("desrep"); 
})

// for animation
// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     })
// })
// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((element)=>
// observer.observe(element));
