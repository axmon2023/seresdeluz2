export const titulo = document.getElementById('titulo');
export const subtitulo = document.getElementById('subtitulo');
export const img = document.getElementById('img');
export const img2 = document.getElementById('img2');

export function cambiar1() {
    titulo.style.transform= 'scale(1, -1, 1)';
    titulo.style.transition = '10s'
    titulo.style.color = 'red';
    titulo.style.translate='30%';
    titulo.style.transition='5s';
    subtitulo.style.transform= 'scale(1, -1, 1)';
    subtitulo.style.transition = '10s'
    subtitulo.style.color = 'lightpink';
    subtitulo.style.translate='-30%';
    subtitulo.style.transition='5s';
    img.style.transform= 'scale(-1)';
    img.style.transition = '10s'
    img.style.translate='-10%';
    img.style.transition='5s';
    img2.style.transform= 'scale(1, -1, 1)';
    img2.style.transition = '10s'
    img2.style.translate='-10%';
    img2.style.transition='5s';
}
// titulo.addEventListener('mouseleave', ()=>{
//    cambiar1();
// });
// subtitulo.addEventListener('mouseleave', ()=>{
//     cambiar1();
// });            
// img.addEventListener('mouseleave', ()=>{
//     cambiar1();
// });
// img2.addEventListener('mouseleave', ()=>{
//     cambiar1();
// });
