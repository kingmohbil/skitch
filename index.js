const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent="adjust size";
document.body.appendChild(btn);

function page(blocks){
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
for(let i=0; i < blocks;i++){
    const di = document.createElement('div');
    di.classList.add('child1');
    
    for(let y=0; y<blocks; y++){
    const d = document.createElement('div');
        d.classList.add('child2');
        d.style.border="1px solid black";
        d.style.flex = "1 1 auto";
        d.onmouseover = ()=>{
       d.style.backgroundColor="blue";};
    di.appendChild(d);
    container.appendChild(di);
           
    }
    
 
}

}
page(64);
btn.addEventListener('click',()=>{
    let block = parseInt(prompt('Enter The new size max is 64'));
    if(block <= 64 && block > 0){
    const del = document.querySelector('.container');
    del.remove();
    page(block);
}
else{
    alert("Error");
}
});
