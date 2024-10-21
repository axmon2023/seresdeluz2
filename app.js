
// const titulo = document.getElementById('titulo');
// const subtitulo = document.getElementById('subtitulo');
// const img = document.getElementById('img');


// function cambiar1() {
//     titulo.style.transform= 'scale(1, -1, 1)';
//     titulo.style.transition = '10s'
//     titulo.style.color = 'red';
//     titulo.style.translate='30%';
//     titulo.style.transition='5s';
//     subtitulo.style.transform= 'scale(1, -1, 1)';
//     subtitulo.style.transition = '10s'
//     subtitulo.style.color = 'yellow';
//     subtitulo.style.translate='-30%';
//     subtitulo.style.transition='5s';
//     img.style.transform= 'scale(1, -1, 1)';
//     img.style.transition = '5s'
    
    
// }

// titulo.addEventListener('mouseleave', (e)=>{
//    cambiar1();
// });
// subtitulo.addEventListener('mouseleave', ()=>{
//     cambiar1();
// });
// img.addEventListener('mouseleave', (element)=>{
//     cambiar1();
// })





// function cambiar3 (){
//     subtitulo.style.transform='scale(1.25)';
    
// }



// img2.addEventListener('click', girar);
// img2.addEventListener('mouseenter', girar1);

// function girar (){
//     img2.style.transform='scale(-1, 1)';
//     img2.style.transition='10s'
    
// }
// function girar1 (){
//     img2.style.transform='scale(-1)';
    
// }
// const input = document.getElementById('input');
// const button = document.getElementById('button');


// // input.addEventListener ('click', (e) =>{
// //     console.log(e.target);
// // })

// button.addEventListener('click', (e) =>{
//     console.log(e);
// })
// const tit = document.getElementById('tit');
// const list = document.getElementById('list');
// const newElement = document.createElement('li');
// newElement.textContent = "I'm a new element";
// function cambiar (){
//     tit.style.color='red';
// }
// function cambiar1 (){
//     tit.style.color='black';
// }
// tit.addEventListener('mouseenter', cambiar=>{
//     tit.style.color='red';
// });
// tit.addEventListener('mouseleave', cambiar1=>{
//     tit.style.color='black';
// })

// // list.insertBefore(newElement, list.children[1]);
// // list.children[0].insertAdjacentElement('beforebegin', newElement);
// list.replaceChild(newElement, list.children[1]);

// list.removeChild(list.children[1]);
// const button = document.getElementById('button');
// button.addEventListener('dblclick',() => {
//         console.log('doble click');
//     })


const xml = new XMLHttpRequest;

xml.addEventListener('readystatechange', ()=>{
    console.log(xml.readyState)
})

