document.getElementById('btn-text').addEventListener('click',function(){
    const field = document.getElementById('textarea');
    // console.log(field)
    const value = field.value;
    const div = document.getElementById('input-par');
    const par = document.createElement('p');
    par.innerText = value;
    div.appendChild(par);
    field.value = '';
})

// document.getElementById('textarea').addEventListener('keyup',function(event){
//     if(event.key === "Enter"){
//         const field = document.getElementById('textarea');
//     // console.log(field)
//     const value = field.value;
//     const div = document.getElementById('input-par');
//     const par = document.createElement('p');
//     par.innerText = value;
//     div.appendChild(par);
//     field.value = '';
//     }
// })